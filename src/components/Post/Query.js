import React, { useEffect, useState } from "react";
import axios from 'axios';
import Category from './category';


const Query = () => {
    const [query, setQuery] = useState('');
    const [user, setUser] = useState({
        id:null,
        name:null,
        profile:null
    });
    const [topic, setTopic] = useState('');

    useEffect(()=>{
        updateUserDetails()
    },[])

    const updateUserDetails = ()=>{
        const {id, name, profile} = JSON.parse(localStorage.getItem("userDetails"))
        setUser((prvState) => (
            {
                ...prvState,
                id,
                name,
                profile
            }
        ))   
    }

    const addComment = () => {
        const data = {
            topic: topic,
            issue: query,
            userId: user.id
        }
        console.log(data);
        axios.post('api/query', data)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
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
        </div>
    )
}

export default Query;