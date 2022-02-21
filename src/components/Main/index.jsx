import React from 'react'

export function Main({
    respositories,
    setRepositories
}) {

    function handleFavorite (id) {
        const newRepositories = respositories.map( repo => {
            return repo.id === id ? {...repo, favorite: !repo.favorite } : repo
        });

        setRepositories(newRepositories)
    }

    return (
        <main>
            <h1 className='p-2 text-center justify-center font-semibold text-lg'>Repositorios GitHub</h1>
            <ul className='border m-2 p-2 text-left'>
                {respositories.map((repo, index) => (
                    <li className='border' key={repo.id}>
                        {++index}- {repo.name}{repo.favorite && <span className='text-blue-300 m-3'>(Favorito)</span>}
                        <button 
                            className='border-blue-300 m-5 p-1 flex flex-row border-2 rounded-full border-opacity-80 text-blue-300' 
                            onClick={() => handleFavorite(repo.id)}
                        >Favoritar
                        </button>
                    </li>
                ))}
            </ul>
        </main>
    )
}
