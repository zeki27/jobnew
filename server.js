const express = require('express');
const cors = require('cors');
const applicantsRoute = require('./routes/applicants');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api', applicantsRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
