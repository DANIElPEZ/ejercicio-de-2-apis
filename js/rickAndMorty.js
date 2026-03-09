export async function searchCharacters(query) {
    // Usamos el ID 'posts' que es el contenedor grande del main
    const grid = document.getElementById('posts');
    if (!grid) return;

    try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
        const data = await res.json();

        if (data.error) throw new Error('No se encontraron personajes');

        grid.innerHTML = data.results
            .map(char => `
                <div class="card-gradiente p-4 flex items-center gap-4 border border-slate-100 shadow-sm">
                    <img src="${char.image}" class="w-16 h-16 rounded-2xl shadow-md border-2 border-white">
                    <div>
                        <span class="text-[10px] font-bold text-emerald-500 uppercase tracking-tighter">${char.status}</span>
                        <h4 class="font-bold text-slate-800 leading-tight capitalize">${char.name}</h4>
                        <p class="text-xs text-slate-400">${char.species} - ${char.origin.name}</p>
                    </div>
                </div>
            `)
            .join('');
    } catch (err) {
        grid.innerHTML = `<div class="col-span-full text-center py-20 text-slate-400">
            <p class="italic">⚠️ ${err.message}</p>
        </div>`;
    }
}