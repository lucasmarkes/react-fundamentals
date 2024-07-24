import PropTypes from "prop-types";
import React from "react";
import Button from "./Button";
import PostBody from "./PostBody";

export default function Post(props) {
  return (
    <>
      <div style={{ border: "1px solid", marginTop: "10px", width: "15%" }}>
        <PostBody
          content={props.content}
          read={props.read}
          title={props.title}
        />
        <Button id={props.id} onRemove={props.onRemove} />
      </div>
    </>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  read: PropTypes.bool.isRequired,
};
