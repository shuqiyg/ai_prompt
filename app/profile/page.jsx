"use client" 
import {useState,useEffect} from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Profile from '@components/Profile'


const MyProfile = () => {
  const [posts, setPosts] = useState([])
  const { data: session} = useSession();

  useEffect(()=>{
    const fetchPosts = async () => {
      const res = await fetch(`api/users/${session?.user.id}/posts`);
      const data = await res.json();

      setPosts(data);
    }

    if(session?.user.id) fetchPosts();
  }, [])
  const handleEdit = async ()=>{

  }
  const handleDelete = async () => {

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