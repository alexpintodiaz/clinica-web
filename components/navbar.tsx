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
      className="nav-professional"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex flex-col justify-start items-start hover-scale" href="/">
            <h1 className="text-3xl font-script font-semibold doctor-name leading-tight">
              Dra. Margarita Reina
            </h1>
            <span className="text-sm font-secondary font-medium text-gold">
              Cirugía Oral y Maxilofacial
            </span>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden md:flex gap-8 justify-start ml-8">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  "text-clinic-slate-600 hover:text-clinic-gold-600 font-secondary font-medium transition-all duration-300",
                  "data-[active=true]:text-clinic-gold-600 data-[active=true]:font-semibold",
                  "hover:transform hover:scale-105",
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
            className="btn-primary hover-lift font-secondary"
            size="sm"
          >
            Agendar Cita
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle className="text-clinic-gold-600" />
      </NavbarContent>

      <NavbarMenu className="nav-professional">
        <div className="mx-4 mt-6 flex flex-col gap-4">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                className="text-clinic-slate-600 hover:text-clinic-gold-600 font-secondary font-medium text-lg transition-colors duration-300"
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <div className="mt-4 pt-4 border-t border-clinic-neutral-200">
            <Button
              as={Link}
              href="/contacto"
              className="btn-primary w-full font-secondary"
              size="md"
            >
              Agendar Cita
            </Button>
          </div>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
