import axios from 'axios'

const GITHUB_BASE_URL = 'https://api.github.com/users/'

const getAllRepositories = async (username) => {
    try {
        const res = await axios.get(`${GITHUB_BASE_URL}${username}/repos`)
        const sortedRepos = res.data.sort(
            (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        )
        const latestRepos = sortedRepos.slice(0, 6)
        return latestRepos
    } catch (error) {
        console.error('Github API Error:', error)
        return null
    }
}

export default getAllRepositories
