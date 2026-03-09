import { searchCharacters } from './rickAndMorty.js';
import { updateWeather } from './weather.js';

function initCharacterSearch() {
    // Cambiado 'charSearch' por 'userId' que es el ID que tienes en el HTML
    const input = document.getElementById('userId'); 
    const btn = document.getElementById('btnCargar');
    if (input) {
        input.addEventListener('input', () => {
            searchCharacters(input.value);
        });
        if (btn) {
            btn.addEventListener('click', () => searchCharacters(input.value));
        }
        // Carga inicial
        searchCharacters('');
    }
}

function initWeather() {
    // Coincide con los IDs de tu sección lateral (Módulo de Clima)
    const input = document.getElementById('inputCiudad');
    const btn = document.getElementById('btnBuscar');

    if (btn && input) {
        btn.addEventListener('click', () => updateWeather(input.value));
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') btn.click();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initCharacterSearch();
    initWeather();
});