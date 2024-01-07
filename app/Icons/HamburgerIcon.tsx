import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface HamburgerIconProps {
  className?: string;
}

export const HamburgerIcon = ({ className = '' }: HamburgerIconProps) => {
  return <FontAwesomeIcon icon={faBars} className={className} />;
};
