import { AboutContent } from '../components/about-content';
import { SiteSection } from '../components/site-section';

export default function SiteAboutPage() {
	return (
		<SiteSection id="about" className="bg-cadetBlue">
			<AboutContent />
		</SiteSection>
	);
}
