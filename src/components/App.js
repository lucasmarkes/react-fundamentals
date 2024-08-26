import React, { useState } from "react";
import { ThemeProvider } from '../contexts/ThemeContext';
import Header from "./Header/Header";
import Post from "./Post/Post";

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Hello, world#1",
      content: "Hello, world",
      read: true,
      removed: true,
    },
    {
      id: Math.random(),
      title: "Hello, world#2",
      content: "Hello, world",
      read: false,
      removed: false,
    },
    {
      id: Math.random(),
      title: "Hello, world#3",
      content: "Hello, world",
      read: false,
      removed: false,
    },
  ]);

  const handleRefresh = () => {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Hello, world#${prevState.length + 1}`,
        read: false,
        content: "Hello, world",
      },
    ]);
  };

   const handleRemove = (postId) => {
     setPosts((prevState) => prevState.map(
      post => (
         post.id === postId
           ? { ...post, removed: true }
           : post
     )));
   };
  
  return (
    <>
      <ThemeProvider>
        <Header />
        <button onClick={handleRefresh}>Refresh</button>
        {posts.map((post, index) => (
          <Post
            id={post.id}
            read={post.read}
            key={index}
            title={post.title}
            content={post.content}
            onRemove={handleRemove}
            removed={post.removed}
          />
        ))}
      </ThemeProvider>
    </>
  );
}

export default App;
