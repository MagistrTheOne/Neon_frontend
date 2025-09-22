"use client";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export function Breadcrumbs() {
  const pathname = usePathname();
  
  // Для главной страницы не показываем breadcrumbs
  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter(Boolean);
  
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink 
              href="/" 
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Главная
            </BreadcrumbLink>
          </BreadcrumbItem>
          {pathSegments.map((segment, index) => {
            const href = "/" + pathSegments.slice(0, index + 1).join("/");
            const isLast = index === pathSegments.length - 1;
            
            return (
              <div key={segment} className="flex items-center">
                <BreadcrumbSeparator className="text-gray-600" />
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage className="text-white capitalize">
                      {segment}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink 
                      href={href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors capitalize"
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
    </div>
  );
}
