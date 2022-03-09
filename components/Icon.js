import Download from '../icons/Download';
import Pills from '../icons/Pills';
import Talk from '../icons/Talk';
import ArrowNext from '../icons/Arrow_next';
import ArrowPrev from '../icons/Arrow_prev';

export default function Icon ({ name, size = 16, color = "#000" }) {
  switch (name) {
    case 'download':
      return <Download color={color}/>;
    case 'pills':
      return <Pills color={color}/>;
    case 'talk':
      return <Talk color={color}/>;
    case 'arrow-next':
      return <ArrowNext color={color}/>;
    case 'arrow-prev':
      return <ArrowPrev color={color}/>;
    default:
      return null;
  }
};
