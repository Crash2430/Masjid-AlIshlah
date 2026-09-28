import React, { useState, useEffect } from 'react';
import bgMasjid from '../../assets/Masjid.png';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-[center_100%] bg-no-repeat"
        style={{ backgroundImage: `url(${bgMasjid})` }}
      />
      <div className="absolute inset-0 bg-black/70" />
      {/* Hero Konten */}
      <div 
        className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6 py-20 transition-all duration-1000 ease-out ${
          isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-[#008282] text-xs sm:text-sm font-bold uppercase tracking-widest drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]">
          Selamat Datang di Website Resmi
        </p>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.35)]">
          Masjid Al-Ishlah Cilacap
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-200 leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          Pusat ibadah, dakwah, dan pemberdayaan umat. Mari bersama memakmurkan masjid dan mempererat ukhuwah Islamiyah.
        </p>
        
        {/* Button CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#jadwal-sholat"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#008282] hover:bg-[#006666] text-white text-sm font-bold transition-all shadow-lg hover:shadow-teal-900/50"
          >
            Jadwal Sholat
          </a>
          <a
            href="#jadwal-kajian"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-transparent border-2 border-[#008282] text-[#008282] hover:bg-[#008282] hover:text-white text-sm font-bold transition-all"
          >
            Info Kajian
          </a>
        </div>

      </div>

    </section>
  );
};

export default Hero;