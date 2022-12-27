import Converter from "../islands/converter.tsx";

export default function ConverterPage() {
  return (
    <div class="flex flex-col items-center max-w-xl mx-auto">
      <h1 class="text-5xl font-black mb-6">
        The convertor!
      </h1>
      <Converter />
    </div>
  );
}
