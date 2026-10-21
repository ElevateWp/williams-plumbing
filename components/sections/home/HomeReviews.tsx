import React from 'react';
import Link from 'next/link';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

const SERVICE_HIGHLIGHTS = [
  { title: '“Really pleased with the quality of work and the communication throughout.”', description: 'Five-star Google review · Williams Plumbing Port Fairy' },
  { title: '“He was very efficient and professional, we were blown away with his service!”', description: 'Five-star Google review · Customer feedback' },
  { title: '“He hand built the shower and fitted it onto a timber frame, it looks fabulous.”', description: 'Tracey Gray · Outdoor shower project' },
];

export default function HomeReviews() {
  return (
    <section className="w-full bg-paper-secondary py-20 md:py-28 border-t border-mist">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-12 text-center">
          <span className="font-body text-13 text-forest-light block mb-2 font-medium uppercase tracking-wider">Customer reviews</span>
          <h2 className="font-display text-33 md:text-41 text-forest-ink">Rated 5.0 from 10 Google reviews</h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICE_HIGHLIGHTS.map((item, index) => (
            <AnimateOnScroll key={item.title} animation="fade-up" delay={index * 0.1} duration={0.8}>
              <article className="h-full bg-paper border border-mist p-6 md:p-7 shadow-sm">
                <h3 className="font-display text-21 text-forest-ink mb-4">{item.title}</h3>
                <p className="font-body text-15 text-forest-ink/85 leading-relaxed">{item.description}</p>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
        <div className="mt-9 text-center">
          <Link href="/services/" className="inline-flex items-center gap-2 font-body text-15 font-semibold text-forest hover:text-forest-light underline underline-offset-4 transition-colors">Explore all services <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
  );
}
