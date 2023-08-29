import { Box, Heading, Link, Icon, Divider, Flex, Tag } from '@chakra-ui/react'
import { IoLogoGithub, IoTimeSharp, IoCodeSharp } from 'react-icons/io5'

const formatDate = dateString => new Date(dateString).toLocaleDateString()

const Repo = repo => {
    return (
        <Box
            key={repo.id}
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            boxShadow="xl"
            bg="darkgray.800"
            color="white"
        >
            <Flex alignItems="center" mb="3">
                <Icon as={IoLogoGithub} w={6} h={6} />
                <Heading as="h6" size="md" ml={2}>
                    <Link isExternal href={repo.html_url} target="_blank">
                        {repo.name}
                    </Link>
                </Heading>
            </Flex>
            <Divider mb="4" />
            <Flex mt={2}>
                <Tag size="sm">{repo.language || 'Unknown'}</Tag>
            </Flex>
        </Box>
    )
}

export default Repo
