import React, { useState } from 'react';
import logomasjid from '../../assets/LogoMasjidPutih.png';
import {
  TbBrandTiktok,
  TbBrandYoutube,
  TbBrandInstagram,
  TbBrandFacebook,
  TbPhone,
  TbMail,
  TbMapPin,
  TbCheck,
  TbLoader2,
} from 'react-icons/tb';

const Footer = () => {
  // Direct Link Email & WhatsApp
  const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=alishlahmcoffialc@gmail.com";
  const waMessage = encodeURIComponent("Assalamualaikum Warahmatullahi Wabarakatuh Min");
  const waLink = `https://wa.me/6285162880039?text=${waMessage}`;
  const mapsLink = "https://maps.app.goo.gl/vwpUvFu9m5REupRk7";

  // URL Google Apps Script Web App Anda
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzfm2f9KacEyjVLgQfVfvd57BkLrUjdf5FUcjAyyKLr3qbmDVH39Gt4sSRre3A3X2BW/exec";

  // State untuk Form Lead Generation
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    whatsapp: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.whatsapp && !formData.email) {
      setStatus({
        loading: false,
        success: false,
        error: 'Harap isi setidaknya nomor WhatsApp atau Email.',
      });
      return;
    }

    setStatus({ loading: true, success: false, error: '' });

    try {
      // Mengirimkan request ke Google Apps Script
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Diperlukan untuk Google Apps Script Web App
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Karena mode 'no-cors', response bersifat opaque. Jika tidak mengoperasikan catch, dianggap sukses.
      setStatus({ loading: false, success: true, error: '' });
      setFormData({ nama: '', email: '', whatsapp: '' });

      // Reset notifikasi sukses setelah 5 detik
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 5000);

    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: 'Terjadi kesalahan. Silakan coba beberapa saat lagi.',
      });
    }
  };

  return (
    <footer className="bg-[#062c2c] text-white pt-16 pb-8 border-t border-teal-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Banner Langganan / Newsletter Lead Generation Section */}
        <div className="bg-white text-gray-900 rounded-3xl p-6 sm:p-10 mb-16 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 border border-gray-100">
          <div className="flex items-center gap-4 w-full lg:w-1/3">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#008282] flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 leading-snug">
                Dapatkan Notifikasi Jadwal & Info Kajian
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Update berkala langsung ke WhatsApp atau Email jamaah.
              </p>
            </div>
          </div>

          {/* Form Input Lead Gen */}
          <div className="w-full lg:w-2/3">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  placeholder="Nama Lengkap"
                  required
                  className="w-full px-4 py-3 rounded-full bg-slate-50 border border-slate-200 text-xs text-gray-800 focus:outline-none focus:border-[#008282]"
                />
                <input
                  type="text"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="No. WhatsApp (cth: 08123456789)"
                  required
                  className="w-full px-4 py-3 rounded-full bg-slate-50 border border-slate-200 text-xs text-gray-800 focus:outline-none focus:border-[#008282]"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email (Opsional)"
                  className="w-full px-4 py-3 rounded-full bg-slate-50 border border-slate-200 text-xs text-gray-800 focus:outline-none focus:border-[#008282]"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full sm:w-auto bg-[#008282] hover:bg-[#006666] text-white text-xs font-bold px-8 py-3 rounded-full transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {status.loading ? (
                    <>
                      <TbLoader2 className="w-4 h-4 animate-spin" />
                      <span>Memproses...</span>
                    </>
                  ) : (
                    <span>Langganan Info Kajian</span>
                  )}
                </button>

                {/* Notifikasi Status */}
                {status.success && (
                  <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                    <TbCheck className="w-4 h-4" />
                    <span>Terima kasih! Data Anda berhasil terdaftar.</span>
                  </div>
                )}
                {status.error && (
                  <div className="text-xs text-rose-500 font-medium">
                    {status.error}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-teal-900/80">

          {/* Kolom 1: Branding & Deskripsi */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img src={logomasjid} alt="Logo Masjid Al-Ishlah" className="w-10 h-10 rounded-lg" />
              <div>
                <h2 className="text-base font-bold text-white uppercase tracking-tight leading-none">
                  Masjid Al-Ishlah
                </h2>
                <span className="text-xs font-medium text-[#33baba] uppercase tracking-wider">
                  Cilacap
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed max-w-sm">
              Pusat ibadah, dakwah, dan pemberdayaan umat untuk terwujudnya masyarakat yang religius dan sejahtera.
            </p>

            {/* Sosial Media */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#0d4242] border border-teal-700/60 flex items-center justify-center text-[#33baba] hover:bg-[#008282] hover:text-white hover:border-[#008282] transition-all duration-300 shadow-md"
                aria-label="Tiktok Masjid Al-Ishlah Cilacap"
              >
                <TbBrandTiktok className="w-5 h-5 stroke-[1.8]" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#0d4242] border border-teal-700/60 flex items-center justify-center text-[#33baba] hover:bg-[#008282] hover:text-white hover:border-[#008282] transition-all duration-300 shadow-md"
                aria-label="Instagram Masjid Al-Ishlah Cilacap"
              >
                <TbBrandInstagram className="w-5 h-5 stroke-[1.8]" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#0d4242] border border-teal-700/60 flex items-center justify-center text-[#33baba] hover:bg-[#008282] hover:text-white hover:border-[#008282] transition-all duration-300 shadow-md"
                aria-label="Facebook Masjid Al-Ishlah Cilacap"
              >
                <TbBrandFacebook className="w-5 h-5 stroke-[1.8]" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#0d4242] border border-teal-700/60 flex items-center justify-center text-[#33baba] hover:bg-[#008282] hover:text-white hover:border-[#008282] transition-all duration-300 shadow-md"
                aria-label="YouTube Masjid Al-Ishlah Cilacap"
              >
                <TbBrandYoutube className="w-5 h-5 stroke-[1.8]" />
              </a>
            </div>
          </div>

          {/* Kolom 2: Quick Links */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#home" className="text-gray-300 hover:text-[#33baba] transition-colors py-1">Home</a>
              <a href="#jadwal-sholat" className="text-gray-300 hover:text-[#33baba] transition-colors py-1">Jadwal Sholat</a>
              <a href="#jadwal-kajian" className="text-gray-300 hover:text-[#33baba] transition-colors py-1">Jadwal Kajian</a>
              <a href="#kepengurusan" className="text-gray-300 hover:text-[#33baba] transition-colors py-1">Kepengurusan</a>
              <a href="#kegiatan-masjid" className="text-gray-300 hover:text-[#33baba] transition-colors py-1">Kegiatan Masjid</a>
              <a href="#video-singkat" className="text-gray-300 hover:text-[#33baba] transition-colors py-1">Video Singkat</a>
              <a href="#artikel-islami" className="text-gray-300 hover:text-[#33baba] transition-colors py-1">Artikel Islami</a>
            </div>
          </div>

          {/* Kolom 3: Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Contact Info</h3>
            <ul className="space-y-3 text-sm">

              {/* Email */}
              <li>
                <a
                  href={gmailLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-gray-200 hover:text-[#33baba] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full bg-[#0d4242] border border-teal-700/60 flex items-center justify-center text-[#33baba] group-hover:bg-[#008282] group-hover:text-white group-hover:border-[#008282] transition-all duration-300 shrink-0">
                    <TbMail className="w-4 h-4 stroke-[1.8]" />
                  </div>
                  <span className="text-xs sm:text-sm">alishlahmcoffialc@gmail.com</span>
                </a>
              </li>

              {/* WhatsApp */}
              <li>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-gray-200 hover:text-[#33baba] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full bg-[#0d4242] border border-teal-700/60 flex items-center justify-center text-[#33baba] group-hover:bg-[#008282] group-hover:text-white group-hover:border-[#008282] transition-all duration-300 shrink-0">
                    <TbPhone className="w-4 h-4 stroke-[1.8]" />
                  </div>
                  <span className="text-xs sm:text-sm">+62 851-6288-0039</span>
                </a>
              </li>

              {/* Google Maps */}
              <li>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-gray-200 hover:text-[#33baba] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full bg-[#0d4242] border border-teal-700/60 flex items-center justify-center text-[#33baba] group-hover:bg-[#008282] group-hover:text-white group-hover:border-[#008282] transition-all duration-300 shrink-0">
                    <TbMapPin className="w-4 h-4 stroke-[1.8]" />
                  </div>
                  <span className="text-xs sm:text-sm">Jl. Cerme No.24 Sidanegara, Cilacap</span>
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Masjid Al-Ishlah Cilacap. All rights reserved.
        </div>

      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi via WhatsApp"
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg transition-all z-50 hover:scale-105"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;