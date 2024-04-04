import React, { useState } from 'react';

const Like = ({ children }) => {
  const [likeCounter, setLikeCounter] = useState(0);

  const handleLike = () => {
    setLikeCounter(likeCounter + 1);
  };

  return children({ likeCounter, handleLike });
};

export default Like;