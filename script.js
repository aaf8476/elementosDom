// Criando um elemento para o título
let titulo = document.createElement("h1");
console.log(titulo);

// Manipulando o elemento
titulo.id = "titulo";
titulo.innerText = "Tapioca da Rita - As melhores Tapiocas doces da região!";
console.log(titulo);

// Capturando o "elemento pai" dos elementos 'titulo' e 'produto'
let body = document.querySelector("body");

// Adicionando o elemento 'titulo' no DOM
body.appendChild(titulo);

// ------------------------------------------- //

// Criando um elemento para o produto
let produto = document.createElement("div");
console.log(produto);

// Manipulando o elemento
produto.innerHTML = `
  <div>
    <h2>Tapioca de Coco com Leite Condensado</h2>
    <img src="tapiocaCoco.png" alt="tapioca Coco">
    <p>Polvilho para tapioca, leite condensado, coco ralado fresco</p>
    <p id="preco-x-salada">R$ 22,90</p>
  </div>
  <div>
    <h2>Tapioca de Queijo com Goiabada </h2>
    <img src="tapiocaGoiabada.png" alt="tapioca goiabada">
    <p>Polvilho para tapioca, queijo mussarela, doce de goiabada</p>
    <p id="preco-x-salada">R$ 22,90</p>
  </div>
  
`;

// Adicionando o elemento no dom
body.appendChild(produto)