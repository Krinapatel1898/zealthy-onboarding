const express = require('express');
const cors = require('cors');
const sql = require('mssql');

const app = express();
app.use(cors());
app.use(express.json());

const config = {
  user: 'zealthy', // or your DB user
  password: 'StrongP@ss123',
  server: 'KRINA_PATEL', // or localhost
  database: 'ZealthyDB',
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

// ✅ Test route
app.get('/', (req, res) => {
  res.send("Zealthy backend is running 🚀");
});

// ✅ Create user (with email duplication check)
app.post('/user', async (req, res) => {
  const { email, password } = req.body;
  try {
    await sql.connect(config);

    const check = await sql.query`
      SELECT Id FROM Users WHERE Email = ${email}
    `;
    if (check.recordset.length > 0) {
      return res.status(409).send('Email already exists');
    }

    const result = await sql.query`
      INSERT INTO Users (Email, Password)
      OUTPUT INSERTED.Id
      VALUES (${email}, ${password})
    `;
    res.json({ userId: result.recordset[0].Id });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// ✅ Login user by email
app.get('/user-by-email', async (req, res) => {
  const { email } = req.query;
  try {
    await sql.connect(config);
    const result = await sql.query`
      SELECT * FROM Users WHERE Email = ${email}
    `;
    if (result.recordset.length === 0) {
      return res.status(404).send('User not found');
    }
    res.json(result.recordset[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// ✅ Update user info (about me, birthdate, address)
app.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  const { AboutMe, StreetAddress, City, State, Zip, Birthdate } = req.body;

  // 🐞 Debug logging
  console.log('➡️ Updating user:', id);
  console.log('📦 Request body:', req.body);

  try {
    await sql.connect(config);
    await sql.query`
      UPDATE Users SET
        AboutMe = ${AboutMe},
        StreetAddress = ${StreetAddress},
        City = ${City},
        State = ${State},
        Zip = ${Zip},
        Birthdate = ${Birthdate}
      WHERE Id = ${id}
    `;
    res.json({ status: 'updated' });
  } catch (err) {
    res.status(500).send(err.message);
  }
});


// ✅ Admin: Get config
app.get('/admin/config', async (req, res) => {
  try {
    await sql.connect(config);
    const result = await sql.query`SELECT * FROM AdminConfig`;
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// ✅ Admin: Set config
app.post('/admin/config', async (req, res) => {
  const configs = req.body;
  try {
    await sql.connect(config);
    await sql.query`DELETE FROM AdminConfig`;

    for (const c of configs) {
      await sql.query`
        INSERT INTO AdminConfig (ComponentName, PageNumber)
        VALUES (${c.component_name}, ${c.page_number})
      `;
    }

    res.json({ status: 'updated' });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// ✅ Step 3: Return all user data for testing
app.get('/data', async (req, res) => {
  try {
    await sql.connect(config);
    const result = await sql.query`SELECT * FROM Users`;
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(3001, () => {
  console.log("✅ Backend running on http://localhost:3001");
});
