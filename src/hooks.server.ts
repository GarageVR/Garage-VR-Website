import { redirect, type Handle } from '@sveltejs/kit';

const redirects = {
	'/mm_steam': 'https://store.steampowered.com/app/2424630/Mansion_Mystery/',
	'/mm_sidequest': 'https://sidequestvr.com/app/16983/mansion-mystery-on-oculus-quest-2',
	'/mm_sidequest_demo': 'https://sidequestvr.com/app/21575/mansion-mystery-demo',
	'/mm_oculus': 'https://www.meta.com/experiences/5691978394241239',
	'/mm_rift': 'https://www.meta.com/experiences/pcvr/6603598483052842',
	'/mm_rift_demo': 'https://www.meta.com/experiences/pcvr/6406980346082616',
	'/mm_oculus_demo': 'https://www.meta.com/experiences/6366695100092907',
	'/gow_oculus': 'https://www.meta.com/experiences/7056585347694088/',
	'/gow_steam': 'https://store.steampowered.com/app/2628680/Grill_on_Wheels/',
	'/gow_rift': 'https://www.meta.com/experiences/pcvr/6663932167059911',
	'/gow_sidequest': 'https://sidequestvr.com/app/25214/grill-on-wheels',
};

export const handle: Handle = async ({ event, resolve }) => {
	if (redirects[event.url.pathname]) throw redirect(301, redirects[event.url.pathname]);
	return await resolve(event);
};