import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';

export default function SliderItem({ title, text, cta, cta_link, icon, img}) {
  return (
    <div>
      <Icon name={icon}/>
      <h1>{title}</h1>
      <p>{text}</p>
      <Link href={cta_link}>
        <a>{cta}</a>
      </Link>
      <Image src={img} alt={`${title} picture`} width={700} height={806} />
    </div>
  );
};