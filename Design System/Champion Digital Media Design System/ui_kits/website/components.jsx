/* global React */
const { useState, useEffect } = React;

/* ─── Logo ─────────────────────────────────────────────────────────── */
function Logo({ variant = "lockup", color = "dark" }) {
  const tint = color === "pale" ? { filter: "invert(95%) sepia(8%) saturate(335%) hue-rotate(8deg) brightness(98%)" } : {};
  if (variant === "symbol") {
    return <img src="../../assets/logos/cdm-symbol.svg" alt="Champion Digital" style={{ width: 44, height: 44, ...tint }} />;
  }
  return <img src="../../assets/logos/cdm-symbol-champion.svg" alt="Champion Digital Media" style={{ height: 28, ...tint }} />;
}

/* ─── Top nav ──────────────────────────────────────────────────────── */
function Nav({ onContact }) {
  const navItems = ["WORK", "STUDIO", "JOURNAL"];
  return (
    <nav style={cdmStyles.nav}>
      <a href="#" style={{ borderBottom: 0 }}><Logo /></a>
      <div style={cdmStyles.navItems}>
        {navItems.map(item => (
          <a key={item} href="#" style={cdmStyles.navLink}>{item}</a>
        ))}
        <button style={cdmStyles.navCta} onClick={onContact}>let's talk</button>
      </div>
    </nav>
  );
}

/* ─── Circled word ─────────────────────────────────────────────────── */
function Circled({ children, brush = "oval-speed" }) {
  return (
    <span style={{ fontWeight: 700, position: "relative", display: "inline-block", padding: "0 0.12em" }}>
      <span style={{ position: "relative", zIndex: 2 }}>{children}</span>
      <span style={{
        position: "absolute", inset: "-0.15em -0.04em -0.1em -0.04em",
        backgroundImage: `url(../../assets/brushes/${brush}.svg?v=2)`,
        backgroundRepeat: "no-repeat", backgroundSize: "100% 100%",
        zIndex: 1, pointerEvents: "none",
      }} />
    </span>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section style={cdmStyles.hero}>
      <div style={cdmStyles.eyebrow}>CHAMPION DIGITAL MEDIA · CREATIVE MARKETING STUDIO</div>
      <h1 style={cdmStyles.heroHead}>
        FOR BRANDS<br />THAT <Circled brush="oval-move">MOVE</Circled>
      </h1>
      <p style={cdmStyles.heroSub}>
        We work at the pace of the medium without moving at its pace. Brand identity, marketing sites, go-to-market design, and video — crafted, shaped, made.
      </p>
      <div style={{ display: "flex", gap: 14, marginTop: 28 }}>
        <button style={cdmStyles.btnPrimary}>see the work</button>
        <button style={cdmStyles.btnSecondary}>READ THE MANIFESTO</button>
      </div>
    </section>
  );
}

/* ─── Manifesto ────────────────────────────────────────────────────── */
function Manifesto() {
  return (
    <section style={cdmStyles.manifesto}>
      <div style={cdmStyles.eyebrow}>02 · WHAT WE BELIEVE</div>
      <h2 style={cdmStyles.manifestoHead}>
        STILL AT <Circled>SPEED.</Circled>
      </h2>
      <div style={cdmStyles.manifestoGrid}>
        <p style={cdmStyles.manifestoCopy}>
          The brand runs on a paradox. The calm of quiet contemplation at 35,000 feet while moving at 500 miles per hour. Patient in a fast machine. Deliberate in an instant medium.
        </p>
        <p style={cdmStyles.manifestoCopy}>
          We use every tool we have, including AI and automation. The decisions stay ours. Every asset we ship carries a thumbprint — a word chosen, a stroke drawn, a frame held one beat longer.
        </p>
      </div>
    </section>
  );
}

