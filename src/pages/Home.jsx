import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    title: 'Civil Litigation',
    description: 'Expert resolution of legal disputes between private entities, providing cutting-edge solutions for individuals and businesses.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Criminal Law',
    description: 'Strong defense representation ensuring your rights are protected, with up-to-date knowledge of criminal law developments.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
      </svg>
    ),
  },
  {
    title: 'Environmental Law',
    description: 'Comprehensive environmental law solutions, from assessments to protected area management, backed by extensive sector experience.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Land Reform Law',
    description: 'Expert guidance in land reform matters, handling disputes on rights to land, compensation, and expropriation.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    content: "The team's expertise and dedication made a difficult situation much more manageable. I couldn't be more grateful for their support.",
    author: "Sarah Johnson",
    role: "Corporate Client",
  },
  {
    content: "Professional, responsive, and truly caring. They guided me through my divorce with compassion and expertise.",
    author: "Michael Chen",
    role: "Family Law Client",
  },
  {
    content: "Their attention to detail and strategic approach helped achieve the best possible outcome in my case.",
    author: "David Rodriguez",
    role: "Criminal Defense Client",
  },
];

function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover opacity-50"
            src="/images/hero.svg"
            alt="Law firm office"
          />
          <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Lubabalo Ntsholo Attorneys
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Providing comprehensive legal solutions since 2025. We specialize in civil and criminal litigation, environmental law, land reform, and more.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Our Firm
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Lubabalo Ntsholo Attorneys was established in 2024 by Mr Lubabalo Ntsholo. Our director is one of the most extensively educated lawyers in the country, bringing extensive knowledge and experience to find lasting solutions to everyday legal problems.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                We provide legal solutions to a range of legal problems, specializing in civil and criminal litigation, administration of deceased estates, land reform law, environmental law, evictions, family law, customary law, and personal injury law.
              </p>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700"
                >
                  Learn more about our firm
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <img
                className="rounded-lg shadow-xl"
                src="/images/about-preview.svg"
                alt="Law firm office"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Practice Areas Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Practice Areas
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive legal solutions for all your needs
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="text-primary-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/practice-areas"
              className="inline-flex items-center text-primary-600 hover:text-primary-700"
            >
              View all practice areas
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Client Testimonials
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              What our clients say about our services
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <div className="text-gray-600 italic mb-4">"{testimonial.content}"</div>
                <div className="font-medium text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              Contact us today for a consultation and let us help you with your legal needs.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 