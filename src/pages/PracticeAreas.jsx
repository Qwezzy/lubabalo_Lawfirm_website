import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import { images, practiceAreas } from '../data/site';

function PracticeAreas() {
  return (
    <div>
      <Seo
        title="Practice areas"
        description="Civil and criminal litigation, personal injury, customary law, environmental law, land reform, evictions, family law, and wills and estates."
        path="/practice-areas"
        image={images.documents}
      />

      <section className="page-hero">
        <img src={images.documents} alt="Legal documents on a desk" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-ink-950/70" />
        <div className="relative container pt-32 pb-20">
          <p className="eyebrow text-gold-400">Practice</p>
          <h1 className="mt-4 text-5xl sm:text-6xl text-white max-w-3xl">Nine areas. One standard of papers.</h1>
          <p className="mt-5 max-w-xl text-lg text-white/75">From High Court litigation to a will that must simply be right.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-6 md:grid-cols-2">
          {practiceAreas.map((area, i) => (
            <motion.article
              key={area.slug}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <p className="text-xs text-gold-600 tracking-[0.2em] uppercase">0{i + 1}</p>
              <h2 className="mt-2 text-3xl">{area.title}</h2>
              <p className="mt-4 text-ink-700/80 leading-8">{area.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="container bg-ink-900 text-white rounded-[2rem] px-8 py-12 sm:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="text-3xl text-white">Need a view on a live matter?</h2>
          <Link to="/contact" className="btn-primary">Schedule a consultation</Link>
        </div>
      </section>
    </div>
  );
}

export default PracticeAreas;
