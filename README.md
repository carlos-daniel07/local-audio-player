# 🎵 Reproductor de Audio Local

Reproductor de música minimalista que permite subir un archivo de audio desde el computador y reproducirlo al instante en el navegador, sin subir nada a ningún servidor. Construido con **HTML, CSS y JavaScript puro**.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🔗 Proyecto en vivo

👉 [Ver proyecto en vivo](https://audioplayerlocal.netlify.app/)

## ✨ Características

- **Carga de archivos de audio locales** mediante un input de tipo `file` estilizado como botón personalizado.
- Reproducción inmediata usando `URL.createObjectURL()`, sin necesidad de subir el archivo a ningún servidor — todo ocurre 100% en el cliente.
- Uso del elemento nativo `<audio controls>` del navegador, con sus controles estándar (play, pausa, volumen, línea de tiempo).
- **Recoloreado del reproductor nativo** mediante filtros CSS (`filter: invert() hue-rotate() saturate()`) para que combine con la paleta violeta/azul del diseño, sin necesidad de reconstruir los controles desde cero.
- Diseño con efecto **glassmorphism** (fondo translúcido con `backdrop-filter: blur`) y sombra que reacciona al hover.

## 🛠️ Tecnologías utilizadas

- **HTML5** — input de archivo de tipo `audio/*` y elemento `<audio>` nativo.
- **CSS3** — estilizado de un input file oculto mediante `<label>` asociado, `backdrop-filter` para el efecto glassmorphism, y filtros CSS para recolorear el reproductor nativo.
- **JavaScript (Vanilla) + File API** — lectura del archivo seleccionado y generación de una URL temporal en memoria con `URL.createObjectURL()`.

## 📂 Estructura del proyecto

```
├── index.html
├── style.css
├── script.js
├── logo.png
└── README.md
```

## 🚀 Cómo usarlo localmente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/carlos-daniel07/local-audio-player.git
   ```
2. Entra a la carpeta del proyecto:
   ```bash
   cd local-audio-player
   ```
3. Abre `index.html` en tu navegador (o usa la extensión Live Server en VS Code).

## 🧠 Qué aprendí / practiqué

- Usar la **File API** del navegador para leer un archivo seleccionado localmente sin necesidad de backend ni de subirlo a ningún servidor.
- Generar URLs temporales en memoria con `URL.createObjectURL()` para reproducir contenido binario directamente desde el sistema de archivos del usuario.
- Personalizar visualmente un control nativo del navegador (`<audio>`) usando únicamente filtros CSS, en vez de reconstruir toda la interfaz del reproductor con JavaScript.
- Ocultar un `<input type="file">` y usar su `<label>` asociado como botón personalizado, una técnica común y accesible para estilizar inputs de archivo.

## 📸 Vista previa

<img width="1920" height="1536" alt="image" src="https://github.com/user-attachments/assets/b4734924-1cb2-46dd-bf5a-e90d69ba9085" />

## 📄 Licencia

Este proyecto es de uso libre con fines educativos y de portfolio.

---

Hecho con 💻 por [Carlos Daniel](https://github.com/carlos-daniel07)
