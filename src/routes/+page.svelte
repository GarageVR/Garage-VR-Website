<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<title>GarageVR: Home Page</title>

<style>
    .game-containers {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;
        padding: 1rem;
        margin: 1rem 3rem;
        box-sizing: border-box;
        /* background-color: rgb(28, 28, 28); */
        border: .5rem solid rgb(28, 28, 28);
        border-radius: 1rem;
        overflow: hidden; /* Hide any overflowing content */
    }

    .game-container {
        text-align: center;
        background-color: rgb(246, 246, 246);
        padding: 1rem;
        border-radius: 1rem;
        transition: background-color 0.3s;
        flex: 1 0 300px;
        max-width: 30rem;
    }

    .game-container:hover {
        background-color: rgb(221, 221, 221)
    }

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 8px;
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }

    img:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .game-container, p {
        margin-top: 1.5rem;
        margin-bottom: 0;
        font-weight: bold;
        text-shadow: 0.1rem 0.1rem 0.2rem rgba(69, 69, 69, 0.25);
    }

    a {
        text-decoration: none;
        color: inherit;
    }
</style>

<div class="game-containers">
    {#each Object.keys(data.gamesData) as gameKey}
        <div class="game-container">
            <a href={`/${gameKey}`}>
                <img src={data.gamesData[gameKey].imageFilePath} alt={`Cover image of ${data.gamesData[gameKey].name}`}>
                <p>{data.gamesData[gameKey].name}</p>
            </a>
        </div>
    {/each}
</div>
