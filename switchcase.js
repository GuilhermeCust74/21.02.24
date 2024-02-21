const Sortear = () => {
    let nomes = ["cristiano ronaldo.jr","procurando NEMO 2","papai Cris","miguel","gigas","gabriel","roberto gill","olha o aviaozinho do ratinho","nao encontrado","erro#1415100054198"];
    
    let h1Nome = document.getElementById("nome");
    
    let achouNumero = false;
    let numeroSorteado;
    
    while (achouNumero == false){
        numeroSorteado = Math.floor(Math.random() * 100);
        if (numeroSorteado < nomes.length) { 
            achouNumero = true;
        }
    }
    
    switch (numeroSorteado) {
        case 0:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 1:
            h1Nome.innerText = nomes[numeroSorteado];
             break;
        case 2:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 3:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 4:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 5:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 6:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 7:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 8:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 9:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 10:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
            default:
                h1Nome.innerText = "ops! Seu nome nao consta na lista.";
        }
        h1Nome.innerText += "O numero sorteado foi: " +numeroSorteado;
    }
    