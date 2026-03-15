import { useState } from "react";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import Beranda from "./pages/beranda";
import Sejarah from "./pages/sejarah";
import Wilayah from "./pages/wilayah";
import Struktur from "./pages/struktur";
import RiwayatJabatan from "./pages/riwayat-jabatan";
import Galeri from "./pages/galeri";
import Kontak from "./pages/kontak";

export default function App() {
  const [currentPage, setCurrentPage] = useState("beranda");

  const renderPage = () => {
    switch (currentPage) {
      case "beranda":       return <Beranda setPage={setCurrentPage} />;
      case "sejarah":       return <Sejarah />;
      case "wilayah":       return <Wilayah />;
      case "struktur":      return <Struktur />;
      case "riwayat":       return <RiwayatJabatan />;
      case "galeri":        return <Galeri />;
      case "kontak":        return <Kontak />;
      default:              return <Beranda setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      <main className="flex-1">{renderPage()}</main>
      <Footer setPage={setCurrentPage} />
    </div>
  );
}