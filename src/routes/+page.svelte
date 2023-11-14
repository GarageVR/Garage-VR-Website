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
        gap: 16px;
        padding: 16px;
        margin-top: 60px;
        box-sizing: border-box;
        background-color: rgb(28, 28, 28);
        overflow: hidden; /* Hide any overflowing content */
    }

    .game-container {
        text-align: center;
        background-color: rgb(246, 246, 246);
        padding: 16px;
        border-radius: 8px;
        transition: background-color 0.3s;
        flex: 1 0 300px; /* Allow flexible width with a max width of 300px */
        max-width: 400px; /* Set a maximum width for the game containers */
    }

    .game-container:hover {
        background-color: rgb(50, 0, 0)
    }

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 8px;
    }

    .game-container, p {
        margin-top: 8px;
        color: rgb(28, 28, 28);
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(69, 69, 69, 0.25);
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
