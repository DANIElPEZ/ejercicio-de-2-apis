const WEATHER_KEY = '393edfa921a9a8e2dedd57ddf5d71ae3';

async function searchCharacters() {
     const query = document.getElementById('charSearch').value;
     const grid = document.getElementById('charGrid');

     try {
          const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
          const data = await res.json();

          if (data.error) throw new Error('No se encontraron personajes');

          grid.innerHTML = data.results.map(char => `
                    <div class="flex items-center gap-4 p-3 border rounded-2xl hover:bg-slate-50 transition">
                        <img src="${char.image}" class="w-16 h-16 rounded-xl shadow-sm">
                        <div>
                            <h4 class="font-bold text-slate-800">${char.name}</h4>
                            <p class="text-xs text-slate-500">${char.species} - ${char.status}</p>
                        </div>
                    </div>
                `).join('');
     } catch (err) {
          grid.innerHTML = `<p class="col-span-full text-center text-red-500 py-10">${err.message}</p>`;
     }
}

async function updateWeather() {
     const city = document.getElementById('cityInput').value;
     const display = document.getElementById('weatherDisplay');

     if (!city) return;

     display.innerHTML = '<div class="animate-spin text-3xl">⏳</div>';

     try {
          const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}&units=metric&lang=es`);
          if (!res.ok) throw new Error('Ciudad no encontrada');
          const d = await res.json();

          display.innerHTML = `
                    <div class="animate-in fade-in duration-500">
                        <h3 class="text-4xl font-black">${Math.round(d.main.temp)}°C</h3>
                        <p class="text-xl">${d.name}, ${d.sys.country}</p>
                        <p class="capitalize opacity-80">${d.weather[0].description}</p>
                        <img src="https://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png" class="mx-auto">
                    </div>
                `;
     } catch (err) {
          display.innerHTML = `<p class="text-red-200 bg-red-500/20 p-2 rounded-lg">${err.message}</p>`;
     }
}
searchCharacters();