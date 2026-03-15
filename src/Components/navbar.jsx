import { useState, useEffect } from "react";

const navItems = [
  { id: "beranda",  label: "Beranda",         icon: "🏠" },
  { id: "sejarah",  label: "Sejarah",          icon: "📖" },
  { id: "wilayah",  label: "Wilayah",          icon: "🗺️" },
  { id: "struktur", label: "Struktur",         icon: "🏛️" },
  { id: "riwayat",  label: "Riwayat Jabatan",  icon: "📋" },
  { id: "galeri",   label: "Galeri",           icon: "🖼️" },
  { id: "kontak",   label: "Kontak",           icon: "💬" },
];

export default function Navbar({ currentPage, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    setPage(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&family=Fraunces:wght@700&display=swap');
        .nav-font { font-family: 'Plus Jakarta Sans', sans-serif; }
        .nav-brand { font-family: 'Fraunces', Georgia, serif; }

        .nav-item-active {
          background: linear-gradient(135deg, #C8A84B22, #C8A84B44);
          color: #7C5C3E;
          border-color: #C8A84B60;
        }
        .nav-item-idle {
          color: #5C4030;
        }
        .nav-item-idle:hover {
          background: #F5EDD6;
          color: #7C5C3E;
        }

        .mobile-overlay {
          animation: slideDown 0.25s ease forwards;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hamburger-line {
          display: block;
          width: 22px;
          height: 2px;
          background: #7C5C3E;
          border-radius: 99px;
          transition: all 0.3s ease;
          transform-origin: center;
        }
      `}</style>

      <nav
        className="nav-font sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(250,246,238,0.95)"
            : "#FAF6EE",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: "1px solid #EDD9B040",
          boxShadow: scrolled ? "0 4px 24px rgba(124,92,62,0.08)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

          {/* ── Logo ── */}
          <button
            onClick={() => handleNav("beranda")}
            className="flex items-center gap-3 group flex-shrink-0"
          >
            {/* emblem */}
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl shadow-sm group-hover:shadow-md transition-shadow duration-300 flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #C8A84B, #A0795A)" }}
            >
              🏡
            </div>
            {/* text */}
            <div className="text-left leading-tight">
              <p className="nav-brand font-bold text-base leading-none" style={{ color: "#2D2416" }}>
                Desa Sejahtera
              </p>
              <p className="text-xs mt-0.5 font-medium" style={{ color: "#A0795A" }}>
                Kec. Makmur · Kab. Indah
              </p>
            </div>
          </button>

          {/* ── Desktop Menu ── */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNav(item.id)}
                  className={`relative px-3.5 py-2 rounded-xl text-sm font-semibold border transition-all duration-200
                    ${currentPage === item.id
                      ? "nav-item-active border-amber-300/50"
                      : "nav-item-idle border-transparent"
                    }`}
                >
                  {item.label}
                  {/* active dot */}
                  {currentPage === item.id && (
                    <span
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: "#C8A84B" }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* ── CTA + Hamburger ── */}
          <div className="flex items-center gap-3">
            {/* CTA desktop */}
            <button
              onClick={() => handleNav("kontak")}
              className="hidden lg:flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold text-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #7C5C3E, #A0795A)" }}
            >
              💬 Kontak
            </button>

            {/* Hamburger mobile */}
            <button
              className="lg:hidden w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-colors"
              style={{ background: menuOpen ? "#F5EDD6" : "transparent" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className="hamburger-line"
                style={menuOpen ? { transform: "rotate(45deg) translate(3px, 3px)" } : {}}
              />
              <span
                className="hamburger-line"
                style={menuOpen ? { opacity: 0, transform: "scaleX(0)" } : {}}
              />
              <span
                className="hamburger-line"
                style={menuOpen ? { transform: "rotate(-45deg) translate(3px, -3px)" } : {}}
              />
            </button>
          </div>
        </div>

        {/* ── Mobile Drawer ── */}
        {menuOpen && (
          <div
            className="mobile-overlay lg:hidden px-4 pb-5 pt-2"
            style={{
              background: "#FAF6EE",
              borderTop: "1px solid #EDD9B060",
              boxShadow: "0 12px 40px rgba(124,92,62,0.12)",
            }}
          >
            {/* grid 2 col */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl text-sm font-semibold text-left border transition-all duration-200
                    ${currentPage === item.id
                      ? "nav-item-active border-amber-300/50"
                      : "nav-item-idle border-transparent bg-white"
                    }`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* kontak button full width */}
            <button
              onClick={() => handleNav("kontak")}
              className="w-full py-3 rounded-2xl font-bold text-sm text-white shadow-md"
              style={{ background: "linear-gradient(135deg, #7C5C3E, #A0795A)" }}
            >
              💬 Hubungi Kami
            </button>
          </div>
        )}
      </nav>
    </>
  );
}