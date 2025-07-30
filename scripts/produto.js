const title = document.querySelector(".title-section")
const produtosContainer = document.querySelector(".todos-produtos-container")

const initialize = async () => {
    const params = new URLSearchParams(window.location.search)
    const id = params.get("id")

    try {
        const res = await fetch(`http://127.0.0.1:3333/produtos?id=${id}`)
        const produtos = await res.json()

        produtos.forEach((produto) => {
            produtosContainer.innerHTML += `
            <div class="card">
                <h2 class="nome-produto">${produto.nome}</h2>
                <div class="images-produto">
                    <a href="produto.html?id=${produto.id}">
                        <img src=${produto.imagem_url} alt="">
                    </a>
                    <a href="produto.html?id=${produto.id}">
                        <img src=${produto.imagem_url} alt="">
                    </a>
                    <a href="produto.html?id=${produto.id}">
                        <img src=${produto.imagem_url} alt="">
                    </a>
                </div>
            </div>
            `
        })
    } catch (error) {
        console.log(error)
    }
}

initialize()