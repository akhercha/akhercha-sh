import {
    Container,
    Box,
    Heading,
    Image,
    Button,
    Link,
    useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
const Page = () => {
    return (
        <Container>
            <Box
                borderRadius="lg"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                p={3}
                mb={6}
                mt={10}
                align="left"
            >
                hello, world! 👋
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Adel K.
                    </Heading>
                    <p>Software Engineer</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    align="center"
                >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100%"
                        display="inline-block"
                        borderRadius="full"
                        width={{ md: 40 }}
                        src="/images/adel.jpg"
                        alt="Profile image"
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </Paragraph>
                <Box align="center" my={4}>
                    <a href='/works'>
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            Portfolio
                        </Button>
                    </a>
                </Box>
            </Section>
            <Section delay={.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1997</BioYear>
                    Born in Bordeaux, France
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Completed Master in Computer Science from 42 Paris
                </BioSection>
                <BioSection>
                    <BioYear>2023 to Present</BioYear>
                    Works as a Software Engineer at Pacmed
                </BioSection>
            </Section>
        </Container>
    )
}

export default Page
