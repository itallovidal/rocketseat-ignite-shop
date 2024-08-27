import { styled } from '@/styles'

export const Main = styled('main', {
  maxWidth: '76rem',
  width: '100%',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '36rem  1fr',

  // paddingTop: '1.75rem',
  // paddingBottom: '2rem',
})

export const PictureBox = styled('picture', {
  height: '41rem',
  backgroundImage: 'linear-gradient(180deg, $blue, $purple)',
  borderRadius: 10,
})

export const ProductInfo = styled('section', {
  paddingLeft: '4.5rem',
  display: 'flex',
  flexDirection: 'column',

  h2: {
    color: '$green300',
    fontSize: '2rem',
    fontWeight: 'lighter',
    marginBottom: '2.5rem',
  },

  p: {
    lineHeight: 1.6,
    flexGrow: 1,
  },

  button: {
    justifySelf: 'end',
    padding: 'calc(20px + 1ch)',
    backgroundColor: '$green500',
    borderRadius: 5,
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: '500ms',

    '&:hover': {
      backgroundColor: '$green300',
    },
  },
})
