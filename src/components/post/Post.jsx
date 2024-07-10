import { useState } from 'react';
import './Post.css';
import PropTypes from 'prop-types';

function Post({ title, description }) {
  const [liked, setLiked] = useState(false);

  function toggleLiked() {
    setLiked(!liked);
  }

  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={toggleLiked}>{liked ? "descurtir" : "curtir"}</button>
      {liked && <p>A postagem foi curtida!</p>}
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Post;
