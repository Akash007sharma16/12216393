import fetch from 'node-fetch';

const getToken = async () => {
  const response = await fetch("http://20.244.56.144/evaluation-service/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "akasharma317@gmail.com",
      name: "Akashdeep Sharma",
      rollNo: "12216393",
      accessCode: "CZypQK",
      clientID: "ba6f22c7-d92e-4833-a578-87b8014b516d",
      clientSecret: "BMjCnRfgUGRUARes"
    })
  });

  const data = await response.json();
  console.log("Auth Token:", data);
};

getToken();
