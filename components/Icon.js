import Download from '../icons/Download';
import Pills from '../icons/Pills';
import Talk from '../icons/Talk';
import ArrowNext from '../icons/Arrow_next';
import ArrowPrev from '../icons/Arrow_prev';
import useMediaQuery from '../hooks/useMediaQuery';

export default function Icon({ name, color = '#333330', className }) {
  let iconComponent;
  const isSm = useMediaQuery('(min-width: 640px)');

  switch (name) {
    case 'download':
      iconComponent = <Download color={color} sm={isSm}/>;
      break;
    case 'pills':
      iconComponent = <Pills color={color} sm={isSm}/>;
      break;
    case 'talk':
      iconComponent = <Talk color={color} sm={isSm}/>;
      break;
    case 'arrow-next':
      iconComponent = <ArrowNext color={color} sm={isSm}/>;
      break;
    case 'arrow-prev':
      iconComponent = <ArrowPrev color={color} sm={isSm}/>;
      break;
    default:
      iconComponent = null;
  }

  return (
    <div className={className}>
      {iconComponent}
    </div>
  );
};
