import { ConfLine } from "../types.ts";
import kebabize from "./kebabize.ts";

export default (conf: string, prefix = "FIREBASE_"): ConfLine[] => {
  if (conf.indexOf("{") == -1) throw new Error("Wrong configuration format");
  const middle = conf.slice(conf.indexOf("{") + 1, conf.lastIndexOf("}"));
  if (!middle) throw new Error("No configuration found");
  return middle.split(",").map((cl) => {
    const index = cl.indexOf(":");
    //Name is the first part of the string before the colon. Remove spaces, qoutes and new lines.
    //Value is the second part of the string after the colon. Remove spaces, qoutes and new lines.
    const name = `${prefix}${kebabize(
      cl.slice(0, index).replace(/['"]+/g, "").replace(/\s/g, "")
    ).toUpperCase()}`;
    const value = cl
      .slice(index + 1)
      .replace(/['"]+/g, "")
      .replace(/\s/g, "");
    return {
      name,
      value,
    };
  });
};
