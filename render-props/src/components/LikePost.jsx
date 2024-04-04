import React from 'react';
import Like from './Like';

const LikePost = () => {
  return (
    <Like>
      {({ likeCounter, handleLike }) => (
        <button onClick={handleLike}>Like Post {likeCounter}</button>
      )}
    </Like>
  );
};

export default LikePost;