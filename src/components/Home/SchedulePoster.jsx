import React from 'react';

const SchedulePoster = () => {
  const schedules = [
    {
      id: 1,
      dayBadge: 'SENIN PAGI',
      dayBadgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      isLive: true,
      isRutin: true,
      time: '08:30 - 10:00 WIB',
      speaker: 'PEMATERI: USTADZ LOREM IPSUM, M.Ag',
      title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing',
      desc: 'Membahas kitab fikih tematik seputar interaksi muamalah kontemporer dan adab sehari-hari di era digital.',
      location: 'Ruang Utama Masjid Lt. 1',
    },
    {
      id: 2,
      dayBadge: 'AHAD SUBUH',
      dayBadgeBg: 'bg-teal-100 text-[#008282] border-teal-200',
      isLive: true,
      isRutin: true,
      time: '04:45 - 06:15 WIB',
      speaker: 'PEMATERI: DR. LOREM IPSUM AL-HAFIDZ',
      title: 'Kajian Tematik: Lorem Ipsum Dolor Sit Amet',
      desc: 'Tadabbur ayat-ayat pilihan dan pendalaman sirah nabawiyah untuk memperkuat ketahanan iman keluarga muslim.',
      location: 'Selasar Utama & YouTube Live',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Kolom Kiri - Agenda Kajian & Kegiatan Rutin (7 Cols) */}
          <div className="lg:col-span-7">
            {/* Header Section */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-[#008282] text-xs font-bold tracking-wider uppercase mb-3">
                Agenda Majelis Ilmu
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight leading-tight mb-2">
                Jadwal Kajian & Kegiatan Rutin
              </h2>
              <p className="text-sm text-gray-600">
                Terbuka untuk umum, ikhwan dan akhwat. Disediakan siaran langsung interaktif bagi jamaah daring.
              </p>
            </div>

            {/* List Kartu Schedule */}
            <div className="space-y-4 mb-8">
              {schedules.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 hover:border-[#008282] transition-all duration-200 shadow-sm"
                >
                  {/* Badges & Time Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded border uppercase ${item.dayBadgeBg}`}>
                        {item.dayBadge}
                      </span>
                      {item.isLive && (
                        <span className="bg-red-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                          LIVE
                        </span>
                      )}
                      {item.isRutin && (
                        <span className="bg-gray-200 text-gray-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                          RUTIN
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-bold text-gray-500 flex items-center gap-1">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item.time}
                    </div>
                  </div>

                  {/* Speaker */}
                  <div className="text-xs font-bold text-[#008282] tracking-wider uppercase mb-1">
                    {item.speaker}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-extrabold text-gray-900 mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  {/* Footer Link & Location */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-200/60 text-xs">
                    <div className="flex items-center gap-1.5 text-gray-500 font-medium">
                      <svg className="w-4 h-4 text-[#008282]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {item.location}
                    </div>
                    <a
                      href="#detail"
                      className="text-[#008282] hover:text-[#006666] font-bold inline-flex items-center gap-1 group"
                    >
                      Detail Kajian
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Tombol Lihat Jadwal Lainnya */}
            <a
              href="#semua-jadwal"
              className="inline-flex items-center gap-2 bg-[#008282] hover:bg-[#006666] text-white text-xs font-bold px-6 py-3 rounded-full transition-all shadow-sm"
            >
              Lihat Jadwal Lainnya
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          {/* Kolom Kanan - Poster Tabligh Akbar (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#062c2c] text-white rounded-3xl p-6 sm:p-8 border border-teal-800 shadow-xl relative overflow-hidden">
              
              {/* Header Poster */}
              <div className="flex justify-between items-center mb-6 border-b border-teal-800/80 pb-4">
                <span className="bg-[#008282] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  TABLIGH AKBAR
                </span>
                <span className="text-xs text-teal-300 font-semibold uppercase tracking-widest">
                  1448 H
                </span>
              </div>

              {/* Title Special Event */}
              <div className="mb-6">
                <span className="text-xs font-bold text-teal-300 uppercase tracking-wide block mb-1">
                  KAJIAN AKBAR SPESIAL
                </span>
                <h3 className="text-2xl font-black text-white leading-tight">
                  Membangun Peradaban
                </h3>
              </div>

              {/* Speaker Box */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 mb-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-[#008282] font-bold flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Ustadz Narasumber Tamu
                  </h4>
                  <p className="text-xs text-teal-200">
                    Dewan Pakar Fikih & Tarbiyah
                  </p>
                </div>
              </div>

              {/* Info Grid (Waktu & Tempat) */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-center">
                  <span className="text-[10px] font-bold text-teal-300 uppercase block mb-1">
                    Waktu
                  </span>
                  <span className="text-xs font-bold text-white">
                    Sabtu Malam
                  </span>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-center">
                  <span className="text-[10px] font-bold text-teal-300 uppercase block mb-1">
                    Tempat
                  </span>
                  <span className="text-xs font-bold text-white">
                    Masjid Raya
                  </span>
                </div>
              </div>

              {/* Kutipan Hadits Box */}
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl mb-6 text-center italic text-xs text-gray-300 leading-relaxed">
                "Barangsiapa menempuh jalan untuk menuntut ilmu, Allah akan memudahkan jalannya menuju surga."
                <div className="not-italic font-bold text-teal-300 text-[10px] mt-1 uppercase">
                  (HR. MUSLIM)
                </div>
              </div>

              {/* Download Flyer Button */}
              <button className="w-full bg-[#008282] hover:bg-[#006666] text-white py-3.5 rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Unduh E-Flyer Resmi
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SchedulePoster;