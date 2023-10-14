/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    return {
        gameName: params.gameName,
    };
};