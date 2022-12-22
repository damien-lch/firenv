import { useState } from "preact/hooks";
import Button from "../components/Button.tsx";
import TextArea from "../components/textarea.tsx";
import confToEnv from "../helpers/conf-to-env.ts";
import kebabize from "../helpers/kebabize.ts";

export default function MyIsland() {
  const [conf, setConf] = useState("");
  const [cleanConf, setCleanConf] = useState("");

  const test = (conf: string) => {
    //Remove all spaces and backslashes from conf and cut it into an array
    const cleanedString = conf.replace(/\\|\s/g, "").split(",");
    const cleanConf = cleanedString.map((s) => {
      return {
        name: kebabize(s.slice(0, s.indexOf(":"))),
        value: s.slice(s.indexOf(":") + 1, s.length),
      };
    });
    setCleanConf(confToEnv(cleanConf, "VITE_FIREBASE_"));
  };

  const handleChange = (e: any) => {
    setConf(e.target.value);
  };

  return (
    <div class="flex flex-col items-center">
      <TextArea label="Firebase Configuration" onChange={handleChange} />
      <Button text="Convert 🪄" onClick={() => test(conf)} />
      <textarea
        name=""
        id=""
        value={cleanConf}
        class="border(1 black) w-[500px] h-[300px]"
      >
      </textarea>
    </div>
  );
}
