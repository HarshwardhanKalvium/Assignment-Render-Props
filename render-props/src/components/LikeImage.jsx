import React from 'react';
import Like from './Like';

const LikeImage = () => {
  return (
    <Like>
      {({ likeCounter, handleLike }) => (
        <button onClick={handleLike}>Like Image {likeCounter}</button>
      )}
    </Like>
  );
};

export default LikeImage;