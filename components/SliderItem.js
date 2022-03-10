import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';
import clsx from 'clsx';
import useMediaQuery from '../hooks/useMediaQuery';

export default function SliderItem({ title, text, cta, cta_link, icon, img, className, reverse, goBack, goForward }) {
  const textColor = className.includes('text-white') ? 'white' : '#333330';
  const btnBg = className.includes('bg-blue') ? 'bg-green' : 'bg-blue';
  const isLg = useMediaQuery('(min-width: 1024px)');

  return (
    <div className={clsx('slider__item', className, reverse && !isLg && 'flex-col-reverse')}>
      <button
        onClick={goBack}
        className='absolute top-1/2 -translate-y-1/2 left-3 md:left-10 lg:left-[3vw]'
      >
        <Icon
          name='arrow-prev'
          color={textColor}
        />
      </button>
      <button
        onClick={goForward}
        className='absolute top-1/2 -translate-y-1/2 right-3 md:right-10 lg:right-[3vw]'
      >
        <Icon
          name='arrow-next'
          color={textColor}
        />
      </button>
      <div className='lg:flex-1 lg:max-w-[700px]'>
        <Icon className='mb-14' name={icon} color={textColor} />
        <h1 className='font-header text-2xl sm:text-5xl mb-6'>{title}</h1>
        <p className='sm:text-2xl mb-6'>{text}</p>
        <div className={`px-4 py-2 ${btnBg} text-white inline-block`}>
          <Link  href={cta_link}>
            <a>{cta}</a>
          </Link>
        </div>
      </div>
      <div className={clsx('lg:flex-1 lg:max-w-[700px] lg:translate-x-20', reverse ? '-translate-y-16 lg:translate-y-0' : 'translate-y-16 lg:translate-y-2')}>
        <Image src={img} alt={`${title} picture`} width={700} height={806} />
      </div>
    </div>
  );
};