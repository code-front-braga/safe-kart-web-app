import { auth } from './auth';
import { privateRoutes } from './private-routes';

export default auth(async function middleware(req) {
	const isLoggedIn = !!req.auth;
	const { nextUrl } = req;

	const url = 'http://localhost:3000'; //Substituir pela url principal após deploy
	const isPrivateRoute = privateRoutes.includes(nextUrl.pathname);
	const isAuthRoute = nextUrl.pathname.includes('/auth');
	const isApiRoute = nextUrl.pathname.includes('/api');

	if (isApiRoute) return;

	if (isLoggedIn && isAuthRoute) return Response.redirect(`${url}/dashboard`);

	if (isAuthRoute && !isLoggedIn) return;

	if (!isLoggedIn && isPrivateRoute)
		return Response.redirect(`${url}/auth/login`);
});

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
