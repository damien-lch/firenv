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
        <div class="mt-10 bg-yellow-400 rounded-xl h-[400px] w-full flex items-center justify-center">
          <span>A gif is coming...</span>
        </div>
      </section>
      <section class="flex flex-col items-center w-full">
        <h2 class="text-3xl font-bold mb-6">How does it works?</h2>
        <div class="w-full space-y-4 text-lg">
          <h3 class="font-bold">1. Copy your Firebase configuration</h3>
          <img src="/firebase-conf.png" alt="Your Firebase Configuration" />
          <h3 class="font-bold">2. Past it to the converter</h3>
          <h3 class="font-bold">3. Put the result inside your .env</h3>
        </div>
      </section>
      <section>
        <h2 class="text-3xl font-bold">That's it!</h2>
      </section>
    </div>
  );
}
