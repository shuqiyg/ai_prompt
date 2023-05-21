import { useEffect, useState } from 'react'
import { useSearchParams  } from 'next/navigation'

import Profile from '@components/Profile'

const UserProfile = ({params}) => {
    const searchParams = useSearchParams();
    const userName = searchParams.get("name");

    const [userPosts, setUserPosts] = useState([]);

    useEffect(()=> {
        const fetchPosts = async ()=>{
            const res = await fetch(`api/users/${params?.id}/posts`);
            const data = await res.json();

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