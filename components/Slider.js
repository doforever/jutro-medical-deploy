import SliderItem from './SliderItem';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import Icon from './Icon';

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
      }, 200);
    }
  }, [next]);

  const classes = ['bg-green text-white', 'bg-blue text-white', 'bg-rose'];

  return (
    <div className='relative'>
      <button 
        onClick={goBack}
        className='absolute top-1/2 -translate-y-1/2 left-3 md:left-10 lg:left-[3vw]'
      >
        <Icon
          name='arrow-prev'
          color='white'
        />
      </button>
      <button 
        onClick={goForward}
        className='absolute top-1/2 -translate-y-1/2 right-3 md:right-10 lg:right-[3vw]'
      >
        <Icon
          name='arrow-next'
          color='white'
        />
      </button>
      {slides.map((item, i) => (
        <SliderItem
          key={i}
          className={clsx(classes[i % 3], i !== current && 'hidden opacity-0')}
          reverse={i % 2 === 1} {...item}
        />
      ))}
    </div>
  );
};