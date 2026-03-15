import { useState } from "react";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const TIMELINE = [
  {
    tahun: "1920",
    era: "Masa Perintis",
    judul: "Berdirinya Pemukiman Pertama",
    isi: "Sekelompok perantau dari wilayah selatan membuka lahan di tepi Sungai Makmur. Mereka membangun gubuk-gubuk sederhana dan mulai mengolah tanah yang subur untuk ditanami padi.",
    emoji: "🌱",
    warna: "#8DB87A",
    bg: "#F0FAF0",
  },
  {
    tahun: "1932",
    era: "Masa Pemerintahan Adat",
    judul: "Diangkatnya Kepala Desa Pertama",
    isi: "Mbah Karjo dipilih secara musyawarah sebagai pemimpin desa pertama. Sistem pemerintahan adat mulai terbentuk, termasuk pembagian wilayah dusun dan pengelolaan irigasi bersama.",
    emoji: "👴",
    warna: "#C8A84B",
    bg: "#FFFBEE",
  },
  {
    tahun: "1945",
    era: "Era Kemerdekaan",
    judul: "Bersatu dalam Perjuangan",
    isi: "Pemuda-pemuda desa dengan gagah berani bergabung bersama laskar rakyat. Desa Sejahtera menjadi titik penyedia logistik dan tempat persembunyian pejuang melawan penjajah.",
    emoji: "🇮🇩",
    warna: "#DC2626",
    bg: "#FFF5F5",
  },
  {
    tahun: "1965",
    era: "Era Pembangunan",
    judul: "Infrastruktur Desa Mulai Dibangun",
    isi: "Jalan utama desa sepanjang 4 km diaspal pertama kali. Sekolah Dasar Negeri pertama berdiri dan menjadi tonggak sejarah kemajuan pendidikan bagi anak-anak desa.",
    emoji: "🏗️",
    warna: "#2563EB",
    bg: "#EFF6FF",
  },
  {
    tahun: "1985",
    era: "Era Pertanian Maju",
    judul: "Revolusi Hijau di Sawah Desa",
    isi: "Program irigasi teknis dari pemerintah masuk ke desa. Petani mulai menggunakan bibit unggul dan pupuk modern. Hasil panen meningkat tiga kali lipat — desa dikenal sebagai lumbung padi kecamatan.",
    emoji: "🌾",
    warna: "#059669",
    bg: "#ECFDF5",
  },
  {
    tahun: "2000",
    era: "Era Reformasi",
    judul: "Otonomi Desa & Demokrasi Lokal",
    isi: "Pemilihan kepala desa langsung pertama kali diselenggarakan. Warga antusias menggunakan hak suaranya. Dana desa mulai dikelola secara mandiri dengan pengawasan BPD.",
    emoji: "🗳️",
    warna: "#7C3AED",
    bg: "#F5F3FF",
  },
  {
    tahun: "2015",
    era: "Era BUMDes",
    judul: "Lahirnya BUMDes Sejahtera Makmur",
    isi: "Badan Usaha Milik Desa resmi didirikan dengan unit usaha simpan pinjam, toko desa, dan pengelolaan wisata edukasi sawah. BUMDes menjadi sumber PAD terbesar desa.",
    emoji: "🏪",
    warna: "#D97706",
    bg: "#FFFBEB",
  },
  {
    tahun: "2024",
    era: "Era Digital",
    judul: "Desa Sejahtera Goes Digital",
    isi: "Peluncuran website resmi desa, sistem administrasi online, dan WiFi publik di balai desa. Desa Sejahtera menjadi desa percontohan digitalisasi tingkat kabupaten.",
    emoji: "💻",
    warna: "#0EA5E9",
    bg: "#F0F9FF",
  },
];

const VISI_MISI = {
  visi: "Terwujudnya Desa Sejahtera yang Maju, Mandiri, Berbudaya, dan Berdaya Saing dalam Bingkai Gotong Royong Menuju Masyarakat yang Sejahtera Lahir dan Batin.",
  misi: [
    { icon: "🏛️", text: "Meningkatkan kualitas pelayanan publik yang cepat, mudah, dan transparan" },
    { icon: "💼", text: "Mengembangkan potensi ekonomi lokal melalui BUMDes dan UMKM desa" },
    { icon: "🛣️", text: "Membangun infrastruktur yang merata dan berkelanjutan di seluruh dusun" },
    { icon: "🎭", text: "Melestarikan nilai budaya, adat istiadat, dan kearifan lokal desa" },
    { icon: "📚", text: "Meningkatkan kualitas SDM melalui pendidikan, pelatihan, dan pemberdayaan" },
    { icon: "🌿", text: "Menjaga kelestarian lingkungan hidup dan sumber daya alam desa" },
  ],
};

