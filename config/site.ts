export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Free Dimension",
  description: "El one piece.",
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Portales",
      href: "/emulacion",
    },

    {
      label: "Series",
      href: "/series",
    },

    {
      label: "Peliculas",
      href: "/peliculas",
    },
    /*     {
      label: "Tutoriales",
      href: "/tutoriales",
    }, */
  ],

  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
