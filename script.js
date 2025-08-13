// Base de dados de subgêneros
const subgeneros = {
    'romance': [
        'Romance Contemporâneo',
        'Romance Histórico',
        'Romance Paranormal',
        'Romance Erótico',
        'Romance de Época',
        'Romance Policial',
        'Romance Médico',
        'Romance de Bilionário',
        'Romance de Pequena Cidade',
        'Romance de Segunda Chance'
    ],
    'ficcao-cientifica': [
        'Cyberpunk',
        'Distopia',
        'Viagem no Tempo',
        'Space Opera',
        'Pós-Apocalíptico',
        'Ficção Científica Hard',
        'Biopunk',
        'Steampunk',
        'Ficção Científica Militar',
        'Colonização Espacial'
    ],
    'fantasia': [
        'Alta Fantasia',
        'Fantasia Urbana',
        'Fantasia Sombria',
        'Fantasia Épica',
        'Fantasia Romântica',
        'Fantasia Histórica',
        'Portal Fantasy',
        'Fantasia de Academia',
        'Fantasia Militar',
        'Fantasia Celta'
    ],
    'suspense': [
        'Thriller Psicológico',
        'Thriller Médico',
        'Thriller Tecnológico',
        'Thriller Doméstico',
        'Thriller Legal',
        'Thriller de Espionagem',
        'Thriller Sobrenatural',
        'Thriller Político',
        'Thriller de Ação',
        'Thriller de Conspiração'
    ],
    'misterio': [
        'Mistério Cozy',
        'Mistério Policial',
        'Mistério Histórico',
        'Mistério Sobrenatural',
        'Mistério de Quarto Fechado',
        'Mistério de Pequena Cidade',
        'Mistério Médico',
        'Mistério Tecnológico',
        'Mistério de Família',
        'Mistério de Assassinato'
    ],
    'drama': [
        'Drama Familiar',
        'Drama Histórico',
        'Drama Social',
        'Drama Psicológico',
        'Drama de Coming-of-Age',
        'Drama Médico',
        'Drama de Guerra',
        'Drama de Relacionamento',
        'Drama Legal',
        'Drama de Superação'
    ],
    'aventura': [
        'Aventura de Ação',
        'Aventura Histórica',
        'Aventura de Sobrevivência',
        'Aventura Marítima',
        'Aventura de Exploração',
        'Aventura Militar',
        'Aventura de Caça ao Tesouro',
        'Aventura de Espionagem',
        'Aventura Pós-Apocalíptica',
        'Aventura de Resgate'
    ],
    'horror': [
        'Horror Psicológico',
        'Horror Sobrenatural',
        'Horror de Sobrevivência',
        'Horror Gótico',
        'Horror Cósmico',
        'Horror de Body Horror',
        'Horror de Possessão',
        'Horror de Culto',
        'Horror de Zumbis',
        'Horror de Vampiros'
    ],
    'historico': [
        'Ficção Histórica Medieval',
        'Ficção Histórica da Segunda Guerra',
        'Ficção Histórica Vitoriana',
        'Ficção Histórica do Oeste',
        'Ficção Histórica Antiga',
        'Ficção Histórica Renascentista',
        'Ficção Histórica Colonial',
        'Ficção Histórica da Guerra Civil',
        'Ficção Histórica Regency',
        'Ficção Histórica Moderna'
    ],
    'contemporaneo': [
        'Ficção Contemporânea Literária',
        'Ficção Contemporânea Urbana',
        'Ficção Contemporânea de Relacionamento',
        'Ficção Contemporânea Social',
        'Ficção Contemporânea Familiar',
        'Ficção Contemporânea de Trabalho',
        'Ficção Contemporânea de Amadurecimento',
        'Ficção Contemporânea de Crise',
        'Ficção Contemporânea de Descoberta',
        'Ficção Contemporânea de Transformação'
    ]
};

