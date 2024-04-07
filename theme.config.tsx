import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="images/glide.png"
        alt="Logo Image"
        style={{ width: '50px', marginRight: '10px' }}
      />
      <span>Glide</span>
    </div>
  ), 
  project: {
    link: 'https://github.com/EinStack/glide',
  },
  chat: {
    link: 'https://discord.gg/pt53Ej7rrc',
  },
}

export default config
