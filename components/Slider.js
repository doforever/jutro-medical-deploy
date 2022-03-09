import SliderItem from './SliderItem';
import { useState } from 'react';
import clsx from 'clsx';

export default function Slider ({slides}) {
  const [current, setCurrent] = useState(0);

  const classes = ['bg-green text-white', 'bg-blue text-white', 'bg-rose'];
  
  return (
    <div>
      {slides.map((item, i) => (
        <SliderItem key={i} className={clsx(classes[i])} reverse={i % 2 === 1} {...item}/>
      ))}
    </div>
  );
}; 