import SiteAboutPage from './about/page';
import SiteHomePage from './home/page';
import SiteTechPage from './techs/page';

export default function Site() {
	return (
		<>
			<SiteHomePage />
			<SiteAboutPage />
			<SiteTechPage />
		</>
	);
}
