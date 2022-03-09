import SliderItem from './SliderItem';
import { useState } from 'react';

export default function Slider ({slides}) {
  const [current, setCurrent] = useState(0);

  const classes = ['bg-green text-white', 'bg-blue text-white', 'bg-rose'];
  
  return (
    <div>
      {slides.map((item, i) => (
        <SliderItem key={i} className={classes[i]} {...item}/>
      ))}
    </div>
  );
}; 