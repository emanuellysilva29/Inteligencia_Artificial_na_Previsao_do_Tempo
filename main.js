document.addEventListener('DOMContentLoaded', () => {
    
    const btnAnalisar = document.getElementById('btn-analisar');
    const resultadoIa = document.getElementById('resultado-ia');
    const loading = document.getElementById('loading');
    const outputTexto = document.getElementById('output-texto');

    btnAnalisar.addEventListener('click', () => {
        // Captura os valores selecionados no formulário
        const regiao = document.getElementById('regiao').value;
        const sensor = document.getElementById('sensor').value;

        // Exibe a caixa de resultado e ativa o efeito de carregamento
        resultadoIa.classList.remove('hidden');
        loading.classList.remove('hidden');
        outputTexto.innerText = '';

        // Simula o tempo de resposta do processamento dos algoritmos de IA (1.2 segundos)
        setTimeout(() => {
            loading.classList.add('hidden');
            outputTexto.innerHTML = gerarDiagnosticoIA(regiao, sensor);
        }, 1200);
    });

    // Função que atua como a matriz de decisão da inteligência artificial
    function gerarDiagnosticoIA(regiao, problema) {
        let recomendacao = "";

        const regiaoFormatada = regiao.charAt(0).toUpperCase() + regiao.slice(1);

        switch (problema) {
            case 'seca':
                recomendacao = `<strong>Alerta de Estresse Hídrico para o ${regiaoFormatada} do PR:</strong> O modelo identificou taxas de evapotranspiração críticas para os próximos 7 dias. <br><br>⚠️ <em>Recomendação da IA:</em> Ative o sistema de irrigação automatizada em períodos noturnos para minimizar a perda de água por evaporação e preservar a umidade da raiz.`;
                break;
            case 'chuva':
                recomendacao = `<strong>Padrão de Precipitação Intensa detectado no ${regiaoFormatada} do PR:</strong> Modelos numéricos de IA apontam convergência de umidade com risco de granizo localizado nas próximas 48 horas. <br><br>⚠️ <em>Recomendação da IA:</em> Suspenda temporariamente a aplicação de defensivos agrícolas ou fertilizantes para evitar que o produto seja lavado pelo solo. Priorize a drenagem de áreas propensas a alagamento.`;
                break;
            case 'geada':
                recomendacao = `<strong>Alerta de Massa de Ar Polar severa no ${regiaoFormatada} do PR:</strong> Probabilidade de geada calculada em 88% para a madrugada subsequente, afetando culturas sensíveis (como café ou hortaliças). <br><br>⚠️ <em>Recomendação da IA:</em> Recomenda-se o uso imediato de técnicas de cobertura vegetal protetora ou irrigação por aspersão preventiva (anti-geada) antes do amanhecer.`;
                break;
            default:
                recomendacao = "Dados inconsistentes. Atualize os sensores locais e tente novamente.";
        }

        return recomendacao;
    }
});
