import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@theme/theme'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '@features/api'

function MyApp({ Component, pageProps }) {
  return (

    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient} >
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>


  )

}

export default MyApp
