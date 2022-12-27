export default function Navigation() {
  return (
    <nav class="fixed w-full flex justify-between items-center space-x-4 top-0 right-0 p-4">
      <a href="/" class="font-black text-2xl">Firenv 🔥</a>
      <div class="flex items-center space-x-4">
        <a href="/faq">FAQ</a>
        <a
          href="/converter"
          class="bg-yellow-400 rounded px-4 py-3 font-medium hover:bg-yellow-500 duration-300"
        >
          Converter
        </a>
      </div>
    </nav>
  );
}
