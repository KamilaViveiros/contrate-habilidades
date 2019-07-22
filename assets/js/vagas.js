let vagas = [
    {

        titulo: 'Dev Front-end',
        descricao: 'Irá trabalhar com Programação orientada objeto, C#, ASP.NET WEB API, banco de dados',
        local: 'São Paulo, SP,BR'
    },

    {

        titulo: 'UX Design',
        descricao: 'atuará em divertas tarefas e funções que ainda não exigem profundo conhecimento no assunto, e será acompanhado de perto pelo TechLeader.',
        local: 'São Paulo, SP,BR'
    },

    {

        titulo: 'Analista de Projetos',
        descricao: 'Elaboram a visão do produto por meio de imersão, pesquisa e validação com usuários;',
        local: 'São Paulo, SP,BR'
    },

]

var cards = document.querySelector('.container');
var createCard = (data) => {
    return data.map((item) => {
        return (

            `
                  <div class="row ">
                      <div class="col-sm-12">
                          <div class="card border-light mb-3 bg-light">
                              <div class="card-body">
                                  <p class="card-title font-weight-bold">${item.titulo}</p>
                                  <p>${item.descricao}</p>
                                  <small class="card-text">${item.local}</small>
      
                             </div>
                          </div>
                      </div>
                      
                  </div>
        `
        )
    }).join('');
}
cards.innerHTML += createCard(vagas);

var botao = document.getElementById('pesquisarBusca');

botao.addEventListener("click", () => {
    var palavraBusca = document.getElementById('inputBusca').value.toLowerCase();

    var filtro = vagas.filter((item) => {
        return item.titulo.toLowerCase().includes(palavraBusca) || item.descricao.toLowerCase().includes(palavraBusca)
    });
    cards.innerHTML = createCard(filtro);
});

