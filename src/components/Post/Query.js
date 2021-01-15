import React, { useEffect, useState } from "react";
import forumFetch from "../../utils/forumFetch";

import { Category } from '../../constant';
import AllQueries from './allQueries';


import './styles.scss';

const Query = () => {
    const [query, setQuery] = useState('');
    const [user, setUser] = useState({
        id: null,
        name: null,
        profile: null
    });
    const [topic, setTopic] = useState('');
    const [allQueries, setAllQueries] = useState([]);
    
    useEffect(() => {
        updateUserDetails()
    }, [])

    const updateUserDetails = async() => {
        const { id, name, profile } = JSON.parse(localStorage.getItem("userDetails"))
        await getAllqueries(id);
        setUser((prvState) => (
            {
                ...prvState,
                id,
                name,
                profile
            }
        ))
    }

    const getAllqueries = async (id) => {
        forumFetch(`api/query/getAllQueriesByUserId/${id}`)
        .then((res) => {
            if(res.data) {
                setAllQueries(res.data)
            } else {
                alert("Somethig went wrong")
            }
        }).catch((err) => {
            alert(err.message)
        });
    }

    const addComment = () => {
        const data = {
            topic: topic,
            issue: query,
            userId: user.id
        };

        forumFetch('api/query', 'POST', {
            data: data
        }).then(res => {
            console.log(res)
        }).catch(err => console.log(err));
    }

    return (
        <div>
            <form style={{ display: 'flex' }}>
                <span style={{ width: '20%' }} className='list'>
                    <select onChange={(e) => setTopic(e.target.value)}>
                        {Category.map((topic, idx) => (
                            <option key={idx} value={topic}>{topic}</option>))}
                    </select>
                </span>

                <textarea style={{ width: '30%', borderRadius: '5px' }} name='query' placeholder='Ask Your query'
                    onChange={(e) => setQuery(e.target.value)}>
                </textarea>

                <button style={{ width: '10%', height: '32px' }} type='submit' onClick={addComment}>Post</button>
            </form>
            <AllQueries
                allQueries={allQueries}
            />
        </div>
    )
}

export default Query;