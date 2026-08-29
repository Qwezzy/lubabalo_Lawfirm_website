import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Seo, { firmJsonLd } from '../components/Seo';
import { site, images, practiceAreas } from '../data/site';

const featured = practiceAreas.slice(0, 6);

function Home() {
  return (
    <div>
      <Seo
        title={`${site.name} | Kuils River & Cape Town Law Firm`}
        description={site.description}
        path="/"
        image={images.hero}
        jsonLd={firmJsonLd()}
      />

      <section className="page-hero min-h-[88vh] flex items-end">
        <img
          src={images.hero}
          alt="Law library with bound volumes"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/25" />
        <div className="relative container pb-20 pt-36">
          <p className="eyebrow text-gold-400">Kuils River · Western Cape</p>
          <h1 className="mt-6 max-w-3xl text-5xl text-white sm:text-6xl lg:text-7xl leading-[1.05]">
            Counsel that holds up in court — and in life.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75 leading-8">
            {site.name} advises individuals and organisations on litigation, land, environment, family and estates.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary">Book a consultation</Link>
            <Link to="/practice-areas" className="btn-ghost">Explore practice areas</Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="eyebrow">The firm</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">A specialist practice with unusual range.</h2>
            <p className="mt-6 text-lg leading-8 text-ink-700/80">
              Established in {site.founded} by {site.director.name}, admitted as an Attorney of the High Court in 2024.
              The director brings an LLM in Comparative Constitutional Law together with years in Parliament and biodiversity conservation.
            </p>
            <p className="mt-4 text-lg leading-8 text-ink-700/80">
              That mix — legislation, land, environment and courtroom work — is unusual in a boutique Cape firm, and it is the point of the practice.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center text-sm font-medium text-gold-700 hover:text-gold-600">
              Meet the director
              <span className="ml-2">→</span>
            </Link>
          </div>
          <div className="relative">
            <img
              src={images.library}
              alt="Legal volumes on timber shelves"
              className="w-full h-[28rem] object-cover rounded-3xl shadow-soft"
            />
            <div className="absolute -bottom-6 -left-4 sm:left-8 bg-ink-900 text-white px-6 py-5 rounded-2xl max-w-xs">
              <p className="font-serif text-2xl text-gold-400">LLB · LLM · MPhil</p>
              <p className="mt-1 text-sm text-white/70">UNISA, UWC and UCT</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="eyebrow">Work</p>
              <h2 className="mt-3 text-4xl">Practice areas</h2>
            </div>
            <Link to="/practice-areas" className="text-sm font-medium text-gold-700">View all areas →</Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((area, i) => (
              <motion.article
                key={area.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="card hover:-translate-y-1 transition-transform"
              >
                <p className="text-xs text-gold-600 tracking-[0.18em] uppercase">0{i + 1}</p>
                <h3 className="mt-3 text-2xl">{area.title}</h3>
                <p className="mt-3 text-ink-700/75 leading-7">{area.summary}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <img src={images.capeTown} alt="Table Mountain and Cape Town" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink-950/70" />
        <div className="relative container grid lg:grid-cols-3 gap-8 text-white">
          {[
            { k: 'Western Cape', v: 'Rooted in Kuils River, appearing across the Cape courts.' },
            { k: 'Research-led', v: 'Customary law, land reform and environmental work grounded in statute and field experience.' },
            { k: 'Direct access', v: 'You deal with the director. Strategy is not handed down a long chain.' },
          ].map((item) => (
            <div key={item.k} className="border border-white/15 bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl text-white">{item.k}</h3>
              <p className="mt-3 text-white/75 leading-7">{item.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container bg-ink-900 text-white rounded-[2rem] px-8 py-14 sm:px-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <p className="eyebrow text-gold-400">Next step</p>
            <h2 className="mt-3 text-4xl text-white">Tell us what you are facing.</h2>
            <p className="mt-4 text-white/70 max-w-xl">A first conversation is the cheapest way to know whether we are the right firm for the matter.</p>
          </div>
          <Link to="/contact" className="btn-primary shrink-0">Schedule a consultation</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
