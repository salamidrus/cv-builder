const express = require("express");
const pdf = require("html-pdf");
const cors = require("cors");

const pdfTemplate = require("./documents");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// PDF Generator
app.post("/create-pdf", (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile("CV.pdf"),
    (err) => {
      if (err) {
        res.send(Promise.reject());
        console.log(err);
      }

      res.send(Promise.resolve());
      console.log("Success");
    };
});

// Send pdf to client
app.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/CV.pdf`);
});
