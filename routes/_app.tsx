import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Navigation from "../components/Navigation.tsx";

export default function App({ Component }: AppProps) {
  return (
    <div class="bg-[#fafafa] ">
      <Head>
        <link rel="stylesheet" href="/app.css" />
        <title>Firenv</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔥</text></svg>"
        >
        </link>
      </Head>

      <main class="min-h-screen py-10 pt-[150px]">
        <Navigation />
        <div class="container mx-auto">
          <Component />
        </div>
      </main>
      <footer class="py-6">
        <div class="container mx-auto">
          <p class="text-center text-gray-500 text-sm">
            Made with ❤️ by{" "}
            <a href="https://github.com/neiwad">
              <strong>neiwad</strong>
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
