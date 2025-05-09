import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CalendarIcon, UserIcon, TagIcon } from '@heroicons/react/24/outline';

const categories = [
  'All',
  'Civil Litigation',
  'Criminal Law',
  'Environmental Law',
  'Land Reform Law',
  'Family Law',
  'Customary Law',
  'Personal Injury',
];

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Civil Litigation in South Africa',
    excerpt: 'A comprehensive guide to civil litigation processes in South African courts, including the steps involved and what to expect during legal proceedings.',
    author: 'Lubabalo Ntsholo',
    date: '2024-03-15',
    category: 'Civil Litigation',
    image: '/images/blog/civil-litigation.jpg',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'Your Rights in Criminal Proceedings',
    excerpt: 'Essential information about your legal rights during criminal proceedings and how to ensure they are protected throughout the process.',
    author: 'Lubabalo Ntsholo',
    date: '2024-03-10',
    category: 'Criminal Law',
    image: '/images/blog/criminal-law.jpg',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'Environmental Law: Protecting Our Natural Resources',
    excerpt: 'Understanding South Africa\'s environmental laws and how they protect our natural resources and communities.',
    author: 'Lubabalo Ntsholo',
    date: '2024-03-05',
    category: 'Environmental Law',
    image: '/images/blog/environmental-law.jpg',
    readTime: '7 min read',
  },
  {
    id: 4,
    title: 'Land Reform: Understanding Your Rights',
    excerpt: 'A guide to land reform laws in South Africa and how they affect property rights and land ownership.',
    author: 'Lubabalo Ntsholo',
    date: '2024-02-28',
    category: 'Land Reform Law',
    image: '/images/blog/land-reform.jpg',
    readTime: '9 min read',
  },
  {
    id: 5,
    title: 'Family Law: Navigating Divorce and Custody',
    excerpt: 'Expert advice on handling divorce proceedings and child custody arrangements in South African courts.',
    author: 'Lubabalo Ntsholo',
    date: '2024-02-20',
    category: 'Family Law',
    image: '/images/blog/family-law.jpg',
    readTime: '5 min read',
  },
  {
    id: 6,
    title: 'Customary Law in Modern South Africa',
    excerpt: 'Exploring the role of customary law in contemporary South African society and its interaction with common law.',
    author: 'Lubabalo Ntsholo',
    date: '2024-02-15',
    category: 'Customary Law',
    image: '/images/blog/customary-law.jpg',
    readTime: '10 min read',
  },
  {
    id: 7,
    title: 'Personal Injury Claims: What You Need to Know',
    excerpt: 'Understanding the process of filing personal injury claims and securing the compensation you deserve.',
    author: 'Lubabalo Ntsholo',
    date: '2024-02-10',
    category: 'Personal Injury',
    image: '/images/blog/personal-injury.jpg',
    readTime: '7 min read',
  },
  {
    id: 8,
    title: 'The Role of Traditional Leadership in Land Disputes',
    excerpt: 'How traditional leadership structures interact with modern legal systems in resolving land disputes.',
    author: 'Lubabalo Ntsholo',
    date: '2024-02-05',
    category: 'Customary Law',
    image: '/images/blog/traditional-leadership.jpg',
    readTime: '8 min read',
  },
  {
    id: 9,
    title: 'Environmental Impact Assessments: A Legal Guide',
    excerpt: 'Understanding the legal requirements and processes involved in environmental impact assessments.',
    author: 'Lubabalo Ntsholo',
    date: '2024-01-30',
    category: 'Environmental Law',
    image: '/images/blog/environmental-impact.jpg',
    readTime: '6 min read',
  }
];

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover opacity-50"
            src="/images/blog-hero.jpg"
            alt="Law books and documents"
          />
          <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Legal Insights & Resources
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Stay informed with our latest articles and legal updates
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="relative h-48">
                    <img
                      className="w-full h-full object-cover"
                      src={post.image}
                      alt={post.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-600 text-white">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="p-6">
                  <Link to={`/blog/${post.id}`} className="block">
                    <h2 className="text-xl font-bold text-gray-900 hover:text-primary-600 transition-colors duration-200">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="mt-2 text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <UserIcon className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                    <div className="flex items-center">
                      <TagIcon className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="mt-4 inline-flex items-center text-primary-600 hover:text-primary-700"
                  >
                    Read more
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Stay Updated
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Subscribe to our newsletter for the latest legal insights and updates.
              </p>
              <form className="mt-8 sm:flex justify-center">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500 sm:max-w-xs rounded-md"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog; 