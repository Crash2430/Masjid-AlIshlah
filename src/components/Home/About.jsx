import React from 'react';
import fotomasjid from '../../assets/Masjid.png';

const About = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Kolom Kiri - Teks & Informasi */}
          <div>
            {/* 1. Tag Badge Diubah: Shape & icon titik dihapus, dibuat polos dan rata kiri */}
            <p className="text-[#008282] text-sm font-bold tracking-widest uppercase mb-4">
              Tentang Masjid Al-Ishlah Cilacap
            </p>

            {/* Judul Utama */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              Sekilas Tentang Masjid Al-Ishlah Cilacap
            </h2>

            {/* Paragraf 1 */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              Masjid Al-Ishlah Cilacap adalah sebuah Masjid yang berlokasi di Jl. Cerme No.24, Wanasari, Sidanegara, Kec. Cilacap Tengah, Kabupaten Cilacap, Jawa Tengah 53211
            </p>
            {/* Paragraf 2 */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              Dibawah naungan Yayasan Sosial Al-Irsyad Cilacap, masjid al-ishlah berlokasi sangat strategis karena berdiri di tengah kota serta tidak jauh dari kampus yang ada di cilacap, salah satunya adalah Universitas Al-Irsyad Cilacap.
            </p>
             {/* Paragraf 3 */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
              Masjid Al Ishlah Cilacap juga hadir untuk melayani umat selama 24 jam setiap hari dengan berbagai fasilitas yang tersedia yaitu : Tempat Istirahat bagi musafir, Melayani setoran hafalan Al-Qur'an, Kegiatan qiyamullail, Menyediakan Teh, kopi & jahe susu gratis, serta Wifi 24/7 gratis
            </p>
            
            {/* Tombol CTA */}
            <a
              href="#tentang"
              className="inline-flex items-center gap-2 bg-[#008282] hover:bg-[#006666] text-white font-semibold px-6 py-3 rounded-full text-sm transition-all shadow-sm hover:shadow"
            >
              Pelajari Lebih Lanjut
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Kolom Kanan: 2. Shape Luar Dihapus, 3. Ukuran Foto Diperbesar */}
          {/* h-[350px] sampai lg:h-[550px] agar foto terlihat tinggi dan elegan */}
          <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl group">
            
            <img
              src={fotomasjid}
              alt="Masjid Al-Ishlah Cilacap"
              className="w-full h-full object-cover object-[center_100%] transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Gradient Overlay Bawah untuk Teks Label */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Teks Label di Atas Foto (Aku aktifkan kembali dari comment-mu supaya tidak terlihat terlalu kosong karena fotonya sudah besar) */}
            <div className="absolute bottom-6 left-6 right-6 text-white text-left">
              <h3 className="text-xl sm:text-2xl font-bold drop-shadow"></h3>
              <p className="text-xs sm:text-sm text-teal-200 font-semibold tracking-wider uppercase mt-1">
              </p>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;