// Base de dados de elementos narrativos
const elementosNarrativos = {
    protagonistas: {
        'romance': [
            'CEO bilionário(a) com passado misterioso',
            'Médico(a) dedicado(a) que perdeu a fé no amor',
            'Artista incompreendido(a) em busca da inspiração',
            'Advogado(a) workaholic que evita relacionamentos',
            'Chef de cozinha apaixonado(a) pela profissão',
            'Escritor(a) famoso(a) com bloqueio criativo',
            'Veterinário(a) que ama mais animais que pessoas',
            'Arquiteto(a) perfeccionista com medo de se entregar',
            'Professor(a) universitário(a) tímido(a) e intelectual',
            'Bombeiro(a) corajoso(a) com traumas do passado'
        ],
        'ficcao-cientifica': [
            'Hacker genial que descobriu uma conspiração',
            'Cientista que criou uma IA perigosa',
            'Piloto espacial preso em uma estação abandonada',
            'Engenheiro que deve salvar a humanidade',
            'Soldado cibernético questionando sua humanidade',
            'Pesquisador temporal preso em um loop',
            'Colonizador de Marte enfrentando o desconhecido',
            'Programador que vive em realidade virtual',
            'Biohacker modificando a própria genética',
            'Explorador de dimensões paralelas'
        ],
        'fantasia': [
            'Mago(a) jovem descobrindo poderes ancestrais',
            'Guerreiro(a) amaldiçoado(a) em busca da redenção',
            'Princesa rebelde que rejeita o destino',
            'Ladrão(ã) com coração de ouro e passado sombrio',
            'Druida que protege a natureza dos invasores',
            'Assassino(a) que questiona suas ordens',
            'Necromante incompreendido(a) lutando contra o mal',
            'Bardo que carrega segredos em suas canções',
            'Paladino(a) cuja fé foi abalada',
            'Feiticeiro(a) banido(a) de sua própria terra'
        ],
        'suspense': [
            'Detetive aposentado forçado a voltar à ativa',
            'Psicólogo(a) que trata de um serial killer',
            'Jornalista investigando uma conspiração perigosa',
            'Advogado(a) defendendo um caso impossível',
            'Médico(a) legista descobrindo pistas macabras',
            'Agente federal infiltrado(a) em organização criminosa',
            'Hacker perseguido(a) por informações que possui',
            'Testemunha protegida com memória fragmentada',
            'Profiler criminal caçando um copycat',
            'Segurança pessoal protegendo alguém marcado para morrer'
        ]
    },
    conflitos: {
        'romance': [
            'Dois rivais de negócios forçados a trabalhar juntos',
            'Amor proibido entre famílias inimigas',
            'Reencontro após anos de separação e mágoa',
            'Casamento arranjado que se transforma em amor verdadeiro',
            'Segredo do passado que ameaça destruir o relacionamento',
            'Diferenças sociais que parecem intransponíveis',
            'Triângulo amoroso com melhor amigo(a)',
            'Amor à distância testado por tentações locais',
            'Segundo chance após traição ou abandono',
            'Competição profissional que vira atração pessoal'
        ],
        'ficcao-cientifica': [
            'IA que desenvolve consciência e questiona seus criadores',
            'Viagem no tempo que altera a linha temporal',
            'Primeira missão de colonização encontra vida hostil',
            'Experimento genético cria nova espécie inteligente',
            'Realidade virtual se torna indistinguível da realidade',
            'Invasão alienígena através de infiltração silenciosa',
            'Tecnologia que permite transferir consciências',
            'Descoberta de que a Terra é uma simulação',
            'Guerra entre humanos e suas criações robóticas',
            'Pandemia que altera geneticamente a humanidade'
        ],
        'fantasia': [
            'Profecia antiga que deve ser cumprida ou evitada',
            'Reino em guerra contra criaturas das trevas',
            'Magia que está desaparecendo do mundo',
            'Artefato poderoso que corrompe quem o possui',
            'Portal entre mundos que não pode ser fechado',
            'Dragão ancestral que desperta de seu sono milenar',
            'Maldição familiar que passa de geração em geração',
            'Academia de magia infiltrada por forças do mal',
            'Deuses antigos retornando para reclamar o mundo',
            'Escolhido que rejeita seu destino heroico'
        ],
        'suspense': [
            'Serial killer que imita crimes de livros famosos',
            'Conspiração que vai até o topo do governo',
            'Sequestro onde o resgatado não quer ser salvo',
            'Identidade falsa que se torna perigosamente real',
            'Chantagem que envolve segredos de família',
            'Testemunha de crime que ninguém acredita',
            'Assassino que deixa pistas para ser pego',
            'Vingança elaborada anos após uma injustiça',
            'Experimento psicológico que sai de controle',
            'Caça ao homem em território hostil'
        ]
    },
    cenarios: {
        'romance': [
            'Pequena cidade costeira com tradições antigas',
            'Metrópole moderna com vida noturna agitada',
            'Vinícola familiar em vale pitoresco',
            'Resort de luxo em ilha paradisíaca',
            'Hospital de grande porte em centro urbano',
            'Universidade prestigiosa com campus histórico',
            'Rancho isolado em paisagem selvagem',
            'Editora tradicional em bairro boêmio',
            'Empresa de tecnologia em arranha-céu moderno',
            'Café aconchegante em bairro artístico'
        ],
        'ficcao-cientifica': [
            'Estação espacial orbitando planeta desconhecido',
            'Cidade subterrânea após catástrofe nuclear',
            'Metrópole cyberpunk com chuva ácida constante',
            'Nave geracional em viagem de séculos',
            'Laboratório de pesquisa em lua de Júpiter',
            'Realidade virtual indistinguível do mundo real',
            'Colônia em Marte lutando pela independência',
            'Terra pós-apocalíptica dominada por máquinas',
            'Dimensão paralela com leis físicas diferentes',
            'Futuro distante onde a humanidade evoluiu'
        ],
        'fantasia': [
            'Reino medieval com magia integrada à sociedade',
            'Floresta encantada habitada por seres místicos',
            'Academia de magia em castelo flutuante',
            'Cidade portuária com piratas e contrabandistas',
            'Deserto infinito com oásis mágicos',
            'Montanhas geladas onde dragões fazem ninhos',
            'Submundo de túneis habitado por anões',
            'Ilha misteriosa que aparece apenas na lua cheia',
            'Torre de mago isolada entre as nuvens',
            'Taverna interdimensional frequentada por aventureiros'
        ],
        'suspense': [
            'Hospital psiquiátrico com histórico sombrio',
            'Pequena cidade onde todos guardam segredos',
            'Arranha-céu isolado durante tempestade',
            'Laboratório de pesquisa em local remoto',
            'Prisão de segurança máxima durante rebelião',
            'Cruzeiro de luxo em alto mar',
            'Universidade durante período de férias',
            'Casa isolada na floresta durante inverno',
            'Metrô subterrâneo após acidente',
            'Hotel histórico com reputação assombrada'
        ]
    }
};

