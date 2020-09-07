const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ id: "1234" });
});

app.get("/promise/:data", async (req, res) => {
  const { data } = req.params;

  try {
    console.log(data);
    const proms = new Promise((resolve, reject) => {
      if (data !== "data") {
        console.log("what iis ", data);
        return reject("the data is false");
      }
      resolve("yooo it is true");
    });

    const result = await proms;
    console.log(result);

    res.status(200).json({ message: result });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.get("*", (req, res) => {});

app.listen(5000, () => {
  console.log("listen to the port 5000");
});
