let _self;
let _calendario = [{ valor: 1, mes: "Janeiro"},
{valor: 2, mes: "Fevereiro"},
{valor: 3, mes: "Março"},
{valor: 4, mes: "Abril"},
{valor: 5, mes: "Maio"},
{valor: 6, mes: "Junho"},
{valor: 7, mes: "Julho"},
{valor: 8, mes: "Agosto"},
{valor: 9, mes: "Setembro"},
{valor: 10, mes: "Outubro"},
{valor: 11, mes: "Novembro"},
{valor: 12, mes: "Dezembro"},
]
function Candidato(){
    _self = this;
    this.$content = document.querySelector("#content");
    
}

Candidato.prototype.criarCurriculoEscolar = function(event){
    event.preventDefault();
    _self.$content.innerHTML = `<form onsubmit="candidato.CriarExperiencia(event)" id="form" class=" col-lg-7 pt-5 container">
    <h3>Formação acadêmica</h3>
    <input class="btn btn-outline-primary center-block btn-add" type="button" value=" + Adicionar Formação Acadêmica"
        id="btn">
    <div class="form-row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="pt-2" for="formacao-grau">Grau Acadêmico</label>
                <select class="form-control" data-validation="required"
                    data-validation-error-msg="Selecione o grau acadêmico" id="formacao-grau" name="FormacaoGrau">
                    <option value="">Selecione o grau acadêmico</option>
                    <option value="13">Ensino Fundamental</option>
                    <option value="1">Ensino Médio</option>
                    <option value="2">Técnico</option>
                    <option value="10">Tecnólogo</option>
                    <option value="3">Graduação</option>
                    <option value="4">Pós-Graduação</option>
                    <option value="5">MBA</option>
                    <option value="6">Mestrado</option>
                    <option value="7">Doutorado</option>
                    <option value="8">Pós-Doutorado</option>
                    <option value="9">Livre Docência</option>
                </select>
            </div>
        </div>

        <div class="col-md-6">
            <div class="form-group">
                <label class="pt-2" for="formacao-instituicao">Instituição</label>
                <input type="text" class="form-control" data-validation="required"
                    data-validation-error-msg="Informe o nome da instituição" name="formacao-instituicao"
                    id="formacao-instituicao" placeholder="Nome da instituição de ensino" maxlength="150">
            </div>
        </div>

        <div class="col-md-6" id="row-curso">
            <div class="form-group">
                <label for="formacao-curso">Curso</label>
                <input type="text" class="form-control" data-validation="required"
                    data-validation-error-msg="Informe o nome do curso" name="formacao-curso" id="formacao-curso"
                    maxlength="150" placeholder="Nome do curso">
            </div>
        </div>
        <div class="col-md-12">
            <div class="col-sm-6">
                <label for="formacao-mes-entrada">Data de início</label>
                <div class="row">
                    <div class="col-xs-6 mb10">
                        <select class="form-control" data-validation="required"
                            data-validation-error-msg="Informe o mês de início" id="formacao-mes-entrada"
                            name="FormacaoMesEntrada">
                            <option value="">Mês</option>
                            ${_self.RetornarMeses()}
                        </select>
                    </div>
                    <div class="col-xs-6">
                        <select class="form-control" data-validation="required"
                            data-validation-error-msg="Informe o ano de início" id="formacao-ano-entrada"
                            name="FormacaoAnoEntrada">
                            <option value="">Ano</option>
                            ${_self.RetornarAno()}
                        </select>
                    </div>
                </div>

            </div>
            <div class="col-sm-6" id="formacao-data-saida">
                <label for="formacao-mes-saida">Data de conclusão </label>
                <div class="row">
                    <div class="col-xs-6 mb10">
                        <select class="form-control" data-validation="required"
                            data-validation-error-msg="Informe o mês de conclusão" id="formacao-mes-fim"
                            name="FormacaoMesSaida">
                            <option value="">Mês</option>
                            ${_self.RetornarMeses()}
                        </select>
                    </div>
                    <div class="col-xs-6">
                        <select class="form-control" data-validation="required"
                            data-validation-error-msg="Informe o ano de conclusão" id="formacao-ano-fim"
                            name="FormacaoAnoSaida">
                            <option value="">Ano</option>
                            ${_self.RetornarAno()}
                        </select>
                    </div>

                </div>

            </div>

            <form class="needs-validation col-6 container" novalidate>
                <h3 class="pt-5">Cursos/Certificações</h3>
                <input class="btn btn-outline-primary center-block btn-add " type="button" value=" + Adicionar Cursos"
                    id="btn" onclick="candidato.adicionarCurso()">

                <div class="form-row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="pt-2" for="curso-nome">Curso/Certificação</label>
                            <input type="text" class="form-control" data-validation="required"
                                data-validation-error-msg="Informe o nome o curso" name="curso-nome" id="curso-nome"
                                maxlength="100" placeholder="Nome do curso ou da certificação">
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="pt-2" for="curso-instituicao">Instituição</label>
                            <input type="text" class="form-control" data-validation="required"
                                data-validation-error-msg="Informe o nome da instituição" name="curso-instituicao"
                                id="curso-instituicao" maxlength="150" placeholder="Nome da instituição de ensino...">
                        </div>
                    </div>

                </div>

            </form>
            <input class="botao__roxo" type="submit" value="Avançar">
        </div>
    </div>
</form>`;

}

