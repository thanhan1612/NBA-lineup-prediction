'use client'
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Background = () => {
  return (
    <div className = "fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <DotLottieReact
      src="https://lottie.host/560075d3-e45d-41b2-8009-3894b8d32377/xWy5zHPmXG.lottie"
      loop
      className='w-full h-full object-cover'
    />
    </div>
    
  );
};
export default Background;