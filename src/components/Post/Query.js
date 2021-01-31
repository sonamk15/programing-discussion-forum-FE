import React, { useEffect, useState } from "react";
import forumFetch from "../../utils/forumFetch";
import AllQueries from './allQueries';
import Modal from "../modal/index";


import './styles.scss';
import './index.css';


const Query = () => {
    const [show, setShow] = useState(false);
    const [user, setUser] = useState({
        id: null,
        name: null,
        profile: null
    });

    const [modalInitialState, setModalInitialState] = useState({
        category: '',
        query_text: ''        
    })
    const [allQueries, setAllQueries] = useState([]);

    useEffect(() => {
        updateUserDetails()
    }, [])

    const updateUserDetails = async () => {
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
                if (res.data) {
                    setAllQueries(res.data)
                } else {
                    alert("Somethig went wrong")
                }
            }).catch((err) => {
                alert(err.message)
            });
    }

    const addQuery = () => {
        const {query_text, category} = modalInitialState;
        const data = {
            topic: category,
            issue: query_text,
            userId: user.id
        };

        forumFetch('api/query', 'POST', {
            data: data
        }).then(res => {
            setModalInitialState((prevState) => ({
                ...prevState,
                query_text: '',
                category: ''
            }));
            setShow(!show)
        }).catch(err => console.log(err));
    }

    const showModal = () => {
        setShow(!show)
    }

    const handelChange = (event) => {
        const {value, name} = event.target;
        setModalInitialState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const {
        category,
        query_text
    } = modalInitialState
    return (
        <div className="comment-box">
            <h1 className='heading'>Welcome to the Discussion Forum</h1>
            <button onClick={showModal}>Raise Query</button>
            <AllQueries
                allQueries={allQueries}
            />
            <Modal
                show={show}
                handleClose={showModal}
                category={category}
                query_text={query_text}
                handelChange={handelChange}
                addQuery={addQuery}
            />
        </div>
    )
}

export default Query;