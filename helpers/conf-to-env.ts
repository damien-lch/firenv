import { type Conf } from "../types.ts";

const convertName = (name: string): string => {
  return name.replace("-", "_").toUpperCase();
};

//Converts a Conf object to a string of environment variables, prefixed with the prefix argument.
export default (conf: Conf, prefix = ""): string => {
  return conf.reduce((acc, line) => {
    return `${acc}${prefix}${convertName(line.name)}=${line.value}\n`;
  }, "");
};
