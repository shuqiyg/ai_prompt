"use client" 
import {useState,useEffect} from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Profile from '@components/Profile'


const MyProfile = () => {
  const router = useRouter(); 
  const [posts, setPosts] = useState([])
  const { data: session} = useSession();

  useEffect(()=>{
    const fetchPosts = async () => {
      const res = await fetch(`api/users/${session?.user.id}/posts`);
      const data = await res.json();

      setPosts(data);
    }

    if(session?.user.id) fetchPosts();
  }, []);

  const handleEdit = async (post)=>{
    router.push(`/update-prompt?id=${post._id}`)
  }
  const handleDelete = async (post) => {
    const confirmed = confirm("You sure to delete this Prompt?");

    if(confirmed) {
        try {
            await fetch(`/api/prompt/${post._id.toString()}`, {
                method: 'DELETE'
            });

            const UpdatedPosts = posts.filter((p) => p._id !== post._id)

            setPosts(UpdatedPosts);
        } catch (error) {
            console.log(error);
        }
    }
  }

  return (
    <Profile 
      name="My"
      desc="Welcome to your Page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default MyProfile