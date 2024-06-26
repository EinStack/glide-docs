import React from 'react'
import {Card as NavCard, Cards as NavCards, Steps, DocsThemeConfig} from 'nextra-theme-docs'
import { Logo } from "@components/Logo";
import { Card, Cards } from "@markdown/Cards";
import {Footer} from "@components/Footer";
import {DarkOnly, LightOnly} from "@markdown/ThemeContent";
import {Head} from "@components/Head";
import {SEO} from "@components/SEO";
import {Info, Note, Warning, Tip, Important, Check} from "@markdown/Callouts";
import {titleRenderer} from "@components/TopNav";
import { GithubMenuBadge } from '@/components/GitHubBadge';

const config: DocsThemeConfig = {
  primaryHue: 165,
  primarySaturation: {dark: 100, light: 85},
  logo: (
      <Logo />
  ),
  search: {
    placeholder: "Search...",
  },
  chat: {
    link: 'https://discord.gg/K2CqmBhk4Z',
  },
  docsRepositoryBase: "https://github.com/EinStack/glide-docs",
  footer: {
    text: (
        <Footer />
    )
  },
  navbar: {
    extraContent: <GithubMenuBadge />
  },
  sidebar: {
    toggleButton: true,
    titleComponent: titleRenderer,
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
    LightOnly,
    DarkOnly,
    Steps,
    Info,
    Warning,
    Note,
    Tip,
    Important,
    Check,
  },
  // SEO
  useNextSeoProps: SEO,
  head: Head
}

export default config
