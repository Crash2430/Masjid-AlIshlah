import React, { useState, useEffect, useRef } from 'react';

const StatCard = ({ icon, endValue, label, isVisible }) => {
    const [count, setCount] =
        useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let startTime = null;
        const duration = 2000;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            const easeOut = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOut * endValue));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [endValue, isVisible]);

    return (
        <div className="flex items-center gap-4 p-4 sm:p-5 bg-slate-50/50 hover:bg-slate-50 border border-gray-100 rounded-xl transition-colors duration-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white shadow-sm border border-gray-100 text-[#008282]">
                {icon}
            </div>
            <div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-[#062c2c] mb-1">
                    {count.toLocaleString('id-ID')}+
                </h4>
                <p className="text-sm text-gray-500 font-medium">
                    {label}
                </p>
            </div>
        </div>
    );
};

const Stats = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new
            IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        if (sectionRef.current) {
                            observer.unobserve(sectionRef.current);
                        }
                    }
                },
                { threshold: 0.1 }
            );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            if (sectionRef.current)
                observer.unobserve(sectionRef.current);
        };
    }, []);

    const statData = [
        {
            label: 'Jamaah Aktif',
            value: 1500,
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
        {
            label: 'Program Berjalan',
            value: 15,
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332-.477-4.5-1.253" />
                </svg>
            )
        },
        {
            label: 'Penerima Manfaat',
            value: 1000,
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            )
        },
        {
            label: 'Jumlah Mitra',
            value: 100,
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <section ref={sectionRef} className="relative z-20 py-8 sm:py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-3 sm:p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                        {statData.map((stat, index) => (
                            <StatCard
                                key={index}
                                icon={stat.icon}
                                endValue={stat.value}
                                label={stat.label}
                                isVisible={isVisible}
                            />
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Stats;