import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  return (
    <HeroUINavbar 
      maxWidth="xl" 
      position="sticky" 
      className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-cyan-100"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex flex-col justify-start items-start" href="/">
            <h1 className="text-2xl font-bold text-cyan-600 leading-tight">
              Margarita Reina
            </h1>
            <span className="text-sm font-medium text-cyan-500">
              Cirugía Oral y Maxilofacial
            </span>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden md:flex gap-8 justify-start ml-8">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  "text-cyan-700 hover:text-cyan-600 font-medium transition-colors",
                  "data-[active=true]:text-cyan-600 data-[active=true]:font-semibold",
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex">
          <Button
            as={Link}
            href="/contacto"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold"
            size="sm"
          >
            Agendar Cita
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle className="text-cyan-600" />
      </NavbarContent>

      <NavbarMenu className="bg-white/95 backdrop-blur-sm">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                className="text-cyan-700 hover:text-cyan-600 font-medium"
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
