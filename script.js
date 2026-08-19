let nombreResp = "";
let cantVis = 0;

function generarCamposEdades() {
  nombreResp = document.getElementById('nombre').value.trim();
  cantVis = parseInt(document.getElementById('cantidad').value);

  if (!nombreResp || isNaN(cantVis) || cantVis <= 0) {
    alert("Por favor, ingresa un nombre válido y una cantidad de personas mayor a cero.");
    return;
  }

  const contenedor = document.getElementById('lista-edades');
  contenedor.innerHTML = "";

  // Ciclo equivalente al for persona in range(1, cant_vis + 1)
  for (let i = 1; i <= cantVis; i++) {
    contenedor.innerHTML += `
      <div class="form-group">
        <label for="edad-${i}">Edad de la persona número ${i}:</label>
        <input type="number" id="edad-${i}" min="0" placeholder="Edad">
      </div>
    `;
  }

  document.getElementById('paso1').classList.add('oculto');
  document.getElementById('paso2').classList.remove('oculto');
}

function calcularTotal() {
  let totalVenta = 0;
  let desgloseHTML = "<ul>";

  for (let i = 1; i <= cantVis; i++) {
    const edadInput = document.getElementById(`edad-${i}`).value;
    const edad = parseInt(edadInput);

    if (isNaN(edad) || edad < 0) {
      alert(`Por favor ingresa una edad válida para la persona número ${i}.`);
      return;
    }

    // Lógica de precios según la edad (if / elif / else)
    let tarifa = "";
    if (edad < 12) {
      totalVenta += 50;
      tarifa = "Niño ($50)";
    } else if (edad > 60) {
      totalVenta += 70;
      tarifa = "Adulto Mayor ($70)";
    } else {
      totalVenta += 100;
      tarifa = "General ($100)";
    }

    desgloseHTML += `<li>Persona ${i} (${edad} años) - Tarifa aplicada: ${tarifa}</li>`;
  }

  desgloseHTML += "</ul>";

  // Mostrar recibo final
  document.getElementById('res-nombre').textContent = nombreResp;
  document.getElementById('res-visitas').textContent = cantVis;
  document.getElementById('desglose-tarifas').innerHTML = desgloseHTML;
  document.getElementById('res-total').textContent = totalVenta;

  document.getElementById('paso2').classList.add('oculto');
  document.getElementById('recibo').classList.remove('oculto');
}

function reiniciarFormulario() {
  document.getElementById('nombre').value = "";
  document.getElementById('cantidad').value = "";
  document.getElementById('paso1').classList.remove('oculto');
  document.getElementById('paso2').classList.add('oculto');
  document.getElementById('recibo').classList.add('oculto');
}

