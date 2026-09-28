import React from 'react';
import { FiExternalLink, FiMapPin } from 'react-icons/fi';

const Location = () => {
    const gmapsUrl = "https://maps.app.goo.gl/HmcrLib6hWkzPRFx6";

    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.7297830404636!2d109.0188142!3d-7.712116999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6512bf27347331%3A0x47cc4b95cf131831!2sMasjid%20Al-Ishlah%20Al-Irsyad!5e0!3m2!1sid!2sid!4v1789551714603!5m2!1sid!2sid";

    return (
        <section className="py-12 lg:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Title Section dengan Garis Bawah Accent */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 inline-block relative">
                        Lokasi Masjid Al-Ishlah Cilacap
                        <span className="block h-1.5 bg-[#062c2c] w-16 mx-auto mt-2 rounded-full"></span>
                    </h2>
                </div>

                {/* Container Utama Maps */}
                <div className="relative w-full h-[450px] sm:h-[500px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">

                    {/* 1. Interactive Google Maps (Fitur Zoom In / Out & Scroll) */}
                    <iframe
                        title="Lokasi Masjid Al-Ishlah Cilacap"
                        src={mapEmbedUrl}
                        className="w-full h-full border-0"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                    {/* 2. Tombol "Buka di Maps" (Pojok Kiri Atas) */}
                    <a
                        href={gmapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 left-4 bg-white hover:bg-gray-50 text-gray-800 text-xs font-bold px-4 py-2.5 rounded-xl shadow-md border border-gray-200 flex items-center gap-2 transition-all hover:scale-105 z-10"
                    >
                        Buka di Maps
                        <FiExternalLink className="w-3.5 h-3.5 text-[#008282]" />
                    </a>

                    {/* 3. Shape Merah Info Lokasi (Pojok Kanan Bawah) - Diklik langsung ke GMaps */}
                    <a
                        href={gmapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-4 right-4 sm:right-6 left-4 sm:left-auto sm:max-w-md bg-[#082c2c] hover:bg-[#082c2c] text-white p-4 sm:p-5 rounded-2xl shadow-xl border border-red-900/30 flex items-start gap-3.5 transition-all hover:scale-[1.02] active:scale-[0.98] z-10 group cursor-pointer"
                    >
                        {/* Icon Pin Lokasi */}
                        <div className="p-2.5 bg-white/10 rounded-xl text-white group-hover:bg-white/20 transition-colors flex-shrink-0 mt-0.5">
                            <FiMapPin className="w-5 h-5" />
                        </div>

                        {/* Informasi Alamat */}
                        <div>
                            <h4 className="text-sm font-extrabold text-white mb-1 flex items-center gap-1.5">
                                Masjid Al-Ishlah Cilacap
                            </h4>
                            <p className="text-xs text-red-100/90 leading-relaxed font-medium">
                                Jl. Cerme No.24, Sidanegara, Kec. Cilacap Tengah, Kabupaten Cilacap, Jawa Tengah 53223
                            </p>
                        </div>
                    </a>

                </div>

            </div>
        </section>
    );
};

export default Location;