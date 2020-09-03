import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import './styless.css'
import { RiGitRepositoryFill } from 'react-icons/ri'
import { GiShadowFollower } from 'react-icons/gi'
import { AiFillStar } from 'react-icons/ai'


const GitStats = () => {

  const [state, setState] = useState({
    userInfo: {},
    repos: []
  })

  useEffect(() => {
    async function apisData() {
      const resUser = await api.get('/devlucasalaf')
      const resRepos = await api.get('/devlucasalaf/repos')
      setState({ userInfo: resUser.data, repos: resRepos.data })
    }
    apisData()
  }, [])

  return (
    <div id='containerStats'>
      <h1 id='techCont'>Contribuições Técnicas</h1>
      <p id='techStats'>Github Stats: <RiGitRepositoryFill /> repositories: {state.userInfo.public_repos} / <GiShadowFollower /> followers: {state.userInfo.followers}</p>
      <div id='containerRepos'>
        {state.repos.map(repo => {
          return (
            <div className='reposDiv' id='reposId' key={repo.id}>
              <a href={`https://github.com/${repo.full_name}`}><strong>{repo.full_name}</strong></a>
              <p>Language: {repo.language} / <AiFillStar /> Stars: {repo.startsgazers_count}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GitStats