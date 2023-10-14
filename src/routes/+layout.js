import fs from 'fs';
import path from 'path';

const gamesFilePath = path.resolve("src/routes/garagevrGames.json");

export async function load() {
    const gamesData = JSON.parse(fs.readFileSync(gamesFilePath, 'utf-8'));

    return {
        gamesData,
    };
}