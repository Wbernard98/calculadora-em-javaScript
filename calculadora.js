function calculadora() {
    const operacao = Number(prompt('escolha uma operação:\n 1-adição (+)\n 2- subtração (-)\n 3- multiplicação (*)\n 4- divisão real (/)\n 5-divisão inteira (%)\n 6- potenciação (**)\n'));
    if (!operacao || operacao >= 7) {
        alert('erro - operação Inválida!');
        calculadora();
    } else {
        let n1 = Number(prompt('insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        if (!n1 || !n2) {
            alert('erro - parametros inválidos!')
            calculadora();
        } else {
            function soma() {
                resultado = n1 + n2;
                alert(`${ n1 } + ${ n2 } = ${ resultado }`)
                novaOperacao();
            }

            function substracao() {
                resultado = n1 - n2;
                alert(`${ n1 } - ${ n2 } = ${ resultado }`)
                novaOperacao();
            }

            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${ n1 } * ${ n2 } = ${ resultado }`)
                novaOperacao();
            }

            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${ n1 } / ${ n2 } = ${ resultado }`)
                novaOperacao();
            }

            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`${ n1 } % ${ n2 } = ${ resultado }`)
                novaOperacao();
            }

            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${ n1 } ** ${ n2 } = ${ resultado }`)
                novaOperacao();
            }

            function novaOperacao() {
                let opcao = prompt('deseja fazer outra operação?\n 1-sim\n 2-não');

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até mais')
                } else {
                    alert('digite uma opção vlaida!')
                    novaOperacao();
                }
            }
        }


        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisaoReal();
        } else if (operacao == 5) {
            divisaoInteira();
        } else if (operacao == 6) {
            potenciacao();
        }
    }
}


calculadora();