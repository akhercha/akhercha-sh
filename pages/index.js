import {
    Container,
    Box,
    Heading,
    Image,
    List,
    Button,
    ListItem,
    Text,
    useColorModeValue,
    SimpleGrid
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import getAllRepositories from '../libs/github-requests'
import Repo from '../components/repo'
import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5'
import { useState, useEffect } from 'react'

const Page = () => {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        getAllRepositories('akhercha')
            .then(data => {
                console.log(data)
                setRepos(data)
            })
            .catch(error =>
                console.error('Failed to load repositories:', error)
            )
    }, [])

    return (
        <Container>
            <Box
                borderRadius="lg"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                p={3}
                mb={8}
                mt={10}
                align="left"
            >
                &nbsp; idk <span style={{ fontStyle: 'italic' }}>how</span> you
                landed here, but eh,{' '}
                <span style={{ fontWeight: 'bold', color: '#f7862f' }}>
                    welcome
                </span>{' '}
                🫡
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Adel
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

            <Section delay={0.2}>
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
                    (didn&apos;t even made this layout, it&apos;s from
                    <a
                        style={{
                            fontStyle: 'italic',
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
            </Section>

            <Section delay={0.4}>
                <Heading as="h3" variant="section-title">
                    interests
                </Heading>
                <Paragraph>
                    music, video games, beers, blockchains, books...
                </Paragraph>
            </Section>

            <Section delay={0.6}>
                <Heading as="h3" variant="section-title">
                    say hi
                </Heading>
                <List>
                    <ListItem>
                        <a href="https://github.com/akhercha" target="_blank">
                            <Button variant="ghost" leftIcon={<IoLogoGithub />}>
                                <Text opacity={0.7}>akhercha</Text>
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
                                leftIcon={<IoLogoLinkedin />}
                            >
                                <Text opacity={0.7}>adel.kherchache</Text>
                            </Button>
                        </a>
                    </ListItem>
                    <ListItem>
                        <a href="mailto: akherchache@pm.me" target="_blank">
                            <Button variant="ghost" leftIcon={<IoMail />}>
                                <Text opacity={0.7}>akherchache@pm.me</Text>
                            </Button>
                        </a>
                    </ListItem>
                </List>
            </Section>

            <Section delay={0.8}>
                <Heading as="h3" variant="section-title" color="white">
                    latest public things
                </Heading>
                <SimpleGrid
                    mt={6}
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={3}
                >
                    {repos &&
                        repos.map(repo => <Repo key={repo.id} {...repo} />)}
                </SimpleGrid>
            </Section>
        </Container>
    )
}

export default Page
