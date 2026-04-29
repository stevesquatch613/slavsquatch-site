export default function ContactPage() {
    return (
      <main className="min-h-screen bg-[#050608] text-zinc-100">
        <section className="mx-auto max-w-7xl px-6 py-8">
        <header className="flex flex-col gap-6 py-2 md:flex-row md:items-center md:justify-between">
            <a href="/" className="flex items-center gap-4">
              <img
                src="/slavsquatch-logo.png"
                alt="Slavsquatch Software Co."
                className="h-20 w-auto"
              />
            </a>
  
            <nav className="flex items-center gap-4 text-sm font-semibold text-zinc-200 md:gap-12 md:text-base">
              <a href="/#services" className="hover:text-red-400">Services</a>
              <a href="/about" className="hover:text-red-400">About</a>
              <a href="/contact" className="text-red-400">Contact</a>
            </nav>
          </header>
        </section>
  
        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-sm font-black uppercase tracking-[0.35em] text-red-500">
              Contact
            </p>
  
            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Tell us what you’re trying to build.
            </h1>
  
            <p className="mt-8 text-xl leading-9 text-zinc-300">
              Share the process, workflow, or software problem you want to simplify.
            </p>
          </div>
  
          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8">
            <h2 className="text-3xl font-black">Start the conversation.</h2>
  
            <p className="mt-5 leading-8 text-zinc-300">
              Send us an email with a short description of what you need, what process
              you want to improve, and the outcome you’re trying to reach.
            </p>
  
            <a
              href="mailto:support@slavsquatch.com?subject=Project Inquiry - Slavsquatch Software Co."
              className="mt-8 inline-block rounded-xl bg-red-600 px-8 py-4 text-lg font-bold text-white transition hover:bg-red-500"
            >
              Email Slavsquatch Software Co. →
            </a>
  
            <p className="mt-6 text-sm text-zinc-500">
              This option does not store message data on the website.
            </p>
          </div>
        </section>
      </main>
    );
  }