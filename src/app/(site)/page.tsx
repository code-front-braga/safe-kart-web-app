import { BackgroundColorEffect } from './components/background-color-effect';
import { HomeContent } from './components/home-content';
import { SiteSection } from './components/site-section';

export default function SiteHomePage() {
	return (
		<SiteSection id="/" className="font-rajdhani">
			<BackgroundColorEffect />

			<HomeContent />
		</SiteSection>
	);
}
