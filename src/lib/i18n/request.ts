import { getRequestConfig } from 'next-intl/server';
import { set } from 'lodash';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  // Import flat messages
  const flatMessages = (await import(`../../locales/${locale}/common.json`)).default;
  
  // Convert flat structure to nested structure
  const messages = Object.entries(flatMessages).reduce(
    (acc, [key, value]) => set(acc, key, value),
    {}
  );

  return {
    locale,
    messages
  };
});
