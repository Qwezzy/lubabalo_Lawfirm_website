import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const attorneys = [
  {
    name: 'Lubabalo Ntsholo',
    role: 'Director',
    bio: 'Lubabalo graduated with his Bachelor of Laws (LLB) degree at the University of South Africa in 2022, and was admitted as an Attorney of the High Court in 2024. He holds a Master of Laws (LLM) in Comparative Constitutional Law from the University of the Western Cape (2024), and has extensive experience in legislation making, policy development, programme and project management.',
    image: '/images/attorneys/lubabalo-ntsholo.jpg',
    specialties: ['Civil Litigation', 'Criminal Law', 'Environmental Law', 'Land Reform Law'],
    qualifications: [
      'LLB (UNISA)',
      'LLM (UWC)',
      'MPhil (UCT)',
      'MPhil (UWC)',
      'Btech: Environmental Management (Cape Technikon)',
      'National Diploma: Horticulture (Peninsula Technikon)'
    ]
  }
];

const values = [
  {
    title: 'Excellence',
    description: 'We provide cutting edge solutions to our clients with the most up-to-date legal expertise.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Comprehensive Expertise',
    description: 'Our team combines extensive legal knowledge with practical experience in various sectors.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Client Focus',
    description: 'We are committed to finding lasting solutions to everyday legal problems while preserving our clients dignity.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

function About() {
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
            src="/images/about-hero.jpg"
            alt="Law firm office interior"
          />
          <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About Our Firm
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Providing comprehensive legal solutions since 2025
          </p>
        </div>
      </div>

      {/* History Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our History
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Lubabalo Ntsholo Attorneys was established in 2025 by Mr Lubabalo Ntsholo. The firm provides legal solutions to a range of legal problems, specializing in civil and criminal litigation, administration of deceased estates, land reform law, environmental law, evictions, family law, customary law, and personal injury law.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Our director, Lubabalo Ntsholo, is one of the most extensively educated lawyers in the country, bringing extensive knowledge and experience to find lasting solutions to everyday legal problems.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <img
                className="rounded-lg shadow-xl"
                src="/images/firm-history.jpg"
                alt="Law firm history"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The principles that guide our practice
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <motion.div
                key={value.title}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="text-primary-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Attorneys Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Meet our experienced legal professionals
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {attorneys.map((attorney) => (
              <motion.div
                key={attorney.name}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative w-full" style={{ paddingBottom: '133.33%' }}>
                  <img
                    className="absolute inset-0 w-full h-full object-contain"
                    src={attorney.image}
                    alt={attorney.name}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{attorney.name}</h3>
                  <p className="text-primary-600 font-medium">{attorney.role}</p>
                  <p className="mt-4 text-gray-600">{attorney.bio}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900">Qualifications:</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {attorney.qualifications.map((qualification) => (
                        <span
                          key={qualification}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800"
                        >
                          {qualification}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900">Specialties:</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {attorney.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 