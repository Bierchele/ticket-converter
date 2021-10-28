import clipboardy from "clipboardy";
import Path from "path";
var fs = require("fs");

const config = {
  host: "127.0.0.1",
  port: 3308,
  user: "root",
  password: "michele2407",
  database: "altdaten",
};

const fabricToShema = async (query: string) => {
  const mysql = require("mysql2/promise");
  const con = await mysql.createConnection(config);
  con.connect((err: any) => {
    if (err) {
      throw err;
    } else {
      console.log("pups");
    }
  });
  await con.query(query);
  con.end();
};

const querySVG = async (svgString: string, id: number) => {
  const query =
    "UPDATE ticketdesigns SET svg='" + svgString + "' WHERE id=" + id + ";";

  await fabricToShema(query);
};

const queryJSON = async (jsonFormat: JSON, id: number) => {
  clipboardy.writeSync(JSON.stringify(jsonFormat));
  const query = `UPDATE ticketdesigns 
                 SET json=\'${JSON.stringify([jsonFormat])}\'
                 WHERE id=${id};`;
  await fabricToShema(query);
};

export { fabricToShema, queryJSON, querySVG };
