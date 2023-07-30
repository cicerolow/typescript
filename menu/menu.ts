import PromptSync from "prompt-sync";

import { imprimirNumeros } from "../menu/exercicio1.ts";
import { numerosPares } from "../menu/exercicio2.ts";
import { numerosImpares } from "../menu/exercicio3.ts";
import { tabuada } from "../menu/exercicio4.ts";
import { sequenciaFibonacci } from "../menu/exercicio5.ts";
import { nPares } from "../menu/exercicio6.ts";

const prompt = PromptSync();

//menu para escolher qual exercicio o usuario escolher

let exercicio;
let continuar;

do {

    exercicio = parseInt(prompt("Digite a lista de exercicios de 1 ate 6: "));

    switch (exercicio) {
        case 1:
            imprimirNumeros()
            break;
        case 2:
            numerosPares()
            break;
        case 3:
            numerosImpares()
            break;
        case 4:
            tabuada()
            break;
        case 5:
            sequenciaFibonacci()
            break;
        case 6:
            nPares()
            break;
        default:
            break;

    }
    // console.log("Digite um numero de 1 a 6!!!");
    // continuar = prompt("Deseja continuar s para sim e n para nao: ")
    continuar = prompt("Deseja continuar ver outros exercicios? Digite s para SIM digite n para NAO: ")

} while
    (continuar.toLocaleLowerCase() === "s");
// (continuar === "sim");