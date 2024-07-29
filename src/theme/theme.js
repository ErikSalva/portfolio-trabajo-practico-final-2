import { extendTheme, transition } from '@chakra-ui/react'
import { Component } from 'react'

const styles ={
    global: {
        'html, body':{
            bg: '#fcfbf2',
            fontFamily: `'Poppins', sans-serif`,
            
        },
    },

}

const Link = {
    baseStyle: {
        color: '#131212',
        transition: 'all 0.5s',
         minWidth: '100px',
        _hover: {
            fontWeight: 'bold',
            textDecorationColor: '#18e738',
            textDecorationThickness: '0.2em',
            textUnderlineOffset: '0.3em',
        },
        fontSize: 'sm'

    }
}

const Button = {
    baseStyle: {
        fontWeight: 'light',
    }
}


export const theme = extendTheme({styles, components:{Link, Button}})
