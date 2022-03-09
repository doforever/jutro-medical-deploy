import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';

export default function SliderItem({ title, text, cta, cta_link, icon, img, className }) {
  return (
    <div className={`flex-col md:flex-row flex h-screen px-12 pt-12 ${className}`}>
      <div className='flex-1'>
        <Icon name={icon} />
        <h1>{title}</h1>
        <p>{text}</p>
        <Link href={cta_link}>
          <a>{cta}</a>
        </Link>
      </div>
      <div className='flex-1'>
        <Image src={img} alt={`${title} picture`} width={700} height={806} />
      </div>
    </div>
  );
};