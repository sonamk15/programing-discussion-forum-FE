import React, { useState } from "react";
import axios from 'axios';
import Category from './category';


const Query = () => {
    const [query, setQuery] = useState('');
    const [userId, setUserID] = useState(1);
    const [topic, setTopic] = useState('');

    const addComment = () => {
        const data = {
            topic: topic,
            issue: query,
            userId: userId
        }
        axios.post('query', data)
        .then(res => {
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <form style={{ display: 'flex' }}>
                <span style={{ width: '20%' }} className='list'>
                    <select onChange={(e) => setTopic(e.target.value)}>
                        {Category.map((topic, idx) => (
                            <option value={topic}>{topic}</option>))}
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