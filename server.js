// the server side of dashboard that connects to the mysql

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const mysql = require("mysql");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "4748",
  database: "dashboard_db",
});

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3001, () => {
  console.log("running on port 3001");
});

// const insertNewShipment =
//   "insert into shipments values(default, 'fedex', 'INTRANSIT', '2022-12-29', '2022-12-25')";

app.get("/getShipments", (request, response) => {
  const querySelectAll =
    "select id, carrier, shipment_status, promised_date, delivery_date from shipments";
  db.query(querySelectAll, (err, result) => {
    if (!err) {
      console.log("Result: " + JSON.stringify(result));
      response.send(result);
    } else {
      console.log("Error: " + err);
      response.send("failed");
    }
  });
});
app.get("/getShipmentsBetweenTwoDeliveryDates", (request, response) => {
  const querySelectAll =
    "select id, carrier, shipment_status, promised_date, delivery_date from shipments where ";
  db.query(querySelectAll, (err, result) => {
    if (!err) {
      console.log("Result: " + JSON.stringify(result));
      response.send(result);
    } else {
      console.log("Error: " + err);
      response.send("failed");
    }
  });
});
