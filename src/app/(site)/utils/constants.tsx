import { HiHome } from 'react-icons/hi';
import { SitePagesProps } from '../components/header/interfaces/site-pages';
import { BsInfoCircleFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';

export const pages: SitePagesProps[] = [
	{ name: 'Home', url: '#home', icon: HiHome },
	{ name: 'Sobre', url: '#about', icon: BsInfoCircleFill },
	{ name: 'Tech', url: '#techs', icon: IoMdSettings },
];
