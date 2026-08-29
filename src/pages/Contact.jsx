import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Seo from '../components/Seo';
import { site, images } from '../data/site';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Consultation request — ' + data.name)}&body=${encodeURIComponent(`${data.message}\n\n${data.name}\n${data.email}\n${data.phone || ''}`)}`;
      toast.success('Your email client is opening so we can receive the message.');
      reset();
    } catch (error) {
      toast.error('Could not open mail. Please email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Seo
        title="Contact"
        description={`Consult ${site.name} in ${site.address.locality}. Call ${site.phone} or write to ${site.email}.`}
        path="/contact"
        image={images.desk}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: `Contact ${site.name}`,
          url: `${site.url}/contact`,
        }}
      />

      <section className="page-hero">
        <img src={images.desk} alt="Consultation desk" className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-ink-950/65" />
        <div className="relative container pt-32 pb-20">
          <p className="eyebrow text-gold-400">Contact</p>
          <h1 className="mt-4 text-5xl sm:text-6xl text-white">A first conversation, without theatre.</h1>
          <p className="mt-5 max-w-xl text-lg text-white/75">Tell us the matter. We will tell you plainly whether we can help.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid lg:grid-cols-12 gap-12">
          <form onSubmit={handleSubmit(onSubmit)} className="lg:col-span-7 card space-y-5">
            <h2 className="text-3xl">Write to the firm</h2>
            <div>
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input id="name" {...register('name', { required: 'Name is required' })} className="mt-1 block w-full rounded-lg border-ink-800/15 bg-parchment-50 px-4 py-3 focus:border-gold-500 focus:ring-gold-500" />
              {errors.name && <p className="mt-1 text-sm text-red-700">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input id="email" type="email" {...register('email', { required: 'Email is required' })} className="mt-1 block w-full rounded-lg border-ink-800/15 bg-parchment-50 px-4 py-3 focus:border-gold-500 focus:ring-gold-500" />
              {errors.email && <p className="mt-1 text-sm text-red-700">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium">Phone</label>
              <input id="phone" type="tel" {...register('phone')} className="mt-1 block w-full rounded-lg border-ink-800/15 bg-parchment-50 px-4 py-3 focus:border-gold-500 focus:ring-gold-500" />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea id="message" rows={5} {...register('message', { required: 'Message is required' })} className="mt-1 block w-full rounded-lg border-ink-800/15 bg-parchment-50 px-4 py-3 focus:border-gold-500 focus:ring-gold-500" />
              {errors.message && <p className="mt-1 text-sm text-red-700">{errors.message.message}</p>}
            </div>
            <button type="submit" disabled={isSubmitting} className="btn-primary">
              {isSubmitting ? 'Opening…' : 'Send message'}
            </button>
          </form>

          <aside className="lg:col-span-5 space-y-6">
            <div className="card">
              <h2 className="text-3xl">Chambers</h2>
              <dl className="mt-6 space-y-5 text-ink-700/80">
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-gold-700">Phone</dt>
                  <dd className="mt-1"><a href={site.phoneHref} className="hover:text-ink-900">{site.phone}</a></dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-gold-700">Email</dt>
                  <dd className="mt-1"><a href={`mailto:${site.email}`} className="hover:text-ink-900">{site.email}</a></dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-gold-700">Address</dt>
                  <dd className="mt-1">
                    {site.address.street}<br />
                    {site.address.locality}<br />
                    {site.address.postalCode}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-gold-700">Hours</dt>
                  <dd className="mt-1 space-y-1">
                    {site.hours.map((h) => <div key={h}>{h}</div>)}
                  </dd>
                </div>
              </dl>
            </div>
            <img src={images.capeTown} alt="Cape Town and Table Mountain" className="rounded-3xl h-56 w-full object-cover" />
          </aside>
        </div>
      </section>
    </div>
  );
}

export default Contact;
