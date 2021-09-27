import axios from "axios"
import React, { useState } from "react"
import { useEffect } from "react"
import { IRepository } from "../../interfaces/repository";
import { TiStarFullOutline } from "react-icons/ti";
import { GoRepoForked } from "react-icons/go";
import '../../css/repositories.scss';

export const Repository = () => {

    const [repositories, setRepositories] = useState<IRepository[]>();

    useEffect(() => {
        axios.get(`https://api.github.com/users/f7deat/repos`).then(response => {
            setRepositories(response.data)
        })
    }, [])
    return (
        <div>
            <h1 className="h2">My Repositories</h1>
            <div>Exclude private repository</div>
            <div className="font-weight-bold mt-3">Showcase</div>
            <div className="mt-2 repository">
                {
                    repositories?.map(repository => (
                        <div className="mb-2">
                            <div className="font-weight-bold name">
                                <div className="flex-grow-1"><a href={repository.html_url}>{repository.name}</a></div>
                                <div className="stat">
                                    <span className="mr-2">{repository.stargazers_count}<TiStarFullOutline/></span>
                                    <span>{repository.forks_count}<GoRepoForked/></span>
                                </div>
                            </div>
                            <div className="description">
                                {repository?.description}
                                <div className="language" hidden={repository.language == null}>
                                    <button className={`item ${repository.language?.toLocaleLowerCase()}`}>{repository.language}</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <h1 className="h2">My Portfolio</h1>
        </div>
    )
}