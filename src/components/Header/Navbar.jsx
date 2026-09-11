import React, { useState, useEffect } from 'react';
import logomasjid from '../../assets/LogoMasjidPutih.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Jadwal Sholat', href: '#jadwal-sholat', id: 'jadwal-sholat' },
    { name: 'Jadwal Kajian', href: '#jadwal-kajian', id: 'jadwal-kajian' },
    { name: 'Kepengurusan', href: '#kepengurusan', id: 'kepengurusan' },
    { name: 'Kegiatan Masjid', href: '#kegiatan-masjid', id: 'kegiatan-masjid' },
    { name: 'Artikel Islami', href: '#artikel-islami', id: 'artikel-islami' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const scrollPosition = window.scrollY + 150;
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#008282] shadow-md py-3 backdrop-blur-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <div className="flex items-center gap-8 lg:gap-12">
            
            {/* Logo dan Tulisan  */}
            <a href="#home" className="flex items-center gap-2.5 group">
              <img
                src={logomasjid}
                alt="Logo Masjid Al-Ishlah"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-md transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col whitespace-nowrap">
                <span className="text-[12px] font-bold text-white tracking-tight leading-none">
                  MASJID AL-ISHLAH
                </span>
                <span className="text-[8px] font-medium text-teal-100 uppercase tracking-widest mt-0.5">
                  CILACAP
                </span>
              </div>
            </a>
            
            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveSection(link.id)}
                    className={`group relative text-[12px] tracking-wide whitespace-nowrap py-1.5 transition-colors duration-200 ${
                      isActive
                        ? 'font-bold text-white'
                        : 'font-medium text-white/70 hover:text-white active:text-teal-200'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-white rounded-full transition-all duration-300 ${
                        isActive
                          ? 'w-full opacity-100'
                          : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                      }`}
                    />
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Tombol Donasi */}
          <div className="hidden xl:flex items-center">
            <a
              href="#donasi"
              className="px-5 py-1.5 rounded-full bg-white text-[#008282] hover:text-[#004d4d] active:text-[#003333] text-[12px] font-bold transition-colors duration-200"
            >
              Donasi
            </a>
          </div>
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none p-1.5"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden mt-4 bg-[#008282] rounded-xl p-4 shadow-xl border border-teal-600/40 space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block text-[12px] tracking-wide py-1.5 transition-colors duration-200 ${
                    isActive
                      ? 'font-bold text-white border-l-2 border-white pl-2'
                      : 'font-medium text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="#donasi"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center w-full py-2.5 mt-3 rounded-full bg-white text-[#008282] hover:text-[#004d4d] active:text-[#003333] font-bold text-[12px] transition-colors duration-200"
            >
              Donasi
            </a>
          </div>
        )}

      </div>
    </header>
  );
};

export default Navbar;