// Análises de mercado por gênero
const analisesMercado = {
    'romance': {
        demanda: 'Muito Alta',
        concorrencia: 'Alta',
        preco_ideal: 'R$ 9,90 - R$ 14,90',
        palavras_chave: ['romance', 'amor', 'paixão', 'relacionamento', 'coração'],
        tendencias: 'Protagonistas fortes, diversidade, temas contemporâneos',
        publico: 'Principalmente mulheres 25-45 anos, leitoras vorazes'
    },
    'ficcao-cientifica': {
        demanda: 'Alta',
        concorrencia: 'Média',
        preco_ideal: 'R$ 12,90 - R$ 19,90',
        palavras_chave: ['ficção científica', 'futuro', 'tecnologia', 'espaço', 'IA'],
        tendencias: 'IA e tecnologia, distopias, exploração espacial',
        publico: 'Homens e mulheres 18-40 anos, interessados em tecnologia'
    },
    'fantasia': {
        demanda: 'Muito Alta',
        concorrencia: 'Alta',
        preco_ideal: 'R$ 11,90 - R$ 16,90',
        palavras_chave: ['fantasia', 'magia', 'dragões', 'aventura', 'épico'],
        tendencias: 'Fantasia urbana, protagonistas diversos, mundos complexos',
        publico: 'Jovens adultos 16-30 anos, fãs de jogos e filmes'
    },
    'suspense': {
        demanda: 'Alta',
        concorrencia: 'Média-Alta',
        preco_ideal: 'R$ 10,90 - R$ 15,90',
        palavras_chave: ['suspense', 'mistério', 'thriller', 'crime', 'investigação'],
        tendencias: 'Thrillers psicológicos, protagonistas femininas fortes',
        publico: 'Adultos 25-55 anos, leitores de todos os gêneros'
    },
    'misterio': {
        demanda: 'Média-Alta',
        concorrencia: 'Média',
        preco_ideal: 'R$ 9,90 - R$ 14,90',
        palavras_chave: ['mistério', 'detetive', 'investigação', 'crime', 'pistas'],
        tendencias: 'Mistérios cozy, detetives amadores, séries',
        publico: 'Adultos 30-60 anos, leitores tradicionais'
    }
};

