
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter, Tajawal } from "next/font/google";
import Header from "@/components/Header";
import { notFound } from "next/navigation";
import "../globals.css";
import { routing } from "@/i18n/routing";

// English font
const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});
// Arabic font
const tajawal = Tajawal({
  variable: "--font-tajawal",
  display: "swap",
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  subsets: ["arabic"],
});
export default async function RootLayout({
  children,
  params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
  }) {
  
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = await getMessages();
  const direction = locale === "ar" ? "rtl" : "ltr";
  const fontclass = locale === "ar" ? tajawal.variable : inter.variable;
  
  return (
    <html lang={locale} dir={direction} className={fontclass}>
      <body className="min-h-screen bg-linear-to-br from-slate-50 via-purple-50/30 to-pink-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <NextIntlClientProvider messages={messages}>
          <div className="relative min-h-screen">
            {/* Background decorations */}
            <div
              className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
              aria-hidden="true"
            >
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-300/20 dark:bg-pink-500/10 rounded-full blur-3xl"></div>
            </div>

            <Header locale={locale} />
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