const TOKOH = [
  { nama: "Mbah Karjo", peran: "Pendiri & Kepala Desa Pertama", tahun: "1932–1945", emoji: "👴", desc: "Pemimpin adat yang bijaksana, peletak fondasi sistem pemerintahan desa." },
  { nama: "K.H. Salim", peran: "Ulama & Tokoh Pejuang", tahun: "1945–1960", emoji: "🕌", desc: "Ulama yang memimpin perlawanan rakyat dan mendirikan madrasah pertama desa." },
  { nama: "Bu Sri Mulyani", peran: "Pelopor Pendidikan Wanita", tahun: "1970–1990", emoji: "👩‍🏫", desc: "Guru pertama yang mendirikan kelompok belajar untuk ibu-ibu dan anak perempuan desa." },
  { nama: "Pak Hadi Susanto", peran: "Pelopor BUMDes", tahun: "2014–2020", emoji: "🤝", desc: "Inisiator BUMDes Sejahtera Makmur yang kini menjadi percontohan tingkat nasional." },
];

/* ─────────────────────────────────────────
   COMPONENTS
───────────────────────────────────────── */
function SectionLabel({ icon, text }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-8 h-8 rounded-xl flex items-center justify-center text-base flex-shrink-0"
        style={{ background: "#F5EDD6" }}>
        {icon}
      </div>
      <span className="font-semibold text-sm uppercase tracking-widest" style={{ color: "#7C5C3E" }}>
        {text}
      </span>
      <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg,#C8A84B50,transparent)" }} />
    </div>
  );
}

