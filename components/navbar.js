import Logo from './logo'
import { Container, Box, Heading, useColorModeValue } from '@chakra-ui/react'

const Navbar = props => {
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                w="100%"
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="center"
            >
                <Heading
                    margin="auto"
                    as="h1"
                    size="lg"
                    letterSpacing={'tighter'}
                >
                    <Logo />
                </Heading>
            </Container>
        </Box>
    )
}

export default Navbar
