// import { getRequestConfig } from "next-intl/server";
// import { routing } from "./routing";
// import { headers } from "next/headers";

// export default getRequestConfig(async () => {
//     const header = await headers();
//     const localeFromHeader = header.get("Accept-Language");
//     const currentLocale = localeFromHeader || routing.defaultLocale;

//     try {
//         const messages = (await import(`./messages/${currentLocale}.json`)).default;
//         return {
//             locale: currentLocale,
//             messages: messages.default,
//         };
//     } catch (error) {
//         console.error( "Failed to load messages for locale", currentLocale, error);
//         return {
//             locale: routing.defaultLocale,
//             messages: (await import(`./messages/${routing.defaultLocale}.json`)).default,
//         };
//     }
// });
import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';
 
export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
 
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});