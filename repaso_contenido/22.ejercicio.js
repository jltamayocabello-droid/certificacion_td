
temperaturas = [20, 25, 22, 18, 30]

function estadisticasTemperaturas(temperaturas) {
  // Validación: array vacío
  if (!Array.isArray(temperaturas) || temperaturas.length === 0) {
    return {
      promedio: 0,
      maximo: 0,
      minimo: 0
    };
  }

  // Cálculo del promedio usando reduce
  const suma = temperaturas.reduce((acum, temp) => acum + temp, 0);
  const promedio = (suma / temperaturas.length).toFixed(2);

  // Máximo y mínimo con Math.max y Math.min + spread operator
  const maximo = Math.max(...temperaturas);
  const minimo = Math.min(...temperaturas);

  return {
    promedio: parseFloat(promedio),
    maximo,
    minimo
  };
}