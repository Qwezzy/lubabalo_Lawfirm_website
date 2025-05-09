import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const practiceAreas = [
  {
    title: 'Civil Litigation',
    description: 'In our personal and business lives, there will always be conflict between individuals, between individuals and juristic persons, or between juristic persons. Civil litigation is the manner of resolving legal disputes between private entities, be it individuals or juristic entities. At Lubabalo Ntsholo Attorneys, we have honed our skills in this aspect of the law, and are able to provide cutting edge solutions to our clients.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Criminal Law',
    description: 'South Africa is rife with crime. This fact notwithstanding, everyone charged of a crime is presumed innocent until proven guilty. All arrested persons have a right to legal representation, regardless of the crime they have committed. This is the cornerstone of our quest for a just society. We keep up with the most up to date developments in the field for criminal law, and as such are able to provide the best possible solutions to those who may find themselves in trouble with the law.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
      </svg>
    ),
  },
  {
    title: 'Personal Injury Claims',
    description: "South Africa's death toll from road accidents is far higher than the world average. While many people die on the roads, thousands more are left with life changing injuries. At Lubabalo Ntsholo Attorneys, we have the skills and resolve to act on your behalf in lodging your claims with the Road Accident Fund, either for loss of support in case a loved one dies as a result of a car accident, or in case you're directly involved in the car accident.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Customary Law',
    description: 'The Constitution recognizes customary law and the courts are obligated to interpret disputes arising out of customary law. Further, the Constitution recognizes the role of traditional leaders too. The institution of traditional leadership is by its very nature a very contested terrain. We are able to provide solutions to customary law disputes backed by deeply engaged research. Whether in the recognition of customary marriages, or the resolution of traditional leadership disputes, Lubabalo Ntsholo Attorneys are your go to attorneys.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Environmental Law',
    description: 'Everyone has a right to a clean environment. This is a constitutionally enshrined right, given legislative expression through the National Environmental Management Act, and a number of other subsidiary legislation. At Lubabalo Ntsholo Attorneys, we combine our experience in the sector, together with our acquired legal expertise to provide the most up to date solutions to environmental law disputes. This ranges from environmental assessments, to challenging administrative actions related to these, to protected area management, including the development of biodiversity stewardship agreements, and the declaration of certain areas as protected area, (National Parks, Nature Reserves)',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Land Reform Law',
    description: 'Section 25 of the Constitution is one of the longest sections in the Bill of Rights, providing a constitutional vision for land reform in the country. Inherent in the land reform programme are a large variety of disputes on rights to land, compensation for expropriation, evictions. The country\'s jurisprudence on land reform is still developing, even though largely eviction heavy because of lack of legal expertise in this field in the country.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Evictions',
    description: 'Our law on evictions has been taken through some dramatic changes since 1994. Considering our history as a country, these changes were necessary to safeguard the dignity of people, particularly those who were treated as less than human by the previous regime. As of now, the law provides that no one can be evicted without a court order, this is regardless of the lawfulness of their occupation. This is done to deal with the problem of arbitrary evictions. And as recent history would have it, Cape Town is notorious for evicting poor people from land and from homes. We are able to provide quality legal solutions to both owners or persons in charge of the property, and to occupiers to provide quality legal advice and litigation on evictions.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: 'Family Law and Divorce',
    description: 'The sanctity of the family does not insulate this institution from disputes. Whether it be divorce, maintenance, custody of children, or disputes in relation to the validity of the marriage itself; there are always disputes inherent in families. We are well versed in the law as it relates to these disputes, and are able to provide lasting solutions that aim to preserve the dignity of the family, while affirming the rights of our clients.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Wills and Estates',
    description: 'A will provides you with the certainty you need that in the event of your death, your estate will devolve as per your wishes. It is the most legally secure manner of safeguarding the interests of your loved ones. We will draft your will to reflect your wishes in the event of death, and keep it in safe storage. We are also the go to lawyers to administer the estate of your deceased family members and ensure that the estate is liquidated and distributed in as quick a manner as is legally possible.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  }
];

function PracticeAreas() {
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
            src="/images/practice-areas-hero.jpg"
            alt="Law books and scales of justice"
          />
          <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Practice Areas
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Comprehensive legal solutions for all your needs
          </p>
        </div>
      </div>

      {/* Practice Areas Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => (
              <motion.div
                key={area.title}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-primary-600 mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Need legal assistance?</span>
            <span className="block text-primary-200">Contact us today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PracticeAreas; 