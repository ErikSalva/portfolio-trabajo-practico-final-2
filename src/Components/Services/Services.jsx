import { Box, Flex, Heading, Stack , Text} from '@chakra-ui/react';
import React from 'react';
import CardServices from './CardServices';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'


const Services = () => {
    return (
        <Flex 
            p='5% 15%'
            alignItems={'center'}
            justifyContent={'center'}
            bg='#fcfbf2'
        >
            <Box textAlign={'center'}>
            <Heading
                color={'rgb(50,51,51)'}
                fontSize={{base:'xl', lg:'2xl'}}
                fontWeight={'800'}
                as='h2'
                m={'5% 0'}
                
            >Lo que hago como estudiante de Desarrollo Web</Heading>

            <Box alignItems={'center'} justifyContent={'center'} display={'flex'} >
                <Stack direction={{lg:'row', base:'column'}} alignItems={'strech'} spacing={'10'} > 
                    <CardServices 
                        title={'Desarrollo Frontend'}
                        description={'Tengo experiencia como estudiante en el maquetado básico de sitios web utilizando HTML y CSS, lo que me permite crear interfaces web atractivas y funcionales.'}
                        imageUrl={'../../../public/img/website-maintenance.svg'}
                        color={'#9ea9fe'}
                        
                    ></CardServices>

                    <CardServices
                        title={'Desarrollo con C#'}
                        description={'He trabajado en el desarrollo de aplicaciones de escritorio usando C# y WinForms, lo que me ha brindado una sólida base en la programación orientada a objetos.'}
                        imageUrl={'../../../public/img/developer-team.svg'}
                        color={'#b2fe77'}
                        
                    ></CardServices>

                    <CardServices
                        title={'Gestión de Bases de Datos'}
                        description={'En la facultad, he trabajado con Microsoft SQL Server realizando ABMs (Altas, Bajas y Modificaciones) en bases de datos, adquiriendo experiencia en la gestión y manipulación de datos.'}
                        imageUrl={'../../../public/img/database-svgrepo-com.svg'}
                        color={'#fee063'}
                    ></CardServices>
                </Stack>

            </Box>
           
            </Box>
           
            
        </Flex>
    );
}

export default Services;
