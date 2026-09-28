import React, { useState, useEffect, useRef } from "react";

const Instagram = () => {
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
                threshold: 0.1
            }
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            if (sectionRef.current) observe.unobserve(sectionRef.current);
        };
    }, []);

    const feedList = [
        {
            id: 1,
            embedUrl: "https://www.instagram.com/p/Da_-jjJCiUB/embed/"
        },
        {
            id: 2,
            embedUrl: "https://www.instagram.com/p/Dc2MCLXk3oJ/embed/"
        },
        {
            id: 3,
            embedUrl: "https://www.instagram.com/p/DdAvUeezY3u/embed/"
        }
    ];

    return (
        <section ref={sectionRef} className="py-16 sm:py-24 bg-[#f8f9fa] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 font-semibold text-sm mb-4">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.169a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                        </svg>
                        Sosial Media
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#062c2c] tracking-tight mb-4">
                        Instagram <span className="text-black">@masjidalishlahclp</span>
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base font-medium">
                        Ikuti kegiatan terbaru kami di Instagram
                        <a
                            href="https://www.instagram.com/masjidalishlah_clp?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline">
                            @masjidalishlahclp
                        </a>
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {feedList.map((feed, index) => (
                        <div
                            key={feed.id}
                            style={{ transitionDelay: `${index * 150 + 200}ms` }}
                            className={`w-full bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 trasition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <iframe
                                className="w-full h-[480px] sm:h-[520px]"
                                src={feed.embedUrl}
                                frameBorder="0"
                                scrolling="no"
                                allowTransparency="true"
                                allow="encrypted-media"
                                title={`Instagram Feed ${feed.id}`}></iframe>
                        </div>
                    ))}
                </div>
                <div className={`text-center transition-all duration-1000 ease-out delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <a
                        href="https://www.instagram.com/masjidalishlah_clp?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-bold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] hover:opacity-90"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.169a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                        </svg>
                        Kunjungi Instagram Kami
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Instagram;