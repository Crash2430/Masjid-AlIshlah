import React, {useState, useEffect, useRef} from 'react';
import fotomasjid from '../../assets/Masjid.png';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect (() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Kolom Kiri - Teks & Informasi */}
          <div
          className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <p className="text-[#008282] text-sm font-bold tracking-widest uppercase mb-4">
              Tentang Masjid Al-Ishlah Cilacap
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              Sekilas Tentang Masjid Al-Ishlah Cilacap
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              Masjid Al-Ishlah Cilacap adalah sebuah Masjid yang berlokasi di Jl. Cerme No.24, Wanasari, Sidanegara, Kec. Cilacap Tengah, Kabupaten Cilacap, Jawa Tengah 53211
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              Dibawah naungan Yayasan Sosial Al-Irsyad Cilacap, masjid al-ishlah berlokasi sangat strategis karena berdiri di tengah kota serta tidak jauh dari kampus yang ada di cilacap, salah satunya adalah Universitas Al-Irsyad Cilacap.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
              Masjid Al Ishlah Cilacap juga hadir untuk melayani umat selama 24 jam setiap hari dengan berbagai fasilitas yang tersedia yaitu : Tempat Istirahat bagi musafir, Melayani setoran hafalan Al-Qur'an, Kegiatan qiyamullail, Menyediakan Teh, kopi & jahe susu gratis, serta Wifi 24/7 gratis
            </p>
            
            {/* CTA */}
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

          {/* Kolom Foto Masjid */}
          <div
          className={`relative w-full h-[350px] sm:h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl group transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} >
            <img
              src={fotomasjid}
              alt="Masjid Al-Ishlah Cilacap"
              className="w-full h-full object-cover object-[center_100%] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
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