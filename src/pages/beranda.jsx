import { useEffect, useRef } from "react";

// ── GANTI FOTO HERO DI SINI ──────────────────────────────────
const HERO_BG = ""; // contoh: "/foto/hero-desa.jpg"

import hukumTua      from "../assets/hukum-tua.jpg";
import sekertaris    from "../assets/sekertaris_desa.jpg";
import keuangan      from "../assets/Kaur-keuangan.jpg";
import Perencanaan   from "../assets/Kaur-perencanaan.jpg";
import umum          from "../assets/kaur-umum.jpg";
import pemerintahan  from "../assets/kasie-pemerintahan.jpg";
import kesejahteraan from "../assets/kasie-kesejahteraan.jpg";
import pelayanan     from "../assets/kasie-pelayanan.jpg";

import foto1  from "../assets/image1.png";
import foto2  from "../assets/image2.png";
import foto3  from "../assets/image3.png";
import foto4  from "../assets/image4.png";
import foto5  from "../assets/image5.png";
import foto6  from "../assets/image6.png";
import foto7  from "../assets/image7.png";
import foto8  from "../assets/image8.png";
import foto9  from "../assets/image9.png";
import foto10 from "../assets/image10.png";
import foto11 from "../assets/image11.png";
import foto12 from "../assets/image12.png";
import foto13 from "../assets/image13.png";
import foto14 from "../assets/image14.png";

import jagung from "../assets/jagung.png";
import padi   from "../assets/padi.png";
import kelapa from "../assets/kelapa.png";

// ── DATA ────────────────────────────────────────────────────
const PERANGKAT = [
  { jabatan: "Hukum Tua",              nama: "FESNA F. Y. ASSA",         foto: hukumTua,      utama: true },
  { jabatan: "Sekretaris Desa",        nama: "NELDY LAPIAN",             foto: sekertaris     },
  { jabatan: "Kaur Keuangan",          nama: "PINGKAN V. NAYOAN",        foto: keuangan       },
  { jabatan: "Kaur Perencanaan",       nama: "JACKLIEN KOMALING",        foto: Perencanaan    },
  { jabatan: "Kaur Umum & Tata Usaha", nama: "TESALONIKA A. WALALANGI",  foto: umum           },
  { jabatan: "Kasie Pemerintahan",     nama: "DONNY MAMESAH, SE",        foto: pemerintahan   },
  { jabatan: "Kasie Kesejahteraan",    nama: "ELSAFIA TIMBONGOL",        foto: kesejahteraan  },
  { jabatan: "Kasie Pelayanan",        nama: "AFNNY M. D. KIMBAL",       foto: pelayanan      },
];

const GALERI = [
  { id:1,  src:foto1,  label:"Foto Kegiatan 1"  },
  { id:2,  src:foto2,  label:"Foto Kegiatan 2"  },
  { id:3,  src:foto3,  label:"Foto Kegiatan 3"  },
  { id:4,  src:foto4,  label:"Foto Kegiatan 4"  },
  { id:5,  src:foto5,  label:"Foto Kegiatan 5"  },
  { id:6,  src:foto6,  label:"Foto Kegiatan 6"  },
  { id:7,  src:foto7,  label:"Foto Kegiatan 7"  },
  { id:8,  src:foto8,  label:"Foto Kegiatan 8"  },
  { id:9,  src:foto9,  label:"Foto Kegiatan 9"  },
  { id:10, src:foto10, label:"Foto Kegiatan 10" },
  { id:11, src:foto11, label:"Foto Kegiatan 11" },
  { id:12, src:foto12, label:"Foto Kegiatan 12" },
  { id:13, src:foto13, label:"Foto Kegiatan 13" },
  { id:14, src:foto14, label:"Foto Kegiatan 14" },
];

const POTENSI = [
  { label:"Padi",   src:padi,   emoji:"🌾", desc:"Komoditas utama pertanian Desa Tumani yang menjadi sumber penghidupan warga." },
  { label:"Jagung", src:jagung, emoji:"🌽", desc:"Tanaman palawija unggulan dengan hasil panen melimpah setiap musim." },
  { label:"Kelapa", src:kelapa, emoji:"🥥", desc:"Perkebunan kelapa tersebar luas, menjadi komoditas ekspor andalan desa." },
];

