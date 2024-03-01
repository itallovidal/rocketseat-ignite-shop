import {styled} from "@/styles";

export const Main = styled('main', {
    width: '100%',
    margin: '0 auto',
    height: 'calc(100vh - 7.75rem)',
    display: 'flex',
    position: 'relative',
})

export const Carrousel = styled('div', {
    flex: 1,
    display: 'flex',
    overflow: 'scroll',
    gap: '3rem',
    paddingInline: '8.5rem',

    '-ms-overflow-style': 'none',
    scrollbarWidth: 'none',
    scrollbarHeight: 'none',

    '&::-webkit-scrollbar':{
        display: 'none',
    }
})

export const CarrouselArrow = styled('section', {
    height: '100vh',
    width: '8.5rem',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    position: 'absolute',
    zIndex: 10,
    cursor: 'pointer',

    variants:{
        justify: {
            end: {
                right: 0,
                justifyContent: 'end',
                background: 'linear-gradient(90deg, transparent, $gray900)',
            },
            start: {
                background: 'linear-gradient(90deg, $gray900, transparent)',
                left: 0,
                justifyContent: 'flex-start'
            },
        }
    }

})

export const Product = styled('div', {
    minWidth: '43.5rem',
    height: '41rem',
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'linear-gradient(180deg, $blue, $purple)',
    borderRadius: 4,
    overflow: 'hidden',
    cursor: 'pointer',

    '&:hover > footer':{
        transform: 'translateY(0%)',
    }
})

export const ProductFooter = styled('footer',{
    margin: '4px',
    background: '$gray800',
    opacity: .9,
    padding: 'calc(2rem + 1ch)',
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transform: 'translateY(110%)',
    transition: '500ms',

})

export const ProductName = styled('p', {
    textTransform: 'capitalize',
    color: 'white',
    textDecoration: 'none',
})

export const Price = styled('p', {
    color: '$green300',
    textDecoration: 'none',
    fontSize: '1.5rem',
    fontWeight: 'bolder'
})