import React, { useEffect, useRef, useState } from 'react';

const Youtube = () => {
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
            }, { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            if (sectionRef.current)
                observer.unobserve(sectionRef.current);
        };
    }, []);

    const videoList = [
        {
            id: 1,
            title: "Surah Al Mulk Ayat 1 - 7 | Reciter Nuh Al Mahdy",
            embedUrl: "https://www.youtube.com/embed/UxiiqdrBazM?si=aumfoEZ3cIyGfqNG"
        },
        {
            id: 2,
            title: "Live streaming of Al-Ishlah| Spesial TERAPI RUQYAH 'Rahasia Ketenangan' Jiwa Ustadz Muhammad Faizar",
            embedUrl: "https://www.youtube.com/embed/L1NfdTxYoXo?si=FwSYHiBvLg2HOYVk"
        },
        {
            id: 3,
            title: "Trailer Kajian Pemuda SatNight Periode Desember",
            embedUrl: "https://www.youtube.com/embed/8MmdiVJvp1I?si=vU4oa9JA7KEH7XHz"
        }
    ];

    return (
        <section ref={sectionRef} className="py-16 sm:py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm mb-4">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                        Video
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#062c2c] tracking-tight mb-4">
                        Video Gallery
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base">
                        Saksikan Kajian, Khutbah, dan Kegiatan Masjid Al-Ishlah Cilacap
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {videoList.map((video, index) =>
                    (
                        <div
                            key={video.id}
                            style={{ transitionDelay: `${index * 150 + 200}ms` }}
                            className={`aspect-video w-full rounded-2xl overflow-hidden shadow-lg bg-gray-100 border border-gray-200 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                        >
                            <iframe
                                className="w-full h-full"
                                src={video.embedUrl}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen>
                            </iframe>
                        </div>
                    ))}
                </div>
                <div className={`text-center transiton-all duration-1000 ease-out delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
                    <a
                        href="https://youtube.com/@masjidalishlah-official?si=Zy9Pdf4yNZckT7OQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF0000] hover:bg-red-700 text-white font-bold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                        Kunjungi Channel Youtube Kami
                    </a>
                </div>

            </div>

        </section>
    );
};

export default Youtube;