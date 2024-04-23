import React from 'react'
import {Card as NavCard, Cards as NavCards, DocsThemeConfig} from 'nextra-theme-docs'
import { Logo } from "@components/Logo";
import { Card, Cards } from "@markdown/Cards";
import {Footer} from "@components/Footer";

const config: DocsThemeConfig = {
  primaryHue: 165,
  primarySaturation: {dark: 100, light: 85},
  logo: (
      <Logo />
  ),
  search: {
    placeholder: "Search...",
  },
  project: {
    link: 'https://github.com/EinStack/glide',
  },
  chat: {
    link: 'https://discord.gg/pt53Ej7rrc',
  },
  docsRepositoryBase: "https://github.com/EinStack/glide-docs",
  footer: {
    text: (
        <Footer />
    )
  },
  sidebar: {
    toggleButton: true
  },
  editLink: {
    text: "Edit this page on GitHub",
  },
  toc: {
    backToTop: true
  },
  components: {
    Card,
    Cards,
    NavCard,
    NavCards,
  },
}

export default config
