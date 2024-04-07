import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { Logo } from "./components/Logo";

const config: DocsThemeConfig = {
  logo: (
      <Logo />
  ),
  project: {
    link: 'https://github.com/EinStack/glide',
  },
  chat: {
    link: 'https://discord.gg/pt53Ej7rrc',
  },
  docsRepositoryBase: "https://github.com/EinStack/glide-docs",
  footer: {
    text: (
        <span>
            Apache 2.0 {new Date().getFullYear()} ©{' '}
                    <a href="https://nextra.site" target="_blank">
              EinStack
            </a>
        </span>
    )
  },
  toc: {
    backToTop: true
  }
}

export default config
