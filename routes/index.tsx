import Converter from "../islands/converter.tsx";

export default function Home() {
  return (
    <main class="bg-[#fafafa] min-h-screen py-10">
      <div class="text-center mb-10">
        <h1 class="text-4xl font-black text-[#1c1917]">Firenv 🔥</h1>
        <p class="text-[#1c1917]">
          A simple tool to convert Firebase configuration to environment
          variables.
        </p>
      </div>
      <Converter />
    </main>
  );
}
