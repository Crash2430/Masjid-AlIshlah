import React from 'react';

const Movement = () => {
  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Kolom Kiri - Informasi & Progress Donasi */}
          <div>
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-100 text-[#008282] text-xs font-bold tracking-wider uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-[#008282]"></span>
              Gerakan Wakaf & Infaq
            </div>

            {/* Judul Utama */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              Lorem Ipsum Dolor Sit Amet Adipiscing
            </h2>

            {/* Deskripsi */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Partisipasi Anda dalam gerakan jariyah menghidupkan fasilitas ibadah, mencetak para penghafal Al-Qur'an, dan merawat dhuafa.
            </p>

            {/* Widget Progress Bar Donasi */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-gray-800 uppercase tracking-wide">
                  Target Pembangunan Menara & Madrasah
                </span>
                <span className="text-xs font-extrabold text-[#008282] bg-teal-50 px-2 py-0.5 rounded">
                  76% TERCAPAI
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden mb-3">
                <div 
                  className="bg-[#008282] h-full rounded-full transition-all duration-500" 
                  style={{ width: '76%' }}
                ></div>
              </div>

              {/* Detail Angka */}
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-500">
                  Terkumpul: <strong className="text-gray-900 font-bold">Rp 760.000.000</strong>
                </span>
                <span className="text-gray-500">
                  Target: <strong className="text-gray-900 font-bold">Rp 1.000.000.000</strong>
                </span>
              </div>
            </div>

            {/* Tombol CTA */}
            <a
              href="#sedekah"
              className="inline-flex items-center gap-2 bg-[#008282] hover:bg-[#006666] text-white font-semibold px-6 py-3.5 rounded-full text-sm transition-all shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Sedekah Jariyah
            </a>
          </div>

          {/* Kolom Kanan - Player Video Dokumenter (Placeholder Shape) */}
          <div>
            <div className="relative rounded-3xl overflow-hidden bg-[#0a2222] border border-gray-800 shadow-2xl aspect-video flex flex-col justify-between p-4 sm:p-6 text-white group">
              
              {/* Header Video Player */}
              <div className="flex justify-between items-center z-10">
                <div className="flex items-center gap-2 bg-black/40 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="text-xs font-semibold text-gray-200">Video Dokumenter</span>
                </div>
                <span className="text-xs text-gray-400 font-mono bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-md">
                  10:45
                </span>
              </div>

              {/* Tombol Play Utama di Tengah */}
              <div className="flex flex-col items-center justify-center my-auto z-10 cursor-pointer">
                <button 
                  aria-label="Putar Video Profil Masjid"
                  className="w-16 h-16 rounded-full bg-[#008282] hover:bg-[#33baba] text-white flex items-center justify-center transition-all transform group-hover:scale-110 shadow-lg mb-3"
                >
                  <svg className="w-8 h-8 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
                  TONTON PROFIL MASJID
                </span>
              </div>

              {/* Controls Bar Bawah Video */}
              <div className="z-10 bg-black/50 backdrop-blur-md p-3 rounded-xl border border-white/10 space-y-2">
                <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#008282] h-full w-1/3 rounded-full"></div>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-300">
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 cursor-pointer hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                    <span>03:25 / 10:45</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 cursor-pointer hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                    <svg className="w-4 h-4 cursor-pointer hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-2V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Movement;
