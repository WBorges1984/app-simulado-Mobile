

const pergunta1 = { 
        id_pergunta:1,  
        dsPergunda:"A altura, a carga, a largura e o peso máximo que devem ser obedecidos pelo condutor do veículo constam na sinalização vertical de: ",
        imgPergunta: "../../assets/QUESTAO_1161.gif",
        op:[
            {texto: "serviço", certa: false },
            {texto: "complementação", certa: false },
            {texto: "indicação", certa: false },
            {texto: "regulamentação", certa: true }
        ]
}



const pergunta2 = { 
    id_pergunta:2,  
    dsPergunda:"Um candidato à obtenção da CNH, durante o Exame de Direção Veicular para a categoria B, comete uma falta grave, com a perda de 3 pontos. Nessas condições, ele será:",
    imgPergunta: "",
    op:[
        {texto: "aprovado, desde que não cometa nenhuma outra falta leve", certa: false },
        {texto: "aprovado, desde que não cometa nenhuma outra falta grave", certa: false },
        {texto: "reprovado, devendo realizar novo exame", certa: false },
        {texto: "aprovado, desde que não cometa nenhuma outra falta, de qualquer natureza", certa: true }
    ]
}

const pergunta3 = {  
    id_pergunta:3,  
    dsPergunda:"De acordo com a situação ao lado, é correto afirmar que:",
    urlPergunta: "https://simulado-online.detran.rj.gov.br/img/placas/QUESTAO_1161.GIF",
    op:[
        {texto: "a conversão que o veículo AMARELO irá fazer está correta", certa: false },
        {texto: "a conversão que o veículo AZUL irá fazer está correta", certa: true },
        {texto: "a conversão que os veículos AZUL e AMARELO irão fazer estão corretas", certa: false },
        {texto: "a conversão que o veículo AZUL irá fazer está incorreta", certa: false }
    ]
};
    

export {pergunta1,pergunta2,pergunta3};