/* ─────────────────────────────────────────────────────────────
   Struktur Pemerintahan Desa Tumani
   Kec. Maesaan, Kab. Minahasa Selatan, Sulawesi Utara

   Struktur khas Desa Minahasa:
   - Hukum Tua  = Kepala Desa
   - Sekdes      = Sekretaris Desa
   - Kaur        = Kepala Urusan
   - Kasi        = Kepala Seksi
   - Kepala Jaga = Kepala Dusun (istilah lokal Minahasa)
   - BAMUS       = Badan Musyawarah (setara BPD)
───────────────────────────────────────────────────────────── */

const HUKUM_TUA = {
  nama: "Andrew Kawengian, S.Pd",
  jabatan: "Hukum Tua",
  sub: "Kepala Desa Tumani",
  periode: "2021 – 2027",
  icon: "👨‍💼",
};

const SEKDES = {
  nama: "Marlyn Sondakh, S.E",
  jabatan: "Sekretaris Desa",
  icon: "👩‍💼",
};

const KAUR = [
  { nama: "Rinto Kawengian",  jabatan: "Kaur Tata Usaha & Umum", icon: "📋" },
  { nama: "Yesi Pangalila",   jabatan: "Kaur Keuangan",           icon: "💰" },
  { nama: "Denny Roring",     jabatan: "Kaur Perencanaan",        icon: "📊" },
];

const KASI = [
  { nama: "Benny Tumimomor",  jabatan: "Kasi Pemerintahan",  icon: "🏛️" },
  { nama: "Grace Masengi",    jabatan: "Kasi Kesejahteraan", icon: "🤝" },
  { nama: "Ferdy Sualang",    jabatan: "Kasi Pelayanan",     icon: "🙋" },
];

const JAGA = [
  { nama: "Pdt. Willy Roring",  jabatan: "Kepala Jaga I",   wilayah: "Jaga Satu",  icon: "🏘️", warga: 320 },
  { nama: "Jimmy Kawengian",    jabatan: "Kepala Jaga II",  wilayah: "Jaga Dua",   icon: "🏘️", warga: 295 },
  { nama: "Stevanus Masengi",   jabatan: "Kepala Jaga III", wilayah: "Jaga Tiga",  icon: "🏘️", warga: 310 },
  { nama: "Meiky Pangalila",    jabatan: "Kepala Jaga IV",  wilayah: "Jaga Empat", icon: "🏘️", warga: 285 },
];

const BAMUS = [
  { nama: "Ir. Rolly Sondakh",  jabatan: "Ketua BAMUS",      icon: "⚖️" },
  { nama: "Olly Tumimomor",     jabatan: "Wakil Ketua BAMUS",icon: "📌" },
  { nama: "Sandra Kawengian",   jabatan: "Sekretaris BAMUS", icon: "📝" },
  { nama: "Hendra Masengi",     jabatan: "Anggota BAMUS",    icon: "👤" },
  { nama: "Frits Roring",       jabatan: "Anggota BAMUS",    icon: "👤" },
];

/* ── helpers ── */
function SectionLabel({ icon, text }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm"
        style={{ background: "#F5EDD6" }}>{icon}</div>
      <span className="font-semibold text-xs uppercase tracking-widest"
        style={{ color: "#7C5C3E" }}>{text}</span>
      <div className="flex-1 h-px"
        style={{ background: "linear-gradient(90deg,#C8A84B50,transparent)" }} />
    </div>
  );
}

function OrgCard({ nama, jabatan, sub, periode, icon, size = "sm", accent = "#F5EDD6" }) {
  const isLg = size === "lg";
  return (
    <div className={`bg-white rounded-2xl border shadow-sm text-center overflow-hidden transition-all duration-250 hover:-translate-y-1 hover:shadow-md
      ${isLg ? "border-amber-300" : "border-amber-100"}`}>
      {isLg && <div className="h-1.5" style={{ background: "linear-gradient(90deg,#C8A84B,#7C5C3E)" }} />}
      <div className={`p-5 ${isLg ? "p-7" : ""}`}>
        <div className={`mx-auto rounded-full flex items-center justify-center mb-3 shadow-inner
          ${isLg ? "w-20 h-20 text-4xl" : "w-12 h-12 text-2xl"}`}
          style={{ background: accent }}>
          {icon}
        </div>
        {isLg && (
          <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-2"
            style={{ background: "#FEF3C7", color: "#92400E" }}>
            {jabatan}
          </span>
        )}
        <p className={`font-bold leading-snug ${isLg ? "text-base" : "text-xs"}`}
          style={{ color: "#2D2416" }}>{nama}</p>
        {!isLg && (
          <p className="text-xs mt-0.5 font-semibold" style={{ color: "#A0795A" }}>{jabatan}</p>
        )}
        {sub && <p className="text-xs text-stone-400 mt-0.5">{sub}</p>}
        {periode && (
          <p className="text-xs text-stone-400 mt-1 font-medium">📅 {periode}</p>
        )}
      </div>
    </div>
  );
}