export default function Sejarah() {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;0,9..144,900;1,9..144,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        .font-display { font-family:'Fraunces',Georgia,serif; }
        .font-body    { font-family:'Plus Jakarta Sans',sans-serif; }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fade-up { animation: fadeUp 0.6s ease both; }

        .timeline-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          cursor: pointer;
        }
        .timeline-card:hover, .timeline-card.active {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(124,92,62,0.12);
        }

        .tokoh-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .tokoh-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(124,92,62,0.12);
        }
      `}</style>

      <div className="font-body bg-amber-50 text-stone-800 overflow-x-hidden">

        {/* ══════════════════════════════════════
            HERO
        ══════════════════════════════════════ */}
        <section className="relative overflow-hidden" style={{ background: "linear-gradient(160deg,#F5EDD6 0%,#FAF6EE 60%,#EFF6FF 100%)" }}>

          {/* decorative bg circles */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20" style={{ background: "#C8A84B", filter: "blur(80px)" }} />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full opacity-15" style={{ background: "#8DB87A", filter: "blur(60px)" }} />

          {/* ornament: old paper texture lines */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "repeating-linear-gradient(0deg,#7C5C3E,#7C5C3E 1px,transparent 1px,transparent 32px)" }} />

          <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* text */}
              <div className="fade-up">
                <div className="inline-flex items-center gap-2 border border-amber-300/60 bg-amber-100/60 backdrop-blur rounded-full px-4 py-1.5 text-amber-800 text-xs font-bold uppercase tracking-widest mb-6">
                  📜 Sejarah Desa
                </div>
                <h1 className="font-display leading-tight mb-5" style={{ fontSize: "clamp(2.4rem,5vw,4rem)", color: "#2D2416" }}>
                  Perjalanan Panjang<br />
                  <span style={{ color: "#C8A84B" }}>Desa Sejahtera</span>
                </h1>
                <p className="text-stone-500 leading-relaxed text-base max-w-lg">
                  Dari sebuah perkampungan kecil di tepi sungai hingga menjadi desa digital percontohan — inilah kisah satu abad Desa Sejahtera yang penuh semangat dan harapan.
                </p>

                {/* mini stats */}
                <div className="flex gap-8 mt-10 pt-8 border-t border-amber-200/60">
                  {[["±100", "Tahun Berdiri"], ["8", "Kepala Desa"], ["2024", "Tahun Ini"]].map(([v, l]) => (
                    <div key={l}>
                      <div className="font-display font-black text-2xl" style={{ color: "#7C5C3E" }}>{v}</div>
                      <div className="text-stone-400 text-xs mt-0.5">{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* illustration: scroll / old document */}
              <div className="hidden lg:flex justify-center items-center fade-up" style={{ animationDelay: "0.2s" }}>
                <div className="relative">
                  <svg viewBox="0 0 320 360" className="w-72 drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="scroll-bg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FEF9EE"/>
                        <stop offset="100%" stopColor="#F5EDD6"/>
                      </linearGradient>
                      <linearGradient id="roll" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#D4B888"/>
                        <stop offset="50%" stopColor="#E8C898"/>
                        <stop offset="100%" stopColor="#C8A878"/>
                      </linearGradient>
                    </defs>
                    {/* scroll body */}
                    <rect x="20" y="40" width="280" height="280" rx="8" fill="url(#scroll-bg)" stroke="#D4C0A0" strokeWidth="1.5"/>
                    {/* top roll */}
                    <ellipse cx="160" cy="40" rx="140" ry="16" fill="url(#roll)" stroke="#C8A878" strokeWidth="1"/>
                    <ellipse cx="160" cy="40" rx="140" ry="10" fill="#E8C898" opacity="0.6"/>
                    {/* bottom roll */}
                    <ellipse cx="160" cy="320" rx="140" ry="16" fill="url(#roll)" stroke="#C8A878" strokeWidth="1"/>
                    <ellipse cx="160" cy="320" rx="140" ry="10" fill="#E8C898" opacity="0.6"/>
                    {/* left knob */}
                    <ellipse cx="20" cy="40" rx="10" ry="14" fill="#A08050"/>
                    <ellipse cx="20" cy="320" rx="10" ry="14" fill="#A08050"/>
                    {/* right knob */}
                    <ellipse cx="300" cy="40" rx="10" ry="14" fill="#A08050"/>
                    <ellipse cx="300" cy="320" rx="10" ry="14" fill="#A08050"/>
                    {/* content lines */}
                    <text x="160" y="100" textAnchor="middle" fontFamily="Georgia,serif" fontSize="22" fontWeight="bold" fill="#7C5C3E">Desa Sejahtera</text>
                    <line x1="50" y1="110" x2="270" y2="110" stroke="#C8A84B" strokeWidth="1.5"/>
                    {/* fake text lines */}
                    {[130,148,166,184,202,220,238].map((y, i) => (
                      <rect key={y} x={50 + (i % 3) * 5} y={y} width={200 - (i % 4) * 20} height="7" rx="3" fill="#D4C0A0" opacity="0.5"/>
                    ))}
                    {/* seal */}
                    <circle cx="160" cy="278" r="28" fill="none" stroke="#C8A84B" strokeWidth="2" strokeDasharray="4,3"/>
                    <circle cx="160" cy="278" r="20" fill="#FEF3C7" stroke="#C8A84B" strokeWidth="1"/>
                    <text x="160" y="282" textAnchor="middle" fontFamily="Georgia,serif" fontSize="16" fill="#7C5C3E">🌾</text>
                  </svg>

                  {/* floating year chips */}
                  <div className="absolute -left-8 top-20 bg-white rounded-2xl shadow-lg px-3 py-2 text-xs font-bold border border-amber-100"
                    style={{ color: "#7C5C3E", animation: "float 4s ease-in-out infinite" }}>
                    📅 Sejak 1920
                  </div>
                  <div className="absolute -right-6 bottom-24 bg-white rounded-2xl shadow-lg px-3 py-2 text-xs font-bold border border-blue-100"
                    style={{ color: "#2563EB", animation: "float 5s ease-in-out infinite", animationDelay: "1s" }}>
                    ✨ 100+ Tahun
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* wave */}
          <div className="-mb-px overflow-hidden" style={{ lineHeight: 0 }}>
            <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: 60, display: "block", width: "100%" }}>
              <path d="M0,20 C360,60 1080,0 1440,40 L1440,60 L0,60 Z" fill="#FAF6EE"/>
            </svg>
          </div>
        </section>

        {/* ══════════════════════════════════════
            ASAL USUL
        ══════════════════════════════════════ */}
        <section style={{ background: "#FAF6EE" }} className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <SectionLabel icon="🌿" text="Asal Usul" />

            <div className="grid lg:grid-cols-3 gap-6">
              {/* main text */}
              <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-amber-100 shadow-sm">
                <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "#2D2416" }}>
                  Kisah di Balik Nama "Sejahtera"
                </h2>
                <div className="space-y-4 text-stone-500 leading-relaxed text-sm">
                  <p>
                    Nama <strong className="text-stone-700">"Sejahtera"</strong> bukan sekadar kata — ia adalah doa dan harapan yang dipanjatkan para pendiri desa. Dikisahkan, pada tahun 1920-an, sekelompok perantau yang datang dari daerah Banyumas dan sekitarnya menemukan lahan subur di tepi Sungai Makmur yang belum berpenghuni.
                  </p>
                  <p>
                    Mereka membuka hutan, membangun rumah panggung sederhana, dan mulai mengolah tanah merah yang kaya humus. Dipimpin oleh seorang sesepuh bernama <strong className="text-stone-700">Mbah Karjo</strong>, mereka bersepakat memberi nama perkampungan baru itu dengan sebuah kata penuh makna: <em>"Sejahtera"</em>.
                  </p>
                  <p>
                    "Supaya anak cucu kita hidup berkecukupan, rukun, dan tenteram," — begitu kata-kata Mbah Karjo yang hingga kini masih diingat oleh warga tua desa.
                  </p>
                </div>
              </div>

              {/* side facts */}
              <div className="flex flex-col gap-4">
                {[
                  { icon: "📍", label: "Lokasi Awal", val: "Tepi Sungai Makmur, Dusun Mekar" },
                  { icon: "👨‍👩‍👧‍👦", label: "Perintis", val: "±25 keluarga dari Banyumas & sekitarnya" },
                  { icon: "🌾", label: "Komoditas Awal", val: "Padi gogo & singkong" },
                  { icon: "📅", label: "Resmi Berdiri", val: "Sekitar tahun 1920-an" },
                ].map(f => (
                  <div key={f.label} className="bg-white rounded-2xl p-4 border border-amber-100 shadow-sm flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: "#F5EDD6" }}>
                      {f.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#A0795A" }}>{f.label}</p>
                      <p className="font-semibold text-sm text-stone-700">{f.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            TIMELINE
        ══════════════════════════════════════ */}
        <section className="py-20" style={{ background: "linear-gradient(180deg,#FAF6EE 0%,#F5EDD6 100%)" }}>
          <div className="max-w-5xl mx-auto px-6">
            <SectionLabel icon="📅" text="Linimasa Sejarah" />
            <h2 className="font-display text-3xl font-bold mb-12" style={{ color: "#2D2416" }}>
              Perjalanan Waktu Desa Sejahtera
            </h2>

            {/* desktop: zig-zag timeline */}
            <div className="hidden md:block relative">
              {/* center line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-px"
                style={{ background: "linear-gradient(180deg,#C8A84B,#8DB87A)" }} />

              <div className="space-y-10">
                {TIMELINE.map((item, i) => (
                  <div key={item.tahun}
                    className={`relative flex items-center gap-0 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>

                    {/* card */}
                    <div className={`w-[46%] ${i % 2 === 0 ? "pr-10" : "pl-10"}`}>
                      <div
                        className={`timeline-card rounded-3xl p-6 border ${activeIdx === i ? "active" : ""}`}
                        style={{ background: item.bg, borderColor: item.warna + "30" }}
                        onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm"
                            style={{ background: item.warna + "20" }}>
                            {item.emoji}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: item.warna }}>{item.era}</span>
                            <h3 className="font-bold text-sm mt-0.5 leading-snug" style={{ color: "#2D2416" }}>{item.judul}</h3>
                            {activeIdx === i && (
                              <p className="text-stone-500 text-xs leading-relaxed mt-3">{item.isi}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* center dot + year */}
                    <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10">
                      <div className="w-10 h-10 rounded-full border-4 border-white flex items-center justify-center shadow-md"
                        style={{ background: item.warna }}>
                        <span className="text-white text-[10px] font-black">{item.tahun.slice(2)}</span>
                      </div>
                      <span className="text-xs font-black" style={{ color: item.warna }}>{item.tahun}</span>
                    </div>

                    {/* spacer opposite side */}
                    <div className="w-[46%]" />
                  </div>
                ))}
              </div>
            </div>

            {/* mobile: vertical stack */}
            <div className="md:hidden space-y-4">
              {TIMELINE.map((item, i) => (
                <div key={item.tahun}
                  className="timeline-card rounded-2xl border overflow-hidden"
                  style={{ background: item.bg, borderColor: item.warna + "30" }}
                  onClick={() => setActiveIdx(activeIdx === i ? null : i)}>

                  <div className="flex items-center gap-4 p-5">
                    {/* year pill */}
                    <div className="w-14 h-14 rounded-2xl flex flex-col items-center justify-center flex-shrink-0 text-white"
                      style={{ background: item.warna }}>
                      <span className="text-lg">{item.emoji}</span>
                      <span className="text-[10px] font-black">{item.tahun}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-bold uppercase tracking-wide" style={{ color: item.warna }}>{item.era}</span>
                      <h3 className="font-bold text-sm leading-snug mt-0.5" style={{ color: "#2D2416" }}>{item.judul}</h3>
                    </div>
                    <span className="text-stone-400 text-lg">{activeIdx === i ? "▲" : "▼"}</span>
                  </div>

                  {activeIdx === i && (
                    <div className="px-5 pb-5">
                      <p className="text-stone-500 text-sm leading-relaxed border-t border-stone-200 pt-4">{item.isi}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="text-center text-stone-400 text-sm mt-10">
              💡 Klik kartu untuk membaca keterangan lengkap
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════
            VISI MISI
        ══════════════════════════════════════ */}
        <section style={{ background: "#FAF6EE" }} className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <SectionLabel icon="🎯" text="Arah & Tujuan" />

            <div className="grid lg:grid-cols-2 gap-8">

              {/* Visi */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,#7C5C3E,#A0795A,#C8A84B)" }} />
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: "radial-gradient(circle,rgba(255,255,255,0.8) 1px,transparent 1px)", backgroundSize: "20px 20px" }} />
                <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full opacity-10 bg-white" />
                <div className="relative z-10 p-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl mb-5">🌟</div>
                  <h3 className="font-display text-white text-xl font-bold mb-4">Visi Desa</h3>
                  <p className="text-amber-100 leading-relaxed text-sm italic">
                    "{VISI_MISI.visi}"
                  </p>
                </div>
              </div>

              {/* Misi */}
              <div className="bg-white rounded-3xl p-8 border border-amber-100 shadow-sm">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5"
                  style={{ background: "#F5EDD6" }}>
                  📌
                </div>
                <h3 className="font-display text-xl font-bold mb-5" style={{ color: "#2D2416" }}>Misi Desa</h3>
                <ul className="space-y-3">
                  {VISI_MISI.misi.map((m, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-base mt-0.5 flex-shrink-0">{m.icon}</span>
                      <span className="text-stone-500 text-sm leading-relaxed">{m.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            TOKOH SEJARAH
        ══════════════════════════════════════ */}
        <section className="py-20" style={{ background: "#F5EDD6" }}>
          <div className="max-w-5xl mx-auto px-6">
            <SectionLabel icon="🏅" text="Tokoh Bersejarah" />
            <h2 className="font-display text-3xl font-bold mb-12" style={{ color: "#2D2416" }}>
              Mereka yang Membentuk Desa
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {TOKOH.map((t, i) => (
                <div key={t.nama}
                  className="tokoh-card bg-white rounded-3xl overflow-hidden border border-amber-100 shadow-sm"
                  style={{ animationDelay: `${i * 0.1}s` }}>

                  {/* top colored bar */}
                  <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg,#C8A84B,#7C5C3E)` }} />

                  <div className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl shadow-inner"
                      style={{ background: "#F5EDD6" }}>
                      {t.emoji}
                    </div>
                    <h3 className="font-bold text-sm" style={{ color: "#2D2416" }}>{t.nama}</h3>
                    <p className="text-xs font-semibold mt-1" style={{ color: "#C8A84B" }}>{t.peran}</p>
                    <p className="text-xs text-stone-400 mt-0.5 mb-3">({t.tahun})</p>
                    <div className="w-8 h-px mx-auto mb-3" style={{ background: "#EDD9B0" }} />
                    <p className="text-stone-400 text-xs leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            CTA BOTTOM
        ══════════════════════════════════════ */}
        <section style={{ background: "#FAF6EE" }} className="py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="text-4xl mb-4">🌾</div>
            <h2 className="font-display text-2xl font-bold mb-3" style={{ color: "#2D2416" }}>
              Bangga Menjadi Bagian dari Sejarah
            </h2>
            <p className="text-stone-400 text-sm mb-8 leading-relaxed">
              Sejarah desa bukan hanya milik masa lalu — hari ini, kita semua sedang menuliskan halaman barunya bersama-sama.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="px-6 py-3 rounded-full text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg,#7C5C3E,#A0795A)" }}>
                ↑ Kembali ke Atas
              </button>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}