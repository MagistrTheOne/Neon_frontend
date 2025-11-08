"use client";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { Home, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Breadcrumbs() {
  const pathname = usePathname();

  // Для главной страницы не показываем breadcrumbs
  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <nav aria-label="Breadcrumb" className="flex items-center space-x-1 text-sm">
        <Breadcrumb>
          <BreadcrumbList className="flex items-center space-x-1">
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-lg",
                  "text-slate-400 hover:text-white hover:bg-white/5",
                  "transition-all duration-200 font-medium"
                )}
              >
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Главная</span>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {pathSegments.map((segment, index) => {
              const href = "/" + pathSegments.slice(0, index + 1).join("/");
              const isLast = index === pathSegments.length - 1;

              return (
                <div key={segment} className="flex items-center">
                  <BreadcrumbSeparator className="mx-2">
                    <ChevronRight className="w-4 h-4 text-slate-600" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage className={cn(
                        "px-3 py-2 rounded-lg font-semibold",
                        "bg-gradient-to-r from-cyan-500/10 to-blue-500/10",
                        "text-white border border-cyan-500/20"
                      )}>
                        {segment.charAt(0).toUpperCase() + segment.slice(1)}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink
                        href={href}
                        className={cn(
                          "px-3 py-2 rounded-lg capitalize font-medium",
                          "text-slate-400 hover:text-white hover:bg-white/5",
                          "transition-all duration-200"
                        )}
                      >
                        {segment}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </div>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </nav>
    </div>
  );
}
