// =========================================
// ARMAZENAMENTO
// =========================================


// -----------------------------------------
// SALVAR ORÇAMENTOS
// -----------------------------------------

function salvarOrcamentos(orcamentos) {

    localStorage.setItem(

        "orcamentos",

        JSON.stringify(orcamentos)

    );

}


// -----------------------------------------
// BUSCAR ORÇAMENTOS
// -----------------------------------------

function buscarOrcamentos() {

    const dados =
        localStorage.getItem("orcamentos");


    if (!dados) {

        return [];

    }


    return JSON.parse(dados);

}


// -----------------------------------------
// SALVAR CLIENTES
// -----------------------------------------

function salvarClientes(clientes) {

    localStorage.setItem(

        "clientes",

        JSON.stringify(clientes)

    );

}


// -----------------------------------------
// BUSCAR CLIENTES
// -----------------------------------------

function buscarClientes() {

    const dados =
        localStorage.getItem("clientes");


    if (!dados) {

        return [];

    }


    return JSON.parse(dados);

}