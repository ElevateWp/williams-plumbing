import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Phone, Wrench } from 'lucide-react';
import { CLINIC_INFO, SERVICES } from '@/lib/clinic-data';

export default function HomeHero() {
  const phone = CLINIC_INFO.contact.phone;
  const phoneLink = `tel:${phone.replace(/[^0-9+]/g, '')}`;

  return (
    <section
      aria-label="Williams Plumbing Port Fairy"
      className="relative isolate mb-6 mt-2 flex min-h-[640px] w-full max-w-none shrink-0 items-center overflow-hidden rounded-3xl bg-[#10383D] text-white sm:mt-3 md:min-h-[700px]"
    >
      <Image
        src="/images/williams-plumbing-hero.png"
        alt="Williams Plumbing service vehicle and family"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 1480px"
        className="hero-image-motion object-cover object-[center_36%] opacity-[0.28]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#10383D]/95 via-[#10383D]/78 to-[#10383D]/38 md:via-[#10383D]/62 md:to-[#10383D]/10" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#10383D]/55 via-[#10383D]/10 to-[#10383D]/20" />

      <div className="relative z-10 w-full px-6 pb-12 pt-28 sm:px-10 sm:pb-14 md:px-14 md:pb-16 md:pt-32 lg:px-[6.5%]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="hero-fade-up max-w-[790px] lg:col-span-8">
          <p className="mb-5 flex items-center gap-3 font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-[#35C9BE] sm:text-sm sm:tracking-[0.18em]">
            <span aria-hidden="true" className="h-[3px] w-12 shrink-0 bg-[#20B2AA] sm:w-16" />
            Williams Plumbing · Port Fairy
          </p>
          <h1 className="mb-5 max-w-[850px] font-display text-[clamp(2.9rem,6.6vw,6.6rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-white">
            <span className="block">Plumbing for</span>
            <span className="block text-[#20B2AA]">Port Fairy homes.</span>
          </h1>
          <p className="max-w-[650px] font-body text-base leading-relaxed text-white/75 sm:text-lg md:text-xl">
            From bathroom refits and hot water systems to custom outdoor showers, split-system work and pergola roofing.
          </p>

          <div className="hero-cta-enter mt-7 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">
            <a
              href={phoneLink}
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#20B2AA] px-6 font-body text-sm font-semibold text-white shadow-[0_8px_28px_rgba(0,0,0,0.22)] transition-colors hover:bg-[#35C9BE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:min-h-16 sm:px-9 sm:text-base"
            >
              <Phone aria-hidden="true" size={17} strokeWidth={2.4} />
              Call us: {phone}
            </a>
            <Link
              href="/request-a-quote/"
              className="inline-flex min-h-14 items-center justify-center gap-4 rounded-full border border-white/45 bg-[#10383D]/25 px-6 font-body text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-[#35C9BE] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:min-h-16 sm:px-9 sm:text-base"
            >
              Request a quote
              <ArrowRight aria-hidden="true" size={19} />
            </Link>
          </div>
        </div>

        <div className="hero-slide-in w-full max-w-[500px] rounded-[1.6rem] border border-white/20 bg-[#10383D]/80 p-5 shadow-[0_22px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-7 lg:col-span-4 lg:col-start-9">
          <h2 className="mb-2 flex items-center gap-3 font-display text-xl font-semibold text-white sm:text-2xl">
            <Wrench aria-hidden="true" className="text-[#20B2AA]" size={26} strokeWidth={1.8} />
            Our services
          </h2>
          <p className="mb-5 font-body text-sm leading-relaxed text-white/65 sm:text-base">Choose a service to find out more.</p>
          <div className="divide-y divide-white/15 border-t border-white/15">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}/`}
                className="group flex items-center justify-between gap-4 py-4 font-body text-sm font-medium text-white/90 transition-colors hover:text-[#35C9BE] sm:text-base"
              >
                <span className="flex items-center gap-4">
                  <Wrench aria-hidden="true" size={23} strokeWidth={1.8} className="shrink-0 text-[#35C9BE]" />
                  {service.navLabel}
                </span>
                <ArrowUpRight aria-hidden="true" size={19} className="text-white/55 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#35C9BE]" />
              </Link>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
