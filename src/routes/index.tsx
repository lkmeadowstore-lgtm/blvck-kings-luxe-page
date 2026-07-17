import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import canImg from "@/assets/blvck-kings-can.jpg";
import textureImg from "@/assets/dark-gold-texture.jpg";
import { WholesalerForm } from "@/components/WholesalerForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BLVCK KINGS Cider — 8.4% ABV Premium British Cider | Wholesale Export" },
      {
        name: "description",
        content:
          "BLVCK KINGS Cider by L&K Meadows Ltd, Birmingham. 8.4% ABV premium strong British cider. Duty-free HMRC EMCS export, protected 18% distributor margins.",
      },
      { property: "og:title", content: "BLVCK KINGS Cider — Premium British Cider for Export" },
      {
        property: "og:description",
        content:
          "Luxury 8.4% ABV British cider. Direct duty-free export via HMRC EMCS. Protected tier-one distributor margins.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster theme="dark" position="top-center" />
      <Nav />
      <Hero />
      <Specs />
      <Margins />
      <Logistics />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-3">
          <CrownMark />
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wider">BLVCK KINGS</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold-muted">Cider · Est. Birmingham</div>
          </div>
        </a>
        <nav className="hidden gap-10 text-xs uppercase tracking-[0.25em] text-muted-foreground md:flex">
          <a href="#product" className="transition-colors hover:text-primary">Product</a>
          <a href="#margins" className="transition-colors hover:text-primary">Margins</a>
          <a href="#logistics" className="transition-colors hover:text-primary">Logistics</a>
          <a href="#contact" className="transition-colors hover:text-primary">Wholesale</a>
        </nav>
        <a
          href="#contact"
          className="hidden bg-gold-gradient px-5 py-3 text-[10px] uppercase tracking-[0.25em] text-primary-foreground transition-transform hover:-translate-y-0.5 md:inline-block"
        >
          Become a Wholesaler
        </a>
      </div>
    </header>
  );
}

function CrownMark() {
  return (
    <div className="flex h-10 w-10 items-center justify-center border border-primary/50">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary" fill="currentColor" aria-hidden>
        <path d="M3 8l4 4 5-7 5 7 4-4-1 11H4z" />
      </svg>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32">
      <div
        className="absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage: `url(${textureImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/90 to-background" />
      <div
        className="absolute left-1/2 top-1/3 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "var(--gradient-radial-gold)" }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-32 pt-16 lg:grid-cols-[1.1fr_1fr]">
        <div className="relative z-10">
          <div className="mb-8 inline-flex items-center gap-3 border border-primary/30 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-gold-muted">
            <span className="h-1 w-1 rounded-full bg-primary" />
            B2B Export · Birmingham, United Kingdom
          </div>
          <h1 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block text-foreground">8.4% ABV</span>
            <span className="block text-gold-gradient">Premium Strong</span>
            <span className="block text-foreground">British Cider</span>
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            A regal, high-impact cider engineered for demanding export markets. Brewed and canned in
            England by L&amp;K Meadows Ltd - delivered duty-free to your bonded warehouse.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-gold-gradient px-8 py-4 text-xs uppercase tracking-[0.3em] text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Become a Wholesaler
            </a>
            <a
              href="#product"
              className="border border-border px-8 py-4 text-xs uppercase tracking-[0.3em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              View Product
            </a>
          </div>
          <div className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-8">
            <Stat k="8.4%" v="ABV" />
            <Stat k="500ml" v="Can Format" />
            <Stat k="18%" v="Tier-One Margin" />
          </div>
        </div>

        <div className="relative z-10 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-8 -z-10 bg-gold-gradient opacity-20 blur-3xl" />
            <img
              src={canImg}
              alt="BLVCK KINGS Cider 500ml matte black can with gold typography"
              width={1024}
              height={1536}
              className="relative max-h-[720px] w-auto object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-gold-gradient">{k}</div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{v}</div>
    </div>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-16 max-w-3xl">
      <div className="mb-4 text-[10px] uppercase tracking-[0.35em] text-primary">{eyebrow}</div>
      <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">{title}</h2>
      <div className="hairline mt-8 w-24" />
    </div>
  );
}

