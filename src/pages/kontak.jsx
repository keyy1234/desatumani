import { useState } from "react";

/* ─────────────────────────────────────────────────────────────
   Ganti NOMOR_WA dengan nomor WhatsApp Hukum Tua yang sebenarnya
   Format: kode negara tanpa + (62 untuk Indonesia)
   Contoh: 628123456789
───────────────────────────────────────────────────────────── */
const NOMOR_WA     = "6281234567890"; // ← GANTI NOMOR INI
const NAMA_HT      = "Andrew Kawengian, S.Pd";
const JABATAN_HT   = "Hukum Tua Desa Tumani";

const KONTAK_INFO = [
  { icon: "📍", label: "Alamat Kantor",    value: "Jl. Desa Tumani No. 1, Kec. Maesaan, Kab. Minahasa Selatan, Sulawesi Utara" },
  { icon: "📞", label: "Telepon Kantor",   value: "(0431) 123-4567" },
  { icon: "✉️", label: "Email Resmi",      value: "desatumani.maesaan@gmail.com" },
  { icon: "🌐", label: "Website",          value: "www.desatumani.id" },
  { icon: "🕐", label: "Jam Pelayanan",    value: "Senin – Jumat: 08.00 – 15.00 WITA" },
];

const SOSMED = [
  { icon: "📘", label: "Facebook",  url: "https://facebook.com", color: "#1877F2", bg: "#EFF6FF" },
  { icon: "📸", label: "Instagram", url: "https://instagram.com", color: "#E1306C", bg: "#FFF0F5" },
  { icon: "▶️", label: "YouTube",   url: "https://youtube.com",  color: "#FF0000", bg: "#FFF5F5" },
];

const PERANGKAT_KONTAK = [
  { nama: "Andrew Kawengian, S.Pd", jabatan: "Hukum Tua",        wa: NOMOR_WA,      icon: "👑" },
  { nama: "Marlyn Sondakh, S.E",    jabatan: "Sekretaris Desa",  wa: "6281111111111", icon: "📋" },
  { nama: "Benny Tumimomor",        jabatan: "Kasi Pemerintahan",wa: "6282222222222", icon: "🏛️" },
  { nama: "Grace Masengi",          jabatan: "Kasi Kesejahteraan",wa: "6283333333333", icon: "🤝" },
];

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

