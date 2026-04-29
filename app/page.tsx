export default function Home() {
  const workflowItems = [
    "ERP intake and data capture",
    "Workflow automation",
    "Dashboards and reporting",
    "Faith-based, Non-profit, Government & Education applications",
  ];

  const services = [
    {
      title: "Custom Applications",
      text: "Purpose-built web applications designed around how your organization actually works.",
      icon: "</>",
    },
    {
      title: "Process Automation",
      text: "Tools that reduce repetitive work, prevent handoff gaps, and keep tasks moving.",
      icon: "⚙",
    },
    {
      title: "Reporting & Insights",
      text: "Dashboards and data tools that turn messy information into clear decisions.",
      icon: "▮▮▮",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050608] text-zinc-100">
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
            <a href="#services" className="hover:text-red-400">
              Services
            </a>
            <a href="/about" className="hover:text-red-400">
              About
            </a>
            <a href="#process" className="hover:text-red-400">
              Process
            </a>
            <a href="/contact" className="hover:text-red-400">
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

        <section className="grid min-h-[720px] items-center gap-12 py-24 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-sm font-black uppercase tracking-[0.35em] text-red-500">
              Simple software. Real outcomes.
            </p>

            <h1 className="max-w-3xl text-6xl font-black leading-[1.05] tracking-tight text-white md:text-7xl">
              We make software simple.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-zinc-300">
              We build applications that support your entire business process,
              from intake to outcome.
            </p>

            <p className="mt-4 text-lg text-zinc-400">
              No fragmented tools. No unnecessary complexity. Just systems that
              work.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="rounded-xl bg-red-600 px-8 py-4 text-center text-lg font-bold text-white shadow-lg shadow-red-950/40 transition hover:bg-red-500"
              >
                Start a Project →
              </a>

              <a
                href="#services"
                className="rounded-xl border border-zinc-700 px-8 py-4 text-center text-lg font-bold text-zinc-200 transition hover:border-red-500 hover:text-red-400"
              >
                See Services →
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950/80 p-10 shadow-2xl shadow-black">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-black leading-tight">
                Built for real workflows.
              </h2>

              <p className="mt-5 leading-7 text-zinc-300">
                Most tools solve one slice of the problem. We design systems
                that connect the whole workflow so your data, decisions, and
                actions stay aligned.
              </p>

              <div className="mt-6 h-px bg-red-900" />

              <div className="mt-6 space-y-4">
                {workflowItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-zinc-800 pb-4"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-900 bg-red-950/30 text-red-500">
                      ●
                    </span>
                    <p className="text-sm text-zinc-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>

      <section
        id="services"
        className="border-t border-zinc-800 bg-zinc-950 px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl font-black md:text-5xl">What we build</h2>
            <p className="mt-4 text-lg text-zinc-400">
              Solutions designed around your processes, built for your outcomes.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
              key={service.title}
              className="rounded-3xl border border-red-900 bg-[#07090d] p-8"
            >
              <h3 className="text-2xl font-black text-white">
  {service.title}
</h3>
            
              <p className="mt-4 leading-7 text-zinc-300">{service.text}</p>
            </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-zinc-800 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black">Software that fits the work.</h2>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            Slavsquatch Software Co. helps organizations simplify complicated
            workflows with practical applications, automation, and reporting
            tools built around real business requirements.
          </p>
        </div>
      </section>

      <footer className="border-t border-zinc-800 px-6 py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Slavsquatch Software Co. We make software
        simple.
      </footer>
    </main>
  );
}