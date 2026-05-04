export default function Home() {
  const faqs = [
    {
      q: "What frameworks are supported?",
      a: "React, Vue, Svelte, and vanilla JS/HTML/CSS apps. Any static or SSR build output can be bundled."
    },
    {
      q: "Do the binaries run without Node.js installed?",
      a: "Yes. Each binary embeds a lightweight HTTP server and all assets. Recipients just run the file — nothing else needed."
    },
    {
      q: "Which platforms are supported?",
      a: "Outputs cross-platform binaries for macOS, Linux, and Windows from a single upload."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Developer Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Bundle Web Apps Into{" "}
          <span className="text-[#58a6ff]">Single Executables</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload your React, Vue, or vanilla JS app and get a cross-platform binary back. Share demos, ship internal tools, and distribute apps — no installation required.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="px-7 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Access — $19/mo
          </a>
          <a
            href="#faq"
            className="px-7 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          {[["React / Vue / Svelte","Any framework"],["macOS · Linux · Win","Cross-platform"],["Zero dependencies","Just run the file"]].map(([val, label]) => (
            <div key={label} className="p-4 rounded-lg bg-[#161b22] border border-[#30363d]">
              <div className="text-sm font-semibold text-white mb-1">{val}</div>
              <div className="text-xs text-[#8b949e]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-xl border border-[#58a6ff] bg-[#161b22] p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {["Unlimited bundles","All target platforms","React, Vue, Svelte, vanilla JS","Priority support","Early access to new features"].map(f => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start Bundling
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-lg bg-[#161b22] border border-[#30363d] p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} AppBundle. All rights reserved.
      </footer>
    </main>
  );
}
