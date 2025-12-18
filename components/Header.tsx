"use client"

import { useTranslations } from "next-intl";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";




export default function Header({ locale }: { locale: string }) {

    const t = useTranslations("Navigation");
    return (
        <header className="sticky top-0 z-50 bg-white  dark:bg-slate-900 " role="banner">
            <nav className="" aria-label={t("mainNavigation") || "Main navigation"}>
                {/* logo */}
                <Link href={`/${locale}`}
                    className="flex items-center gap-2 px-4 py-2 text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
                    aria-label={t("homeLabel") || "Go To Home"}>
                    AG
                </Link>
                <div className="md:flex items-center gap-2">
                    <LanguageSelector />
                </div>
            </nav>
        </header>
    );
}