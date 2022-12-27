import { ConfLine } from "../types.ts";
import Button from "./Button.tsx";
import { useState } from "preact/hooks";

let confString = "";

const convertConfObjectToString = (conf: ConfLine[]) => {
  let result = "";
  conf.forEach((line) => {
    result += `${line.name}=${line.value}
`;
  });
  return result;
};

export default function ModalEnv({ conf }: { conf: ConfLine[] }) {
  confString = convertConfObjectToString(conf);

  const [btnCopyText, setBtnCopyText] = useState<string>("Copy");
  const copyEnv = () => {
    navigator.clipboard.writeText(confString);
    setBtnCopyText("Copied!");
    setTimeout(() => {
      setBtnCopyText("Copy");
    }, 2000);
  };

  return (
    <div id="modalEnv">
      <div class="p-4 rounded bg-[#F8F7F6] mb-4" style={"font-size: 14px"}>
        <ul>
          {conf.map((line) => (
            <li>
              <span>{line.name}={line.value}</span>
            </li>
          ))}
        </ul>
      </div>
      <div class="flex gap-4">
        <Button fullwidth text={btnCopyText} onClick={copyEnv} />
      </div>
    </div>
  );
}
