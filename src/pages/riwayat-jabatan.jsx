/* ══════════════════════════════════════════════════
   RIWAYAT HUKUM TUA — Desa Tumani
   Kec. Maesaan, Kab. Minahasa Selatan, Sulawesi Utara
══════════════════════════════════════════════════ */

const RIWAYAT = [
  {
    no: 1,
    nama: "Max M. Tewal",
    jabatan: "Hukum Tua",
    periode: "2008 – 2013",
    keterangan: "Memimpin pembangunan infrastruktur desa dan pemekaran wilayah Tumani menjadi tiga desa.",
    status: "demisioner",
    isPj: false,
  },
  {
    no: 2,
    nama: "Steven Kumarurung",
    jabatan: "Pjb. Hukum Tua",
    periode: "2013",
    keterangan: "Penjabat sementara yang menjaga keberlangsungan pemerintahan pada masa transisi.",
    status: "demisioner",
    isPj: true,
  },
  {
    no: 3,
    nama: "Meiby Mangowal",
    jabatan: "Hukum Tua",
    periode: "2014 – 2019",
    keterangan: "Memimpin pengembangan pelayanan publik dan pemberdayaan masyarakat desa.",
    status: "demisioner",
    isPj: false,
  },
  {
    no: 4,
    nama: "Sindi Masengi",
    jabatan: "Pjb. Hukum Tua",
    periode: "2019 – 2021",
    keterangan: "Penjabat sementara pada masa transisi kepemimpinan sebelum pemilihan resmi.",
    status: "demisioner",
    isPj: true,
  },
  {
    no: 5,
    nama: "Fesna F. Y. Assa",
    jabatan: "Pjb. Hukum Tua",
    periode: "2021 – Sekarang",
    keterangan: "Penjabat Hukum Tua aktif. Fokus pada peningkatan pelayanan warga, pembangunan infrastruktur, dan digitalisasi administrasi desa.",
    status: "aktif",
    isPj: true,
  },
];

const aktif = RIWAYAT.find(r => r.status === "aktif");

