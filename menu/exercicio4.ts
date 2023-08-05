// 4. Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.


    // export function tabuada() {
    //     for (let contador = 1; contador <= 10; contador++){
    // //console.log("3 x "+contador+" = " + (3*contador));
    // //console.log(`2 x ${contador} = ${2 * contador}`);
    // console.log(`${contador} ${contador} = ${2 * contador}`);
    //     }
    
    // }

    import PromptSync from "prompt-sync";
    let prompt = PromptSync();

    export function tabuada() {
        let numero = parseInt(prompt("Digite o numero que deseja ver a tabuada: "))

        for (let contador: number = 1; contador <= 10; contador++){
    //console.log("3 x "+contador+" = " + (3*contador));
    //console.log(`2 x ${contador} = ${2 * contador}`);
    console.log(`${contador} ${contador} = ${2 * contador}`);
        }
    
    }