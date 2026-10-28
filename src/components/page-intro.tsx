export function PageIntro({ kicker, title, lede }: { kicker: string; title: string; lede: string }) {
  return (
    <header className="bg-hm-navy text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-24">
        <p className="text-xs font-semibold tracking-[0.22em] text-white/70 uppercase">{kicker}</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.12] font-medium text-balance sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-white/85">{lede}</p>
      </div>
    </header>
  );
}
