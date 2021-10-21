import Path from "path";
var fs = require("fs");

const config = {
  host: "127.0.0.1",
  port: 3308,
  user: "root",
  password: "michele2407",
  database: "altdaten",
};

export const fabricToShema = async (
  jsonFormat: JSON,
  svg: string | undefined,
  id: number
) => {
  const mysql = require("mysql2/promise");
  const con = await mysql.createConnection(config);
  con.connect((err: any) => {
    if (err) {
      throw err;
    } else {
      console.log("pups");
    }
  });

  const query =
    "UPDATE ticketdesigns SET json='" +
    JSON.stringify([jsonFormat]) +
    "' svg='" +
    svg +
    "' WHERE id=" +
    id +
    ";";
  //const query ="UPDATE ticketdesigns SET json='" + JSON.stringify([{ hallo: "name" }, {pop}]) + "' WHERE id=1;";
  con.query(query);
};
