import { ConfLine } from "../types.ts";

export default (conf: string): ConfLine[] => {
  if (!conf.indexOf("{")) throw new Error("Wrong configuration format");
  const middle = conf.slice(conf.indexOf("{") + 1, conf.lastIndexOf("}"));
  if (!middle) throw new Error("No configuration found");
  return middle.split(",").map((cl) => {
    const index = cl.indexOf(":");
    //Name is the first part of the string before the colon. Remove spaces, qoutes and new lines.
    //Value is the second part of the string after the colon. Remove spaces, qoutes and new lines.
    const name = cl.slice(0, index).replace(/['"]+/g, "").replace(/\s/g, "");
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
