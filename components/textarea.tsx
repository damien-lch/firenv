export default function TextArea(
  { label, placeholder, value, onChange }: {
    label: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: any) => void;
  },
) {
  return (
    <div class="flex flex-col">
      <label>{label}</label>
      <textarea
        name=""
        id=""
        class="border(2 black) w-[500px] h-[300px] rounded p-4"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      >
      </textarea>
    </div>
  );
}
