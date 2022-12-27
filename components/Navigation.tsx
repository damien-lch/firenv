import IconFlask from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/flask-2.tsx";

export default function Navigation() {
  return (
    <nav class="fixed bg-gray-100 md:bg-transparent w-full flex justify-between items-center space-x-4 top-0 right-0 p-4">
      <a href="/" class="font-black text-2xl">Firenv 🔥</a>
      <div class="flex items-center space-x-4">
        <a href="/#faq">FAQ</a>
        <a
          href="/converter"
          class="bg-yellow-400 rounded px-4 py-3 font-medium hover:bg-yellow-500 duration-300"
        >
          <span class="flex items-center justify-center gap-2">
            <IconFlask class="w-5 h-5" />
            Converter
          </span>
        </a>
      </div>
    </nav>
  );
}