export default function Kontak() {
  const [form, setForm]       = useState({ nama: "", telepon: "", subjek: "", pesan: "" });
  const [terkirim, setTerkirim] = useState(false);
  const [loading, setLoading]   = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nama || !form.pesan) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setTerkirim(true);
      setForm({ nama: "", telepon: "", subjek: "", pesan: "" });
      setTimeout(() => setTerkirim(false), 5000);
    }, 1200);
  };

  // Buka WhatsApp dengan pesan otomatis
  const bukaWA = (nomor, nama, jabatan, pesanCustom) => {
    const pesan = pesanCustom ||
      `Halo ${nama} (${jabatan}), saya ingin berkonsultasi mengenai keperluan desa. Terima kasih 🙏`;
    const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@700;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        .font-display { font-family:'Fraunces',Georgia,serif; }
        .font-body    { font-family:'Plus Jakarta Sans',sans-serif; }
        .card-hover   { transition:transform .22s ease,box-shadow .22s ease; }
        .card-hover:hover { transform:translateY(-3px); box-shadow:0 12px 32px rgba(124,92,62,.1); }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fade-up { animation:fadeUp 0.5s ease both; }
        @keyframes waPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
          50%     { box-shadow: 0 0 0 12px rgba(37,211,102,0); }
        }
        .wa-pulse { animation: waPulse 2s ease-in-out infinite; }
        .input-field {
          width:100%; border:1.5px solid #E7D9C8; border-radius:12px;
          padding:11px 14px; font-size:0.875rem; outline:none;
          background:#FDFAF5; color:#2D2416; transition:border-color .2s,box-shadow .2s;
          font-family:'Plus Jakarta Sans',sans-serif;
        }
        .input-field:focus {
          border-color:#C8A84B; box-shadow:0 0 0 3px rgba(200,168,75,.15);
        }
        .input-field::placeholder { color:#C4B5A0; }
      `}</style>

      <div className="font-body bg-amber-50 text-stone-800">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden py-16 px-6"
          style={{ background: "linear-gradient(150deg,#F5EDD6 0%,#FAF6EE 60%,#ECFDF5 100%)" }}>
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-15"
            style={{ background: "#C8A84B", filter: "blur(80px)" }} />
          <div className="max-w-5xl mx-auto text-center relative fade-up">
            <span className="inline-flex items-center gap-2 border border-amber-300/50 bg-amber-100/60 rounded-full px-4 py-1.5 text-amber-800 text-xs font-bold uppercase tracking-widest mb-5">
              💬 Hubungi Kami
            </span>
            <h1 className="font-display leading-tight mb-4"
              style={{ fontSize: "clamp(2.2rem,5vw,3.5rem)", color: "#2D2416" }}>
              Kami Siap Melayani<br />
              <span style={{ color: "#C8A84B" }}>Dengan Sepenuh Hati</span>
            </h1>
            <p className="text-stone-500 max-w-lg mx-auto text-sm leading-relaxed">
              Sampaikan pertanyaan, aspirasi, atau keperluan administrasi Anda langsung kepada perangkat Desa Tumani.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

          {/* ── WA HUKUM TUA (FEATURED) ── */}
          <section>
            <SectionLabel icon="📱" text="Hubungi Hukum Tua Langsung" />

            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              {/* bg gradient */}
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(135deg,#075E54 0%,#128C7E 50%,#25D366 100%)" }} />
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage:"radial-gradient(circle,rgba(255,255,255,.8) 1px,transparent 1px)", backgroundSize:"24px 24px" }} />
              <div className="absolute -right-10 -top-10 w-56 h-56 rounded-full opacity-10 bg-white" />
              <div className="absolute -left-6 -bottom-6 w-40 h-40 rounded-full opacity-10 bg-white" />

              <div className="relative z-10 p-8 md:flex items-center justify-between gap-8">
                {/* info */}
                <div className="flex items-center gap-5 mb-6 md:mb-0">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 bg-white/20 backdrop-blur">
                    👨‍💼
                  </div>
                  <div>
                    <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">
                      {JABATAN_HT}
                    </p>
                    <p className="text-white font-bold text-lg leading-tight">{NAMA_HT}</p>
                    <p className="text-green-200 text-sm mt-1">Desa Tumani, Kec. Maesaan</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                      <span className="text-green-200 text-xs font-medium">Tersedia via WhatsApp</span>
                    </div>
                  </div>
                </div>

                {/* WA button */}
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => bukaWA(NOMOR_WA, NAMA_HT, JABATAN_HT)}
                    className="wa-pulse flex items-center gap-3 px-7 py-4 rounded-2xl font-bold text-sm transition-all duration-200 hover:scale-105"
                    style={{ background: "#25D366", color: "#fff", boxShadow:"0 4px 20px rgba(37,211,102,.4)" }}>
                    {/* WA Icon SVG */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chat via WhatsApp
                  </button>
                  <button
                    onClick={() => bukaWA(NOMOR_WA, NAMA_HT, JABATAN_HT,
                      `Halo Bapak/Ibu ${NAMA_HT}, saya ingin melaporkan aspirasi masyarakat Desa Tumani. 🙏`)}
                    className="flex items-center justify-center gap-2 px-7 py-3 rounded-2xl font-semibold text-sm border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-200">
                    📝 Sampaikan Aspirasi
                  </button>
                </div>
              </div>
            </div>

            {/* note */}
            <p className="text-center text-stone-400 text-xs mt-3">
              ⏰ Jam respons: Senin–Jumat 08.00–15.00 WITA · Di luar jam kerja akan dibalas sesegera mungkin
            </p>
          </section>

          {/* ── KONTAK PERANGKAT ── */}
          <section>
            <SectionLabel icon="👥" text="Kontak Perangkat Desa" />
            <div className="grid sm:grid-cols-2 gap-4">
              {PERANGKAT_KONTAK.map(p => (
                <div key={p.nama}
                  className="card-hover bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden">
                  <div className="h-1" style={{
                    background: p.jabatan === "Hukum Tua"
                      ? "linear-gradient(90deg,#25D366,#128C7E)"
                      : "linear-gradient(90deg,#C8A84B,#7C5C3E)"
                  }} />
                  <div className="p-5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                        style={{ background: p.jabatan === "Hukum Tua" ? "#DCFCE7" : "#F5EDD6" }}>
                        {p.icon}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-stone-800">{p.nama}</p>
                        <p className="text-xs font-semibold" style={{ color: "#A0795A" }}>{p.jabatan}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => bukaWA(p.wa, p.nama, p.jabatan)}
                      className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
                      style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── INFO + FORM ── */}
          <section className="grid lg:grid-cols-2 gap-10">

            {/* Info kantor */}
            <div>
              <SectionLabel icon="🏢" text="Informasi Kantor" />
              <div className="space-y-3 mb-8">
                {KONTAK_INFO.map(k => (
                  <div key={k.label}
                    className="card-hover bg-white rounded-2xl border border-amber-100 shadow-sm p-4 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: "#F5EDD6" }}>
                      {k.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "#A0795A" }}>{k.label}</p>
                      <p className="font-semibold text-sm text-stone-700 mt-0.5">{k.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sosmed */}
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#7C5C3E" }}>Media Sosial</p>
              <div className="flex gap-3">
                {SOSMED.map(s => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border border-stone-200 bg-white hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                    style={{ color: s.color }}>
                    {s.icon} {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Form pesan */}
            <div>
              <SectionLabel icon="✉️" text="Kirim Pesan" />

              {terkirim && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-5 flex items-center gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="font-bold text-emerald-800 text-sm">Pesan Terkirim!</p>
                    <p className="text-emerald-600 text-xs mt-0.5">Kami akan segera menghubungi Anda. Terima kasih 🙏</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-stone-600 mb-1.5">
                      Nama Lengkap <span className="text-red-400">*</span>
                    </label>
                    <input name="nama" value={form.nama} onChange={handleChange}
                      placeholder="Nama Anda" required className="input-field" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-600 mb-1.5">No. Telepon</label>
                    <input name="telepon" value={form.telepon} onChange={handleChange}
                      placeholder="08xxxxxxxx" type="tel" className="input-field" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-600 mb-1.5">Perihal</label>
                  <input name="subjek" value={form.subjek} onChange={handleChange}
                    placeholder="Topik pesan Anda" className="input-field" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-600 mb-1.5">
                    Pesan <span className="text-red-400">*</span>
                  </label>
                  <textarea name="pesan" value={form.pesan} onChange={handleChange}
                    placeholder="Tuliskan pesan, pertanyaan, atau aspirasi Anda di sini..." rows={5}
                    required className="input-field resize-none" />
                </div>

                <button type="submit" disabled={loading}
                  className="w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: loading ? "#A0795A" : "linear-gradient(135deg,#7C5C3E,#A0795A)" }}>
                  {loading ? "⏳ Mengirim..." : "Kirim Pesan →"}
                </button>
              </form>
            </div>
          </section>

          {/* ── PETA ── */}
          <section>
            <SectionLabel icon="🗺️" text="Lokasi Kantor Desa" />
            <div className="rounded-3xl overflow-hidden border-2 border-amber-100 shadow-lg" style={{ height: 320 }}>
              <iframe
                title="Lokasi Kantor Desa Tumani"
                src="https://maps.google.com/maps?q=Tumani,+Maesaan,+Minahasa+Selatan,+Sulawesi+Utara&z=15&output=embed"
                width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a href="https://www.google.com/maps/place/Tumani,+Maesaan,+South+Minahasa+Regency,+North+Sulawesi/@0.901337,124.471504,15z"
              target="_blank" rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-xs font-bold hover:underline transition"
              style={{ color: "#7C5C3E" }}>
              🗺️ Buka di Google Maps →
            </a>
          </section>

        </div>
      </div>
    </>
  );
}