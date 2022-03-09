import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';

export default function SliderItem({ title, text, cta, cta_link, icon, img, className }) {
  const color = className.includes('text-white') ? 'white' : 'black';
  const btnBg = className.includes('bg-blue') ? 'bg-green' : 'bg-blue';

  return (
    <div className={`flex-col md:flex-row flex h-screen md:h-fit p-12 ${className}`}>
      <div className='flex-1 flex flex-col justify-between'>
        <Icon className='mb-14' name={icon} color={color}/>
        <div className='flex-1 flex flex-col justify-between'>
          <h1 className='font-header text-2xl sm:text-5xl'>{title}</h1>
          <p className='sm:text-2xl'>{text}</p>
          <div className={`px-4 py-2 ${btnBg} text-white self-start`}>
            <Link  href={cta_link}>
              <a>{cta}</a>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex-1'>
        <Image src={img} alt={`${title} picture`} width={700} height={806} />
      </div>
    </div>
  );
};