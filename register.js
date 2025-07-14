// register.js
// const fetch = require('node-fetch');
import fetch from 'node-fetch';

const register = async () => {
  const response = await fetch("http://20.244.56.144/evaluation-service/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "akasharma317@gmail.com",
      name: "Akashdeep Sharma",
      mobileNo: "9083533451",
      githubUsername: "Akash007sharma16",
      rollNo: "12216393",
      accessCode: "CZypQK"
    })
  });

  const data = await response.json();
  console.log("Registration Response:", data);
};

register();
