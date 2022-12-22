export default function Button(
  { text, onClick }: { text: string; onClick: () => void },
) {
  return (
    <button
      class="bg-black text-white px-4 py-3 rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
