import { useLocale } from "next-intl";

import Hero from "@/sections/Hero";


export default function Home() {
  const locale = useLocale();
  return (
    <main id="main-content" className="focus:outline-none" tabIndex={-1}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-lg"
      >
        Skip to main c~ontent
      </a>
        <Hero locale={locale} />
    </main>
  );
}
