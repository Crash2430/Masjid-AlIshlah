import React, { useState, useEffect, useRef } from 'react';
import fotoMasjid from '../../assets/FotoMasjid.png';
import fotoSmb from '../../assets/Program Masjid/HpArfa (3).jpeg';
import fotoKajian from '../../assets/Program Masjid/KajianRutin.jpeg';
import fotoTpq from '../../assets/Program Masjid/TPQ (3).jpeg';
import fotoSholat from '../../assets/Program Masjid/SholatBerjamaah.jpg';
import fotoBukaPuasa from '../../assets/Program Masjid/HPHakim (5).jpeg';

const Programs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
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

  const programList = [
    {
      title: 'SMB',
      desc: 'Kegiatan Shubuh Menggapai Berkah yang diisi dengan Membaca Al-Quran, Kajian Hadist, dan Sarapan bersama',
      image: fotoSmb,
    },
    {
      title: 'Kajian',
      desc: "Kajian Rutin mulai dari Kajian Spesial Ba'da Subuh, Kajian Rutin Ba'da Maghrib, dan Kajian Jelang Buka Puasa Senin & Kamis",
      image: fotoKajian,
    },
    {
      title: 'TPQ AL-ISHLAH',
      desc: "Kegiatan Taman Pendidikan Al-Quran untuk semua usia mulai dari anak-anak hingga lanjut usia, serta pelatihan untuk pengajar TPQ",
      image: fotoTpq,
      objectPos: 'object-center',
    },
    {
      title: 'SHOLAT BERJAMAAH',
      desc: 'Pelaksanaaan ibadah sholat fardhu 5 waktu secara berjamaah tepat waktu di Masjid Al-Ishlah.',
      image: fotoSholat,
    },
    {
      title: 'BUKA PUASA BERSAMA',
      desc: 'Kegiatan buka puasa sunnah senin kamis, ayyamul bidh, serta puasa ramadhan',
      image: fotoBukaPuasa,
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 text-white relative overflow-hidden bg-[#062c2c]">
      {/* Background Section Utama */}
      <div
        className="absolute inset-0 bg-cover bg-[center_20%] bg-no-repeat"
        style={{ backgroundImage: `url(${fotoMasjid})` }}
      >
        <div className="absolute inset-0 bg-[#062c2c]/85 backdrop-blur-[3px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#008282]/30 border border-[#008282]/50 text-[#33baba] text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            Program Unggulan Masjid Al-Ishlah Cilacap
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Dari Masjid Kita Kembali
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Berbagai kegiatan dan program pelayanan umat untuk membangun masyarakat yang religius, mandiri, dan berakhlaqul karimah.
          </p>
        </div>

        {/* Grid 5 Kartu Program */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {programList.map((item, index) => {
            // JIKA KARTU MEMILIKI GAMBAR (Hanya Title, Desc, dan Image)
            if (item.image) {
              return (
                <div
                  key={index}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                  className={`relative min-h-[300px] sm:min-h-[340px] rounded-2xl overflow-hidden group border border-white/20 shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                  {/* Foto Latar Kartu */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full object-cover ${item.objectPos || 'object-[center_35%]'
                      } transition-transform duration-700 group-hover:scale-105`}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/95" />

                  {/* Konten Teks: Hanya Title & Desc */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-left z-10">
                    <h3 className="text-xl font-extrabold text-white mb-1 group-hover:text-teal-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-200 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            }

            // KARTU STANDAR LAINNYA
            return (
              <div
                key={index}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
                className={`bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 hover:border-[#008282] hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between group shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-white/10 text-[#33baba] group-hover:bg-[#008282] group-hover:text-white flex items-center justify-center transition-all duration-300 mb-6 shadow-inner">
                    {item.icon}
                  </div>

                  {/* Bidang Tag */}
                  {item.bidang && (
                    <div className="text-xs font-semibold text-teal-200/70 tracking-wider uppercase mb-2">
                      {item.bidang}
                    </div>
                  )}

                  {/* Judul Bidang */}
                  <h3 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  {/* Tag Badge */}
                  {item.tag && (
                    <div className="inline-block px-2.5 py-1 rounded bg-[#008282]/30 text-[10px] font-bold tracking-wider text-teal-200 uppercase mb-3 border border-[#008282]/40">
                      {item.tag}
                    </div>
                  )}

                  {/* Deskripsi */}
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Programs;