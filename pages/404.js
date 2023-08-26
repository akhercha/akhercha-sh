import NextLink from 'next/link'

import {
    Box,
    Text,
    Heading,
    Container,
    Divider,
    Button
} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container mt={20}>
            <Heading as="h1">😱 404: Not Found</Heading>
            <br></br>
            <Text>The page you&apos;re looking for does not exist.</Text>
            <Divider my={12} />

            <Box my={12} align="center">
                <NextLink href="/" passHref>
                    <Button colorScheme="orange">Return to Home</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound
