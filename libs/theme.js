import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#f0e7db', '#0c0c0d')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: '20',
                textUnderlineOffset: 6,
                textDecorationColor: '#f7862f',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
            }
        }
    },
}

const fonts = {
    heading: "'M PLUS Rounded 1c'"
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false
}

const theme = extendTheme({ config, styles, components, fonts })

export default theme
