import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Practice Areas', href: '/practice-areas' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener
  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      {({ open }) => (
        <>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex items-center">
                <Link to="/" className="flex-shrink-0 flex items-center">
                  <img
                    className="h-20 w-auto"
                    src="/logo.jpg"
                    alt="Law Firm Logo"
                  />
                </Link>
              </div>

              {/* Desktop navigation */}
              <div className="hidden md:flex md:items-center md:space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`${
                      location.pathname === item.href
                        ? 'text-primary-600'
                        : 'text-gray-700 hover:text-primary-600'
                    } px-3 py-2 text-sm font-medium transition-colors duration-200`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="btn-primary"
                >
                  Schedule Consultation
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="flex items-center md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={`${
                    location.pathname === item.href
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                  } block px-3 py-2 rounded-md text-base font-medium`}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Disclosure.Button
                as={Link}
                to="/contact"
                className="block w-full text-center btn-primary mt-4"
              >
                Schedule Consultation
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Header; 