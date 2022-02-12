import axios from "axios"
import React, { useState } from "react"
import { useEffect } from "react"
import { IRepository } from "../../interfaces/repository";
import { TiStarFullOutline } from "react-icons/ti";
import { GoRepoForked } from "react-icons/go";
import '../../css/repositories.css';

export const Repository = () => {

    const [repositories, setRepositories] = useState<IRepository[]>();

    useEffect(() => {
        axios.get(`https://api.github.com/users/f7deat/repos`).then(response => {
            setRepositories(response.data)
        })
    }, [])
    return (
        <div className="py-2">
            <h1 className="h2">My Repositories</h1>
            <div className="font-weight-bold mt-3">Showcase</div>
            <div className="mt-2 repository md:flex flex-wrap bg-gray-100 rounded p-2 mb-4">
                {
                    repositories?.map(repository => (
                        <div className="mb-2 md:w-1/2" key={repository.id}>
                            <div className="p-2 h-full">
                                <div className="bg-white rounded p-4 h-full">
                                    <div className="font-bold mb-4 flex items-center">
                                        <div className="flex-grow text-lg md:text-2xl"><a href={repository.html_url} target="_blank" rel="noreferrer">{repository.name}</a></div>
                                        <div className="text-gray-500 gap-2 flex">
                                            <span className="flex gap-1 items-center">{repository.stargazers_count}<TiStarFullOutline /></span>
                                            <span className="flex gap-1 items-center">{repository.forks_count}<GoRepoForked /></span>
                                        </div>
                                    </div>
                                    <div className="text-gray-400">
                                        {repository?.description}
                                        <div className="language" hidden={repository.language == null}>
                                            <button className={`px-2 text-sm rounded bg-gray-100 ${repository.language?.toLocaleLowerCase()}`}>{repository.language}</button>
                                        </div>
                                    </div>
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