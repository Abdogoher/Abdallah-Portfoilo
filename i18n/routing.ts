import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
    defaultLocale: "en", // default locale
    locales: ["en", "ar"], // en and ar
});

export const {Link , redirect , usePathname , useRouter} = createNavigation(routing);