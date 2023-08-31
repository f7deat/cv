import axios from "axios"
import React, { useState } from "react"
import { useEffect } from "react"
import { IRepository } from "../../interfaces/repository";
import { TiStarFullOutline } from "react-icons/ti";
import { GoRepoForked } from "react-icons/go";
import Technologies from "../../components/technologies";

export const Repository = () => {

    const [repositories, setRepositories] = useState<IRepository[]>();

    const fetchData = () => {
        axios.get(`https://api.github.com/users/f7deat/repos`).then(response => {
            setRepositories(response.data);
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="py-2">
            <h1 className="h2">My Repositories</h1>
            <div className="font-bold mt-3 flex justify-between mb-4">
                <div>Showcase</div>
                <button type="button" className="hover:text-blue-500" onClick={() => fetchData()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                </button>
            </div>
            <div className="mt-2 repository grid md:grid-cols-2 gap-4 bg-gray-100 rounded p-2 mb-4">
                {
                    repositories?.map(repository => (
                        <div key={repository.id}>
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
                                            <Technologies data={[repository.language]} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}