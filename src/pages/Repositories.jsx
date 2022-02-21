import React, { useEffect, useState } from 'react'
import { Header, Main } from '../components'

export default function Repositories() {

    const [respositories, setRepositories] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( async () => {
        const response = await fetch('https://api.github.com/users/vinicius-maker/repos')
        const data = await response.json();
        setRepositories(data)
    }, []);

    useEffect(() => {
        const filtered = respositories.filter( repo => repo.favorite );
        document.title = `Você tem ${filtered.length} favoritos`;
    }, [respositories])
    return ( 
        <>
            <Header>react-repositories</Header>
            <Main respositories={respositories}
                setRepositories={setRepositories}
            />
        </>
    )
}
