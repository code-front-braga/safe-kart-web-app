import { Rajdhani, Gantari } from 'next/font/google';

const rajdhani = Rajdhani({ subsets: ['latin'], weight: ['400', '700'] });
const gantari = Gantari({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const fonts = { rajdhani, gantari };
