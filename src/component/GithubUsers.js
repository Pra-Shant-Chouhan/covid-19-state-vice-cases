import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const GithubUsers = () => {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const response = await fetch('https://api.github.com/users')
        setUsers(await response.json())

    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            <h1 >List of Top Github Users</h1>
            <div className="container-fluid mt-5">
                <div className="row text-center">
                    {
                        users.map((curElem) => {
                            return (

                                <div className="col-10 col-md-4 mt-5" >
                                    <div className="card p-2">
                                        <div className="d-flex align-items-center">
                                            <div className="image"> <img src={curElem.avatar_url} alt='image OF DEVLOPERS' className="rounded" width="155" /> </div>
                                            <div className="ml-3 w-100">
                                                <h4 className="mb-0 mt-0 textLeft">{curElem.login}</h4>
                                                {/* <span className="text-left">{type }</span> */}
                                                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                    <div className="d-flex flex-column">
                                                        <span className="articles">Articles</span> <a href={curElem.gists_url} alt="nothing" /> </div>
                                                    <div className="d-flex flex-column">
                                                        <span className="followers" >Followers</span> <a href={curElem.followers_url} alt="nothing" />  </div>
                                                    <div className="d-flex flex-column">
                                                        <span className="rating">Rating</span> <a href={curElem.followers_url}/>  </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default GithubUsers
