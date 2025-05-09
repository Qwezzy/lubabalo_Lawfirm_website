import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function NotFound() {
  return (
    <div className="min-h-screen bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="max-w-max mx-auto">
        <main className="sm:flex">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="sm:ml-6"
          >
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                404
              </h1>
              <div className="mt-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Page not found
                </h2>
                <p className="mt-2 text-base text-gray-600">
                  Sorry, we couldn't find the page you're looking for.
                </p>
              </div>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Link
                to="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Go back home
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Contact support
              </Link>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}

export default NotFound; 