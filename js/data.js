// ============================================================
// DATOS DE LA WEB — edita aquí lenguajes, áreas y proyectos
// ============================================================

const GH="https://github.com/AdrianColomoMoragues/";
const LANGS=[["Python",4],["R",3.5],["Java",3.5],["SQL",3],["Kotlin",2.5],["C#",2.5],["JavaScript",2.5]];
const AREAS=[["Estadística",4],["Machine learning",3],["Simulación",4],["Optimización",3],["Visualización",3.5],["Desarrollo",4],["DevOps / CI",3],["Ciberseguridad",1.5]];
const PROJECTS=[
  {c:"Ciencia de datos · Desplegado",live:1,t:"Calidad del aire en València",
   d:"Pipeline ETL que carga en SQLite las mediciones de 2016 a 2021 y un dashboard para explorarlas por estación y contaminante.",
   tags:["Python","ETL","SQLite","Streamlit"],links:[["Abrir app","https://aire-valencia.streamlit.app/"],["Código",GH+"aire-valencia-dashboard"]]},
  {c:"Machine learning · Desplegado",live:1,t:"Tasador de vivienda en València",
   d:"API que estima el precio de un piso con un intervalo del 90 % calibrado. Entrenada con 27 000 anuncios y validada por edificio. Incluye web con mapa.",
   tags:["FastAPI","scikit-learn","Docker"],links:[["Abrir web","https://vivienda-api-79ot.onrender.com/"],["Código",GH+"vivienda-api"]]},
  {c:"Simulación",t:"Electrolinera AP7",
   d:"Gemelo digital Monte Carlo de una electrolinera de la AP-7. Estima el beneficio mensual, el riesgo de sobrecarga del transformador y los cortes que provoca, y calcula si compensa alquilar una batería (BESS) y de qué tamaño. Incluye escenarios de mayor demanda y validación con datos reales.",
   tags:["Monte Carlo","Optimización","SciPy","Streamlit"],links:[["Código",GH+"electrolinera-ap7"]]},
  {c:"Desarrollo multiplataforma · Desplegado",live:1,t:"RefriPolar",wide:1,
   d:"Un mismo sistema de gestión en tres partes: una API REST en Java (Jakarta EE + JPA) desplegada con Docker sobre MySQL, una aplicación de escritorio en C# (WPF) y una app Android en Kotlin con Jetpack Compose que la consumen.",
   tags:["Java","Jakarta EE","MySQL","Docker","C# · WPF","Kotlin · Compose"],links:[["Probar API","https://refripolar-api.onrender.com/apirefripolar/"],["API",GH+"refripolar-api"],["Escritorio",GH+"refripolar-desktop"],["Android",GH+"refripolar-android"]]},
  {c:"Web",t:"Proyectos web",
   d:"Colección de proyectos web hechos en clase y por mi cuenta.",
   tags:["HTML","CSS","JavaScript"],links:[["Código",GH+"ProjectHTML"]]}
];

