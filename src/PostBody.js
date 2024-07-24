import PropTypes from "prop-types";
import React from "react";

export default function PostBody(props) {
  return (
    <>
      <strong>{props.read ? <s>{props.title}</s> : props.title}</strong>
      <br />
      <small>{props.content}</small>
      <br />
    </>
  );
}

PostBody.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  read: PropTypes.bool.isRequired,
};
