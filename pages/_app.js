import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@theme/theme'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '@features/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '@components/layout/Layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'

function MyApp({ Component, pageProps }) {
  const router = useRouter()


  if (router.pathname.startsWith('/dashboard')) {
    return (
      <ChakraProvider theme={theme}>
        <ToastContainer />
        <QueryClientProvider client={queryClient} >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </ChakraProvider>

    )
  }

  return (

    <ChakraProvider theme={theme}>
      <ToastContainer />
      <QueryClientProvider client={queryClient} >
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>


  )

}

export default MyApp
