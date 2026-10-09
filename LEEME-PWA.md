# Gastos de casa — versión app (PWA)

Esta carpeta es la app lista para instalar en el celular, con ícono propio y pantalla completa.
Los datos se guardan en tu planilla de Google, así que antes necesitás tener hecha la planilla
y el link que termina en `/exec` (pasos 1 a 3 de INSTRUCCIONES.md).

## 1. Poner el link de tu planilla
1. Abrí **config.js** con el Bloc de notas (clic derecho → Abrir con → Bloc de notas).
2. Pegá tu link entre las comillas de la última línea, así:
   `window.API_URL = 'https://script.google.com/macros/s/AKfy.../exec';`
3. Guardá (Ctrl+G o Archivo → Guardar).

## 2. Subir la carpeta a GitHub
1. Entrá a tu repositorio `gastos` en https://github.com.
2. Tocá **uploading an existing file** (o **Add file → Upload files**).
3. Arrastrá **todos los archivos de esta carpeta** (index.html, config.js, sw.js, manifest.webmanifest
   y los 4 íconos .png). Este archivo LEEME no hace falta.
4. Abajo tocá **Commit changes**.

## 3. Activar la página
1. En el repositorio: **Settings → Pages** (menú de la izquierda).
2. En "Branch" elegí **main** y la carpeta **/ (root)** → **Save**.
3. Esperá 1 o 2 minutos y recargá: arriba aparece el link, tipo `https://TU-USUARIO.github.io/gastos/`.

## 4. Instalarla en los celulares
1. Abrí ese link en **Chrome** en el celular de cada uno.
2. Aparece un cartel **"Instalá la app"** en la pantalla de inicio de la app (o en Chrome: ⋮ → **Instalar app**).
3. Tocá **Instalar**. Queda el ícono azul de la billetera junto a las demás aplicaciones.
4. Abrila desde el ícono, elegí quién usa ese celular, y listo.
5. La primera vez que usen **Decilo con la voz**, el celular pregunta por el micrófono: tocar **Permitir**.

Truco: manteniendo apretado el ícono aparecen accesos directos a **Decilo con la voz**, **Cargar gasto** y **Cargar ingreso**.

## Si arriba dice "Modo prueba"
Falta el link en config.js (o quedó mal pegado). Revisalo, volvé a subir config.js a GitHub y recargá la app.

## Para actualizar la app más adelante
Subí los archivos nuevos al mismo repositorio (reemplazan a los viejos). Los celulares
toman la versión nueva solos la próxima vez que abran la app con internet.
