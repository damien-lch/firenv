export default function Button(
  { text, fullwidth, onClick }: {
    text: string;
    fullwidth?: boolean;
    onClick?: () => void;
  },
) {
  return (
    <button
      class={"bg-yellow-400 text-black font-medium px-4 py-3 rounded" +
        (fullwidth ? " w-full" : "")}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
