<div align="center">
  <img src="./assets/logo.svg" alt="Logo del Proyecto" width="200">
  <br/>
  <h1>
    <b>Calculadora de la Transformada de Fourier</b>
  </h1>
  <p>
    Una herramienta web para definir señales en el dominio del tiempo, calcular su Transformada de Fourier mediante integración numérica y visualizar su espectro de magnitud y fase en el dominio de la frecuencia.
  </p>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-%3E%3D20-8A2BE2?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js version requirement">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind_CSS-9370DB?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/License-MIT-9370DB?style=for-the-badge" alt="License MIT">
</div>

---

## 📜 Descripción del Proyecto

Este proyecto nace como una herramienta educativa y de análisis para la materia de **Procesamiento Digital de Señales**. Su propósito es permitir a los usuarios definir una señal o función en el dominio del tiempo, `x(t)`, para posteriormente analizar su composición en el dominio de la frecuencia.

La aplicación calcula la **Transformada de Fourier** de la señal de entrada utilizando la **Regla de Simpson 1/3** para una integración numérica de alta precisión. El resultado es una visualización interactiva que muestra tanto la señal original en el tiempo como su correspondiente **espectro de magnitud y fase** en el dominio de la frecuencia, permitiendo un análisis detallado de los componentes frecuenciales de la señal.

---

## ✨ Características Principales

* **Definición de Señales:** Construye la señal de entrada `x(t)` añadiendo, modificando y eliminando segmentos de funciones.
* **Previsualización en LaTeX:** Observa en tiempo real la representación matemática de la señal que estás creando.
* **Cálculo Numérico Preciso:** Implementación de la Regla de Simpson para resolver la integral de la Transformada de Fourier.
* **Análisis de Espectro:** Visualiza las gráficas de magnitud `|X(ω)|` y fase `∠X(ω)` de la señal en el dominio de la frecuencia.
* **Visualización Dual:** Compara de forma interactiva la señal original en el dominio del tiempo con su representación en el dominio de la frecuencia.
* **Procedimiento Detallado:** Visualiza la fórmula de la Transformada de Fourier y los pasos de integración utilizados para el cálculo.

---

## 🛠️ Tecnologías Utilizadas

Este proyecto fue refactorizado de un monolito a una arquitectura moderna utilizando:

* **Vite:** Como servidor de desarrollo y empaquetador, ofreciendo Hot Module Replacement (HMR).
* **Tailwind CSS v4:** Para un estilizado rápido y mantenible a través de su motor de plugins en Vite.
* **Plotly.js:** Para la renderización de las gráficas interactivas del dominio del tiempo y la frecuencia.
* **Math.js:** Para el parseo de expresiones matemáticas y la generación de LaTeX.
* **MathJax:** Para el renderizado de alta calidad de las fórmulas LaTeX en el DOM.

---

## 🚀 Instalación y Puesta en Marcha

Para ejecutar este proyecto en tu entorno local, sigue estos sencillos pasos.

### **Pre-requisitos**

Asegúrate de tener instalada una versión de **Node.js 20 o superior**.

```bash
node -v
# Debería mostrar v20.x.x o superior
````

### **Pasos de Instalación**

1.  **Clona el repositorio** en tu máquina local:

    ```bash
    git clone https://github.com/eddndev/fourier-transform.git
    ```

2.  **Navega al directorio** del proyecto:

    ```bash
    cd fourier-viewer
    ```

3.  **Instala las dependencias** del proyecto con npm:

    ```bash
    npm install
    ```

4.  **Inicia el servidor de desarrollo** de Vite:

    ```bash
    npm run dev
    ```

¡Y listo\! La aplicación estará disponible en `http://localhost:5173` (o el puerto que indique Vite en tu terminal).

-----

## 👥 Equipo

Este proyecto fue desarrollado por el **Equipo 1 - Procesamiento Digital de Señales**.

| \# | Integrante                    |
| :-: | :---------------------------- |
| 1 | `Alonso Sánchez Eduardo`        |
| 2 | `Bonilla Ramírez Josué Eleazar` |
| 3 | `Jiménez Meza Ana Harumi`       |
| 4 | `Quiroz Mora Abel Mauricio`     |
| 5 | `Vilchis Paniagua Johan Emiliano` |

-----

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.