const STATS = [
  { icon:"📐", label:"Luas Wilayah",     value:"1,4 km²"  },
  { icon:"🗺️", label:"Luas Tumani Raya", value:"2.144 ha" },
  { icon:"📅", label:"Tahun Berdiri",    value:"1895"     },
  { icon:"🏘️", label:"Jaga",             value:"4 Jaga"   },
];

// ── SCROLL REVEAL HOOK ───────────────────────────────────────
/**
 * Gunakan hook ini untuk membuat elemen muncul pelan saat scroll.
 * variant: "up" | "left" | "right" | "fade"
 * delay: angka dalam ms (opsional, untuk stagger)
 */
function useReveal(options = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          obs.disconnect();
        }
      },
      { threshold: options.threshold ?? 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ── REVEAL WRAPPER COMPONENT ─────────────────────────────────
function Reveal({ children, variant = "up", delay = 0, className = "" }) {
  const ref = useReveal();
  const variants = {
    up:    "opacity-0 translate-y-10",
    left:  "opacity-0 -translate-x-10",
    right: "opacity-0 translate-x-10",
    fade:  "opacity-0",
    scale: "opacity-0 scale-95",
  };
  return (
    <div
      ref={ref}
      className={`reveal-base ${variants[variant]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ── FOTO HELPERS ─────────────────────────────────────────────
function FotoPlaceholder({ label, className = "", style = {} }) {
  return (
    <div className={`flex flex-col items-center justify-center bg-stone-100 border-2 border-dashed border-stone-300 text-stone-400 ${className}`} style={style}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <path d="M21 15l-5-5L5 21"/>
      </svg>
      <p className="text-xs mt-1.5 text-center px-2 font-medium">{label}</p>
    </div>
  );
}

function Foto({ src, label, className = "", imgClass = "", style = {} }) {
  if (src) return <img src={src} alt={label} className={`object-cover ${className} ${imgClass}`} style={style} />;
  return <FotoPlaceholder label={label} className={className} style={style} />;
}

// ── SECTION HEADER ───────────────────────────────────────────
function SectionHeader({ title, sub }) {
  return (
    <Reveal variant="up" className="text-center mb-10">
      <h2 style={{ fontFamily:"'Playfair Display',Georgia,serif", color:"#1a3a2a", fontSize:"clamp(1.6rem,3vw,2.2rem)", fontWeight:700 }}>
        {title}
      </h2>
      {sub && <p className="text-stone-500 text-sm mt-2 max-w-xl mx-auto">{sub}</p>}
      <div className="mx-auto mt-4 w-14 h-0.5 rounded" style={{ background:"linear-gradient(90deg,#1a3a2a,#C8A84B)" }} />
    </Reveal>
  );
}

// ── MAIN COMPONENT ───────────────────────────────────────────
export default function Beranda({ setPage }) {
  const nav = (id) => { setPage(id); window.scrollTo({ top:0, behavior:"smooth" }); };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        .font-display { font-family:'Playfair Display',Georgia,serif; }
        .font-body    { font-family:'Plus Jakarta Sans',sans-serif; }
        section { scroll-margin-top:64px; }

        /* ── SCROLL REVEAL BASE ── */
        .reveal-base {
          transition:
            opacity 0.65s cubic-bezier(0.22,1,0.36,1),
            transform 0.65s cubic-bezier(0.22,1,0.36,1);
          will-change: opacity, transform;
        }
        .reveal-base.revealed {
          opacity: 1 !important;
          transform: none !important;
        }

        /* Tailwind opacity/translate utilities needed */
        .opacity-0   { opacity: 0; }
        .translate-y-10  { transform: translateY(40px); }
        .-translate-x-10 { transform: translateX(-40px); }
        .translate-x-10  { transform: translateX(40px); }
        .scale-95    { transform: scale(0.95); }

        /* hover effects */
        .card-lift { transition: transform 0.22s ease, box-shadow 0.22s ease; }
        .card-lift:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(26,58,42,0.10); }
        .img-zoom { overflow: hidden; }
        .img-zoom img { transition: transform 0.4s ease; }
        .img-zoom:hover img { transform: scale(1.06); }
      `}</style>

      <div className="font-body bg-white text-stone-800">

        {/* ══════════════════════
            1. HERO
        ══════════════════════ */}
        <section className="relative flex items-center justify-center min-h-[85vh] overflow-hidden"
          style={{
            background: HERO_BG
              ? `url(${HERO_BG}) center/cover no-repeat`
              : "linear-gradient(160deg,#1a3a2a 0%,#2d5a3d 45%,#4a7c55 100%)",
          }}>
          <div className="absolute inset-0" style={{ background:"rgba(10,30,18,0.50)" }} />

          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <div className="mx-auto mb-6 w-20 h-20 rounded-full border-4 border-white/30 flex items-center justify-center bg-white/10 backdrop-blur text-4xl shadow-lg"
              style={{ animation:"heroFadeIn 0.7s ease both" }}>
              🏡
            </div>
            <p className="text-amber-300 font-semibold text-xs uppercase tracking-[0.25em] mb-3"
              style={{ animation:"heroFadeIn 0.7s 0.1s ease both" }}>
              Website Resmi
            </p>
            <h1 className="font-display text-white leading-tight mb-4"
              style={{ fontSize:"clamp(2.4rem,6vw,4rem)", textShadow:"0 2px 12px rgba(0,0,0,.4)", animation:"heroSlideUp 0.8s 0.15s ease both" }}>
              Selamat Datang di<br />
              <span style={{ color:"#F5C842" }}>Desa Tumani</span>
            </h1>
            <p className="text-white/75 text-sm leading-relaxed mb-8 max-w-lg mx-auto"
              style={{ animation:"heroSlideUp 0.8s 0.25s ease both" }}>
              Kecamatan Maesaan · Kabupaten Minahasa Selatan · Provinsi Sulawesi Utara
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8"
              style={{ animation:"heroSlideUp 0.8s 0.35s ease both" }}>
              {STATS.map(s => (
                <div key={s.label} className="bg-white/15 backdrop-blur border border-white/20 rounded-full px-4 py-2 text-white text-xs font-semibold">
                  {s.icon} <span className="text-amber-300 font-bold">{s.value}</span> {s.label}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 justify-center"
              style={{ animation:"heroSlideUp 0.8s 0.45s ease both" }}>
              <button onClick={() => nav("kontak")}
                className="px-7 py-3 rounded-full font-bold text-sm text-stone-900 shadow-lg transition hover:brightness-110 hover:-translate-y-0.5"
                style={{ background:"#F5C842" }}>
                💬 Hubungi Kami
              </button>
              <button onClick={() => nav("sejarah")}
                className="px-7 py-3 rounded-full font-bold text-sm text-white border-2 border-white/50 transition hover:bg-white/10">
                📖 Pelajari Desa
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
            <svg viewBox="0 0 1440 48" preserveAspectRatio="none" style={{ display:"block", height:48 }}>
              <path d="M0,32 C480,0 960,48 1440,16 L1440,48 L0,48 Z" fill="#ffffff"/>
            </svg>
          </div>

          <style>{`
            @keyframes heroFadeIn {
              from { opacity:0; } to { opacity:1; }
            }
            @keyframes heroSlideUp {
              from { opacity:0; transform:translateY(28px); }
              to   { opacity:1; transform:translateY(0); }
            }
          `}</style>
        </section>

        {/* ══════════════════════
            2. WILAYAH & DEMOGRAFI
        ══════════════════════ */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <SectionHeader title="Wilayah & Demografi" sub="Data wilayah dan kependudukan Desa Tumani" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon:"🗺️", label:"Luas Wilayah",   value:"140 Ha",  warna:"#1a3a2a", bg:"#ECFDF5" },
                { icon:"👥", label:"Total Penduduk",  value:"1.029",   warna:"#1d4ed8", bg:"#EFF6FF" },
                { icon:"🏘️", label:"Area Pemukiman",  value:"7,2 Ha",  warna:"#92400e", bg:"#FEF3C7" },
                { icon:"🌾", label:"Area Pertanian",  value:"25 Ha",   warna:"#065f46", bg:"#D1FAE5" },
              ].map((s, i) => (
                <Reveal key={s.label} variant="up" delay={i * 80}>
                  <div className="card-lift rounded-2xl border border-stone-100 shadow-sm p-6 text-center"
                    style={{ background:s.bg }}>
                    <div className="text-3xl mb-3">{s.icon}</div>
                    <div className="font-black text-2xl md:text-3xl leading-none mb-1"
                      style={{ fontFamily:"'Playfair Display',Georgia,serif", color:s.warna }}>
                      {s.value}
                    </div>
                    <div className="text-stone-500 text-xs font-medium uppercase tracking-wide mt-1">{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal variant="up" delay={100} className="mt-8">
              <div className="bg-stone-50 rounded-2xl border border-stone-100 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">Batas Wilayah</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { arah:"⬆️ Utara",   ket:"Tumani Utara"   },
                    { arah:"➡️ Timur",   ket:"—"              },
                    { arah:"⬇️ Selatan", ket:"Tumani Selatan" },
                    { arah:"⬅️ Barat",   ket:"Lowian"         },
                  ].map(b => (
                    <div key={b.arah} className="bg-white rounded-xl p-3 border border-stone-100 text-center text-sm">
                      <p className="text-stone-400 text-xs font-semibold">{b.arah}</p>
                      <p className="font-bold text-stone-700 mt-0.5">{b.ket}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════
            3. SEJARAH
        ══════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <SectionHeader title="Sejarah Desa Tumani" />
            <div className="grid lg:grid-cols-2 gap-12 items-start">

              <Reveal variant="left">
                <div className="text-stone-600 text-sm leading-relaxed space-y-4">
                  <p>Desa Tumani dibentuk sekitar tahun <strong className="text-stone-800">1895</strong>. Nama <em>"Tumani"</em> berasal dari kata <strong className="text-stone-800">"ditanamkan"</strong> atau <strong className="text-stone-800">"patok"</strong>, mencerminkan sejarah penanaman batas wilayah.</p>
                  <p>Tujuh kepala keluarga dari berbagai suku, termasuk dari Poopo Minahasa dan Poopo Bolaang Mongondow, menjadi cikal bakal desa ini. Mereka merombak hutan menjadi lahan pertanian yang berkembang menjadi kampung seperti <em>Kinamang</em>, <em>Siladang</em>, dan <em>Pinaesaan</em>.</p>
                  <p>Pemekaran desa terjadi pada masa <strong className="text-stone-800">M.M. Tewal</strong>, membagi wilayah menjadi Tumani, Tumani Selatan, dan Tumani Utara. Infrastruktur desa mulai berkembang dengan pengaspalan jalan pada tahun <strong className="text-stone-800">1984</strong>.</p>
                  <button onClick={() => nav("sejarah")}
                    className="inline-flex items-center gap-2 mt-2 font-semibold text-sm px-5 py-2.5 rounded-lg border-2 transition hover:bg-stone-800 hover:text-white"
                    style={{ borderColor:"#1a3a2a", color:"#1a3a2a" }}>
                    Baca Selengkapnya →
                  </button>
                </div>
              </Reveal>

              <Reveal variant="right">
                <div className="space-y-3">
                  {[
                    { tahun:"1895",           ket:"Desa Tumani dibentuk oleh 7 kepala keluarga pionir" },
                    { tahun:"Awal 1900",      ket:"Pejabat Hukum Tua pertama mulai menjabat" },
                    { tahun:"1984",           ket:"Pengaspalan jalan pertama di desa" },
                    { tahun:"Era M.M. Tewal", ket:"Pemekaran menjadi Tumani, Tumani Selatan & Tumani Utara" },
                    { tahun:"Kini",           ket:"Dipimpin Pjb. Hukum Tua Fesna F. Y. Assa" },
                  ].map((t, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-28 text-right">
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                          style={{ background:"#ecf5ee", color:"#1a3a2a" }}>{t.tahun}</span>
                      </div>
                      <div className="flex-shrink-0 flex flex-col items-center pt-1">
                        <div className="w-2.5 h-2.5 rounded-full border-2" style={{ borderColor:"#1a3a2a", background:"#fff" }} />
                        {i < 4 && <div className="w-0.5 flex-1 mt-1" style={{ background:"#c6dbc9", minHeight:24 }} />}
                      </div>
                      <p className="text-sm text-stone-500 leading-snug pt-0.5">{t.ket}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══════════════════════
            4. STRUKTUR
        ══════════════════════ */}
        <section className="py-20" style={{ background:"#F8F5EF" }}>
          <div className="max-w-5xl mx-auto px-6">
            <SectionHeader title="Struktur Pemerintahan" sub="Susunan Perangkat Desa Tumani Periode 2021–2027" />

            {/* Hukum Tua */}
            <Reveal variant="up">
              <div className="flex justify-center mb-6">
                <div className="card-lift bg-white rounded-2xl shadow-sm border border-amber-200 overflow-hidden w-52 text-center">
                  <div className="h-1.5" style={{ background:"linear-gradient(90deg,#1a3a2a,#C8A84B)" }} />
                  <div className="p-5">
                    <Foto src={PERANGKAT[0].foto} label="Foto Hukum Tua"
                      className="w-20 h-20 rounded-full mx-auto mb-3 border-4 border-amber-100"
                      imgClass="w-20 h-20 rounded-full" />
                    <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-2"
                      style={{ background:"#FEF3C7", color:"#92400E" }}>
                      {PERANGKAT[0].jabatan}
                    </span>
                    <p className="font-bold text-stone-800 text-sm">{PERANGKAT[0].nama}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* connector */}
            <div className="flex justify-center mb-6">
              <div className="w-0.5 h-8" style={{ background:"#c6dbc9" }} />
            </div>

            {/* Sekdes */}
            <Reveal variant="up" delay={80}>
              <div className="flex justify-center mb-8">
                <div className="card-lift bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden w-48 text-center">
                  <div className="p-5">
                    <Foto src={PERANGKAT[1].foto} label="Foto Sekdes"
                      className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-stone-100"
                      imgClass="w-16 h-16 rounded-full" />
                    <p className="text-xs font-semibold" style={{ color:"#1a3a2a" }}>{PERANGKAT[1].jabatan}</p>
                    <p className="font-bold text-stone-800 text-xs mt-0.5">{PERANGKAT[1].nama}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Kaur & Kasi */}
            <div className="grid md:grid-cols-2 gap-6">
              <Reveal variant="left" delay={100}>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-4 text-center" style={{ color:"#1a3a2a" }}>
                    Kepala Urusan (Kaur)
                  </p>
                  <div className="space-y-3">
                    {PERANGKAT.slice(2,5).map((p,i) => (
                      <div key={i} className="card-lift bg-white rounded-xl border border-stone-100 shadow-sm p-4 flex items-center gap-4">
                        <Foto src={p.foto} label={`Foto ${p.jabatan}`}
                          className="w-12 h-12 rounded-full flex-shrink-0 border-2 border-stone-100"
                          imgClass="w-12 h-12 rounded-full" />
                        <div>
                          <p className="text-xs font-semibold" style={{ color:"#1a3a2a" }}>{p.jabatan}</p>
                          <p className="font-bold text-stone-800 text-sm">{p.nama}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal variant="right" delay={100}>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-4 text-center" style={{ color:"#1d4ed8" }}>
                    Kepala Seksi (Kasi)
                  </p>
                  <div className="space-y-3">
                    {PERANGKAT.slice(5).map((p,i) => (
                      <div key={i} className="card-lift bg-white rounded-xl border border-stone-100 shadow-sm p-4 flex items-center gap-4">
                        <Foto src={p.foto} label={`Foto ${p.jabatan}`}
                          className="w-12 h-12 rounded-full flex-shrink-0 border-2 border-blue-100"
                          imgClass="w-12 h-12 rounded-full" />
                        <div>
                          <p className="text-xs font-semibold text-blue-600">{p.jabatan}</p>
                          <p className="font-bold text-stone-800 text-sm">{p.nama}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal variant="up" delay={150} className="text-center mt-8">
              <button onClick={() => nav("struktur")}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm text-white transition hover:brightness-110"
                style={{ background:"#1a3a2a" }}>
                Lihat Struktur Lengkap →
              </button>
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════
            5. GALERI
        ══════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader title="Galeri Kegiatan" sub="Dokumentasi kegiatan dan kehidupan masyarakat Desa Tumani" />

            <Reveal variant="up">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {GALERI.slice(0,10).map((g,i) => (
                  <div key={g.id} className="img-zoom rounded-xl overflow-hidden shadow-sm"
                    style={{ aspectRatio:"1/1", transitionDelay:`${i*30}ms` }}>
                    <Foto src={g.src} label={g.label}
                      className="w-full h-full"
                      imgClass="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3 max-w-2xl mx-auto">
                {GALERI.slice(10).map((g,i) => (
                  <div key={g.id} className="img-zoom rounded-xl overflow-hidden shadow-sm"
                    style={{ aspectRatio:"1/1" }}>
                    <Foto src={g.src} label={g.label}
                      className="w-full h-full"
                      imgClass="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal variant="up" delay={100} className="text-center mt-8">
              <button onClick={() => nav("galeri")}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm border-2 transition hover:bg-stone-800 hover:text-white"
                style={{ borderColor:"#1a3a2a", color:"#1a3a2a" }}>
                Lihat Semua Galeri →
              </button>
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════
            6. POTENSI DESA
        ══════════════════════ */}
        <section className="py-20" style={{ background:"#F8F5EF" }}>
          <div className="max-w-5xl mx-auto px-6">
            <SectionHeader title="Potensi Desa" sub="Komoditas unggulan dan sumber daya alam Desa Tumani" />
            <div className="grid md:grid-cols-3 gap-6">
              {POTENSI.map((p,i) => (
                <Reveal key={p.label} variant="up" delay={i * 100}>
                  <div className="card-lift bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100">
                    <div className="img-zoom" style={{ height:192 }}>
                      <Foto src={p.src} label={`Foto ${p.label}`}
                        className="w-full h-48"
                        imgClass="w-full h-48 object-cover" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{p.emoji}</span>
                        <h3 className="font-bold text-stone-800">{p.label}</h3>
                      </div>
                      <p className="text-stone-500 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════
            7. KONTAK & LOKASI
        ══════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <SectionHeader title="Kontak & Lokasi" />
            <div className="grid lg:grid-cols-2 gap-10">

              {/* info */}
              <Reveal variant="left">
                <div className="space-y-5">
                  {[
                    {
                      icon:"📍", title:"Alamat Kantor Desa",
                      content: <p className="text-stone-600 text-sm leading-relaxed">
                        Jl. Amurang – Kotamobagu, Jaga IV,<br/>
                        Desa Tumani, Kecamatan Maesaan,<br/>
                        Kabupaten Minahasa Selatan,<br/>Sulawesi Utara
                      </p>
                    },
                    {
                      icon:"🕐", title:"Jam Pelayanan",
                      content: <div className="text-sm text-stone-600 space-y-1.5">
                        <p>🟢 <strong>Senin – Kamis:</strong> 08.00 – 15.00 WITA</p>
                        <p>🟡 <strong>Jumat:</strong> 08.00 – 11.30 WITA</p>
                        <p>🔴 <strong>Sabtu & Minggu:</strong> Libur</p>
                      </div>
                    },
                  ].map(c => (
                    <div key={c.title} className="bg-stone-50 rounded-2xl border border-stone-100 p-6">
                      <h3 className="font-bold text-stone-800 mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                          style={{ background:"#ECFDF5" }}>{c.icon}</span>
                        {c.title}
                      </h3>
                      {c.content}
                    </div>
                  ))}
                  <button onClick={() => nav("kontak")}
                    className="w-full py-3 rounded-xl font-bold text-sm text-white transition hover:brightness-110"
                    style={{ background:"linear-gradient(135deg,#1a3a2a,#2d5a3d)" }}>
                    💬 Hubungi Kami Sekarang
                  </button>
                </div>
              </Reveal>

              {/* peta */}
              <Reveal variant="right">
                <div className="flex flex-col gap-4 h-full">
                  <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm flex-1" style={{ minHeight:360 }}>
                    <iframe
                      title="Lokasi Desa Tumani"
                      src="https://maps.google.com/maps?q=Tumani,+Maesaan,+Minahasa+Selatan,+Sulawesi+Utara&z=15&output=embed"
                      width="100%" height="100%"
                      style={{ border:0, minHeight:360 }}
                      allowFullScreen loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <a href="https://www.google.com/maps/place/Tumani,+Maesaan,+South+Minahasa+Regency,+North+Sulawesi/@0.901337,124.471504,15z"
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm border-2 transition hover:bg-stone-800 hover:text-white"
                    style={{ borderColor:"#1a3a2a", color:"#1a3a2a" }}>
                    🗺️ Buka di Google Maps
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}