import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import TextureBackground from '@/components/layout/TextureBackground';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Customer Reviews',
  description: 'Read positive customer feedback for Williams Plumbing Port Fairy, rated 5.0 from 10 Google reviews.',
  pathname: '/testimonials/',
});

const REVIEWS = [
  {
    quote: 'Really pleased with the quality of work and the communication throughout.',
    author: 'Google reviewer',
    detail: 'Quality of work and communication',
  },
  {
    quote: 'He was very efficient and professional, we were blown away with his service!',
    author: 'Google reviewer',
    detail: 'Efficient and professional service',
  },
  {
    quote: 'He hand built the shower and fitted it onto a timber frame, it looks fabulous. We are so excited to use the outdoor shower after a surf or ocean swim.',
    author: 'Tracey Gray',
    detail: 'Outdoor shower',
  },
];

export default function TestimonialsPage() {
  return (
    <div className="flex w-full flex-col bg-paper">
      <section className="relative overflow-hidden border-b border-mist py-16 md:py-24">
        <TextureBackground variant="blog" className="opacity-20" />
        <div className="relative z-10 mx-auto max-w-site px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Customer Reviews', path: '/testimonials/' }]} />
          <div className="mt-8 max-w-3xl">
            <AnimateOnScroll animation="fade-right" duration={0.8}>
              <span className="mb-3 block font-body text-13 font-medium uppercase tracking-wider text-forest-ink/60">Williams Plumbing Port Fairy</span>
              <WordRevealH1 text="Kind words from our customers." />
              <p className="mt-6 max-w-2xl font-body text-17 leading-relaxed text-forest-ink/90 md:text-21">Rated 5.0 from 10 Google reviews. Here are a few of the positive comments customers have shared.</p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      <section className="border-b border-mist bg-paper-secondary py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <div className="mb-10 flex flex-col gap-4 border-b border-mist pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-forest-light">Google reviews</span>
              <h2 className="font-display text-26 text-forest-ink md:text-33">Customer feedback</h2>
            </div>
            <div className="border-l-2 border-greenAccent pl-4">
              <span className="block font-body text-13 font-medium uppercase tracking-wider text-forest-light">Average rating</span>
              <span className="mt-1 block font-body text-12 text-forest-light">5.0 · 10 reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {REVIEWS.map((review, index) => (
              <AnimateOnScroll key={review.author + review.detail} animation="fade-up" delay={index * 0.08} duration={0.8}>
                <article className="h-full border border-mist bg-paper p-6 shadow-sm md:p-7">
                  <div aria-label="5 out of 5 stars" className="mb-4 text-[#087F8C]">★★★★★</div>
                  <blockquote className="font-display text-21 text-forest-ink">“{review.quote}”</blockquote>
                  <div className="mt-6 border-t border-mist pt-4">
                    <span className="font-body text-13 font-semibold text-forest-ink">{review.author}</span>
                    <span className="mt-1 block font-body text-12 text-forest-light">{review.detail}</span>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-forest py-14 text-paper md:py-20">
        <div className="mx-auto flex max-w-site flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center md:px-12">
          <div><span className="mb-2 block font-body text-13 font-semibold uppercase tracking-wider text-paper/65">Williams Plumbing Port Fairy</span><h2 className="font-display text-26 md:text-33">Have a project to discuss?</h2></div>
          <Link href="/contact/" className="inline-flex min-h-12 items-center justify-center border border-paper bg-paper px-6 font-body text-15 font-semibold text-forest transition-colors hover:bg-[#D9F3F1]">Contact Aaron</Link>
        </div>
      </section>
    </div>
  );
}
