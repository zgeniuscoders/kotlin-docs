// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
import { Title } from './.nuxt/components.d';
export default defineAppConfig({
  docus: {
    title: 'KOTLIN DOCS',
    description: 'Mini documentation kotlin',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      twitter: 'zgeniuscoders',
      github: 'https://github.com/zgeniuscoders/',
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
