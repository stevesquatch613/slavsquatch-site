export default function AboutPage() {
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
              <a href="/#services" className="hover:text-red-400">
                Services
              </a>
              <a href="/about" className="text-red-400">
                About
              </a>
            </nav>
  
            <a
              href="/contact"
              className="rounded-xl border border-red-500 px-4 py-2 text-sm font-bold text-red-400 md:px-6 md:py-3 md:text-base"
            >
              Contact Us
            </a>
          </header>
        </section>
  
        <section className="mx-auto max-w-5xl px-6 py-16">
          <p className="mb-6 text-sm font-black uppercase tracking-[0.35em] text-red-500">
            About Slavsquatch Software Co.
          </p>
  
          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
            American software
          </h1>
  
          <p className="mt-8 text-xl leading-9 text-zinc-300">
            Slavsquatch Software Co. is an American software company based in
            Southern California, focused on building applications that support real
            business operations, from intake and workflow to reporting and outcomes.
          </p>
  
          <p className="mt-4 text-lg text-zinc-400">
            We work with organizations that need reliable systems, clear data, and
            software that actually reflects how their teams operate.
          </p>
  
          <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
            <p className="text-sm font-bold uppercase tracking-wider text-red-500">
              Who We Work With
            </p>
  
            <p className="mt-3 leading-7 text-zinc-300">
              Small businesses, nonprofits, and public sector teams that rely on
              structured processes, accurate data, and systems that need to work
              consistently.
            </p>
          </div>
        </section>
  
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-red-900 bg-zinc-950 p-8">
              <h2 className="text-2xl font-black text-red-400">Trust</h2>
              <p className="mt-4 leading-7 text-zinc-300">
                Clear communication, defined expectations, and a direct working
                relationship. No ambiguity about how work is done or delivered.
              </p>
            </article>
  
            <article className="rounded-3xl border border-red-900 bg-zinc-950 p-8">
              <h2 className="text-2xl font-black text-red-400">Security</h2>
              <p className="mt-4 leading-7 text-zinc-300">
                We design systems with data responsibility in mind, from how
                information is collected to how it is stored and accessed.
              </p>
            </article>
  
            <article className="rounded-3xl border border-red-900 bg-zinc-950 p-8">
              <h2 className="text-2xl font-black text-red-400">Accountability</h2>
              <p className="mt-4 leading-7 text-zinc-300">
                You’re working with a real team you can reach, not an anonymous
                pipeline. Ownership and follow-through matter.
              </p>
            </article>
          </div>
        </section>
  
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8 md:p-10">
            <h2 className="text-3xl font-black">Built close to the work.</h2>
  
            <p className="mt-5 leading-8 text-zinc-300">
              We design software around real business processes (intake, workflows,
              reporting, and outcomes) so systems stay aligned from start to finish.
            </p>
  
            <p className="mt-5 leading-8 text-zinc-300">
              Our background in operations and financial systems means we build
              with a clear understanding of how organizations actually function, not
              just how software is supposed to work.
            </p>
  
            <p className="mt-5 leading-8 text-zinc-300">
              For organizations that value transparency, reliability, and strong
              communication, working with a SoCal based team brings
              clarity and confidence at every stage.
            </p>
          </div>
        </section>
  
        <section className="mx-auto max-w-5xl px-6 pb-20">
          <div className="rounded-[2rem] border border-red-900 bg-zinc-950 p-8 md:p-10">
            <h2 className="text-3xl font-black">Join Us</h2>
  
            <p className="mt-5 leading-8 text-zinc-300">
              We’re always interested in connecting with people who care about
              building practical, well-designed software. If you value clarity,
              accountability, and real-world impact, we’d like to hear from you.
            </p>
  
            <p className="mt-5 leading-8 text-zinc-400">
              We’re especially interested in builders with experience in workflow
              systems, data tools, automation, and operational software.
            </p>
  
            <a
              href="/contact"
              className="mt-6 inline-block rounded-xl bg-red-600 px-6 py-3 text-base font-bold text-white transition hover:bg-red-500"
            >
              Get in Touch →
            </a>
          </div>
        </section>
  
        <footer className="border-t border-zinc-800 px-6 py-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Slavsquatch Software Co. We make software
          simple.
        </footer>
      </main>
    );
  }