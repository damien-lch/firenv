import type { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
  close: () => void;
};

export default function Modal(props: Props) {
  const handleClose = () => {
    props.close();
  };

  return (
    <div
      class="h-screen w-screen bg-black bg-opacity-30 fixed inset-0"
      onClick={handleClose}
    >
      <div
        class="bg-white w-auto h-auto shadow-md rounded absolute top-1/2 left-1/2 -translate-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  );
}
