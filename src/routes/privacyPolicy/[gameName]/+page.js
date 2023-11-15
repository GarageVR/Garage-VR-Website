/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {
    return {
        gameName: params.gameName
    }
}