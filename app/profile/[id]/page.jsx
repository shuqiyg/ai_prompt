"use client"

import { useEffect, useState } from 'react'
import { useSearchParams  } from 'next/navigation'

import Profile from '@components/Profile'

const UserProfile = ({params}) => {
    const searchParams = useSearchParams();
    const userName = searchParams.get("name");

    const [userPosts, setUserPosts] = useState([]);

    useEffect(()=> {
        const fetchPosts = async ()=>{
            console.log(params.id);
            const res = await fetch(`/api/users/${params?.id}/posts`, {
                method: 'GET'
            });
            const data = await res.json();
            console.log(data)
            setUserPosts(data);
        };

        if(params?.id) fetchPosts();
    }, [params.id])

    return (
        <Profile 
            name={userName}
            desc={`${userName}'s Profile Page, here are the Prompts`}
            data={userPosts}
        />
    );
};

export default UserProfile;