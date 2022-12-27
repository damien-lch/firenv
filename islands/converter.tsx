import { useState } from "preact/hooks";
import Button from "../components/Button.tsx";
import ModalEnv from "../components/modal-env.tsx";
import Modal from "../components/modal.tsx";
import TextArea from "../components/textarea.tsx";
import convertConf from "../helpers/convert-conf.ts";
import { ConfLine } from "../types.ts";
import IconFlask from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/flask-2.tsx";

export default function Converter() {
  const [conf, setConf] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [confObject, setConfObject] = useState<ConfLine[]>([]);
  const [error, setError] = useState<string>("");

  const convert = (conf: string) => {
    setError("");
    try {
      setConfObject(convertConf(conf));
      setShowModal(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (e: any) => {
    setConf(e.target.value);
  };

  return (
    <div class="flex flex-col items-center gap-6">
      <TextArea
        label="Firebase Configuration"
        placeholder='const firebaseConfig = {&#10;   apiKey: "***", &#10;   authDomain: "****", &#10;    [...], &#10;   appId: "****" &#10;}'
        onChange={handleChange}
      />
      <div class="w-[200px]">
        <Button fullwidth onClick={() => convert(conf)}>
          <span class="flex items-center justify-center gap-2">
            <IconFlask class="w-5 h-5" />
            Convert
          </span>
        </Button>
      </div>
      {error && <span class="text-red-500">{error}</span>}
      {showModal && (
        <Modal close={() => setShowModal(false)}>
          <ModalEnv conf={confObject}></ModalEnv>
        </Modal>
      )}
    </div>
  );
}
