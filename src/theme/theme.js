import { extendTheme, textDecoration, transition } from '@chakra-ui/react'
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

    variants: {
        nav: {
            color: '#131212',
            transition: 'all 0.3s',
             minWidth: '100px',
            _hover: {
                fontWeight: 'bold',
                textDecorationColor: '#18e738',
                textDecorationThickness: '0.2em',
                textUnderlineOffset: '0.3em',
            },
            fontSize: 'sm',
            fontWeight:'500'
        },
        v1:{
            bg: '#18e738', // Color de fondo
            p: '7px 30px', // Padding: 7px arriba y abajo, 30px a los lados
            borderRadius: 'md', // Radio de borde
            textDecoration: 'none', // Sin subrayado
            color:'white', // Color del texto
            fontWeight:'bold', // Peso de la fuente
            fontSize:'sm', // Tamaño de fuente, si tienes la variable en CSS
            transition:'all 0.5s', // Transición de todos los cambios en 0.5s
            _hover:{
                bg: '#ff6253', // Cambia el color de fondo en hover
                textDecoration: 'none',
            },
        },

        v2:{

            bg: 'white', // Color de fondo
            p: '7px 40px', // Padding: 7px arriba y abajo, 40px a los lados
            borderRadius: '5px', // Radio de borde
            textDecoration: 'none', // Sin subrayado
            color: '#ff6253', // Color del texto
            fontWeight: 'bold', // Peso de la fuente
            fontSize: 'sm', // Tamaño de fuente, si tienes la variable en CSS
            border: 'solid 1px #ff6253', // Borde sólido de 1px con color #ff6253
            transition: 'all 0.5s', // Transición de todos los cambios en 0.5s
            _hover: {
              bg: '#ff6253', // Cambia el color de fondo en hover
              color: 'white', // Cambia el color del texto en hover
              textDecoration: 'none',
            },
        }

    }
}

const Button = {
    baseStyle: {
        fontWeight: 'light',
    }
}


export const theme = extendTheme({styles, components:{Link, Button}})
