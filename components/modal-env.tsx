import { ConfLine } from "../types.ts";
import Button from "./Button.tsx";
import kebabize from "../helpers/kebabize.ts";

let confString = "";

const convertConfObjectToString = (conf: ConfLine[]) => {
  let result = "";
  conf.forEach((line) => {
    result += `FIREBASE_${kebabize(line.name).toUpperCase()}=${line.value}
`;
  });
  return result;
};

const copyEnv = () => {
  navigator.clipboard.writeText(confString);
};

export default function ModalEnv({ conf }: { conf: ConfLine[] }) {
  confString = convertConfObjectToString(conf);

  return (
    <div id="modalEnv">
      <div class="p-4 rounded bg-[#F8F7F6]" style={"font-size: 14px"}>
        {confString}
      </div>
      <div class="flex gap-4">
        <Button fullwidth text="Copy" onClick={copyEnv} />
      </div>
    </div>
  );
}
