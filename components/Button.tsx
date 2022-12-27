import { ComponentChildren } from "https://esm.sh/v99/preact@10.11.0/src/index";

export default function Button(
  { fullwidth, children, onClick }: {
    fullwidth?: boolean;
    children: ComponentChildren;
    onClick?: () => void;
  },
) {
  return (
    <button
      class={"bg-yellow-400 rounded px-4 py-3 font-medium hover:bg-yellow-500 duration-300" +
        (fullwidth ? " w-full" : "")}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
