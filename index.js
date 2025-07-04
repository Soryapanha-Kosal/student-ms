const express = require('express');
const app = express();
app.use(express.json());

let assignments = [];
let profile = { name: "Student", email: "student@example.com" };

app.post('/submitassignment', (req, res) => {
  assignments.push(req.body);
  res.send("Assignment submitted");
});

app.get('/viewassignment', (req, res) => {
  res.json(assignments);
});

app.put('/editprofile', (req, res) => {
  profile = { ...profile, ...req.body };
  res.send("Profile updated");
});

app.listen(3001, () => console.log("Student MS running on port 3001"));
