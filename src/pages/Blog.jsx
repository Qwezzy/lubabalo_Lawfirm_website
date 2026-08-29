import { useState } from 'react';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import { images } from '../data/site';

const categories = ['All', 'Civil Litigation', 'Criminal Law', 'Environmental Law', 'Land Reform Law', 'Family Law', 'Customary Law', 'Personal Injury'];

const covers = [images.documents, images.columns, images.landscape, images.library, images.desk, images.gavel, images.hero, images.capeTown, images.library];

const blogPosts = [
  { id: 1, title: 'Understanding civil litigation in South Africa', excerpt: 'How civil disputes move through South African courts, and what a client should expect at each stage.', author: 'Lubabalo Ntsholo', date: '2025-03-15', category: 'Civil Litigation', readTime: '8 min' },
  { id: 2, title: 'Your rights in criminal proceedings', excerpt: 'The rights of arrested and accused persons, and why early representation changes the shape of a case.', author: 'Lubabalo Ntsholo', date: '2025-03-10', category: 'Criminal Law', readTime: '6 min' },
  { id: 3, title: 'Environmental law and protected areas', excerpt: 'NEMA, assessments and stewardship agreements for communities and landowners.', author: 'Lubabalo Ntsholo', date: '2025-03-05', category: 'Environmental Law', readTime: '7 min' },
  { id: 4, title: 'Land reform: reading section 25', excerpt: 'Rights to land, compensation and the still-developing jurisprudence after 1994.', author: 'Lubabalo Ntsholo', date: '2025-02-28', category: 'Land Reform Law', readTime: '9 min' },
  { id: 5, title: 'Divorce, maintenance and the child\'s best interests', excerpt: 'How family disputes can be resolved without discarding the dignity of the household.', author: 'Lubabalo Ntsholo', date: '2025-02-20', category: 'Family Law', readTime: '5 min' },
  { id: 6, title: 'Customary law in a constitutional court', excerpt: 'Customary marriage, traditional leadership and the duty of courts to take living custom seriously.', author: 'Lubabalo Ntsholo', date: '2025-02-15', category: 'Customary Law', readTime: '10 min' },
  { id: 7, title: 'Personal injury and the Road Accident Fund', excerpt: 'Loss of support and injury claims after a collision — what evidence actually moves a file.', author: 'Lubabalo Ntsholo', date: '2025-02-10', category: 'Personal Injury', readTime: '7 min' },
  { id: 8, title: 'Traditional leadership and land disputes', excerpt: 'Where traditional authority and statute meet, and how research prevents a weak case.', author: 'Lubabalo Ntsholo', date: '2025-02-05', category: 'Customary Law', readTime: '8 min' },
  { id: 9, title: 'Environmental impact assessments, in brief', excerpt: 'What the law requires of an EIA and when an administrative decision can be reviewed.', author: 'Lubabalo Ntsholo', date: '2025-01-30', category: 'Environmental Law', readTime: '6 min' },
].map((post, i) => ({ ...post, image: covers[i] }));

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filtered = selectedCategory === 'All' ? blogPosts : blogPosts.filter((p) => p.category === selectedCategory);

  return (
    <div>
      <Seo
        title="Legal insights"
        description="Notes from Lubabalo Ntsholo Attorneys on litigation, land reform, environmental law, family and customary law in South Africa."
        path="/blog"
        image={images.library}
      />

      <section className="page-hero">
        <img src={images.library} alt="Law books" className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-ink-950/65" />
        <div className="relative container pt-32 pb-20">
          <p className="eyebrow text-gold-400">Insights</p>
          <h1 className="mt-4 text-5xl sm:text-6xl text-white">Writing that earns the consultation.</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm ${
                  selectedCategory === category ? 'bg-ink-900 text-white' : 'bg-white text-ink-700 border border-ink-800/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <motion.article key={post.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-2xl bg-white border border-ink-800/8 shadow-soft">
                <img src={post.image} alt="" className="h-48 w-full object-cover" />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.16em] text-gold-700">{post.category}</p>
                  <h2 className="mt-2 text-2xl">{post.title}</h2>
                  <p className="mt-3 text-ink-700/75 leading-7">{post.excerpt}</p>
                  <p className="mt-4 text-xs text-ink-700/50">{post.author} · {post.readTime}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
