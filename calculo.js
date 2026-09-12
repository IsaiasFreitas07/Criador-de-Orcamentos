// =========================================
// CÁLCULOS DO ORÇAMENTO
// =========================================


// Calcula o total de um item

function calcularTotalItem(
    quantidade,
    valorUnitario
) {

    return quantidade * valorUnitario;

}


// -----------------------------------------
// TOTAL DOS SERVIÇOS
// -----------------------------------------

function calcularTotalServicos(servicos) {

    return servicos.reduce(
        function(total, servico) {

            return total + servico.total;

        },
        0
    );

}


// -----------------------------------------
// TOTAL DOS MATERIAIS
// -----------------------------------------

function calcularTotalMateriais(materiais) {

    return materiais.reduce(
        function(total, material) {

            return total + material.total;

        },
        0
    );

}


// -----------------------------------------
// SUBTOTAL
// -----------------------------------------

function calcularSubtotal(
    servicos,
    materiais
) {

    const totalServicos =
        calcularTotalServicos(servicos);


    const totalMateriais =
        calcularTotalMateriais(materiais);


    return totalServicos + totalMateriais;

}


// -----------------------------------------
// DESCONTO
// -----------------------------------------

function calcularDesconto(
    subtotal,
    percentual
) {

    return subtotal *
        (percentual / 100);

}


// -----------------------------------------
// TOTAL FINAL
// -----------------------------------------

function calcularTotalFinal(
    subtotal,
    desconto
) {

    const total =
        subtotal - desconto;


    return Math.max(total, 0);

}


// -----------------------------------------
// FORMATAÇÃO DE MOEDA
// -----------------------------------------

function formatarMoeda(valor) {

    return valor.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

}