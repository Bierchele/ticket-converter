import { resolve } from "path/posix";

var request = require("request").defaults({ encoding: null });

export const toUrl = (url: string): any => {
  let base64 = "";
  return new Promise((res, rej) => {
    request.get(
      url,
      function (
        error: any,
        response: { statusCode: number; headers: { [x: string]: string } },
        body: WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>
      ) {
        res(
          (base64 =
            "data:" +
            response.headers["content-type"] +
            ";base64," +
            Buffer.from(body).toString("base64"))
        );
      }
    );
  });
};



// getPic sollte request nutzen anstatt het