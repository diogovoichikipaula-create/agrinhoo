function calcularAgua() {
    const cultura = document.getElementById('cultura').value;
    const area = parseFloat(document.getElementById('area').value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(area) || area <= 0) {
        resultadoDiv.innerHTML = "<p style='color: red;'>Por favor, insira uma área válida.</p>";
        resultadoDiv.className = "resultado-exibido";
        return;
    }

    // Consumo aproximado em litros por hectare por dia
    let litrosPorHectare = 0;

    if (cultura === 'tomate') {
        litrosPorHectare = 40000; 
    } else if (cultura === 'milho') {
        litrosPorHectare = 25000;
    } else if (cultura === 'soja') {
        litrosPorHectare = 30000;
    }

    const consumoTotal = litrosPorHectare * area;

    resultadoDiv.innerHTML = `
        <h3>📊 Relatório de Consumo</h3>
        <p>Para uma área de <strong>${area} hectares</strong> de <strong>${cultura}</strong>, o consumo estimado é de:</p>
        <p style="font-size: 20px; color: #1565c0;"><strong>${consumoTotal.toLocaleString('pt-BR')} Litros por dia</strong></p>
        <small>💡 <em>Dica Sustentável: O uso de gotejamento pode reduzir esse consumo em até 30%!</em></small>
    `;
    
    resultadoDiv.className = "resultado-exibido";
}