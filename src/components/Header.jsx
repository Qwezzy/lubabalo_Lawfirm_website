import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { site } from '../data/site';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Practice Areas', href: '/practice-areas' },
  { name: 'Insights', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const onDark = !isScrolled && location.pathname !== '/404';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <Disclosure
      as="nav"
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-parchment-50/95 backdrop-blur-md shadow-[0_1px_0_rgba(11,18,32,0.08)]' : 'bg-transparent'
      }`}
    >
      {({ open }) => (
        <>
          <div className="container">
            <div className="flex justify-between h-[4.75rem]">
              <Link to="/" className="flex items-center gap-3">
                <img className="h-12 w-auto bg-white" src="/logo.jpg" alt={site.name} />
                <span className={`hidden sm:block text-sm font-medium tracking-wide ${onDark ? 'text-white' : 'text-ink-900'}`}>
                  {site.name}
                </span>
              </Link>

              <div className="hidden lg:flex lg:items-center lg:gap-8">
                {navigation.map((item) => {
                  const active = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`text-sm tracking-wide transition-colors ${
                        active
                          ? onDark
                            ? 'text-gold-400'
                            : 'text-gold-700'
                          : onDark
                            ? 'text-white/75 hover:text-white'
                            : 'text-ink-700/70 hover:text-ink-900'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <Link to="/contact" className="btn-primary">
                  Book a consultation
                </Link>
              </div>

              <div className="flex items-center lg:hidden">
                <Disclosure.Button className={`p-2 ${onDark ? 'text-white' : 'text-ink-800'}`}>
                  <span className="sr-only">Open main menu</span>
                  {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden bg-parchment-50 border-t border-ink-800/10">
            <div className="px-5 py-4 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={`block px-3 py-2 text-base ${
                    location.pathname === item.href ? 'text-gold-700' : 'text-ink-800'
                  }`}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Disclosure.Button as={Link} to="/contact" className="btn-primary mt-3 w-full">
                Book a consultation
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Header;