Candidato.prototype.CriarFormacao = function(event){
    event.preventDefault();
    console.log("criar formação");
}

Candidato.prototype.CriarExperiencia = function(event){
    event.preventDefault();
    _self.$content.innerHTML = `<div id="content" onsubmit="candidato.criarSelecao(event)">
    <form class="needs-validation col-lg-7 pt-5 container" novalidate>
        <h3>Experiência</h3>
        <input class="btn btn-outline-primary center-block btn-add" type="button" value=" + Adicionar Experiência"
            id="btn" onclick="candidato.AdicionarExperiencia(this)">
        <div id="experiencia">
            <div class="form-row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="pt-2" for="experiencia-cargo">Cargo</label>
                        <input type="text" class="form-control" data-validation="required"
                            data-validation-error-msg="Informe o seu cargo" name="experiencia-cargo"
                            id="experiencia-cargo" maxlength="150" autocomplete="off">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="pt-2" for="experiencia-empresa">Empresa</label>
                        <input type="text" class="form-control error" data-validation="required"
                            data-validation-error-msg="Informe o nome da empresa" name="experiencia-empresa"
                            id="experiencia-empresa" maxlength="100">
                    </div>
                </div>
            </div>
          
                <div class="col-sm-6">
                    <label for="formacao-mes-entrada">Data de início</label>
                    <div class="row">
                        <div class="col-xs-6 mb10">
                            <select class="form-control" data-validation="required"
                                data-validation-error-msg="Informe o mês de início" id="formacao-mes-entrada"
                                name="FormacaoMesEntrada">
                                <option value="">Mês</option>
                                ${_self.RetornarMeses()}
                            </select>
                        </div>
                        <div class="col-xs-6">
                            <select class="form-control" data-validation="required"
                                data-validation-error-msg="Informe o ano de início" id="formacao-ano-entrada"
                                name="FormacaoAnoEntrada">
                                <option value="">Ano</option>
                                ${_self.RetornarAno()}
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6" id="formacao-data-saida">
                    <label for="formacao-mes-saida">Data de conclusão </label>
                    <div class="row">
                        <div class="col-xs-6 mb10">
                            <select class="form-control" data-validation="required"
                                data-validation-error-msg="Informe o mês de conclusão" id="formacao-mes-fim"
                                name="FormacaoMesSaida">
                                <option value="">Mês</option>
                                ${_self.RetornarMeses()}
                            </select>
                        </div>
                        <div class="col-xs-6">
                            <select class="form-control" data-validation="required"
                                data-validation-error-msg="Informe o ano de conclusão" id="formacao-ano-fim"
                                name="FormacaoAnoSaida">
                                <option value="">Ano</option>
                                ${_self.RetornarAno()}
                            </select>
                        </div>
                    </div>
                </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label class="pt-2" for="experiencia-atividades">Atividades Realizadas</label>
                    <textarea class="form-control" maxlength="5000" id="experiencia-atividades"
                        data-validation="required" data-validation-error-msg="Informe as atividades realizadas"
                        name="experiencia-atividades" rows="4" spellcheck="true"></textarea>
                    <p class="help-block"><span id="maxlengthAtividades">1500</span> caracteres restantes</p>
                </div>
            </div>
        </div>
        <input class="botao__roxo" type="submit" value="Salvar">
        
    </form>
</div>`

}

