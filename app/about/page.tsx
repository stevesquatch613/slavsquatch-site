export default function AboutPage() {
    return (
      <main className="min-h-screen bg-[#050608] text-zinc-100">
        {/* HEADER */}
        <section className="mx-auto max-w-7xl px-6 py-8">
          <header className="flex items-center justify-between py-2">
            <div className="flex items-center gap-4">
              <img
                src="/slavsquatch-logo.png"
                alt="Slavsquatch Software Co."
                className="h-20 w-auto"
              />
            </div>
  
            <nav className="hidden items-center gap-12 text-base font-semibold text-zinc-200 md:flex">
              <a href="/#services" className="hover:text-red-400">
                Services
              </a>
              <a href="/about" className="text-red-400">
                About
              </a>
              <a href="/#process" className="hover:text-red-400">
                Process
              </a>
              <a
                href="mailto:support@slavsquatch.com"
                className="hover:text-red-400"
              >
                Contact
              </a>
            </nav>
  
            <a
              href="/contact"
              className="rounded-xl border border-red-500 px-6 py-3 text-base font-bold text-red-400 transition hover:bg-red-600 hover:text-white"
            >
              Contact Us
            </a>
          </header>
        </section>
  
        {/* HERO */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <p className="mb-6 text-sm font-black uppercase tracking-[0.35em] text-red-500">
            About Slavsquatch Software Co.
          </p>
  
          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
            American software 
          </h1>
  
          <p className="mt-8 text-xl leading-9 text-zinc-300">
            Slavsquatch Software Co. is a Southern California based operations and purpose first private equity funded software company. We build practical, secure, and dependable
            applications for organizations that need technology they can trust. We care about solving your business process challenges.
          </p>
  
          <p className="mt-4 text-lg text-zinc-400">
            Clear ownership. Strong communication. Systems built with accountability
            from start to finish.
          </p>
        </section>
  
        {/* VALUES */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
              <h2 className="text-2xl font-black text-red-400">Trust</h2>
              <p className="mt-4 leading-7 text-zinc-300">
                We operate with transparency and clarity. You know who you are
                working with, how decisions are made, and what to expect at every
                stage.
              </p>
            </article>
  
            <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
              <h2 className="text-2xl font-black text-red-400">Security</h2>
              <p className="mt-4 leading-7 text-zinc-300">
                Security is built into how we design and develop systems. Your data,
                workflows, and operations are handled with care, not as an afterthought.
              </p>
            </article>
  
            <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
              <h2 className="text-2xl font-black text-red-400">Accountability</h2>
              <p className="mt-4 leading-7 text-zinc-300">
                As a U.S.-based company, we provide clear communication, accessible
                support, and professional responsibility throughout the project lifecycle.
              </p>
            </article>
          </div>
        </section>
  
        {/* DETAIL SECTION */}
        <section className="mx-auto max-w-5xl px-6 pb-20">
          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8 md:p-10">
            <h2 className="text-3xl font-black">Built close to the work.</h2>
  
            <p className="mt-5 leading-8 text-zinc-300">
              We design software around real business processes—intake, workflows,
              reporting, and outcomes—so systems stay aligned from start to finish.
            </p>
  
            <p className="mt-5 leading-8 text-zinc-300">
              For organizations that value transparency, reliability, and strong
              communication, working with a Southern California-based team brings
              clarity and confidence at every stage.
            </p>
          </div>
        </section>
  
        {/* FOOTER */}
        <footer className="border-t border-zinc-800 px-6 py-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Slavsquatch Software Co. We make software simple.
        </footer>
      </main>
    );
  }