import Converter from "../islands/converter.tsx";
import { Head } from "$fresh/runtime.ts";

export default function ConverterPage() {
  return (
    <>
      <div class="flex flex-col items-center max-w-xl mx-auto">
        <h1 class="text-5xl font-black mb-6">
          The converter!
        </h1>
        <Converter />
      </div>
    </>
  );
}
