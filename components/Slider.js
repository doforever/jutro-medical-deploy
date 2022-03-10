import SliderItem from './SliderItem';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

export default function Slider({ slides }) {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(null);

  const goForward = () => {
    setNext(slides.length > current + 1 ? current + 1 : 0);
  };

  const goBack = () => {
    setNext(current > 0 ? current - 1 : slides.length - 1);
  };

  useEffect(() => {
    if (next !== null) { 
      setTimeout(() => {
        setCurrent(next);
        setNext(null);
      }, 1000);
    }
  }, [next]);

  const classes = ['bg-green text-white', 'bg-blue text-white', 'bg-rose'];

  return (
    <div className='relative'>
      {slides.map((item, i) => (
        <SliderItem
          {...item}
          key={i}
          className={clsx(classes[i % 3], 
            i !== current && i !== next && 'opacity-0 absolute top-0 left-0 w-100 h-100 -z-10',
            i === next && 'opacity-100 absolute top-0 left-0 w-full h-100',
            i === current && next !== null && 'opacity-0'
          )}
          reverse={i % 2 === 1} 
          beforeEnter={(i !== current && i !== next) || i == current && next !== null }
          goBack={goBack}
          goForward={goForward}
        />
      ))}
    </div>
  );
};