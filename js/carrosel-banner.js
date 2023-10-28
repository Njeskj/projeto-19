function mudarImagem(links) {
    // Verifique se há links de imagem disponíveis
    if (links.length === 0) {
        console.error('Nenhum link de imagem disponível.');
        return;
    }

    // Gere um número aleatório entre 0 e o número de links de imagem - 1
    var indiceAleatorio = Math.floor(Math.random() * links.length);

    // Obtenha a imagem atual
    var imagemAtual = document.getElementById('imagemAtual');

    // Defina o atributo src da imagem com o link de imagem selecionado aleatoriamente
    imagemAtual.src = links[indiceAleatorio];
}

// Carregue o arquivo JSON com os links das imagens
fetch('carrolse-banner.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON');
        }
        return response.json();
    })
    .then(data => {
        if (data.links && Array.isArray(data.links)) {
            mudarImagem(data.links);
        } else {
            console.error('Formato de arquivo JSON inválido.');
        }
    })
    .catch(error => {
        console.error('Erro: ' + error.message);
    });