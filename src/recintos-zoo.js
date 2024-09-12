//Ficou um pouco confuso de entender de fato o que vocês queriam, queriam um sistema que fosse usado apenas uma vez? Passando os dois valores de entrada e dando o resultado final; ou queriam um sistema mais complexo, onde poderia ser utilizado várias vezes e armazenasse os dados dos recintos? Como não ficou claro, optei pelo que parecia mais claro, o sistema mais simples.
class RecintosZoo {
    analisaRecintos(animal, quantidade) {
        //Declaração de Variáveis
        let savana1EspacoLivre=7;
        let savanaERioEspacoLivre=5;
        let rioEspacoLivre=8;
        let savana2EspacoLivre=6;
        let recintosViáveis;
        //Processamento de Dados
        if(quantidade<=0){
            return "Quantidade inválida";
        }
        switch(animal.toUpperCase()){
            //Carnívoro
            case "LEAO":
                if(quantidade*3>savana2EspacoLivre){
                    return "Não há recinto viável";
                }else{
                    savana2EspacoLivre-=quantidade*3;
                }
                break;
            //Carnívoro
            case "LEOPARDO":
                return "Não há recinto viável";
            //Carnívoro
            case "CROCODILO":
                if(quantidade*3>rioEspacoLivre){
                    return "Não há recinto viável";
                }else{
                    rioEspacoLivre-=quantidade*3;
                }
                break;
            case "MACACO":
                if(quantidade>savana1EspacoLivre){
                    return "Não há recinto viável";
                }else{
                    savana1EspacoLivre-=quantidade;
                }
                break;
            case "GAZELA":
                if((quantidade*2+1)>savana1EspacoLivre){
                    return "Não há recinto viável";
                }else{
                    savana1EspacoLivre-=quantidade*2+1;
                }
                break;
            //Hipopótamo é onívero
            case "HIPOPOTAMO":
                if((quantidade*4+1>savanaERioEspacoLivre)){
                    return "Não há recinto viável";
                }else{
                    savanaERioEspacoLivre-=quantidade*4+1;
                }
                break;
            default:
                return "Animal inválido";
        }
        recintosViáveis=[`Recinto 1 (espaço livre: ${savana1EspacoLivre} total: 10)`,`Recinto 2 (espaço livre: 5 total: 5)`,`Recinto 3 (espaço livre: ${savanaERioEspacoLivre} total: 7)`,`Recinto 4 (espaço livre: ${rioEspacoLivre} total: 8)`,`Recinto 5 (espaço livre: ${savana2EspacoLivre} total: 9)`];
        return recintosViáveis;
    }

}

export { RecintosZoo as RecintosZoo };
