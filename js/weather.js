const WEATHER_KEY = '393edfa921a9a8e2dedd57ddf5d71ae3';

export async function updateWeather(city) {
    const display = document.getElementById('infoClima');
    if (!city || !display) return;

    display.innerHTML = '<div class="text-cyan-500 animate-pulse font-bold">Consultando clima...</div>';

    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}&units=metric&lang=es`
        );
        if (!res.ok) throw new Error('Ciudad no encontrada');
        const d = await res.json();

        display.innerHTML = `
            <div class="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <span class="text-xs font-bold text-cyan-600 uppercase mb-2 block tracking-widest">${d.name}</span>
                <h3 class="text-5xl font-black text-slate-800">${Math.round(d.main.temp)}°C</h3>
                <p class="capitalize text-slate-500 font-medium mb-4">${d.weather[0].description}</p>
                
                <div class="bg-slate-50 p-3 rounded-2xl border border-slate-100 grid grid-cols-2 gap-2 text-left">
                    <div>
                        <p class="text-[9px] text-slate-400 uppercase font-bold">Humedad</p>
                        <p class="text-sm font-bold text-slate-700">${d.main.humidity}%</p>
                    </div>
                    <div>
                        <p class="text-[9px] text-slate-400 uppercase font-bold">Sensación</p>
                        <p class="text-sm font-bold text-slate-700">${Math.round(d.main.feels_like)}°</p>
                    </div>
                </div>
                <img src="https://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png" class="mx-auto w-16">
            </div>
        `;
    } catch (err) {
        display.innerHTML = `<div class="bg-red-50 text-red-500 p-4 rounded-xl text-xs border border-red-100">
            ${err.message}
        </div>`;
    }
}