"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Check } from "lucide-react";
import { locales } from "@/i18n";

const localeNames = {
  en: "English",
  ru: "Русский",
  ae: "English (AE)",
} as const;

export function LanguageSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const t = useTranslations();

  const switchLocale = (newLocale: string) => {
    // Store in localStorage for persistence
    localStorage.setItem("preferred-locale", newLocale);

    // Get the current path without locale prefix
    const pathWithoutLocale = pathname.replace(/^\/(en|ru|ae)/, "") || "/";

    // Navigate to the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="glass-morphism border-white/20 hover:border-cyan-400/50 px-3"
        >
          <Globe className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">{t('lang.switch')}</span>
          <span className="sm:hidden">{currentLocale.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass-morphism border-white/20">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => switchLocale(locale)}
            className="flex items-center gap-2 cursor-pointer hover:bg-white/10"
          >
            {currentLocale === locale && <Check className="w-4 h-4 text-cyan-400" />}
            <span className={currentLocale === locale ? "text-cyan-400" : "text-white"}>
              {localeNames[locale]}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
