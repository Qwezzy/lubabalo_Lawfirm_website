import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

function NotFound() {
  return (
    <div className="min-h-screen bg-parchment-50 grid place-items-center px-6 pt-28 pb-16">
      <Seo title="Page not found" description="The requested page does not exist on the Lubabalo Ntsholo Attorneys website." path="/404" />
      <div className="max-w-lg text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 text-5xl">This page is not on the roll.</h1>
        <p className="mt-4 text-ink-700/75">The address may have moved, or it was never filed.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link to="/" className="btn-primary">Return home</Link>
          <Link to="/contact" className="btn-secondary">Contact the firm</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
