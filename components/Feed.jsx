"use client"

import { useState, useEffect } from 'react'
import PromptCard from './PromptCard'

const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick} />
      ))}
    </div>
  )
}


const Feed = () => {
  const [searchText, setSearchText ] = useState('')
  const [searchTimeOut, setSearchTimeOut] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
  const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
      const res = await fetch("/api/prompt");
      const data = await res.json();

      setPosts(data);
  }

  useEffect(()=>{
    fetchPosts();
  }, [])


  const filterPrompts = (searchText) => {
    console.log(searchText)
    const regex = new RegExp(searchText, 'i'); //'i' flag for case insensitive
    console.log("REGEX: ", regex)
    return posts.filter((post) => (
        regex.test(post.creator.username) ||
        regex.test(post.tag) ||
        regex.test(post.prompt)
      )
    )
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeOut);
    setSearchText(e.target.value);
    console.log("SearchText: ", searchText)
    //debounce method
    setSearchTimeOut(
      setTimeout(()=>{
        const searchedResult = filterPrompts(e.target.value);
        console.log("Search Results Posts: ",searchedResult)
        setSearchedResults(searchedResult); 
      }, 500)
    );
  }

  const handleTagClick = (selectedTag) => {
    setSearchText(selectedTag);

    const searchResult = filterPrompts(selectedTag);
    setSearchedResults(searchResult);
  }

  return (
    <section className='feed'>
      <form className='relative w-64 h-24 flex-center'>
        <input
         type="text"
         placeholder='Search for tag or username'
         value={searchText}
         onChange={handleSearchChange}
         required
         className='search_input peer' />
      </form>

      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList
          data={posts}
          handleTagClick={handleTagClick}
        />
      )}

    </section>
  )
}

export default Feed