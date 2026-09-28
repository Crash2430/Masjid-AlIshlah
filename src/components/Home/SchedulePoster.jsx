import React from 'react';
import { FiCalendar, FiClock, FiBook, FiUser, FiInfo, FiMapPin } from 'react-icons/fi';
import JadwalKajian from '../../assets/JadwalKajian.png';

const SchedulePoster = () => {
  const schedules = [
    {
      id: 1,
      dayBadge: 'SENIN SORE',
      dayBadgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      isLive: false,
      isRutin: true,
      title: 'KAJIAN JELANG BERBUKA',
      details: [
        { icon: FiCalendar, label: 'Hari dan Tanggal', value: 'Senin, 21 September 2026 / 4 Rabiul Akhir 1448 Hijriah' },
        { icon: FiBook, label: 'Tema', value: 'Kitab Hisnul Muslim' },
        { icon: FiUser, label: 'Pemateri', value: 'Ustadz Zainal Abidin' },
        { icon: FiClock, label: 'Waktu', value: '17.00 WIB - Adzan Maghrib' },
        { icon: FiInfo, label: 'Tambahan', value: 'Disediakan Menu Berbuka Puasa Sunnah dan Kopi Gratis' },
        { icon: FiMapPin, label: 'Lokasi', value: 'Lt. 1 Masjid Al-Ishlah Cilacap Jl. Cerme No.24' },
      ],
    },
    {
      id: 2,
      dayBadge: 'SELASA SORE',
      dayBadgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      isLive: false,
      isRutin: true,
      title: 'KAJIAN BADA MAGHRIB',
      details: [
        { icon: FiCalendar, label: 'Hari dan Tanggal', value: 'Selasa, 22 September 2026 / 5 Rabiul Akhir 1448 Hijriah' },
        { icon: FiBook, label: 'Tema', value: 'Kitab Bulughul Maram' },
        { icon: FiUser, label: 'Pemateri', value: 'Ustadz Raswanto' },
        { icon: FiClock, label: 'Waktu', value: 'Bada Maghrib - Adzan isya' },
        // { icon: FiInfo, label: 'Tambahan', value: 'Disediakan Menu Berbuka Puasa Sunnah dan Kopi Gratis' },
        { icon: FiMapPin, label: 'Lokasi', value: 'Lt. 1 Masjid Al-Ishlah Cilacap Jl. Cerme No.24' },
      ],
    },
  ];

  const handelDownload = () => {
    const link = document.createElement('a')
    link.href = JadwalKajian;
    link.download = 'JadwalKajian.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
                  {/* Badges Row */}
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
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-extrabold text-gray-900 mb-4 leading-snug">
                    {item.title}
                  </h3>

                  {/* Detail Informasi dengan Ikon Minimalis (Kartu 1) */}
                  {item.details ? (
                    <div className="space-y-2.5 border-t border-slate-200/60 pt-3">
                      {item.details.map((detail, idx) => {
                        const IconComponent = detail.icon;
                        return (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                            <IconComponent className="w-4 h-4 text-[#008282] mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-semibold text-gray-900">{detail.label}: </span>
                              <span className="text-gray-600">{detail.value}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    /* Layout Default untuk Kartu Lainnya */
                    <>
                      <div className="text-xs font-bold text-[#008282] tracking-wider uppercase mb-1">
                        {item.speaker}
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed mb-4">
                        {item.desc}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium pt-3 border-t border-slate-200/60">
                        <FiMapPin className="w-4 h-4 text-[#008282]" />
                        {item.location}
                      </div>
                    </>
                  )}
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
              {/* Flyer Kajian */}
              <div className="w-full overflow-hidden rounded-2xl mb-5 shadow-lg border border-teal-700/50">
                <img
                  src={JadwalKajian}
                  alt="Poster Jadwal Kajian"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              {/* Download Flyer Button */}
              <button
                onClick={handelDownload}
                className="w-full bg-[#008282] hover:bg-[#006666] text-white py-3.5 rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Unduh Flyer Kajian
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SchedulePoster;