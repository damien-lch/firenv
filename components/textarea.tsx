export default function TextArea(
  { label, onChange }: { label: string; onChange: (e: any) => void },
) {
  return (
    <div class="flex flex-col">
      <label>{label}</label>
      <textarea
        name=""
        id=""
        class="border(1 black) w-[500px] h-[300px] rounded"
        onChange={onChange}
      >
      </textarea>
    </div>
  );
}
