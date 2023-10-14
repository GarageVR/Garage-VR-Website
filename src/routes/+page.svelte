<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<title>GarageVR: Home Page</title>

<style>
    h1 {
        text-align: center;
        font-size: 3rem;
        color: #fff;
        margin: 0;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    .title-container {
        background-color: #333;
        padding: 16px;
        border-radius: 8px;
        margin-bottom: 16px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .game-containers {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10%;
        margin: 0;
        overflow: hidden; /* Hide any overflowing content */
    }

    .game-container {
        text-align: center;
        background-color: #535353;
        padding: 16px;
        border-radius: 8px;
        transition: background-color 0.3s;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        max-width: 400px; /* Set a maximum width for the game containers */
    }

    .game-container:hover {
        background-color: #555;
    }

    img {
        width: 100%;
        height: auto;
        object-fit: contain;
        border-radius: 50%;
        display: block;
    }

    p {
        margin-top: 8px;
        color: #fff;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
</style>

<div class="title-container">
    <h1>Published Games</h1>
</div>

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