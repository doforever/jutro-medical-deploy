import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';

export default function SliderItem({ title, text, cta, cta_link, icon, img, className }) {
  const color = className.includes('text-white') ? 'white' : 'black';

  return (
    <div className={`flex-col md:flex-row flex h-screen md:h-fit px-12 pt-12 ${className}`}>
      <div className='flex-1 flex flex-col justify-between'>
        <Icon className='mb-14' name={icon} color={color}/>
        <div className='flex-1 flex flex-col justify-between'>
          <h1 className='font-header'>{title}</h1>
          <p className='sm:text-2xl'>{text}</p>
          <Link href={cta_link}>
            <a>{cta}</a>
          </Link>
        </div>
      </div>
      <div className='flex-1'>
        <Image src={img} alt={`${title} picture`} width={700} height={806} />
      </div>
    </div>
  );
};