// Função para atualizar subgêneros
function atualizarSubgeneros() {
    const generoSelect = document.getElementById('genero');
    const subgeneroSelect = document.getElementById('subgenero');
    
    const generoSelecionado = generoSelect.value;
    
    // Limpar opções anteriores
    subgeneroSelect.innerHTML = '<option value="">Escolha um subgênero...</option>';
    
    if (generoSelecionado && subgeneros[generoSelecionado]) {
        subgeneros[generoSelecionado].forEach(subgenero => {
            const option = document.createElement('option');
            option.value = subgenero.toLowerCase().replace(/\s+/g, '-');
            option.textContent = subgenero;
            subgeneroSelect.appendChild(option);
        });
    }
}

// Função para gerar ideia
function gerarIdeia(genero, subgenero, tom, publico) {
    // Selecionar elementos aleatórios baseados no gênero
    const protagonista = elementosNarrativos.protagonistas[genero] ? 
        elementosNarrativos.protagonistas[genero][Math.floor(Math.random() * elementosNarrativos.protagonistas[genero].length)] :
        'Protagonista carismático(a) com passado misterioso';
    
    const conflito = elementosNarrativos.conflitos[genero] ? 
        elementosNarrativos.conflitos[genero][Math.floor(Math.random() * elementosNarrativos.conflitos[genero].length)] :
        'Desafio que testará todos os limites do protagonista';
    
    const cenario = elementosNarrativos.cenarios[genero] ? 
        elementosNarrativos.cenarios[genero][Math.floor(Math.random() * elementosNarrativos.cenarios[genero].length)] :
        'Ambiente rico e detalhado que influencia a trama';
    
    // Obter análise de mercado
    const analise = analisesMercado[genero] || {
        demanda: 'Média',
        concorrencia: 'Média',
        preco_ideal: 'R$ 9,90 - R$ 14,90',
        tendencias: 'Histórias autênticas e bem desenvolvidas',
        publico: 'Leitores diversos'
    };
    
    // Gerar título sugestivo
    const titulos = {
        'romance': ['Coração', 'Paixão', 'Destino', 'Amor', 'Encontro', 'Promessa', 'Segredo'],
        'ficcao-cientifica': ['Futuro', 'Código', 'Nexus', 'Quantum', 'Cyber', 'Matrix', 'Protocolo'],
        'fantasia': ['Lâmina', 'Reino', 'Magia', 'Dragão', 'Coroa', 'Profecia', 'Cristal'],
        'suspense': ['Sombra', 'Silêncio', 'Último', 'Noite', 'Segredo', 'Rastro', 'Enigma']
    };
    
    const palavrasTitulo = titulos[genero] || ['Mistério', 'Jornada', 'Destino'];
    const titulo = palavrasTitulo[Math.floor(Math.random() * palavrasTitulo.length)];
    
    return {
        titulo: titulo,
        genero: genero,
        subgenero: subgenero,
        protagonista: protagonista,
        conflito: conflito,
        cenario: cenario,
        tom: tom,
        publico: publico,
        analise: analise
    };
}