function RowCard({ nama, jabatan, icon, extra }) {
  return (
    <div className="bg-white rounded-xl border border-amber-100 shadow-sm px-4 py-3.5 flex items-center gap-3
      transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-amber-200">
      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
        style={{ background: "#F5EDD6" }}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm text-stone-800 truncate">{nama}</p>
        <p className="text-xs font-medium" style={{ color: "#A0795A" }}>{jabatan}</p>
      </div>
      {extra && (
        <span className="text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0"
          style={{ background: "#F5EDD6", color: "#7C5C3E" }}>{extra}</span>
      )}
    </div>
  );
}

/* ── connector line SVG ── */
function VLine() {
  return <div className="w-0.5 h-8 mx-auto" style={{ background: "linear-gradient(180deg,#C8A84B,#D4C0A0)" }} />;
}
function HConnector({ count }) {
  return (
    <div className="relative flex justify-center mb-0">
      <div className="absolute top-0 h-0.5 rounded" style={{
        background: "#D4C0A0",
        left: `${100 / (count * 2)}%`,
        right: `${100 / (count * 2)}%`,
      }} />
    </div>
  );
}

export default function Struktur() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@700;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        .font-display { font-family:'Fraunces',Georgia,serif; }
        .font-body    { font-family:'Plus Jakarta Sans',sans-serif; }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fade-up { animation: fadeUp 0.5s ease both; }
      `}</style>

      <div className="font-body bg-amber-50 text-stone-800">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden py-16 px-6"
          style={{ background: "linear-gradient(150deg,#F5EDD6 0%,#FAF6EE 60%,#EFF6FF 100%)" }}>
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-15"
            style={{ background: "#C8A84B", filter: "blur(80px)" }} />

          <div className="max-w-5xl mx-auto text-center relative fade-up">
            <span className="inline-flex items-center gap-2 border border-amber-300/50 bg-amber-100/60 rounded-full px-4 py-1.5 text-amber-800 text-xs font-bold uppercase tracking-widest mb-5">
              🏛️ Struktur Pemerintahan
            </span>
            <h1 className="font-display leading-tight mb-4"
              style={{ fontSize: "clamp(2.2rem,5vw,3.5rem)", color: "#2D2416" }}>
              Struktur Pemerintahan<br />
              <span style={{ color: "#C8A84B" }}>Desa Tumani</span>
            </h1>
            <p className="text-stone-500 max-w-lg mx-auto text-sm leading-relaxed">
              Susunan perangkat pemerintahan Desa Tumani, Kec. Maesaan, Kab. Minahasa Selatan, Sulawesi Utara periode 2021–2027.
            </p>

            {/* stat chips */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {[
                ["👥", `${1 + 1 + KAUR.length + KASI.length + JAGA.length} Perangkat`, "#FEF3C7", "#92400E"],
                ["🏘️", `${JAGA.length} Kepala Jaga`, "#D1FAE5", "#065F46"],
                ["⚖️", `${BAMUS.length} Anggota BAMUS`, "#DBEAFE", "#1E40AF"],
              ].map(([ic, txt, bg, color]) => (
                <div key={txt} className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold"
                  style={{ background: bg, color }}>
                  {ic} {txt}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

          {/* ── BAGAN ORGANISASI ── */}
          <section>
            <SectionLabel icon="🗂️" text="Bagan Struktur Organisasi" />

            {/* Hukum Tua */}
            <div className="max-w-xs mx-auto">
              <OrgCard {...HUKUM_TUA} size="lg" accent="#FEF3C7" />
            </div>
            <VLine />

            {/* Sekdes */}
            <div className="max-w-xs mx-auto">
              <OrgCard {...SEKDES} accent="#F5EDD6" />
            </div>
            <VLine />

            {/* Kaur & Kasi row */}
            <div className="relative">
              <div className="absolute top-0 left-1/4 right-1/4 h-0.5 rounded" style={{ background: "#D4C0A0" }} />
              <div className="grid md:grid-cols-2 gap-6 pt-8">
                {/* Kaur */}
                <div>
                  <p className="text-center text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#A0795A" }}>
                    Kepala Urusan (Kaur)
                  </p>
                  <div className="space-y-2">
                    {KAUR.map(k => <RowCard key={k.jabatan} {...k} />)}
                  </div>
                </div>
                {/* Kasi */}
                <div>
                  <p className="text-center text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#2563EB" }}>
                    Kepala Seksi (Kasi)
                  </p>
                  <div className="space-y-2">
                    {KASI.map(k => <RowCard key={k.jabatan} {...k} />)}
                  </div>
                </div>
              </div>
            </div>

            <VLine />

            {/* Kepala Jaga */}
            <div>
              <p className="text-center text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#059669" }}>
                Kepala Jaga (Kepala Dusun)
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {JAGA.map(j => (
                  <div key={j.jabatan}
                    className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-4 text-center
                      transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                    <div className="text-2xl mb-2">{j.icon}</div>
                    <p className="font-bold text-xs text-stone-800">{j.nama}</p>
                    <p className="text-xs font-semibold mt-0.5" style={{ color: "#059669" }}>{j.jabatan}</p>
                    <p className="text-xs text-stone-400 mt-0.5">{j.wilayah}</p>
                    <div className="mt-2 text-xs font-bold" style={{ color: "#7C5C3E" }}>
                      ±{j.warga} warga
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── BAMUS ── */}
          <section>
            <SectionLabel icon="⚖️" text="Badan Musyawarah Desa (BAMUS)" />
            <div className="bg-white rounded-3xl border border-blue-100 shadow-sm p-6">
              <div className="flex items-start gap-4 mb-6 pb-5 border-b border-stone-100">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: "#DBEAFE" }}>⚖️</div>
                <div>
                  <h3 className="font-bold text-stone-800 text-sm">Badan Musyawarah (BAMUS)</h3>
                  <p className="text-stone-400 text-xs mt-1 leading-relaxed">
                    Lembaga permusyawaratan desa yang berfungsi sebagai mitra pemerintah desa dalam menyalurkan aspirasi masyarakat. Setara dengan BPD (Badan Permusyawaratan Desa).
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {BAMUS.map(b => <RowCard key={b.jabatan} {...b} />)}
              </div>
            </div>
          </section>

          {/* ── TUPOKSI RINGKAS ── */}
          <section>
            <SectionLabel icon="📌" text="Tugas Pokok & Fungsi" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: "👑", jabatan: "Hukum Tua", warna: "#FEF3C7", accent: "#92400E",
                  tugas: "Memimpin penyelenggaraan pemerintahan, pembangunan, dan kemasyarakatan desa." },
                { icon: "📋", jabatan: "Sekretaris Desa", warna: "#F5EDD6", accent: "#7C5C3E",
                  tugas: "Membantu Hukum Tua di bidang administrasi, ketatausahaan, dan koordinasi perangkat." },
                { icon: "💰", jabatan: "Kaur Keuangan", warna: "#ECFDF5", accent: "#065F46",
                  tugas: "Mengelola keuangan desa, menyusun APBDes, dan membuat laporan keuangan." },
                { icon: "🏛️", jabatan: "Kasi Pemerintahan", warna: "#DBEAFE", accent: "#1E40AF",
                  tugas: "Mengurus administrasi kependudukan, pertanahan, dan ketertiban masyarakat." },
                { icon: "🤝", jabatan: "Kasi Kesejahteraan", warna: "#FCE7F3", accent: "#9D174D",
                  tugas: "Menangani program sosial, kesehatan, pendidikan, dan pemberdayaan warga." },
                { icon: "🏘️", jabatan: "Kepala Jaga", warna: "#FEF9C3", accent: "#713F12",
                  tugas: "Membantu Hukum Tua mengoordinasikan warga di tingkat jaga (dusun)." },
              ].map(t => (
                <div key={t.jabatan} className="bg-white rounded-2xl border border-amber-100 shadow-sm p-5
                  transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3"
                    style={{ background: t.warna }}>
                    {t.icon}
                  </div>
                  <p className="font-bold text-sm mb-2" style={{ color: t.accent }}>{t.jabatan}</p>
                  <p className="text-stone-400 text-xs leading-relaxed">{t.tugas}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}