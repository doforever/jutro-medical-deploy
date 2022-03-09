import SliderItem from "./SliderItem";

export default function Slider ({slides}) {
  return (
    <div>
      {slides.map((item, i) => (
        <SliderItem key={i} {...item}/>
      ))}
    </div>
  );
}; 