import { createStitches } from '@stitches/react'

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      white: '#fff',
      gray900: '#121214',
      gray800: '#202024',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',

      green500: '#00875f',
      green300: '#00b37e',

      blue: '#1EA483',
      purple: '#7465D4',
    } as const,
  },

  media: {
    minimumWidth: '(max-width: 1250px)',
    app: '(min-width: 1250px)',
  },
})
