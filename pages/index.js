import {
    Container,
    Box,
    Heading,
    Image,
    List,
    Button,
    ListItem,
    useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import {
    IoLogoGithub,
    IoLogoTwitter,
    IoLogoDiscord,
    IoLogoLinkedin
} from 'react-icons/io5'
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
                &nbsp; idk <span style={{ opacity: '0.5' }}>how</span> you
                landed here, but eh, welcome 🫡
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
                    about
                </Heading>
                <Paragraph>
                    curious guy talking to computer since too much time now.
                    this website showcases the zenith of my creative flair.
                    <br />
                    <br />
                </Paragraph>
                <Paragraph style={{ fontSize: '13px', textAlign: 'right' }}>
                    (didn't even made this layout, it's from
                    <a
                        style={{
                            fontStyle: 'italic',
                            color: 'orange',
                            opacity: 0.7
                        }}
                        href="https://www.youtube.com/watch?v=bSMZgXzC9AA"
                        target="_blank"
                    >
                        {' '}
                        this amazing tutorial
                    </a>
                    )
                </Paragraph>
                <Box align="center" my={4}>
                    <a href="/works"></a>
                </Box>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    say hi
                </Heading>
                <List>
                    <ListItem>
                        <a href="https://github.com/akhercha" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="orange"
                                leftIcon={<IoLogoGithub />}
                            >
                                akhercha
                            </Button>
                        </a>
                    </ListItem>
                    <ListItem>
                        <a
                            href="https://twitter.com/adailesdepoulet"
                            target="_blank"
                        >
                            <Button
                                variant="ghost"
                                colorScheme="orange"
                                leftIcon={<IoLogoTwitter />}
                            >
                                adailesdepoulet
                            </Button>
                        </a>
                    </ListItem>
                    <ListItem>
                        <a href="https://discord.com/" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="orange"
                                leftIcon={<IoLogoDiscord />}
                            >
                                Aihe#7869
                            </Button>
                        </a>
                    </ListItem>
                    <ListItem>
                        <a
                            href="https://www.linkedin.com/in/adel-kherchache/"
                            target="_blank"
                        >
                            <Button
                                variant="ghost"
                                colorScheme="orange"
                                leftIcon={<IoLogoLinkedin />}
                            >
                                adel.kherchache
                            </Button>
                        </a>
                    </ListItem>
                </List>
            </Section>
        </Container>
    )
}

export default Page
