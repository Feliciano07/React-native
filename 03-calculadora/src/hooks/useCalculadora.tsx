import {useRef, useState} from 'react'

enum Operadores{
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {

    const [numero, setnumero] = useState('0');

    const [numeroAnterior, setnumeroAnterior] = useState('0');

    const ultimaOperacion = useRef<Operadores>()

    const limpiar = ()=>{
        setnumero('0'); 
        setnumeroAnterior('0');
    }

    const armarNumero = (numeroTexto: string)=>{

        // No aceptar doble punto
        if(numero.includes('.') && numeroTexto ==='.') return;

        if(numero.startsWith('0') || numero.startsWith('-0')){
            // punto decimal
            if (numeroTexto === '.'){
                setnumero(numero +  numeroTexto);
                // Evaluar si es otro cero y hay un punto
            }else if(numeroTexto === '0' && numero.includes('.')){
                setnumero(numero + numeroTexto)
                //Si es numero diferente de 0 y no hay un punto
            }else if( numeroTexto !=='0' && !numero.includes('.')){
                setnumero(numeroTexto)
                //evitar 000.00
            }else if( numeroTexto === '0' && !numero.includes('.')){
                setnumero (numero)
            }else{
                setnumero(numero + numeroTexto)
            }
        }else{
            setnumero(numero + numeroTexto)    
        }
    }

    const btnDelete = () =>{
        let negativo = '';
        let numeroTmp = numero;
        if(numero.includes('-')){
            negativo = '-'
            numeroTmp = numero.substr(1);
        }
        if(numeroTmp.length > 1){
            setnumero( negativo +  numeroTmp.slice(0,-1))
        }
        else{
            setnumero('0')
        }
    }


    const postivoNegativo = ()=>{
        if (numero.includes('-')){
            setnumero( numero.replace('-',''))
        }else{
            setnumero('-' + numero)
        }
    }


    const cambiarNumPorAnterior = ()=>{
        if(numero.endsWith('.')){
            setnumeroAnterior(numero.slice(0,-1))
            
        }else{
            setnumeroAnterior(numero)
        }
        setnumero('0')
    }

    const btnDividir = ()=>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir
    }
    const btnMultiplicar = ()=>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar
    }
    const btnRestar = ()=>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.restar
    }
    const btnSumar = ()=>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.sumar
    }

    const calcular = ()=>{
        const numero1 = Number(numero);
        const numero2 = Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setnumero( `${ numero1 + numero2}`);
                break;
            case Operadores.restar:
                setnumero( `${ numero2 - numero1}`);
                break;

            case Operadores.multiplicar:
                setnumero( `${ numero1 * numero2}`);
                break;

            case Operadores.dividir:
                setnumero( `${ numero2 / numero1}`);
                break;
        }
        setnumeroAnterior('0')
    }
    
    return{
        numero,
        numeroAnterior,
        limpiar,
        armarNumero,
        btnDelete,
        postivoNegativo,
        btnDividir, btnMultiplicar, btnRestar, btnSumar,
        calcular
    }
}
