import React, { useState } from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Box,
    Flex, 
    Text,
    border,
    Input,
    Textarea,
    Button,
    VStack,
    Alert,
    AlertIcon,
  } from '@chakra-ui/react'

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { color } from 'framer-motion';


const FormContact = () => {

    const [successMessage, setSuccessMessage] = useState('');

    return (
        <Box w={{base: '100%', lg:'45%'}}  >
            <Text                        
                color={'rgb(50,51,51)'}
                fontSize={{lg:'xl'}}
                fontWeight={'800'}
                as='h3'
                mb={'4'}
                
            >Dejame un mensaje</Text>

            <Formik
                initialValues={{name:'', email:'', message:''}}

                validationSchema={Yup.object({
                    name: Yup.string().required('El nombre es obligatorio'),
                    email: Yup.string().required('El correo electrónico es obligatorio').email('Correo electrónico inválido'),
                    message: Yup.string().required('El mensaje es obligatorio')
                })}

                onSubmit={({ resetForm })=>{
                    setSuccessMessage('¡Tu mensaje ha sido enviado exitosamente!'),
                    resetForm();
                }}
            >
            {({
                values,
                handleSubmit,
                handleChange,
                errors,
                touched,
                handleBlur,
            })=>(
                
                <Form onSubmit={handleSubmit}>
                    <VStack w={{base: '100%', lg:'80%'}} spacing={'4'}>
                        
                        <FormControl isInvalid={errors.name && touched.name}>
                            <FormLabel  color={'#abacac'}>Nombre completo</FormLabel>
                            <Input 
                            bg='white' id='name' 
                            placeholder='Erik Salvatierra' 
                            value={values.name} type='text' 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                            <FormErrorMessage>{errors.name}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.email && touched.email}>
                            <FormLabel color={'#abacac'} >Dirección de correo electrónico</FormLabel>
                            <Input 
                            bg='white' 
                            id='email' 
                            placeholder='example@gmail.com' 
                            value={values.email} 
                            type='text' 
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            />
                            <FormErrorMessage>{errors.email}</FormErrorMessage>
                        </FormControl>
                        
                        <FormControl isInvalid={errors.message && touched.message} >
                            <FormLabel color={'#abacac'}>Mensaje</FormLabel>
                            <Textarea 
                            bg='white'
                            name="message"
                            placeholder="Tu mensaje"
                            rows={4}
                            resize="none"
                            id='message'
                            onChange={handleChange}
                            value={values.message}
                            onBlur={handleBlur}
                            />
                            <FormErrorMessage>{errors.message}</FormErrorMessage>

                        </FormControl>
                        <Flex
                            justifyContent={'flex-end'}
                            alignItems={'center'}
                            w={'100%'}
                            mt={'5%'}
                        >
                            <Button type="submit" colorScheme="purple" variant={'loadmore'}>
                                ENVIAR
                            </Button>
                        </Flex>
                    </VStack>
                    {successMessage && (
                        <Alert status='success' mt='4'>
                            <AlertIcon />
                            {successMessage}
                        </Alert>
                    )}
                </Form>
                

            )}
            </Formik>


        </Box>
    );
}

export default FormContact;
