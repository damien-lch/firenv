export default function Button(
  { text, fullwidth, onClick }: {
    text: string;
    fullwidth?: boolean;
    onClick?: () => void;
  },
) {
  return (
    <button
      class={"bg-yellow-400 rounded px-4 py-3 font-medium hover:bg-yellow-500 duration-300" +
        (fullwidth ? " w-full" : "")}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
