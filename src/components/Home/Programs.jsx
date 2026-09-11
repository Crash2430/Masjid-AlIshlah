import React from 'react';

const Programs = () => {
  const programList = [
    {
      title: 'Shubuh Menggapai Berkah',
      tag: 'SOSIAL',
      desc: 'Kegiatan Tahsin Al-Quran,Kajian Hadist, dan Makan Pagi Bersama',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      id: '',
      bidang: '',
      title: 'Kajian Rutin',
      tag: 'DAKWAH',
      desc: 'Kajian Rutin mulai dari Kajian Spesial Ba\'da Subuh, Kajian Rutin Ba\'da Maghrib, dan Kajian Buka Puasa Senin & Kamis',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
    {
      id: '',
      bidang: '',
      title: 'PGTPQ/TPQ/PBQ',
      tag: 'Pendidikan',
      desc: 'Lorem ipsum dolor sit amet consectetur...',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      id: '04',
      bidang: 'BIDANG',
      title: 'BUMM Mandiri',
      tag: 'BUMM',
      desc: 'Lorem ipsum dolor sit amet consectetur...',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0V8a2 2 0 012-2h0a2 2 0 012 2v3m-4 0h4" />
        </svg>
      ),
    },
    {
      id: '05',
      bidang: 'BIDANG',
      title: 'Media & Siar',
      tag: 'MEDIA',
      desc: 'Lorem ipsum dolor sit amet consectetur...',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#062c2c] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#008282]/20 border border-[#008282]/40 text-[#33baba] text-xs font-bold tracking-wider uppercase mb-4">
            Program Unggulan Masjid Al-Ishlah Cilacap
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Dari Masjid Kita Kembali
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          </p>
        </div>

        {/* Grid 5 Kartu Program */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {programList.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#008282] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-white/10 text-[#33baba] group-hover:bg-[#008282] group-hover:text-white flex items-center justify-center transition-all duration-300 mb-6">
                  {item.icon}
                </div>

                {/* ID / Bidang Tag */}
                <div className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-2">
                  {item.id} / {item.bidang}
                </div>

                {/* Judul Bidang */}
                <h3 className="text-lg font-bold text-white mb-4">
                  {item.title}
                </h3>

                {/* Tag Badge */}
                <div className="inline-block px-2.5 py-1 rounded bg-white/10 text-[10px] font-bold tracking-wider text-teal-200 uppercase mb-3">
                  {item.tag}
                </div>

                {/* Deskripsi */}
                <p className="text-xs text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Programs;