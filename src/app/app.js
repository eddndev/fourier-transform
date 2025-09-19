/**
 * @app/app.js
 * Lógica principal de la aplicación: manejo de eventos, validaciones y orquestación del flujo de datos.
 * Autor: Equipo 1 - Procesamiento Digital de Señales
 */
import * as math from 'mathjs';
import * as state from './state.js';
import { calculateCoefficients } from '@math/fourier.js';
import { TOLERANCE } from '@math/constants.js';

/**
 * Orquesta el proceso completo de cálculo de la serie de Fourier.
 * Esta es la función principal que se llamará cuando el usuario haga clic en "Calcular".
 */
export const handleCalculate = () => {
    const pieces = state.getFunctionPieces();

    // 1. Validación de entradas
    if (pieces.length === 0) {
        state.setCalculationError("Por favor, define al menos un trozo de la función f(t).");
        return; // Detener ejecución
    }
    if (pieces.some(p => isNaN(p.start) || isNaN(p.end) || p.end <= p.start || !p.expression)) {
        state.setCalculationError("Todos los trozos deben tener una expresión y rangos válidos (Inicio < Fin).");
        return;
    }

    // 2. Validación de Continuidad del Periodo
    const T0 = pieces[0].start;
    let currentTime = T0;
    for (const piece of pieces) {
        if (Math.abs(piece.start - currentTime) > TOLERANCE) {
            state.setCalculationError(`Error de Continuidad: El periodo debe ser continuo. Se detectó un hueco o solapamiento cerca de t=${currentTime.toFixed(4)}.`);
            return;
        }
        currentTime = piece.end;
    }

    try {
        // 3. Parseo y Compilación de las expresiones
        const compiledPieces = pieces.map(p => {
            const node = math.parse(p.expression);
            return {
                ...p,
                node, // Guardamos el nodo AST para LaTeX
                compiled: node.compile()
            };
        });

        // 4. Cálculo de parámetros fundamentales
        const T1 = pieces[pieces.length - 1].end;
        const T = T1 - T0;
        if (T <= 0) {
             state.setCalculationError("La duración del periodo (T) debe ser positiva.");
             return;
        }
        const w0 = (2 * Math.PI) / T;
        const params = { T0, T, w0 };

        // 5. DELEGACIÓN al módulo matemático
        const coefficients = calculateCoefficients(compiledPieces, T, T0, w0);

        // 6. ACTUALIZACIÓN del estado con los resultados
        state.setCalculationResults({ compiledPieces, params, coefficients });

        console.log("Cálculo completado exitosamente. Estado actualizado:", state.getState());

    } catch (error) {
        state.setCalculationError("Error al procesar o integrar la función: " + error.message);
        console.error(error);
    }

    // 7. A futuro, se notificará a la UI para que se re-renderice
    // renderUI();
};


/**
 * Maneja el cambio del slider de N.
 * @param {number} newN El nuevo valor del slider.
 */
export const handleSliderChange = (newN) => {
    state.setCurrentN(newN);
    // A futuro, esto llamará a una función que solo actualiza la gráfica
    // renderPlot(); 
};