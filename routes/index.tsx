export default function Home() {
  return (
    <div class="flex flex-col items-center max-w-xl mx-auto space-y-[100px]">
      <section class="flex flex-col items-center text-center">
        <h1 class="text-5xl font-black mb-6">
          Convert your Firebase conf to env variables!
        </h1>
        <p class="max-w-md">
          What a pain to convert a js configuration object to environment
          variables.
          <br />
          Copy ? Paste ? Convert ? Repeat ? No more !
        </p>
        <div class="mt-10 bg-yellow-400 rounded-xl h-auto w-full flex items-center justify-center shadow-lg overflow-hidden">
          <img src="/demo.gif" alt="demo" srcset="" />
        </div>
      </section>
      <section class="flex flex-col items-center w-full">
        <h2 class="text-3xl font-bold mb-6">How does it works?</h2>
        <div class="w-full space-y-4 text-lg">
          <h3 class="font-bold">1. Copy your Firebase configuration</h3>
          <p>
            Go to your Firebase Console &#8594; Your project &#8594; Settings
            &#8594; Your applications.
          </p>
          <img src="/firebase-conf.png" alt="Your Firebase Configuration" />
          <h3 class="font-bold">2. Past it to the converter</h3>
          <h3 class="font-bold">3. Put the result inside your .env</h3>
        </div>
      </section>
      <section id="faq" class="flex flex-col items-center w-full">
        <h2 class="text-3xl font-bold mb-6">FAQ</h2>
        <div>
          <h3 class="font-bold">Is my configuration sent to somewhere?</h3>
          <p class="mb-4">
            <strong>No</strong>, everything is made client-side. So we don't
            have any server, api or database that handle the conversion. You can
            open your console on the network tab and see that nothing is sent to
            anywhere.
          </p>
          <h3 class="font-bold">How is the conversion made?</h3>
          <p class="mb-4">
            The principle is simple, we parse the string you give us and we
            apply some regex to extract the right values.
            <br />
            The whole codebase is available on{" "}
            <a href="https://github.com/neiwad/firenv">
              <strong>Github</strong>
            </a>. Feel free to contribute!
          </p>
        </div>
      </section>
      <section>
        <h2 class="text-3xl font-bold">That's it!</h2>
      </section>
    </div>
  );
}