/* ─── Work card ────────────────────────────────────────────────────── */
function WorkCard({ index, eyebrow, title, gradient }) {
  const [hover, setHover] = useState(false);
  return (
    <a href="#" style={{ ...cdmStyles.workCard, transform: hover ? "translateY(-4px)" : "translateY(0)", borderBottom: 0 }}
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div style={{ ...cdmStyles.workImg, background: gradient }}>
        <div style={cdmStyles.workIndex}>{String(index).padStart(2, "0")}</div>
      </div>
      <div style={cdmStyles.workMeta}>
        <div style={cdmStyles.eyebrow}>{eyebrow}</div>
        <div style={cdmStyles.workTitle}>{title}</div>
      </div>
    </a>
  );
}

/* ─── Work grid ────────────────────────────────────────────────────── */
function WorkGrid() {
  const work = [
    { eyebrow: "BRAND IDENTITY · 2024", title: "FIELD AVIATION", gradient: "linear-gradient(135deg, #1F81A5 0%, #062D51 70%, #2A2A2A 100%)" },
    { eyebrow: "MARKETING SITE · 2024", title: "NORTH FREIGHT", gradient: "linear-gradient(160deg, #F9AC24 0%, #FF9900 50%, #2A2A2A 100%)" },
    { eyebrow: "GO-TO-MARKET · 2023", title: "QUIET HARBOR", gradient: "linear-gradient(120deg, #062D51 0%, #1F81A5 50%, #F7F3E9 110%)" },
    { eyebrow: "FILM · 2023", title: "AT 35,000 FEET", gradient: "linear-gradient(180deg, #2A2A2A 0%, #005686 60%, #0BAED3 100%)" },
  ];
  return (
    <section style={cdmStyles.work}>
      <div style={cdmStyles.workHeader}>
        <div style={cdmStyles.eyebrow}>03 · SELECTED WORK</div>
        <a href="#" style={cdmStyles.workAll}>see all 24 →</a>
      </div>
      <div style={cdmStyles.workCols}>
        {work.map((w, i) => <WorkCard key={i} index={i + 1} {...w} />)}
      </div>
    </section>
  );
}

/* ─── Dark CTA ─────────────────────────────────────────────────────── */
function DarkCTA({ onContact }) {
  return (
    <section style={cdmStyles.dark}>
      <div style={{ ...cdmStyles.eyebrow, color: "rgba(247,243,233,.6)" }}>04 · LET'S WORK</div>
      <h2 style={cdmStyles.darkHead}>
        TELL US WHERE YOU'RE <Circled brush="oval-move">HEADED.</Circled>
      </h2>
      <p style={cdmStyles.darkCopy}>
        We take on a small number of engagements each quarter. Brand identity, marketing sites, go-to-market design, video.
      </p>
      <button style={cdmStyles.btnPrimary} onClick={onContact}>get in touch</button>
    </section>
  );
}

