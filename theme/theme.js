
import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
    colors: {
        main: "beige",
        light: "rgb(255,255,255,.3)"
    },
    styles: {
        global: {
            body: {
            },
            button: {
                _hover: {
                    bg: "none"
                }
            },
        },
    },

})


export default theme;