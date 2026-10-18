# Web personal — Adrián Colomo Moragues

Web estática de una sola página (HTML + CSS + JavaScript, sin dependencias ni compilación).

## Estructura

```
web/
├── index.html      Estructura y textos de la página
├── css/styles.css  Estilos (colores en :root, modo claro y oscuro)
└── js/
    ├── data.js     Datos editables: lenguajes, áreas y proyectos
    └── main.js     Dibuja barras, radar, tarjetas y el fondo animado
```

## Verla en local

Abre `index.html` con doble clic en el navegador.
O, desde esta carpeta: `python -m http.server 8000` y entra en http://localhost:8000

## Qué editar

- **Niveles de lenguajes y áreas** → `js/data.js` (`LANGS`, `AREAS`), escala 1–5.
- **Proyectos** → `js/data.js` (`PROJECTS`).
- **Textos** (sobre mí, aficiones, contacto) → `index.html`. Los huecos pendientes van entre corchetes `[ ]`.
- **Colores** → variables `--accent`, `--bg`… al principio de `css/styles.css`.

## Publicarla (GitHub Pages)

1. Crea un repo llamado `AdrianColomoMoragues.github.io`.
2. Sube el contenido de esta carpeta a la raíz del repo.
3. Estará en https://adriancolomomoragues.github.io
