import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeFeaturedTreatments() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#18343A] block mb-2 font-medium uppercase tracking-wider">Plumbing services</span>
          <h2 className="font-display text-33 md:text-41 text-[#18343A]">Property projects, handled with care</h2>
        </AnimateOnScroll>
        <div className="flex flex-col space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6 order-2 lg:order-1">
              <span className="font-body text-13 text-[#18343A] uppercase tracking-wider block mb-2 font-medium">Bathrooms &amp; plumbing</span>
              <h3 className="font-display text-26 md:text-33 text-[#18343A] mb-4">From a bathroom refit to everyday repairs</h3>
              <p className="font-body text-15 md:text-17 text-[#18343A]/80 leading-relaxed mb-6">Talk with Aaron about plumbing repairs, kitchen renovation connections or a bathroom refit in your home.</p>
              <div className="p-4 bg-[#F2FAFA] border-l-4 border-[#20B2AA] mb-6 rounded-sm"><span className="font-body text-13 text-[#18343A]/80"><strong className="text-[#18343A] font-semibold">Before work begins:</strong> Discuss the scope, price and timing with the team.</span></div>
              <Button href="/bathroom-renovations/" variant="ghost" size="md">Explore Bathroom Refits</Button>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm"><Image src="/images/plumbing-repair.jpg" alt="Plumber repairing a pipe" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" /></div>
            </AnimateOnScroll>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6"><div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm"><Image src="/images/plumbing-hot-water.jpg" alt="Plumber checking a hot water system" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div></AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6">
              <span className="font-body text-13 text-[#18343A] uppercase tracking-wider block mb-2 font-medium">Hot water systems</span>
              <h3 className="font-display text-26 md:text-33 text-[#18343A] mb-4">Help with hot water plumbing</h3>
              <p className="font-body text-15 md:text-17 text-[#18343A]/80 leading-relaxed mb-6">Get in touch to discuss a hot water system issue or planned plumbing work at your property.</p>
              <div className="p-4 bg-[#F2FAFA] border-l-4 border-[#20B2AA] mb-6 rounded-sm"><span className="font-body text-13 text-[#18343A]/80"><strong className="text-[#18343A] font-semibold">Discuss your needs:</strong> The team can talk through the work and next steps.</span></div>
              <Button href="/hot-water-systems/" variant="ghost" size="md">Explore Hot Water Systems</Button>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
