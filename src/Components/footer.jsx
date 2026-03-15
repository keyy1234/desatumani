export default function Footer({ setPage }) {
  const handleNav = (id) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-green-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-xl">🏡</div>
            <div>
              <p className="font-bold text-lg">Desa Sejahtera</p>
              <p className="text-green-300 text-sm">Kec. Makmur, Kab. Indah</p>
            </div>
          </div>
          <p className="text-green-300 text-sm leading-relaxed">
            Website resmi pemerintah Desa Sejahtera. Melayani masyarakat dengan sepenuh hati.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-yellow-400 mb-4 uppercase tracking-wider text-sm">Navigasi</h4>
          <ul className="space-y-2 text-sm text-green-300">
            {[
              { id: "beranda", label: "Beranda" },
              { id: "sejarah", label: "Sejarah Desa" },
              { id: "wilayah", label: "Wilayah" },
              { id: "struktur", label: "Struktur Organisasi" },
              { id: "riwayat", label: "Riwayat Jabatan" },
              { id: "galeri", label: "Galeri" },
              { id: "kontak", label: "Kontak" },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNav(item.id)}
                  className="hover:text-yellow-400 transition"
                >
                  → {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="font-semibold text-yellow-400 mb-4 uppercase tracking-wider text-sm">Kontak Kami</h4>
          <ul className="space-y-3 text-sm text-green-300">
            <li className="flex gap-2"><span>📍</span><span>Jl. Desa Sejahtera No. 1, Kec. Makmur</span></li>
            <li className="flex gap-2"><span>📞</span><span>(0xxx) xxxx-xxxx</span></li>
            <li className="flex gap-2"><span>✉️</span><span>desa.sejahtera@mail.com</span></li>
            <li className="flex gap-2"><span>🕐</span><span>Senin–Jumat: 08.00–16.00 WIB</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-green-700 text-center py-4 text-green-400 text-sm">
        © {new Date().getFullYear()} Desa Sejahtera. Hak Cipta Dilindungi.
      </div>
    </footer>
  );
}