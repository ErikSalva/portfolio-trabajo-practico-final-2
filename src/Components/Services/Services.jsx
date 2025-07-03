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
            id='services'
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
                <Stack direction={{xl:'row', base:'column'}} alignItems={'strech'} spacing={'10'} > 
                    <CardServices
                        title={'Frontend'}
                        description={
                            'Desarrollo interfaces web con React, HTML, CSS y JavaScript, creando experiencias modernas, responsivas y usables.'
                        }
                        imageUrl={'/img/website-maintenance.svg'}
                        color={'#9ea9fe'}
                        ></CardServices>

                        <CardServices
                        title={'Backend'}
                        description={
                            'Desarrollo APIs y servicios con Node.js y Express, aplicando buenas prácticas y arquitectura escalable.'
                        }
                        imageUrl={'/img/developer-team.svg'}
                        color={'#b2fe77'}
                        ></CardServices>

                        <CardServices
                        title={'Bases de Datos'}
                        description={
                            'Experiencia en bases de datos relacionales como SQL Server y MySQL, y bases no relacionales como MongoDB.'
                        }
                        imageUrl={'/img/database-svgrepo-com.svg'}
                        color={'#fee063'}
                        ></CardServices>

                        <CardServices
                        title={'Aplicaciones de Escritorio'}
                        description={
                            'Aprendido en la facultad, desarrollo con C# y WinForms, y bases sólidas en programación orientada a objetos.'
                        }
                        imageUrl={'/img/website-maintenance.svg'}
                        color={'#fca311'}
                        ></CardServices>
                </Stack>

            </Box>
           
            </Box>
           
            
        </Flex>
    );
}

export default Services;
