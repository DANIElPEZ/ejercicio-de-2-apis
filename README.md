# 🚀 Dashboard Multi‑API: Explorador de Datos Vivos

Este repositorio contiene una **aplicación web estática** creada para la asignatura **Desarrollo Web II** (VII Semestre) en **UNIPAZ**. La finalidad es demostrar la
integración y consumo de dos APIs públicas distintas usando técnicas modernas de
JavaScript (`async/await`, fetch) junto con un diseño responsivo mediante Tailwind CSS.

## 📋 Información del Proyecto
- **Institución:** Instituto Universitario de la Paz (UNIPAZ)  
- **Programa:** Ingeniería Informática  
- **Docente:** Cipriano López Vides  
- **Autores:** Daniel Gonzalez y Andrés Garcia

---

## 🛠️ Tecnologías Utilizadas
- **HTML5 / CSS3** para la estructura y la maquetación básica.  
- **Tailwind CSS** como framework de utilidades para estilizar rápidamente.  
- **JavaScript (ES6+)** con módulos y lógica asíncrona.  
- **APIs REST** de terceros consumidas en formato JSON.

---

## 🌐 APIs Integradas
1. **Rick and Morty API** (sin necesidad de clave)  
   Se consulta el endpoint `/api/character` pasando el parámetro `name` para buscar
   personajes por cualquier texto. El resultado muestra imagen, nombre, especie,
   origen y estado (vivo/muerto/desconocido).
2. **OpenWeatherMap** (requiere clave)  
   Se utiliza el endpoint `/data/2.5/weather` para obtener el clima actual de la ciudad
   indicada. La clave se define en `js/weather.js` en la constante `WEATHER_KEY`.

---

## ✨ Características Principales
- **Diseño de dashboard:** dos columnas (sidebar de clima + panel principal).  
- **Búsqueda interactiva:** el campo de personajes acepta cualquier texto; se
  actualiza al escribir.  
- **Widget meteorológico:** ingresar una ciudad y pulsar el botón o Enter.  
- **Estados visuales:** "Cargando..." durante las peticiones y mensajes de
  error en caso de fallo o ciudad no encontrada.  
- **Animaciones y estilos** proporcionados por Tailwind y clases personalizadas.

> ⚠️ El input de personajes en la interfaz tiene tipo `number` y un placeholder
> con "ID (1‑10)..." por comodidad, pero internamente se usa el texto que el
> usuario escriba como parámetro `name` de la API; por tanto se admiten letras.

---

## 🧪 Ejecución
1. **Abrir localmente**  
   Dado que se trata de archivos estáticos, basta con abrir `index.html` en un
   navegador moderno o usar una extensión/servidor local (p.ej. Live Server).  
2. **Configurar la API key** (opcional)  
   Si desea usar su propia clave de OpenWeatherMap, edite `js/weather.js` y
   sustituya el valor de `WEATHER_KEY` por el suyo.  
3. **Navegar y probar**  
   - En la sección principal escriba un nombre, ID o fragmento de texto para
     buscar personajes de Rick y Morty.  
   - En el módulo lateral escriba el nombre de una ciudad y obtenga el clima.

---

## 📂 Estructura de carpetas
```
index.html
css/styles.css
js/
  ├─ main.js          # inicializa los módulos y los listeners
  ├─ rickAndMorty.js  # lógica de consulta y renderizado de personajes
  └─ weather.js       # lógica de consulta y renderizado del clima
```

---

## 💡 Extensiones y mejoras futuras
- Validación más estricta en los formularios.  
- Paginación o carga incremental para más personajes.  
- Almacenamiento de la última ciudad consultada en localStorage.  
- Uso de un bundler (Rollup/Webpack/Vite) para producción.

---

¡Disfruta explorando el multiverso y el clima en tiempo real! 🌍🔮