/* ─── Footer ───────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={cdmStyles.footer}>
      <div style={cdmStyles.footerLogo}>
        <img src="../../assets/logos/cdm-symbol-champion.svg" alt="" style={{ height: 34, filter: "invert(95%) sepia(8%) saturate(335%) hue-rotate(8deg) brightness(98%)" }} />
      </div>
      <div style={cdmStyles.footerCols}>
        <div>
          <div style={cdmStyles.footerLabel}>STUDIO</div>
          <a style={cdmStyles.footerLink} href="#">About</a>
          <a style={cdmStyles.footerLink} href="#">Approach</a>
          <a style={cdmStyles.footerLink} href="#">Journal</a>
        </div>
        <div>
          <div style={cdmStyles.footerLabel}>WORK</div>
          <a style={cdmStyles.footerLink} href="#">Brand identity</a>
          <a style={cdmStyles.footerLink} href="#">Marketing sites</a>
          <a style={cdmStyles.footerLink} href="#">Film &amp; video</a>
        </div>
        <div>
          <div style={cdmStyles.footerLabel}>CONTACT</div>
          <a style={cdmStyles.footerLink} href="#">hello@championdigital.media</a>
          <a style={cdmStyles.footerLink} href="#">@championdigital</a>
        </div>
      </div>
      <div style={cdmStyles.footerBase}>
        <span>© {new Date().getFullYear()} CHAMPION DIGITAL MEDIA</span>
        <span>STILL AT SPEED.</span>
      </div>
    </footer>
  );
}

/* ─── Contact modal ────────────────────────────────────────────────── */
function ContactModal({ open, onClose }) {
  const [sent, setSent] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  useEffect(() => { if (!open) setSent(false); }, [open]);
  if (!open) return null;
  return (
    <div style={cdmStyles.modalBackdrop} onClick={onClose}>
      <div style={cdmStyles.modal} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={cdmStyles.modalClose} aria-label="close">×</button>
        {!sent ? (
          <>
            <div style={cdmStyles.eyebrow}>SAY HELLO</div>
            <h3 style={cdmStyles.modalHead}>LET'S <Circled>TALK.</Circled></h3>
            <form style={cdmStyles.form} onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <Field label="NAME" placeholder="Your name" />
              <Field label="EMAIL" placeholder="hello@brand.com" type="email" />
              <Field label="WHAT ARE YOU BUILDING" placeholder="A few sentences is plenty" textarea />
              <button type="submit" style={{ ...cdmStyles.btnPrimary, marginTop: 12 }}>send it</button>
            </form>
          </>
        ) : (
          <div style={{ padding: "30px 0" }}>
            <div style={cdmStyles.eyebrow}>RECEIVED</div>
            <h3 style={cdmStyles.modalHead}>WE'LL <Circled brush="oval-move">REPLY</Circled> SOON.</h3>
            <p style={{ fontFamily: "var(--font-body)", color: "var(--fg-2)", marginTop: 14, fontSize: 14 }}>
              Within two business days. No autoresponder.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, placeholder, type = "text", textarea }) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <label style={cdmStyles.field}>
      <span style={cdmStyles.fieldLabel}>{label}</span>
      <Tag type={type} placeholder={placeholder} rows={textarea ? 3 : undefined} style={cdmStyles.input} />
    </label>
  );
}

