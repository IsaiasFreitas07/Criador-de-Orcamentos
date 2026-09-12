// =========================================
// ORÇAOBRA
// JavaScript principal
// =========================================


// -----------------------------------------
// ESTADO DO ORÇAMENTO
// -----------------------------------------

let orcamentoAtual = {

    numero: null,

    cliente: {
        nome: "",
        telefone: "",
        email: ""
    },

    obra: {
        nome: "",
        tipo: "",
        endereco: "",
        area: 0,
        prazo: "",
        descricao: ""
    },

    servicos: [],

    materiais: [],

    valores: {

        desconto: 0,

        acrescimo: 0,

        imposto: 0

    },

    pagamento: {

        tipo: "",

        validade: 15

    },

    observacoes: "",

    status: "rascunho"

};


// -----------------------------------------
// ELEMENTOS
// -----------------------------------------

const dashboard =
    document.getElementById("dashboard");

const telaOrcamento =
    document.getElementById("telaOrcamento");


// -----------------------------------------
// INICIAR NOVO ORÇAMENTO
// -----------------------------------------

function iniciarOrcamento() {

    dashboard.style.display = "none";

    telaOrcamento.style.display = "block";

    mostrarEtapa("etapaCliente");

}


// -----------------------------------------
// MOSTRAR ETAPA
// -----------------------------------------

function mostrarEtapa(id) {

    const etapas =
        document.querySelectorAll(".etapa");

    etapas.forEach(function(etapa) {

        etapa.classList.remove("ativa");

    });


    const etapa =
        document.getElementById(id);


    if (etapa) {

        etapa.classList.add("ativa");

    }

}


// -----------------------------------------
// BOTÃO NOVO ORÇAMENTO
// -----------------------------------------

document
    .getElementById("btnNovoOrcamento")
    .addEventListener(
        "click",
        iniciarOrcamento
    );


document
    .getElementById("btnCriarOrcamento")
    .addEventListener(
        "click",
        iniciarOrcamento
    );


// -----------------------------------------
// CLIENTE → OBRA
// -----------------------------------------

document
    .getElementById("btnClienteContinuar")
    .addEventListener(
        "click",
        function() {

            const nome =
                document
                    .getElementById("clienteNome")
                    .value
                    .trim();


            if (nome === "") {

                alert(
                    "Informe o nome do cliente."
                );

                return;

            }


            orcamentoAtual.cliente.nome =
                nome;


            orcamentoAtual.cliente.telefone =
                document
                    .getElementById("clienteTelefone")
                    .value;


            orcamentoAtual.cliente.email =
                document
                    .getElementById("clienteEmail")
                    .value;


            mostrarEtapa("etapaObra");

        }
    );


// -----------------------------------------
// OBRA → SERVIÇOS
// -----------------------------------------

document
    .getElementById("btnObraContinuar")
    .addEventListener(
        "click",
        function() {

            const nome =
                document
                    .getElementById("obraNome")
                    .value
                    .trim();


            if (nome === "") {

                alert(
                    "Informe o nome da obra."
                );

                return;

            }


            orcamentoAtual.obra.nome =
                nome;


            orcamentoAtual.obra.tipo =
                document
                    .getElementById("obraTipo")
                    .value;


            orcamentoAtual.obra.endereco =
                document
                    .getElementById("obraEndereco")
                    .value;


            orcamentoAtual.obra.area =
                Number(
                    document
                        .getElementById("obraArea")
                        .value
                );


            orcamentoAtual.obra.prazo =
                document
                    .getElementById("obraPrazo")
                    .value;


            orcamentoAtual.obra.descricao =
                document
                    .getElementById("obraDescricao")
                    .value;


            mostrarEtapa("etapaServicos");

        }
    );


// -----------------------------------------
// VOLTAR
// -----------------------------------------

document
    .getElementById("btnObraVoltar")
    .addEventListener(
        "click",
        function() {

            mostrarEtapa("etapaCliente");

        }
    );


document
    .getElementById("btnServicoVoltar")
    .addEventListener(
        "click",
        function() {

            mostrarEtapa("etapaObra");

        }
    );


document
    .getElementById("btnMaterialVoltar")
    .addEventListener(
        "click",
        function() {

            mostrarEtapa("etapaServicos");

        }
    );


document
    .getElementById("btnValoresVoltar")
    .addEventListener(
        "click",
        function() {

            mostrarEtapa("etapaMateriais");

        }
    );


document
    .getElementById("btnPagamentoVoltar")
    .addEventListener(
        "click",
        function() {

            mostrarEtapa("etapaValores");

        }
    );


document
    .getElementById("btnRevisaoVoltar")
    .addEventListener(
        "click",
        function() {

            mostrarEtapa("etapaPagamento");

        }
    );