import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Get texts from Santa 🎅</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Get texts from Santa 🎅
        </h1>
        <p className="mt-3 text-2xl">
          Light up your childs holiday season this year.
        </p>

        <div className="mt-6 flex flex-col max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <div className="mt-6 w-100 rounded-xl border text-left">
            <input type="tel" id="phone" className="rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder="123-454-6789" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
          </div>
          <div className="mt-6 w-100">
            <button type="submit" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Go</button>
          </div>
        </div>
      </main >

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Falcon Technology Solutions

        </a>
      </footer>
    </div >
  )
}
