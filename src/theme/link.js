import { extendTheme } from '@chakra-ui/react'
import { color } from 'framer-motion'



const Link = {
    baseStyle: {
        color: 'red',

    }
}


export const linktheme = extendTheme({components: {Link}})