Candidato.prototype.criarSelecao = function(event){
    event.preventDefault();
    alert("Salvo com sucesso!")
    console.log("");
}

Candidato.prototype.AdicionarExperiencia = function(elemento){
    let divExperiencia = _self.ObterDivExperiencia();
    divExperiencia.innerHTML += `<div class="form-row">
    <div class="col-md-6">
        <div class="form-group">
            <label for="experiencia-cargo">Cargo</label>
            <input type="text" class="form-control" data-validation="required"
                data-validation-error-msg="Informe o seu cargo" name="experiencia-cargo"
                id="experiencia-cargo" maxlength="150" autocomplete="off">
        </div>
    </div>

    <div class="col-md-6">
        <div class="form-group">
            <label for="experiencia-empresa">Empresa</label>
            <input type="text" class="form-control error" data-validation="required"
                data-validation-error-msg="Informe o nome da empresa" name="experiencia-empresa"
                id="experiencia-empresa" maxlength="100">
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm-6">
        <label for="experiencia-mes-entrada">Data de entrada</label>
        <div class="row">
            <div class="col-xs-6 mb10">
                <select class="form-control" data-validation="required"
                    data-validation-error-msg="Informe o mês de entrada" id="experiencia-mes-entrada"
                    name="ExperienciaMesEntrada">
                    ${_self.RetornarMeses()}
                </select>
            </div>
            <div class="col-xs-6">
                <select class="form-control" data-validation="required"
                    data-validation-error-msg="Informe o ano de entrada" id="experiencia-ano-entrada"
                    name="ExperienciaAnoEntrada">
                    ${_self.RetornarAno()}
                </select>
            </div>
        </div>
    </div>
    <div class="col-sm-6" id="experiencia-data-saida">
        <label for="experiencia-mes-saida">Data de saída </label>
        <div class="row">
            <div class="col-xs-6 mb10">
                <select class="form-control" data-validation="required"
                    data-validation-error-msg="Informe o mês de saída" id="experiencia-mes-saida"
                    name="ExperienciaMesSaida">
                    ${_self.RetornarMeses()}
                </select>
            </div>
            <div class="col-xs-6">
                <select class="form-control" data-validation="required"
                    data-validation-error-msg="Informe o ano de saída" id="experiencia-ano-saida"
                    name="ExperienciaAnoSaida">
                    <option value="">Ano</option>
                    ${_self.RetornarAno()}
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <div class="checkbox checkbox-primary">
                    <input type="checkbox" id="experiencia-atual" name="experiencia-atual">
                    <label for="experiencia-atual">
                        Esse é meu emprego atual
                    </label>
                </div>

            </div>
        </div>
    </div>

</div>

<div class="row">
    <div class="col-md-12">
        <div class="form-group">
            <label for="experiencia-atividades">Atividades Realizadas</label>
            <textarea class="form-control" maxlength="5000" id="experiencia-atividades"
                data-validation="required" data-validation-error-msg="Informe as atividades realizadas"
                name="experiencia-atividades" rows="4" spellcheck="true"></textarea>
            <p class="help-block"><span id="maxlengthAtividades">1500</span> caracteres restantes</p>
        </div>
    </div>
</div>`
}
Candidato.prototype.adicionarCurso = function(){
    console.log("falta criar a funcão")
}
Candidato.prototype.ObterConteudo = () => {
    return document.querySelector('#content');
}

Candidato.prototype.ObterDivExperiencia = () =>
    document.querySelector("#experiencia");

Candidato.prototype.RetornarAno = function(){
    var x = ((datas = []) => {
        datas.push(2019 - datas.length)
        if(datas.length < 1945)
                return x(datas);
            return datas;
    })
    return x().map((ano) => `<option value="${ano}">${ano}</option>`);
}

Candidato.prototype.RetornarMeses = () => 
    _calendario.map((mes) => `<option value"${mes.valor}">${mes.mes}</option>`);



var candidato = new Candidato();