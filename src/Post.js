import React from 'react'

export default function Post(props) { 
  return (
    <>
    <article>
      <strong>{props.title}</strong><br />
      <small>{props.content}</small>
    </article>
    </>
  )
}