/* ─── Styles ───────────────────────────────────────────────────────── */
const cdmStyles = {
  nav: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "28px 80px", borderBottom: "1px solid var(--color-line)",
    position: "sticky", top: 0, background: "var(--bg-1)", zIndex: 50,
  },
  navItems: { display: "flex", alignItems: "center", gap: 36 },
  navLink: {
    fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600,
    letterSpacing: ".08em", textTransform: "uppercase",
    color: "var(--fg-1)", borderBottom: 0, cursor: "pointer",
  },
  navCta: {
    fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600,
    letterSpacing: ".04em", textTransform: "lowercase",
    background: "var(--color-yellow)", color: "var(--color-dark)",
    border: "1.5px solid var(--color-yellow)", padding: "10px 18px",
    cursor: "pointer", transition: "transform 200ms var(--ease-default)",
  },
  eyebrow: {
    fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600,
    letterSpacing: ".08em", textTransform: "uppercase", color: "var(--fg-3)",
  },
  hero: { padding: "120px 80px 140px", maxWidth: 1280, margin: "0 auto" },
  heroHead: {
    fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 144,
    lineHeight: 0.95, textTransform: "uppercase", color: "var(--fg-1)",
    margin: "20px 0 36px", letterSpacing: 0,
  },
  heroSub: {
    fontFamily: "var(--font-body)", fontSize: 20, lineHeight: 1.5,
    color: "var(--fg-2)", maxWidth: "62ch", margin: 0,
  },
  btnPrimary: {
    fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600,
    letterSpacing: ".04em", textTransform: "lowercase",
    background: "var(--color-yellow)", color: "var(--color-dark)",
    border: "1.5px solid var(--color-yellow)", padding: "16px 28px",
    cursor: "pointer", transition: "transform 200ms var(--ease-default)",
  },
  btnSecondary: {
    fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600,
    letterSpacing: ".08em", textTransform: "uppercase",
    background: "transparent", color: "var(--color-dark)",
    border: "1.5px solid var(--color-dark)", padding: "16px 28px", cursor: "pointer",
  },

  manifesto: { padding: "120px 80px", maxWidth: 1280, margin: "0 auto", borderTop: "1px solid var(--color-line)" },
  manifestoHead: {
    fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 96,
    lineHeight: 1.0, textTransform: "uppercase", color: "var(--fg-1)",
    margin: "16px 0 60px",
  },
  manifestoGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 },
  manifestoCopy: { fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.6, color: "var(--fg-2)", margin: 0, maxWidth: "52ch" },

  work: { padding: "60px 80px 120px", maxWidth: 1280, margin: "0 auto" },
  workHeader: { display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 36 },
  workAll: { fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, letterSpacing: ".04em", textTransform: "lowercase", color: "var(--fg-1)", borderBottom: "1px solid var(--fg-1)" },
  workCols: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 },
  workCard: {
    display: "block", color: "inherit",
    transition: "transform 300ms var(--ease-default)",
  },
  workImg: { aspectRatio: "4 / 3", position: "relative", marginBottom: 18 },
  workIndex: {
    position: "absolute", top: 18, left: 22,
    fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700,
    letterSpacing: ".08em", color: "rgba(247,243,233,.85)",
  },
  workMeta: {},
  workTitle: {
    fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 36,
    textTransform: "uppercase", lineHeight: 1.05, color: "var(--fg-1)", marginTop: 6,
  },

  dark: {
    background: "var(--color-dark)", color: "var(--color-pale)",
    padding: "140px 80px", textAlign: "center",
  },
  darkHead: {
    fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 110,
    lineHeight: 1.0, textTransform: "uppercase", color: "var(--color-pale)",
    margin: "20px auto 32px", maxWidth: 1100,
  },
  darkCopy: {
    fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.55,
    color: "rgba(247,243,233,.78)", maxWidth: "52ch", margin: "0 auto 36px",
  },

  footer: { background: "var(--color-dark)", color: "var(--color-pale)", padding: "80px 80px 32px", borderTop: "1px solid rgba(247,243,233,.1)" },
  footerLogo: { marginBottom: 60 },
  footerCols: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 48, paddingBottom: 60, borderBottom: "1px solid rgba(247,243,233,.12)" },
  footerLabel: { fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(247,243,233,.55)", marginBottom: 16 },
  footerLink: { display: "block", fontFamily: "var(--font-body)", fontSize: 14, color: "var(--color-pale)", borderBottom: 0, marginBottom: 8 },
  footerBase: { display: "flex", justifyContent: "space-between", paddingTop: 32, fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(247,243,233,.5)" },

  modalBackdrop: { position: "fixed", inset: 0, background: "rgba(20,20,20,.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, animation: "fadeIn 200ms" },
  modal: { background: "var(--color-pale)", padding: "48px 56px", maxWidth: 540, width: "92%", position: "relative", border: "1px solid var(--color-line)" },
  modalClose: { position: "absolute", top: 14, right: 18, background: "transparent", border: 0, fontSize: 28, cursor: "pointer", color: "var(--fg-1)", lineHeight: 1 },
  modalHead: { fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 56, textTransform: "uppercase", lineHeight: 1.0, margin: "10px 0 24px", color: "var(--fg-1)" },
  form: { display: "flex", flexDirection: "column", gap: 20 },
  field: { display: "flex", flexDirection: "column", gap: 6 },
  fieldLabel: { fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--fg-1)" },
  input: { fontFamily: "var(--font-body)", fontSize: 14, border: 0, borderBottom: "1.5px solid var(--color-dark)", padding: "8px 0", background: "transparent", color: "var(--fg-1)", outline: "none", resize: "none" },
};

Object.assign(window, { Nav, Hero, Manifesto, WorkGrid, DarkCTA, Footer, ContactModal });
