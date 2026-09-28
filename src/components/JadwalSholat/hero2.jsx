import React, { useState, useEffect, useRef, useMemo } from 'react';
import bgMasjid from '../../assets/Masjid.png';

const IconClock = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconLocation = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconSearch = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const IconSun = () => (
  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const IconSunrise = () => (
  <svg className="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v4m0 10v4M4 12h4m8 0h4m-2.929-7.071l-2.828 2.828m-8.486 8.486l-2.828 2.828M5.757 6.929l2.828 2.828m8.486 8.486l2.828 2.828" />
  </svg>
);

const IconMoon = () => (
  <svg className="w-5 h-5 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const IconQuote = () => (
  <svg className="w-8 h-8 text-[#008282] opacity-80" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const IconSpinner = () => (
  <svg className="animate-spin w-5 h-5 text-[#008282]" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

const IconBook = () => (
  <svg className="w-4 h-4 text-[#008282]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

// --- FALLBACK DATA ---
const DEFAULT_CITY = { id: '1108', lokasi: 'KAB. CILACAP' };
const DEFAULT_SCHEDULE = {
  subuh: '04:28',
  terbit: '05:42',
  dhuha: '06:05',
  dzuhur: '11:46',
  ashar: '15:06',
  maghrib: '17:43',
  isya: '18:54',
  tanggal: 'Senin, 14 Shafar 1446 H'
};

const DEFAULT_HADITH = {
  arab: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
  indo: "Sesungguhnya setiap amalan tergantung pada niatnya, dan setiap orang akan mendapatkan sesuai dengan apa yang ia niatkan.",
  riwayat: "HR. Bukhari No. 1 & Muslim No. 1907"
};

const Hero2 = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(DEFAULT_CITY);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [schedule, setSchedule] = useState(DEFAULT_SCHEDULE);
  const [loadingSchedule, setLoadingSchedule] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);

  // State untuk Hadits Harian API
  const [dailyHadith, setDailyHadith] = useState(DEFAULT_HADITH);
  const [loadingHadith, setLoadingHadith] = useState(false);

  const dropdownRef = useRef(null);

  // 1. Live Clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).replace(/\./g, ':');

  const formattedDate = currentTime.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // 2. Fetch Kota/Kabupaten (API MyQuran)
  useEffect(() => {
    const fetchAllCities = async () => {
      setLoadingCities(true);
      try {
        const res = await fetch('https://api.myquran.com/v2/sholat/kota/semua');
        const json = await res.json();
        if (json.status && Array.isArray(json.data)) {
          setCities(json.data);
          const cilacap = json.data.find(c => c.lokasi.includes('CILACAP'));
          if (cilacap) setSelectedCity(cilacap);
        }
      } catch (err) {
        console.warn('Gagal memuat kota, menggunakan fallback:', err);
        setCities([DEFAULT_CITY, { id: '1301', lokasi: 'KOTA JAKARTA' }, { id: '1609', lokasi: 'KAB. SLEMAN' }]);
      } finally {
        setLoadingCities(false);
      }
    };

    fetchAllCities();
  }, []);

  // 3. Fetch Jadwal Sholat (API MyQuran)
  useEffect(() => {
    const fetchPrayerSchedule = async () => {
      if (!selectedCity?.id) return;
      setLoadingSchedule(true);

      const year = currentTime.getFullYear();
      const month = String(currentTime.getMonth() + 1).padStart(2, '0');
      const day = String(currentTime.getDate()).padStart(2, '0');

      try {
        const res = await fetch(`https://api.myquran.com/v2/sholat/jadwal/${selectedCity.id}/${year}/${month}/${day}`);
        const json = await res.json();
        if (json.status && json.data?.jadwal) {
          const j = json.data.jadwal;
          setSchedule({
            subuh: j.subuh || '04:28',
            terbit: j.terbit || '05:42',
            dhuha: j.dhuha || '06:05',
            dzuhur: j.dzuhur || '11:46',
            ashar: j.ashar || '15:06',
            maghrib: j.maghrib || '17:43',
            isya: j.isya || '18:54',
            tanggal: j.date || formattedDate
          });
        }
      } catch (err) {
        console.warn('Gagal mengambil jadwal:', err);
      } finally {
        setLoadingSchedule(false);
      }
    };

    fetchPrayerSchedule();
  }, [selectedCity]);

  // 4. Fetch HADITS HARIAN DARI API (Gading Dev API / Shahih Bukhari)
  useEffect(() => {
    const fetchDailyHadith = async () => {
      setLoadingHadith(true);
      try {
        // Menghitung hari ke-berapa dalam 1 tahun (1 - 365)
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now - start;
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);

        // Menentukan nomor hadits berdasarkan urutan hari (Rumus unik agar berganti tiap hari)
        const hadithNumber = ((dayOfYear * 7) % 250) + 1;

        // Panggil API Hadits Bukhari
        const res = await fetch(`https://api.hadith.gading.dev/books/bukhari/${hadithNumber}`);
        const json = await res.json();

        if (json.code === 200 && json.data) {
          setDailyHadith({
            arab: json.data.contents.arab,
            indo: json.data.contents.id,
            riwayat: `HR. Shahih Bukhari No. ${json.data.contents.number}`
          });
        }
      } catch (err) {
        console.warn('Gagal mengambil hadits dari API, menggunakan fallback default:', err);
        setDailyHadith(DEFAULT_HADITH);
      } finally {
        setLoadingHadith(false);
      }
    };

    fetchDailyHadith();
  }, []);

  // 5. Close Dropdown On Outside Click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter Kota
  const filteredCities = useMemo(() => {
    if (!searchQuery.trim()) return cities;
    return cities.filter(c => c.lokasi.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [cities, searchQuery]);

  // 6. Kalkulasi Aktif & Countdown
  const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();

  const parseToMinutes = (timeStr) => {
    if (!timeStr) return 0;
    const [h, m] = timeStr.split(':').map(Number);
    return h * 60 + m;
  };

  const timesList = [
    { id: 'subuh', name: 'SUBUH', time: schedule.subuh, iqamah: 'Iqamah +10m', icon: <IconMoon /> },
    { id: 'terbit', name: 'TERBIT', time: schedule.terbit, iqamah: 'Syuruq', icon: <IconSunrise /> },
    { id: 'dhuha', name: 'DHUHA', time: schedule.dhuha, iqamah: 'Sunnah', icon: <IconSun /> },
    { id: 'dzuhur', name: 'DZUHUR', time: schedule.dzuhur, iqamah: 'Iqamah +10m', icon: <IconSun /> },
    { id: 'ashar', name: 'ASHAR', time: schedule.ashar, iqamah: 'Iqamah +10m', icon: <IconSun /> },
    { id: 'maghrib', name: 'MAGHRIB', time: schedule.maghrib, iqamah: 'Iqamah +07m', icon: <IconSunrise /> },
    { id: 'isya', name: 'ISYA', time: schedule.isya, iqamah: 'Iqamah +10m', icon: <IconMoon /> },
  ];

  let activeId = 'isya';
  let nextPrayerName = 'Subuh';
  let nextPrayerMinutes = parseToMinutes(schedule.subuh) + 24 * 60;

  for (let i = 0; i < timesList.length; i++) {
    const itemMin = parseToMinutes(timesList[i].time);
    if (currentMinutes < itemMin) {
      nextPrayerName = timesList[i].name;
      nextPrayerMinutes = itemMin;
      activeId = i > 0 ? timesList[i - 1].id : 'isya';
      break;
    }
    if (i === timesList.length - 1) {
      activeId = 'isya';
      nextPrayerName = 'Subuh';
      nextPrayerMinutes = parseToMinutes(schedule.subuh) + 24 * 60;
    }
  }

  const diffMinutes = Math.max(0, nextPrayerMinutes - currentMinutes);
  const countdownHours = Math.floor(diffMinutes / 60);
  const countdownMins = diffMinutes % 60;
  const countdownStr = `-${String(countdownHours).padStart(2, '0')}:${String(countdownMins).padStart(2, '0')}:${String(59 - currentTime.getSeconds()).padStart(2, '0')}`;

  return (
    <section id="jadwal-sholat" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 text-white flex flex-col justify-center items-center overflow-hidden">
      {/* Background Gambar Masjid */}
      <div
        className="absolute inset-0 bg-cover bg-[center_100%] bg-no-repeat"
        style={{ backgroundImage: `url(${bgMasjid})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90" />

      {/* Konten Utama */}
      <div className="relative z-10 max-w-7xl w-full mx-auto space-y-10">

        {/* Header Section */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#008282]/20 border border-[#008282]/50 text-[#008282] text-xs font-bold tracking-widest uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#008282] animate-pulse" />
            Jadwal Sholat & Waktu Imsakiyah
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Sudahkah Anda Sholat Hari Ini?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
            Pilih lokasi domisili Anda untuk mendapatkan estimasi waktu sholat dan iqamah yang presisi.
          </p>
        </div>

        {/* WIDGET UTAMA */}
        <div className="rounded-3xl bg-slate-950/60 backdrop-blur-xl border border-white/10 p-6 sm:p-8 shadow-2xl">

          {/* Bar Atas */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-white/10 gap-4">
            <div className="flex items-center gap-2 text-gray-300 text-sm font-semibold">
              <span className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#008282]">
                <IconClock />
              </span>
              Pusat Informasi Waktu Ibadah
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-gray-400 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
              <IconLocation />
              <span>WILAYAH: <strong className="text-white font-bold">{selectedCity.lokasi}</strong></span>
            </div>
          </div>

          {/* Grid Konten Widget */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-stretch">

            {/* SISI KIRI: JAM & SEARCH DROPDOWN */}
            <div className="lg:col-span-4 bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-between space-y-6">
              <div>
                <p className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-1">
                  Waktu Saat Ini
                </p>
                <h3 className="text-4xl sm:text-5xl font-black text-[#008282] tracking-tight font-mono">
                  {formattedTime}
                </h3>
                <p className="text-xs text-gray-300 mt-2 font-medium">
                  {formattedDate}
                </p>

                {/* Status Countdown */}
                <div className="mt-4 inline-flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#008282]/15 border border-[#008282]/30 text-xs font-semibold text-emerald-300 w-full">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    <span>Menuju {nextPrayerName}:</span>
                  </span>
                  <strong className="text-white font-mono text-sm">{countdownStr}</strong>
                </div>
              </div>

              {/* SEARCHABLE DROPDOWN KOTA */}
              <div className="relative" ref={dropdownRef}>
                <label className="block text-xs font-bold tracking-wider text-gray-400 uppercase mb-2">
                  Pilih Kota / Kabupaten
                </label>

                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-white text-slate-900 font-bold text-sm px-4 py-3 rounded-xl shadow-md flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#008282] transition-all cursor-pointer"
                >
                  <span className="truncate">{selectedCity.lokasi}</span>
                  {loadingCities ? <IconSpinner /> : <span className="text-slate-500 text-xs">▼</span>}
                </button>

                {/* Popover List Kota */}
                {isDropdownOpen && (
                  <div className="absolute bottom-full left-0 right-0 mb-2 bg-slate-900 border border-white/20 rounded-2xl shadow-2xl p-3 z-50 max-h-64 flex flex-col">
                    <div className="relative mb-2">
                      <input
                        type="text"
                        placeholder="Cari Kota / Kabupaten..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        autoFocus
                        className="w-full bg-white/10 text-white placeholder-gray-400 text-xs px-8 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#008282]"
                      />
                      <span className="absolute left-2.5 top-2.5">
                        <IconSearch />
                      </span>
                    </div>

                    <div className="overflow-y-auto space-y-1 flex-1 pr-1 custom-scrollbar">
                      {filteredCities.length > 0 ? (
                        filteredCities.map((city) => (
                          <button
                            key={city.id}
                            type="button"
                            onClick={() => {
                              setSelectedCity(city);
                              setIsDropdownOpen(false);
                              setSearchQuery('');
                            }}
                            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${selectedCity.id === city.id
                                ? 'bg-[#008282] text-white'
                                : 'text-gray-300 hover:bg-white/10 hover:text-white'
                              }`}
                          >
                            {city.lokasi}
                          </button>
                        ))
                      ) : (
                        <p className="text-xs text-gray-400 text-center py-4">Kota tidak ditemukan</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* SISI KANAN: 7 KARTU SHOLAT */}
            <div className="lg:col-span-8 relative">
              {loadingSchedule && (
                <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm rounded-2xl flex items-center justify-center z-20">
                  <div className="flex items-center gap-3 bg-slate-900 border border-white/10 px-4 py-3 rounded-2xl shadow-lg">
                    <IconSpinner />
                    <span className="text-xs font-bold text-white">Memuat Jadwal Sholat...</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 h-full">
                {timesList.map((item) => {
                  const isActive = item.id === activeId;
                  return (
                    <div
                      key={item.id}
                      className={`relative rounded-2xl p-4 flex flex-col items-center justify-between transition-all duration-300 border ${isActive
                          ? 'bg-[#008282]/25 border-[#008282] shadow-[0_0_20px_rgba(0,130,130,0.4)] scale-105 z-10'
                          : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                        }`}
                    >
                      {isActive && (
                        <span className="absolute -top-3 px-2.5 py-0.5 rounded-full bg-[#008282] text-[10px] font-extrabold text-white uppercase tracking-wider shadow-md">
                          Aktif
                        </span>
                      )}

                      <div className="p-2.5 rounded-xl bg-black/30 mb-2">
                        {item.icon}
                      </div>

                      <span className="text-xs font-bold tracking-wider text-gray-300 mb-1">
                        {item.name}
                      </span>

                      <span className="text-xl font-black text-white mb-3 font-mono">
                        {item.time}
                      </span>

                      <span className={`text-[10px] font-medium px-2 py-1 rounded-full border ${isActive
                          ? 'bg-[#008282] text-white border-transparent'
                          : 'bg-black/40 text-gray-400 border-white/5'
                        }`}>
                        {item.iqamah}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* HADITS HARIAN DYNAMIC API SECTION */}
        <div className="relative rounded-3xl bg-slate-900/70 backdrop-blur-md border border-white/10 p-6 sm:p-8 text-center max-w-4xl mx-auto shadow-xl">

          {/* Badge Hadits Harian */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#008282]/20 border border-[#008282]/40 text-[#008282] text-xs font-bold tracking-wider uppercase mb-4">
            <IconBook />
            <span>Hadits Hari Ini</span>
          </div>

          <div className="flex justify-center mb-3">
            <IconQuote />
          </div>

          {loadingHadith ? (
            <div className="flex flex-col items-center justify-center py-6 gap-2">
              <IconSpinner />
              <span className="text-xs text-gray-400 font-medium">Mengambil Hadits Harian...</span>
            </div>
          ) : (
            <>
              {/* Teks Arab */}
              {dailyHadith.arab && (
                <p className="text-lg sm:text-2xl text-emerald-200 font-serif leading-loose mb-4 px-2" dir="rtl">
                  {dailyHadith.arab}
                </p>
              )}

              {/* Terjemahan Bahasa Indonesia */}
              <blockquote className="text-sm sm:text-base text-gray-200 italic leading-relaxed font-medium">
                "{dailyHadith.indo}"
              </blockquote>

              {/* Perawi / Riwayat Hadits */}
              <p className="mt-4 text-xs font-bold text-[#008282] tracking-widest uppercase">
                ({dailyHadith.riwayat})
              </p>
            </>
          )}
        </div>

        {/* BUTTON CTA */}
        <div className="flex justify-center pt-2">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#008282] hover:bg-[#006666] text-white text-sm font-bold transition-all shadow-xl hover:shadow-teal-900/50 hover:-translate-y-0.5"
          >
            ← Kembali Ke Beranda
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero2;