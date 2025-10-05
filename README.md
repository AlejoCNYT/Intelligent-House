# Intelligent House (React + Hooks) — ES / EN

> **ES**: Pequeño proyecto de React que demuestra _Context_ + _useReducer_ para controlar luces de una casa inteligente.  
> **EN**: Small React project showcasing _Context_ + _useReducer_ to control an intelligent house’s lights.

---

## 🧭 Índice / Table of Contents

- [Descripción / Overview](#descripción--overview)
- [Características / Features](#características--features)
- [Tecnologías / Tech Stack](#tecnologías--tech-stack)
- [Estructura / Project Structure](#estructura--project-structure)
- [Requisitos / Requirements](#requisitos--requirements)
- [Instalación / Installation](#instalación--installation)
- [Scripts / Scripts](#scripts--scripts)
- [Pruebas / Testing](#pruebas--testing)
- [Estilo y finales de línea / Style & Line Endings](#estilo-y-finales-de-línea--style--line-endings)
- [Git: conectar y publicar / Git: connect & push](#git-conectar-y-publicar--git-connect--push)
- [Licencia / License](#licencia--license)

---

## Descripción / Overview

**ES:** Este repositorio implementa una casa inteligente sencilla con luces conmutables. Se utiliza **React Context** para compartir estado global y **useReducer** para acciones como “All On”, “All Off” y “Toggle” por luz. Incluye pruebas con **Vitest** (las pruebas de Ada School) que validan el uso correcto de contexto y reducer.

**EN:** This repo implements a simple intelligent house with toggleable lights. It uses **React Context** to share global state and **useReducer** for actions like “All On”, “All Off”, and per-light “Toggle”. It includes **Vitest** tests (Ada School tests) that validate proper context/reducer usage.

---

## Características / Features

- **Context + Reducer:** flujo de estado predecible y testeable.  
- **Botones globales:** _All On_ / _All Off_.  
- **Luces individuales:** cada `Light` se puede conmutar.  
- **Pruebas automatizadas:** con **Vitest** y snapshots.

—

- **Context + Reducer:** predictable, testable state flow.  
- **Global controls:** _All On_ / _All Off_.  
- **Individual lights:** each `Light` can toggle.  
- **Automated tests:** using **Vitest** and snapshots.

---

## Tecnologías / Tech Stack

- **React 18** (Vite)
- **React Context** + **useReducer**
- **Vitest** (+ @testing-library/react)
- **Node.js** 18+ recomendado / recommended

---

## Estructura / Project Structure

```
src/
├─ App.jsx
├─ SmartHomeContext.js
├─ smartDevicesReducer.js       # lógica del reducer / reducer logic
├─ components/
│  ├─ SmartHome.jsx
│  ├─ MainControls.jsx
│  └─ Light.jsx
└─ __ada_test__/App.test.jsx    # pruebas vitest / vitest tests
```

---

## Requisitos / Requirements

- **Node.js 18+** (LTS recomendado / recommended)  
- **npm** o **pnpm** / or **pnpm**  
- Windows, macOS o Linux

> En Windows se recomienda **Git Bash** o PowerShell. / On Windows, **Git Bash** or PowerShell is fine.

---

## Instalación / Installation

```bash
# Clona el repo / Clone the repo
git clone https://github.com/AlejoCNYT/Intelligent-House.git
cd Intelligent-House

# Instala dependencias / Install dependencies
npm install
```

> Si es un proyecto nuevo movido desde otra carpeta, asegúrate de copiar `package.json`, `vite.config.*`, `index.html` y el directorio `src/`.  
> If you moved this project from another folder, make sure `package.json`, `vite.config.*`, `index.html`, and `src/` are present.

---

## Scripts / Scripts

Los scripts típicos (con Vite) son: / Typical scripts (with Vite):

```bash
# Desarrollo / Development (Vite dev server)
npm run dev

# Compilar / Build for production
npm run build

# Previsualizar build / Preview production build
npm run preview

# Pruebas de Ada School / Ada School tests (Vitest)
npm run ada-test
```

> Si `npm run dev` no existe en tu `package.json`, crea uno con: `"dev": "vite"`  
> If `npm run dev` is missing in your `package.json`, add `"dev": "vite"`.

---

## Pruebas / Testing

Ejecutar las pruebas (modo CLI):  
Run tests (CLI):

```bash
npm run ada-test
```

Actualizar snapshots cuando cambie el render:  
Update snapshots when render changes:

```bash
npx vitest -u
```

Ejecutar un test específico:  
Run a specific test:

```bash
npx vitest run src/__ada_test/App.test.jsx
```

> Las pruebas esperan ciertos emojis/estilos (💡/⚫️ y colores de fondo), y que `Light`/`SmartHome` lean del **Context** (no de props directas).  
> Tests expect specific emojis/styles (💡/⚫️ and background colors) and that `Light`/`SmartHome` read from **Context** (not directly from props).

---

## Estilo y finales de línea / Style & Line Endings

En Windows verás avisos tipo `LF will be replaced by CRLF`. Es normal. Para estandarizar:  
On Windows you might see `LF will be replaced by CRLF`. That’s normal. To standardize:

```bash
# Recomendado en Windows / Recommended on Windows
git config --global core.autocrlf true

# (Opcional) normaliza el repo / normalize repository
git add --renormalize .
git commit -m "chore: normalize line endings"
```

Puedes añadir un `.gitattributes` para forzar LF en el repo:  
You can add a `.gitattributes` to enforce LF in the repo:

```
* text=auto
*.js text eol=lf
*.jsx text eol=lf
*.css text eol=lf
*.html text eol=lf
```

---

## Git: conectar y publicar / Git: connect & push

### Primera vez / First time

```bash
# Si el repo aún no tiene remoto / If no remote yet
git remote add origin https://github.com/AlejoCNYT/Intelligent-House.git

# Asegura nombre de rama / Ensure branch name
git branch -M main

# Empuja y define upstream / Push and set upstream
git push -u origin main
```

### Si ves “multiple upstream branches”

```bash
git branch --unset-upstream || true
git config --local --unset-all branch.main.remote
git config --local --unset-all branch.main.merge
git push -u origin main
```

> O edita `.git/config` y deja:
> ```
> [branch "main"]
>   remote = origin
>   merge = refs/heads/main
> ```

---

## Licencia / License

**ES:** MIT (puedes cambiarla según tu necesidad).  
**EN:** MIT (feel free to change as needed).

---

## Autor / Author

- **AlejoCNYT** — <https://github.com/AlejoCNYT>

