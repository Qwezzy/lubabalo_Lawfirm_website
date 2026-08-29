import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import { site, images } from '../data/site';

const qualifications = [
  'LLB (UNISA)',
  'LLM Comparative Constitutional Law (UWC)',
  'MPhil (UCT)',
  'MPhil (UWC)',
  'BTech Environmental Management (Cape Technikon)',
  'National Diploma Horticulture (Peninsula Technikon)',
];

function About() {
  return (
    <div>
      <Seo
        title="About the firm"
        description={`${site.director.name} is the director of ${site.name}, admitted as an Attorney of the High Court in 2024, with an LLM in Comparative Constitutional Law and prior work in Parliament and conservation.`}
        path="/about"
        image={images.library}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: site.director.name,
          jobTitle: 'Director and Attorney',
          worksFor: { '@type': 'LegalService', name: site.name, url: site.url },
          alumniOf: ['University of South Africa', 'University of the Western Cape', 'University of Cape Town'],
        }}
      />

      <section className="page-hero">
        <img src={images.columns} alt="Courthouse columns" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-ink-950/60" />
        <div className="relative container pt-32 pb-20">
          <p className="eyebrow text-gold-400">About</p>
          <h1 className="mt-4 text-5xl sm:text-6xl text-white max-w-3xl">The lawyer, and the practice built around him.</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="eyebrow">History</p>
            <h2 className="mt-3 text-4xl">Established {site.founded}.</h2>
            <p className="mt-6 text-lg leading-8 text-ink-700/80">
              {site.name} was established in {site.founded} by {site.director.name}. He graduated with an LLB from UNISA in 2022 and was admitted as an Attorney of the High Court in 2024.
            </p>
            <p className="mt-4 text-lg leading-8 text-ink-700/80">
              Before law, he worked as a researcher in Parliament and in biodiversity conservation, initiating projects that sit at the join of land reform and protected-area management. That history still shapes the files the firm takes on.
            </p>
          </div>
          <img src={images.gavel} alt="Wooden gavel and law books" className="rounded-3xl h-[26rem] w-full object-cover shadow-soft" />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <img
              src={site.director.image}
              alt={site.director.name}
              className="w-full object-contain bg-parchment-100 rounded-3xl"
            />
          </div>
          <div className="lg:col-span-8">
            <p className="eyebrow">Director</p>
            <h2 className="mt-3 text-4xl">{site.director.name}</h2>
            <p className="mt-2 text-gold-700 font-medium">{site.director.role}</p>
            <p className="mt-6 text-lg leading-8 text-ink-700/80">
              Lubabalo holds an LLM in Comparative Constitutional Law from the University of the Western Cape (2024) and an LLB from UNISA (2022), together with two Master of Philosophy degrees from UCT and UWC, and earlier qualifications in environmental management and horticulture.
            </p>
            <p className="mt-4 text-lg leading-8 text-ink-700/80">
              Specialties include civil and criminal litigation, environmental law, land reform, evictions, family and customary law, personal injury and deceased estates.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {qualifications.map((q) => (
                <span key={q} className="px-3 py-1.5 rounded-full text-xs tracking-wide bg-parchment-100 text-ink-800 border border-ink-800/10">
                  {q}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid md:grid-cols-3 gap-6">
          {[
            { t: 'Excellence', d: 'Current law, careful papers, and solutions that survive contact with a court.' },
            { t: 'Range', d: 'Litigation plus land, environment and customary work in one practice.' },
            { t: 'Dignity', d: 'Family, eviction and estate matters handled so that people leave with their standing intact.' },
          ].map((v, i) => (
            <motion.div
              key={v.t}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card"
            >
              <h3 className="text-2xl">{v.t}</h3>
              <p className="mt-3 text-ink-700/75 leading-7">{v.d}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
