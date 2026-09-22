async function obterBiblioteca() {
    const url = 'https://stunning-garbanzo-r7pq6545w44vfpj95-3000.app.github.dev/';
    const resposta = await fetch(url);
    const biblioteca = await resposta.json();
    const listaProdutos = document.getElementById("lista-produtos");

      biblioteca.forEach(livro => {

        const card = `
            <div class="card">
            <img src="${livro.imagem}" alt="${livro.nome}">
                <h2>${livro.nome}</h2>
                <p>Categoria: ${livro.categoria}</p>
                <p>Preço: R$ ${livro.preco}</p>
            </div>
        `;

        listaProdutos.innerHTML += card; // Adiciona o card à lista de produtos sem apagar os cards anteriores.
    });

}
obterBiblioteca();