import {styled} from "@/styles";

export const Main = styled('main', {
    width: '100%',
    margin: '0 auto',
    height: 'calc(7.75rem - 100vh)',
    display: 'flex',
    backgroundColor: '$white'
})

export const Carrousel = styled('div', {
    flex: 1
})

export const CarrouselArrow = styled('div',{
    height: '100vh',
    width: '8.5rem',
    display: 'flex',
    alignItems: 'center'
})