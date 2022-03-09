import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';
import clsx from 'clsx';

export default function SliderItem({ title, text, cta, cta_link, icon, img, className, reverse }) {
  const color = className.includes('text-white') ? 'white' : '#333330';
  const btnBg = className.includes('bg-blue') ? 'bg-green' : 'bg-blue';

  return (
    <div className={clsx('list__item', className, reverse && 'flex-col-reverse')}>
      <div className='md:flex-1'>
        <Icon className='mb-14' name={icon} color={color} />
        <h1 className='font-header text-2xl sm:text-5xl mb-6'>{title}</h1>
        <p className='sm:text-2xl mb-6'>{text}</p>
        <div className={`px-4 py-2 ${btnBg} text-white inline-block`}>
          <Link  href={cta_link}>
            <a>{cta}</a>
          </Link>
        </div>
      </div>
      <div className={clsx('md:flex-1', reverse ? '-translate-y-16' : 'translate-y-16')}>
        <Image src={img} alt={`${title} picture`} width={700} height={806} />
      </div>
    </div>
  );
};