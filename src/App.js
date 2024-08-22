import React, { createContext, useState } from "react";
import Header from "./Header";
import Post from "./Post";

export const ThemeContext = createContext("dark");

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

  const [theme, setTheme] = useState("dark");

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

  const handleToggleTheme = () => {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <ThemeContext.Provider
        value={{
          theme,
          onToggleTheme: handleToggleTheme,
        }}
      >
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
      </ThemeContext.Provider>
    </>
  );
}

export default App;
