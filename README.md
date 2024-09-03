# Reactjs Component Library Template

Esta plantilla es un punto de partida para crear tu propia biblioteca de componentes en React con TypeScript. Incluye todas las herramientas modernas necesarias para desarrollar, probar y documentar tus componentes de manera eficiente.

## Características

- **⚛️ Biblioteca de componentes en React 18.3 con TypeScript 5.5**

  - Desarrolla componentes reutilizables y tipados con TypeScript.

- **🏗️ Vite 5.4 como entorno de desarrollo (basado en Rollup)**

  - Vite proporciona un entorno rápido y optimizado para el desarrollo de tus componentes.

- **🌳 Tree shaking**

  - Distribuye solo el código que necesitas; elimina el código muerto automáticamente.

- **📚 Storybook 8 para la visualización de componentes**

  - Visualiza y documenta tus componentes en vivo con Storybook.

- **🖌️ TailwindCSS 3.4**

  - Incorpora TailwindCSS para un desarrollo de interfaces rápido y eficiente.

- **🎨 PostCSS para procesar tu CSS**

  - Utiliza PostCSS para transformar y optimizar tu CSS.

- **🧪 Pruebas con Vitest y React Testing Library**

  - Garantiza la calidad de tus componentes con pruebas automáticas utilizando Vitest y React Testing Library.

- **✅ Herramientas de calidad de código con ESLint, Prettier y Stylelint**

  - Mantén un código limpio y consistente utilizando estas herramientas.

- **🔧 NPM como gestor de paquetes**

  - Administra tus dependencias y scripts de manera segura con NPM.

- **🚀 TODO: GitHub Actions**
  - Planeado: Automatización de lint, pruebas automatizadas, generación de changelog y publicación usando CI/CD con GitHub Actions.
  - Dale estrellita ⭐️ al proyecto para que no te pierdas la actualización.

## Scripts disponibles

| **Script**        | **Descripción**                                                  |
| ----------------- | ---------------------------------------------------------------- |
| `build`           | Compila el proyecto utilizando TypeScript y Vite.                |
| `lint`            | Analiza el código con ESLint para asegurar la calidad.           |
| `format`          | Verifica el formato del código con Prettier.                     |
| `format:fix`      | Corrige automáticamente el formato del código con Prettier.      |
| `test`            | Ejecuta las pruebas con Vitest.                                  |
| `prepare`         | Configura Husky para manejar hooks de Git.                       |
| `storybook`       | Inicia el servidor de Storybook para visualizar los componentes. |
| `build-storybook` | Compila y genera una versión estática de Storybook.              |

## 🛠️ Cómo Empezar Paso a Paso

### 1. Crea un Nuevo Repositorio desde el Template

Haz clic en el botón "Use this template" en la parte superior de la página para crear tu propio repositorio basado en esta plantilla.

### 2. Clona tu Nuevo Repositorio

Clona el repositorio que acabas de crear en tu máquina local:

```bash
git clone https://github.com/tu-usuario/tu-nuevo-repositorio.git
cd tu-nuevo-repositorio
```

### 3. Instala las Dependencias

Instala todas las dependencias necesarias utilizando npm:

```bash
npm ci
```

> [!NOTE]
> Usar `npm ci` en lugar de `npm install` instalará las dependencias exactamente como están especificadas en el archivo `package-lock.json`, lo que garantiza una instalación más rápida y consistente.

### 4. Visualiza los Componentes con Storybook

Inicia Storybook para visualizar y documentar tus componentes en tiempo real:

```bash
npm run storybook
```

### 5. Ejecuta las Pruebas

Asegúrate de que todos los componentes funcionan correctamente ejecutando las pruebas:

```bash
npm test
```

### 6. Compila la Biblioteca

Cuando estés listo para distribuir tu biblioteca, compílala utilizando el siguiente comando:

```bash
npm run build
```

### 7. Haz pruebas locales de la Biblioteca

Utiliza `npm link` para probar tu biblioteca en una aplicación local antes de publicarla en npm:

1. En la carpeta de tu biblioteca, ejecuta:

```bash
npm link
```

> [!NOTE]
> npm link crea un enlace simbólico en la carpeta global de npm para tu biblioteca. Puedes ver más información sobre npm link [aquí](https://docs.npmjs.com/cli/v10/commands/npm-link).

2. En la carpeta de tu aplicación local, ejecuta:

```bash
npm link tu-biblioteca
```

> [!NOTE]
> Puedes revisar la carpeta node_modules de tu aplicación local para asegurarte de que tu biblioteca está vinculada correctamente.

Importa un componente directamente de tu biblioteca y úsalo en tu aplicación local para asegurarte de que todo funcione correctamente.

```jsx
import { Button } from "tu-biblioteca";
```

### 8. Publica tu Biblioteca en npm

Cuando estés listo para publicar tu biblioteca en npm, sigue estos pasos:

1. Crea una cuenta en [npm](https://www.npmjs.com/signup) si aún no tienes una.
2. Inicia sesión en tu cuenta de npm en tu terminal:

```bash
npm login
```

3. Actualiza el campo `name` en tu archivo `package.json` con el nombre de tu biblioteca.
4. Incrementa el número de versión en tu archivo `package.json`:

```bash
npm version patch
```

5. Publica tu biblioteca en npm:

```bash
npm publish
```

> [!NOTE]
> Puedes encontrar más información sobre cómo publicar paquetes en npm [aquí](https://docs.npmjs.com/cli/v10/commands/npm-publish).

### 9. Comparte tu Biblioteca con el Mundo

¡Felicidades! Has creado tu propia biblioteca de componentes en React. Ahora puedes compartirla con el mundo y permitir que otros la utilicen en sus proyectos.

## ¿Qué sigue?

Seguramente te estás preguntando cómo llevar este proyecto al siguiente nivel. Por ejemplo:

- ¿Cómo puedes asegurarte de que tu biblioteca sea funcional, fácil de mantener y escalar a medida que tu proyecto crece?
- ¿Cómo puedes crear componentes que sean reutilizables?
- ¿Qué pasos puedes seguir para integrar un sistema de diseño sólido?
- ¿Cómo puedes manejar los tokens de diseño para mantener la coherencia en todas tus aplicaciones?

Y eso no es todo...

> [!NOTE]  
> A medida que avanzas, pueden surgir otras preguntas, como garantizar la accesibilidad de tus componentes, facilitar la colaboración efectiva en tu equipo, o incluso cómo desplegar Storybook para que todos puedan ver el trabajo que has hecho.

Para ayudarte a responder a estas preguntas, he creado una guía detallada que te llevará a través de los pasos necesarios para llevar tu biblioteca de componentes al siguiente nivel.

<p align="center">
  <a href="https://developero.io/ebooks/biblioteca-componentes-reactjs-typescript-tailwindcss-storybook" target="_blank">
    <strong>📘 Descarga la Guía Completa Aquí</strong>
  </a>
</p>

## ⭐️ Apoya el Proyecto

Si encuentras útil esta plantilla, por favor considera darle una estrella ⭐️ en GitHub. Esto ayuda a que más personas descubran el proyecto y mantiene a la comunidad comprometida.
