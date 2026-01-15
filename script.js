function calcularBTU() {
  const Largura = Number(document.getElementById("Largura").value);
  const Comprimento = Number(document.getElementById("Comprimento").value);
  const pessoas = Number(document.getElementById("pessoas").value);
  const sol = Number(document.getElementById("sol").value);

  const tv = Number(document.getElementById("tv").value);
  const pc = Number(document.getElementById("pc").value);
  const geladeira = Number(document.getElementById("geladeira").value);
  const fogao = Number(document.getElementById("fogao").value);
  const aquario = Number(document.getElementById("aquario").value);

  if (
    !Largura || !Comprimento || !pessoas || !sol ||
    tv < 0 || pc < 0 || geladeira < 0 || fogao < 0 || aquario < 0
  ) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  const area = Largura * Comprimento;

  const btuArea = area * 600;
  const btuPessoas = pessoas * 600;
  const btuTV = tv * 400;
  const btuPC = pc * 600;
  const btuGeladeira = geladeira * 1000;
  const btuFogao = fogao * 1500;
  const btuAquario = aquario * 800;

  const subtotal =
    btuArea +
    btuPessoas +
    btuTV +
    btuPC +
    btuGeladeira +
    btuFogao +
    btuAquario;

  const totalBTU = Math.round(subtotal * sol);

  let faixa = "";
  let tipo = "";

  if (totalBTU <= 9000) {
    faixa = "9.000 BTUs";
    tipo = "Ar-condicionado de Janela ou Split compacto";
  } 
  else if (totalBTU <= 12000) {
    faixa = "12.000 BTUs";
    tipo = "Ar-condicionado Split Inverter";
  } 
  else if (totalBTU <= 18000) {
    faixa = "18.000 BTUs";
    tipo = "Ar-condicionado Split Inverter de alta eficiência";
  } 
  else {
    faixa = "24.000 BTUs ou mais";
    tipo = "Ar-condicionado Split Hi-Wall ou Piso Teto";
  }

  document.getElementById("resultado").innerHTML =
    `🔹 BTU recomendado:<br><strong>${totalBTU} BTUs</strong>`;

  document.getElementById("recomendacao").innerHTML =
    `Para esse ambiente, o ideal é um ar-condicionado de aproximadamente <strong>${faixa}</strong>.<br><br>
     🔧 Tipo indicado: <strong>${tipo}</strong>`;

  mostrarProdutos(faixa);
}


function mostrarProdutos(faixa) {
  const vitrine = document.getElementById("produtos");

  let produtosHTML = "<h3>Modelos recomendados</h3>";

  if (faixa === "9.000 BTUs") {
    produtosHTML += `
      <div class="card">
        <strong>LG Dual Inverter 9000 BTUs</strong><br>
        Econômico e silencioso<br>
        <a href="#" target="_blank">Ver na Amazon</a>
      </div>
      <div class="card">
        <strong>Consul 9000 BTUs</strong><br>
        Ótimo custo-benefício<br>
        <a href="#" target="_blank">Ver no Mercado Livre</a>
      </div>
    `;
  } 
  else if (faixa === "12.000 BTUs") {
    produtosHTML += `
      <div class="card">
        <strong>Samsung Inverter 12000 BTUs</strong><br>
        Economia de energia<br>
        <a href="#" target="_blank">Ver na Amazon</a>
      </div>
      <div class="card">
        <strong>LG Dual Inverter 12000</strong><br>
        Super silencioso<br>
        <a href="#" target="_blank">Ver no Mercado Livre</a>
      </div>
    `;
  } 
  else if (faixa === "18.000 BTUs") {
    produtosHTML += `
      <div class="card">
        <strong>Electrolux Inverter 18000</strong><br>
        Alta potência<br>
        <a href="#" target="_blank">Ver na Amazon</a>
      </div>
      <div class="card">
        <strong>Springer Midea 18000</strong><br>
        Excelente desempenho<br>
        <a href="#" target="_blank">Ver no Mercado Livre</a>
      </div>
    `;
  } 
  else {
    produtosHTML += `
      <div class="card">
        <strong>LG Dual Inverter 24000</strong><br>
        Ambientes grandes<br>
        <a href="#" target="_blank">Ver na Amazon</a>
      </div>
      <div class="card">
        <strong>Elgin Piso Teto 30000</strong><br>
        Comercial / alto desempenho<br>
        <a href="#" target="_blank">Ver no Mercado Livre</a>
      </div>
    `;
  }

  vitrine.innerHTML = produtosHTML;
}