// Função para exibir resultado
function exibirResultado(ideia) {
    const resultSection = document.getElementById('resultSection');
    const ideaResult = document.getElementById('ideaResult');
    
    const generoFormatado = ideia.genero.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    const tomFormatado = ideia.tom.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    const publicoFormatado = ideia.publico.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    ideaResult.innerHTML = `
        <h4>📖 "${ideia.titulo} [Título Sugestivo]"</h4>
        
        <div class="genre-info">
            <strong>🎯 Gênero:</strong> ${generoFormatado} - ${ideia.subgenero}<br>
            <strong>🎭 Tom:</strong> ${tomFormatado}<br>
            <strong>👥 Público:</strong> ${publicoFormatado}
        </div>
        
        <p><strong>🌟 Protagonista:</strong> ${ideia.protagonista}</p>
        
        <p><strong>⚡ Conflito Central:</strong> ${ideia.conflito}</p>
        
        <p><strong>🏞️ Cenário:</strong> ${ideia.cenario}</p>
        
        <div class="market-analysis">
            <h5>📊 Análise Rápida de Mercado:</h5>
            <p><strong>Demanda:</strong> ${ideia.analise.demanda} | <strong>Concorrência:</strong> ${ideia.analise.concorrencia}</p>
            <p><strong>Preço Ideal:</strong> ${ideia.analise.preco_ideal}</p>
            <p><strong>Tendência:</strong> ${ideia.analise.tendencias}</p>
            <p><strong>Público-Alvo:</strong> ${ideia.analise.publico}</p>
        </div>
        
        <p><strong>💡 Potencial de Sucesso:</strong> <span style="color: #22c55e; font-weight: bold;">ALTO</span> - Esta combinação tem elementos comprovadamente atrativos para o mercado atual.</p>
    `;
    
    resultSection.style.display = 'block';
    resultSection.scrollIntoView({ behavior: 'smooth' });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    const generoSelect = document.getElementById('genero');
    const form = document.getElementById('ideaForm');
    const generateBtn = document.getElementById('generateBtn');
    const btnText = generateBtn.querySelector('.btn-text');
    const loadingSpinner = generateBtn.querySelector('.loading-spinner');
    
    // Atualizar subgêneros quando gênero mudar
    generoSelect.addEventListener('change', atualizarSubgeneros);
    
    // Submissão do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const genero = document.getElementById('genero').value;
        const subgenero = document.getElementById('subgenero').value;
        const tom = document.getElementById('tom').value;
        const publico = document.getElementById('publico').value;
        
        if (!genero || !subgenero || !tom || !publico) {
            alert('Por favor, preencha todos os campos!');
            return;
        }
        
        // Mostrar loading
        generateBtn.disabled = true;
        btnText.style.display = 'none';
        loadingSpinner.style.display = 'inline-block';
        
        // Simular processamento (para dar sensação de análise real)
        setTimeout(() => {
            const ideia = gerarIdeia(genero, subgenero, tom, publico);
            exibirResultado(ideia);
            
            // Restaurar botão
            generateBtn.disabled = false;
            btnText.style.display = 'inline';
            loadingSpinner.style.display = 'none';
        }, 2000);
    });
    
    // Link do botão de compra (será atualizado com link real da Kiwify)
    const buyButton = document.getElementById('buyButton');
    buyButton.addEventListener('click', function(e) {
        e.preventDefault();
        // Aqui será colocado o link real da Kiwify
        alert('Link de pagamento será configurado na próxima etapa!');
    });
});