function Specs() {
  const items = [
    { t: "Crisp Profile", d: "A dry, clean finish with restrained sweetness - architected for repeat pour occasions." },
    { t: "Highly Carbonated", d: "Aggressive effervescence delivering a lively, bright sensory impact on first sip." },
    { t: "Traditional English Bittersweet", d: "Blended from heritage bittersweet apple cultivars grown across the West Country." },
    { t: "High-Impact Formulation", d: "A proprietary 8.4% ABV build tuned for value-per-serve in modern trade channels." },
  ];
  return (
    <section id="product" className="relative border-t border-border/40 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Product Specifications" title="Engineered for the discerning export market." />
        <div className="grid gap-px bg-border/50 lg:grid-cols-4">
          {items.map((it, i) => (
            <div key={it.t} className="group relative bg-background p-8 transition-colors hover:bg-card">
              <div className="mb-6 font-display text-5xl text-primary/40 transition-colors group-hover:text-primary">
                0{i + 1}
              </div>
              <h3 className="mb-3 text-lg font-medium tracking-wide text-foreground">{it.t}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Margins() {
  return (
    <section id="margins" className="relative overflow-hidden border-t border-border/40 py-32">
      <div className="absolute inset-0 -z-10 opacity-30" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeader eyebrow="Distributor Margins" title="Protected 18% tier-one net margins." />
          <p className="text-lg leading-relaxed text-muted-foreground">
            We operate a strict single-distributor policy per territory. Your margin is contractually
            ring-fenced, price-fenced across parallel channels, and defended against grey-market erosion.
          </p>
          <ul className="mt-10 space-y-4">
            {[
              "- Exclusive territorial rights per market",
              "- Recommended retail price protection",
              "- Quarterly volume-linked rebate programme",
              "- Co-funded activation for launch quarter",
            ].map((li) => (
              <li key={li} className="flex items-start gap-4 border-b border-border/40 pb-4 text-sm text-foreground">
                <span className="mt-2 h-px w-6 bg-primary" />
                {li}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="border border-primary/30 bg-card/60 p-10 backdrop-blur">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold-muted">Tier One Net Margin</div>
            <div className="mt-4 font-display text-8xl leading-none text-gold-gradient">18%</div>
            <div className="mt-4 text-sm text-muted-foreground">
              Guaranteed floor. Historically achieved: <span className="text-foreground">22–26%</span> blended.
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border/60 pt-8">
              <MiniStat k="Exclusive" v="Territory" />
              <MiniStat k="Contracted" v="RRP Protection" />
              <MiniStat k="Rebate" v="Volume Linked" />
              <MiniStat k="Co-Funded" v="Launch Support" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniStat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="text-sm font-medium text-foreground">{k}</div>
      <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{v}</div>
    </div>
  );
}

function Logistics() {
  const steps = [
    { t: "HMRC EMCS Clearance", d: "Direct duty-free clearance handled at origin under our UK excise warehouse ID." },
    { t: "Sealed Container Dispatch", d: "Full 20ft / 40ft loads, bonded seals, temperature-controlled documentation." },
    { t: "Bonded Warehouse Delivery", d: "Landed directly into your destination bonded facility - no duty leakage." },
  ];
  return (
    <section id="logistics" className="relative border-t border-border/40 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="International Logistics" title="Duty-free, warehouse-to-warehouse." />
        <div className="relative grid gap-12 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-border md:block" />
          {steps.map((s, i) => (
            <div key={s.t} className="relative">
              <div className="flex h-20 w-20 items-center justify-center border border-primary/50 bg-background font-display text-3xl text-gold-gradient">
                0{i + 1}
              </div>
              <h3 className="mt-8 font-display text-2xl">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border border-border/60 bg-card/40 p-8">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold-muted">Compliance</div>
            <div className="mt-2 font-display text-2xl">
              HMRC EMCS · UK Excise Registered · Origin-Certified British Cider
            </div>
          </div>
          <a
            href="#contact"
            className="border border-primary px-6 py-3 text-[10px] uppercase tracking-[0.3em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Request Export Terms
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border/40 py-32">
      <div className="absolute inset-0 -z-10 opacity-40" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <div className="mb-4 text-[10px] uppercase tracking-[0.35em] text-primary">Wholesale Enquiries</div>
          <h2 className="font-display text-5xl leading-tight tracking-tight sm:text-6xl">
            Become a <span className="text-gold-gradient">Wholesaler</span>.
          </h2>
          <div className="hairline mt-8 w-24" />
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Serious import partners across Rwanda, Kenya, Uganda, Ghana and Nigeria are invited to open
            a commercial dialogue. Our export desk responds within 48 business hours.
          </p>
          <div className="mt-12 space-y-6 border-t border-border/60 pt-8 text-sm">
            <Row k="Operator" v="L&K Meadows Ltd" />
            <Row k="Origin" v="Birmingham, United Kingdom" />
            <Row k="Excise" v="HMRC EMCS Registered" />
            <Row k="Trade Desk" v="export@blvckkings.co.uk" />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 border border-primary/20" />
          <div className="border border-border bg-card/80 p-10 backdrop-blur">
            <WholesalerForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border/40 pb-4">
      <span className="text-[10px] uppercase tracking-[0.3em] text-gold-muted">{k}</span>
      <span className="text-foreground">{v}</span>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-3">
          <CrownMark />
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            BLVCK KINGS Cider · © {new Date().getFullYear()} L&amp;K Meadows Ltd
          </div>
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Not for sale to persons under legal drinking age · Please drink responsibly
        </div>
      </div>
    </footer>
  );
}
