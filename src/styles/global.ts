import { globalCss, styled } from '.'
import { keyframes } from '@stitches/react'

const show = keyframes({
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  '*:link, *:active': {
    textDecoration: 'none',
  },

  main: {
    opacity: 0,
    transform: 'translateY(100px)',
    animation: `${show} 500ms forwards`,
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray900',
    color: '$gray100',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  picture: {
    display: 'grid',
    placeItems: 'center',
    width: '100%',
    height: '100%',
    position: 'relative',

    img: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
  },
})

export const ApplicationContainer = styled('div', {
  '@minimumWidth': {
    '& :not(.warning)': {
      display: 'none',
    },

    '.warning': {
      backgroundColor: 'black',
      color: 'white',
      height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem',
      flexDirection: 'column',
      gap: '2rem',

      p: {
        textAlign: 'center',
        display: 'initial',
      },
    },
  },

  '@app': {
    '.warning': {
      display: 'none',
    },
  },
})
