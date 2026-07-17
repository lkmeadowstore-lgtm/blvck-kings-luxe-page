import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Name required").max(100),
  company: z.string().trim().min(2, "Company required").max(120),
  country: z.enum(["Rwanda", "Kenya", "Uganda", "Ghana", "Nigeria"], {
    message: "Select a country",
  }),
  whatsapp: z
    .string()
    .trim()
    .min(6, "Enter a valid number")
    .max(24)
    .regex(/^[+\d\s()-]+$/, "Digits, spaces, +, -, () only"),
});

const countries = ["Rwanda", "Kenya", "Uganda", "Ghana", "Nigeria"] as const;

export function WholesalerForm() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      company: fd.get("company"),
      country: fd.get("country"),
      whatsapp: fd.get("whatsapp"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setSubmitting(true);
    // Placeholder submission — wire to backend when available
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast.success("Enquiry received. Our export desk will be in touch within 48 hours.");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <Field label="Full Name" name="name" placeholder="e.g. Adaeze Okafor" />
      <Field label="Company / Trading Name" name="company" placeholder="e.g. Kings Beverage Imports Ltd" />
      <div className="space-y-2">
        <label htmlFor="country" className="block text-xs uppercase tracking-[0.2em] text-gold-muted">
          Country of Distribution
        </label>
        <div className="relative">
          <select
            id="country"
            name="country"
            required
            defaultValue=""
            className="w-full appearance-none rounded-none border-b border-border bg-transparent px-0 py-3 text-base text-foreground outline-none transition-colors focus:border-primary"
          >
            <option value="" disabled className="bg-card">
              Select a market
            </option>
            {countries.map((c) => (
              <option key={c} value={c} className="bg-card text-foreground">
                {c}
              </option>
            ))}
          </select>
          <svg
            className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-primary"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5.5 7.5L10 12l4.5-4.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      </div>
      <Field label="WhatsApp Number" name="whatsapp" placeholder="+234 000 000 0000" inputMode="tel" />

      <button
        type="submit"
        disabled={submitting}
        className="group relative mt-4 w-full overflow-hidden rounded-none bg-gold-gradient px-8 py-4 text-sm font-medium uppercase tracking-[0.3em] text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        <span className="relative z-10">
          {submitting ? "Submitting…" : "Request Wholesale Access"}
        </span>
      </button>
      <p className="pt-2 text-xs text-muted-foreground">
        By submitting you consent to L&amp;K Meadows Ltd contacting you regarding export terms. No spam.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  inputMode,
}: {
  label: string;
  name: string;
  placeholder?: string;
  inputMode?: "tel" | "text" | "email";
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-xs uppercase tracking-[0.2em] text-gold-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        required
        placeholder={placeholder}
        inputMode={inputMode}
        className="w-full rounded-none border-b border-border bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