export default function RiwayatJabatan() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        .font-display { font-family:'Playfair Display',Georgia,serif; }
        .font-body    { font-family:'Plus Jakarta Sans',sans-serif; }
        .row-hover { transition: background 0.15s; }
        .row-hover:hover { background: #f8f7f2; }
      `}</style>

      <div className="font-body bg-white min-h-screen text-stone-800">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden"
          style={{ background:"linear-gradient(160deg,#1a3a2a 0%,#2d5a3d 55%,#3d6b4a 100%)" }}>
          <div className="absolute inset-0 opacity-[0.07]"
            style={{ backgroundImage:"radial-gradient(circle,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize:"32px 32px" }} />
          <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full opacity-10 bg-white" />

          <div className="relative max-w-5xl mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* teks kiri */}
              <div>
                <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 rounded-full px-4 py-1.5 text-white/70 text-xs font-semibold uppercase tracking-widest mb-6">
                  📜 Riwayat Jabatan
                </div>
                <h1 className="font-display text-white leading-tight mb-4"
                  style={{ fontSize:"clamp(2rem,5vw,3.2rem)" }}>
                  Riwayat Hukum Tua<br />
                  <span style={{ color:"#F5C842" }}>Desa Tumani</span>
                </h1>
                <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md">
                  Daftar pejabat Hukum Tua (Kepala Desa) yang pernah memimpin Desa Tumani, Kec. Maesaan, Kab. Minahasa Selatan, Sulawesi Utara.
                </p>
                <div className="bg-white/10 border border-white/15 rounded-2xl p-4 text-xs text-white/60 leading-relaxed max-w-md">
                  💡 <span className="text-white/80 font-semibold">Hukum Tua</span> adalah istilah khas Minahasa untuk Kepala Desa — bermakna pemimpin yang dituakan dan dihormati oleh seluruh warga.
                </div>
              </div>

              {/* kartu pejabat aktif */}
              {aktif && (
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <div className="h-1.5 w-full" style={{ background:"linear-gradient(90deg,#10b981,#34d399)" }} />
                  <div className="p-7 text-center">
                    <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Pejabat Aktif Saat Ini
                    </span>
                    <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl border-4 border-stone-100 bg-stone-50 shadow-inner">
                      👩‍💼
                    </div>
                    <h2 className="font-display font-bold text-stone-900 text-xl">{aktif.nama}</h2>
                    <p className="text-emerald-600 font-semibold text-sm mt-1">{aktif.jabatan}</p>
                    <p className="text-stone-400 text-xs mt-0.5">📅 {aktif.periode}</p>
                    <p className="text-stone-500 text-xs mt-4 leading-relaxed border-t border-stone-100 pt-4">{aktif.keterangan}</p>
                  </div>
                </div>
              )}
            </div>

            {/* stat strip */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { icon:"👥", v: RIWAYAT.length,                                        l:"Total Pejabat"    },
                { icon:"✅", v: RIWAYAT.filter(r=>r.status==="aktif").length,           l:"Pejabat Aktif"   },
                { icon:"🏛️", v: RIWAYAT.filter(r=>!r.isPj).length,                     l:"Hukum Tua Definitif" },
              ].map(s => (
                <div key={s.l} className="bg-white/10 border border-white/15 rounded-2xl p-4 text-center backdrop-blur">
                  <div className="text-xl mb-1">{s.icon}</div>
                  <div className="font-display font-black text-white text-2xl">{s.v}</div>
                  <div className="text-white/50 text-xs mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TIMELINE VERTIKAL ── */}
        <section className="py-20" style={{ background:"#F8F7F2" }}>
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="font-display font-bold text-stone-800"
                style={{ fontSize:"clamp(1.5rem,3vw,2rem)" }}>
                Linimasa Kepemimpinan
              </h2>
              <p className="text-stone-400 text-sm mt-2">Urutan pejabat dari waktu ke waktu</p>
              <div className="mx-auto mt-4 w-12 h-0.5 rounded"
                style={{ background:"linear-gradient(90deg,#1a3a2a,#C8A84B)" }} />
            </div>

            <div className="relative">
              {/* garis vertikal */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-stone-200" />

              <div className="space-y-6">
                {RIWAYAT.map((r, i) => (
                  <div key={r.no} className="relative flex gap-6 items-start">
                    {/* dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center shadow-md border-4 border-white text-white font-black text-sm"
                        style={{
                          background: r.status === "aktif"
                            ? "linear-gradient(135deg,#059669,#10b981)"
                            : r.isPj
                            ? "linear-gradient(135deg,#64748b,#94a3b8)"
                            : "linear-gradient(135deg,#1a3a2a,#2d5a3d)"
                        }}>
                        <span className="text-xs opacity-70 font-medium">No.</span>
                        <span className="text-xl leading-none">{r.no}</span>
                      </div>
                    </div>

                    {/* card */}
                    <div className={`flex-1 bg-white rounded-2xl border shadow-sm overflow-hidden mb-0
                      ${r.status === "aktif" ? "border-emerald-200" : "border-stone-100"}`}>
                      {/* top accent */}
                      <div className="h-1" style={{
                        background: r.status === "aktif"
                          ? "linear-gradient(90deg,#10b981,#34d399)"
                          : r.isPj
                          ? "#94a3b8"
                          : "linear-gradient(90deg,#1a3a2a,#C8A84B)"
                      }} />

                      <div className="p-5">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <h3 className="font-bold text-stone-900 text-base leading-snug">{r.nama}</h3>
                            <div className="flex flex-wrap items-center gap-2 mt-1.5">
                              {/* jabatan badge */}
                              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                                style={{
                                  background: r.isPj ? "#f1f5f9" : "#ecfdf5",
                                  color: r.isPj ? "#475569" : "#065f46"
                                }}>
                                {r.jabatan}
                              </span>
                              {/* status badge */}
                              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                                r.status === "aktif"
                                  ? "bg-emerald-100 text-emerald-700"
                                  : "bg-stone-100 text-stone-500"
                              }`}>
                                {r.status === "aktif" ? "🟢 Aktif" : "⚫ Demisioner"}
                              </span>
                            </div>
                          </div>
                          {/* periode pill */}
                          <div className="text-right flex-shrink-0">
                            <div className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl"
                              style={{ background:"#FEF3C7", color:"#92400e" }}>
                              📅 {r.periode}
                            </div>
                          </div>
                        </div>

                        <p className="text-stone-500 text-xs leading-relaxed mt-3 border-t border-stone-50 pt-3">
                          {r.keterangan}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TABEL RESMI ── */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="font-display font-bold text-stone-800"
                style={{ fontSize:"clamp(1.5rem,3vw,2rem)" }}>
                Tabel Riwayat Jabatan
              </h2>
              <p className="text-stone-400 text-sm mt-2">Data resmi arsip Desa Tumani</p>
              <div className="mx-auto mt-4 w-12 h-0.5 rounded"
                style={{ background:"linear-gradient(90deg,#1a3a2a,#C8A84B)" }} />
            </div>

            {/* tabel desktop */}
            <div className="hidden md:block overflow-hidden rounded-2xl border border-stone-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background:"linear-gradient(135deg,#1a3a2a,#2d5a3d)" }}>
                    {["No","Nama Penjabat","Jabatan","Tahun Menjabat","Status"].map(h => (
                      <th key={h} className="px-6 py-4 text-left text-white font-semibold text-xs uppercase tracking-wider">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {RIWAYAT.map((r, i) => (
                    <tr key={r.no}
                      className={`row-hover border-b border-stone-50 ${r.status === "aktif" ? "bg-emerald-50/40" : i%2===0 ? "bg-white" : "bg-stone-50/40"}`}>
                      <td className="px-6 py-4 text-stone-400 font-mono text-xs font-bold">{r.no}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                            style={{
                              background: r.status === "aktif" ? "#d1fae5" : "#f1f5f9"
                            }}>
                            {r.status === "aktif" ? "👩‍💼" : "👤"}
                          </div>
                          <span className="font-semibold text-stone-800">{r.nama}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                          style={{
                            background: r.isPj ? "#f1f5f9" : "#ecfdf5",
                            color: r.isPj ? "#475569" : "#065f46"
                          }}>
                          {r.jabatan}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-semibold text-xs px-3 py-1.5 rounded-xl"
                          style={{ background:"#FEF3C7", color:"#92400e" }}>
                          {r.periode}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${
                          r.status === "aktif"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-stone-100 text-stone-500"
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${r.status === "aktif" ? "bg-emerald-500 animate-pulse" : "bg-stone-400"}`} />
                          {r.status === "aktif" ? "Aktif" : "Demisioner"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* mobile cards */}
            <div className="md:hidden space-y-3">
              {RIWAYAT.map(r => (
                <div key={r.no}
                  className={`rounded-2xl border overflow-hidden shadow-sm ${r.status === "aktif" ? "border-emerald-200" : "border-stone-100"}`}>
                  <div className="h-1" style={{
                    background: r.status === "aktif" ? "#10b981" : r.isPj ? "#94a3b8" : "#1a3a2a"
                  }} />
                  <div className="bg-white p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                          style={{ background: r.status === "aktif" ? "#d1fae5" : "#f1f5f9" }}>
                          {r.status === "aktif" ? "👩‍💼" : "👤"}
                        </div>
                        <div>
                          <p className="font-bold text-stone-800 text-sm">{r.nama}</p>
                          <p className="text-xs" style={{ color: r.isPj ? "#475569" : "#065f46" }}>{r.jabatan}</p>
                        </div>
                      </div>
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                        r.status === "aktif" ? "bg-emerald-100 text-emerald-700" : "bg-stone-100 text-stone-500"
                      }`}>
                        {r.status === "aktif" ? "🟢 Aktif" : "Demisioner"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-xl"
                        style={{ background:"#FEF3C7", color:"#92400e" }}>
                        📅 {r.periode}
                      </span>
                    </div>
                    <p className="text-stone-400 text-xs leading-relaxed">{r.keterangan}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* source note */}
            <p className="text-center text-stone-400 text-xs mt-8">
              📋 Sumber: Arsip Resmi Desa Tumani · Kec. Maesaan, Kab. Minahasa Selatan
            </p>
          </div>
        </section>

      </div>
    </>
  );
}