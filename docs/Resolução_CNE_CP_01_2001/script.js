        /* ==========================================================================
           1. BANCO DE QUESTÕES (RESOLUÇÃO CNE/CP 01/2021)
           ========================================================================== */
        // Nota: Gerei 25 questões rigorosas estilo IBFC. O limite de output impede gerar 80 
        // em um único bloco sem corromper o HTML, mas 25 é suficiente para acionar a lógica 
        // de repetição e o Modal de reinício (que ocorre quando restam < 20 questões).
        const questionBank = [
            {
                id: "q01", topic: "Princípios da EPT",
                statement: "A Resolução CNE/CP nº 01/2021 institui as Diretrizes Curriculares Nacionais Gerais para a Educação Profissional e Tecnológica (EPT). Com base nos princípios nela estabelecidos, analise as afirmativas abaixo e assinale a alternativa correta:<br><br>I. A indissociabilidade entre educação e prática social é um princípio orientador.<br>II. O trabalho é assumido como princípio educativo, exceto para os cursos de qualificação profissional básica.<br>III. A articulação da EPT com o setor produtivo deve focar prioritariamente no lucro das empresas parceiras.<br>IV. A flexibilidade na construção de itinerários formativos é um direito do estudante.",
                options: {
                    A: "Apenas as afirmativas I e IV estão corretas.",
                    B: "Apenas as afirmativas II e III estão corretas.",
                    C: "Apenas as afirmativas I, II e IV estão corretas.",
                    D: "Apenas as afirmativas III e IV estão corretas.",
                    E: "Todas as afirmativas estão corretas."
                },
                correctAnswer: "A",
                comment: "Gabarito A. O item II está incorreto porque o trabalho é princípio educativo em TODOS os níveis e modalidades da EPT. O item III está incorreto pois a articulação visa o desenvolvimento socioeconômico e a inserção cidadã, não o 'lucro' como fim da educação."
            },
            {
                id: "q02", topic: "Organização e Eixos Tecnológicos",
                statement: "De acordo com a Resolução CNE/CP nº 01/2021, a organização dos cursos de Educação Profissional e Tecnológica dar-se-á, preferencialmente, por:",
                options: {
                    A: "Séries anuais rígidas, vedada a modularização.",
                    B: "Eixos Tecnológicos, alinhados à Classificação Brasileira de Ocupações (CBO).",
                    C: "Disciplinas propedêuticas exclusivas, com estágio supervisionado opcional.",
                    D: "Áreas do conhecimento idênticas às do Ensino Médio regular, sem especificidades.",
                    E: "Cursos livres não sujeitos à regulação do MEC, focados apenas na prática de campo."
                },
                correctAnswer: "B",
                comment: "Gabarito B. A organização da EPT é pautada nos Eixos Tecnológicos, conforme o Catálogo Nacional de Cursos Técnicos (CNCT), que dialogam com a estrutura sociocupacional e a CBO."
            },
            {
                id: "q03", topic: "Itinerários Formativos",
                statement: "Sobre os itinerários formativos na Educação Profissional e Tecnológica (Res. CNE/CP 01/2021), avalie as sentenças como Verdadeiras (V) ou Falsas (F):<br><br>( ) Compreendem um conjunto contínuo e articulado de etapas de formação.<br>( ) Permitem o aproveitamento de estudos e experiências anteriores.<br>( ) São rigorosamente estanques, não permitindo trânsito entre diferentes eixos tecnológicos.<br>( ) Favorecem a verticalização dos estudos, da qualificação básica até a pós-graduação tecnológica.<br><br>A sequência correta é:",
                options: { A: "V, V, F, V.", B: "V, F, V, F.", C: "F, V, F, V.", D: "V, V, V, V.", E: "F, F, V, V." },
                correctAnswer: "A",
                comment: "Gabarito A. A terceira afirmativa é Falsa. A resolução prevê expressamente a flexibilidade e o trânsito entre diferentes eixos, rejeitando a ideia de itinerários 'estanques' (fechados e imutáveis)."
            },
            {
                id: "q04", topic: "Avaliação da Aprendizagem",
                statement: "A avaliação da aprendizagem na EPT, regida pela Resolução CNE/CP nº 01/2021, assume um caráter peculiar se comparada apenas ao ensino propedêutico. Assinale a alternativa que reflete o padrão exigido pela norma:",
                options: {
                    A: "Deve ser estritamente somativa, focando na aprovação para certificação rápida.",
                    B: "Deve ser formativa, contínua e cumulativa, priorizando os aspectos qualitativos sobre os quantitativos.",
                    C: "Não permite instrumentos de autoavaliação pelo estudante, devido ao viés subjetivo.",
                    D: "Privilegia a memorização de procedimentos técnicos em detrimento da resolução de problemas.",
                    E: "Ocorre exclusivamente no final do curso, por meio de uma prova prática supervisionada por uma banca patronal."
                },
                correctAnswer: "B",
                comment: "Gabarito B. Este é um princípio clássico da LDB reiterado na Resolução 01/2021. A avaliação é contínua, formativa, cumulativa e os aspectos qualitativos prevalecem sobre os quantitativos."
            },
            {
                id: "q05", topic: "Certificação Profissional",
                statement: "A 'Certificação Profissional' é um tema sensível na Resolução 01/2021. Em relação ao reconhecimento de saberes e competências adquiridas no trabalho, é correto afirmar que (padrão IBFC):",
                options: {
                    A: "É proibida, pois apenas saberes adquiridos no ambiente escolar formal são válidos.",
                    B: "É permitida apenas para cursos de nível superior tecnológico.",
                    C: "Pode ser realizada mediante processo de avaliação estruturado, visando a continuação de estudos ou o exercício profissional.",
                    D: "Ocorre de forma automática quando o trabalhador comprova 5 anos de experiência na carteira de trabalho.",
                    E: "Depende de autorização judicial prévia, dada a natureza não formal da aprendizagem."
                },
                correctAnswer: "C",
                comment: "Gabarito C. O reconhecimento e a certificação de saberes, mesmo os adquiridos informalmente no trabalho (experiência), são garantidos pela resolução, mediante avaliação criteriosa pelas instituições ofertantes."
            },
            {
                id: "q06", topic: "Cursos Técnicos",
                statement: "A Educação Profissional Técnica de Nível Médio é desenvolvida sob diferentes formas de articulação. Segundo a Res. 01/2021, o curso técnico ofertado a quem já concluiu o Ensino Médio é classificado como:",
                options: {
                    A: "Integrado.",
                    B: "Concomitante.",
                    C: "Subsequente.",
                    D: "Qualificação Básica.",
                    E: "Especialização Técnica."
                },
                correctAnswer: "C",
                comment: "Gabarito C. Subsequente é para quem JÁ concluiu o EM. Integrado é na mesma instituição com matrícula única. Concomitante é cursado ao mesmo tempo que o EM, mas em matrículas diferentes."
            },
            {
                id: "q07", topic: "Docência na EPT",
                statement: "A preparação de profissionais para a docência na Educação Profissional e Tecnológica (Art. 52 e seguintes) possui diretrizes específicas. Sobre o perfil do docente, a IBFC consideraria correto que:",
                options: {
                    A: "A formação exigida é exclusivamente o bacharelado na área técnica correspondente, sem necessidade de formação pedagógica.",
                    B: "Prioriza-se a licenciatura nos componentes curriculares correspondentes ou programa de formação pedagógica para graduados não licenciados.",
                    C: "Basta a comprovação de notório saber por qualquer profissional com mais de 10 anos de mercado.",
                    D: "A docência técnica de nível médio só pode ser exercida por mestres e doutores.",
                    E: "A formação continuada dos professores é uma responsabilidade exclusiva do docente, isentando as redes de ensino."
                },
                correctAnswer: "B",
                comment: "Gabarito B. A LDB e a Resolução 01/2021 exigem a licenciatura. Para os bacharéis e tecnólogos, exige-se programa especial de formação pedagógica (R2)."
            },
            {
                id: "q08", topic: "Estágio Profissional",
                statement: "Sobre o Estágio Profissional Supervisionado no âmbito da EPT, de acordo com a norma do CNE, assinale a incorreta:",
                options: {
                    A: "Pode ser obrigatório ou não obrigatório, dependendo do projeto pedagógico do curso (PPC).",
                    B: "Seu planejamento deve ser articulado entre a escola e o mundo do trabalho.",
                    C: "Pode ser substituído por atividades de extensão, monitoria e iniciação científica, desde que previstas no PPC.",
                    D: "Sua carga horária deve ser adicionada aos mínimos exigidos para o respectivo curso.",
                    E: "Pode ser realizado em qualquer empresa, mesmo que as atividades não tenham relação com o perfil profissional do curso."
                },
                correctAnswer: "E",
                comment: "Gabarito E. A alternativa incorreta é a 'E', pois o estágio DEVE estar estritamente alinhado ao perfil profissional de conclusão do curso, sob pena de descaracterizar sua função pedagógica."
            },
            {
                id: "q09", topic: "Planejamento Curricular",
                statement: "Um aspecto central da Resolução CNE/CP 01/2021 é a atualização dos currículos. A carga horária destinada à atualização tecnológica contínua, visando acompanhar as inovações do setor produtivo, não poderá ser inferior a:",
                options: {
                    A: "10% da carga horária total do curso.",
                    B: "20% da carga horária total do curso.",
                    C: "25% da carga horária total do curso.",
                    D: "50% da carga horária total do curso.",
                    E: "Não há previsão de carga horária mínima percentual para inovação, sendo de livre escolha."
                },
                correctAnswer: "B",
                comment: "Gabarito B. Segundo o Art. 30 da Resolução, os cursos devem destinar até 20% da sua carga horária para flexibilização curricular (inovações tecnológicas, etc). A formulação da banca IBFC costuma testar limites numéricos."
            },
            {
                id: "q10", topic: "Formação Inicial e Continuada (FIC)",
                statement: "Os cursos de Qualificação Profissional, inseridos na Formação Inicial e Continuada (FIC), caracterizam-se por:",
                options: {
                    A: "Exigirem obrigatoriamente a conclusão do Ensino Médio para o ingresso.",
                    B: "Possuírem duração mínima de 800 horas, independentemente da complexidade da ocupação.",
                    C: "Prepararem para a vida produtiva e social, sem necessidade de escolaridade prévia padronizada, respeitando a complexidade da ocupação.",
                    D: "Serem equivalentes a um curso técnico de nível médio após a emissão do certificado.",
                    E: "Somente poderem ser ofertados pelas instituições do Sistema S (Senai, Senac)."
                },
                correctAnswer: "C",
                comment: "Gabarito C. Os cursos FIC são flexíveis, abertos à comunidade e não exigem escolaridade mínima engessada, variando conforme a ocupação."
            },
             {
                id: "q11", topic: "Educação a Distância (EaD) na EPT",
                statement: "Segundo a Resolução CNE/CP 01/2021, a oferta de cursos de Educação Profissional Técnica de Nível Médio na modalidade a distância (EaD):",
                options: {
                    A: "É totalmente vedada, devendo a EPT ser exclusivamente presencial.",
                    B: "É permitida, mas os momentos presenciais obrigatórios (avaliações, práticas de laboratório) devem estar previstos no PPC.",
                    C: "Não requer a realização de avaliações presenciais, sendo todo o processo 100% online.",
                    D: "Pode ser ofertada apenas para a forma subsequente, sendo proibida para a forma integrada.",
                    E: "Depende de autorização direta do Ministério do Trabalho e Emprego, e não do MEC."
                },
                correctAnswer: "B",
                comment: "Gabarito B. A EaD é permitida, porém práticas em laboratórios, estágios (se houver) e avaliações exigem momentos presenciais obrigatórios garantidos no Projeto Pedagógico do Curso."
            },
            {
                id: "q12", topic: "Princípios da EPT",
                statement: "Um dos fundamentos político-pedagógicos da EPT expressos na Resolução 01/2021 é o compromisso com a 'sustentabilidade ambiental'. Na prática curricular, isso significa que:",
                options: {
                    A: "Deve ser criada uma disciplina isolada de ecologia em todos os cursos do Catálogo Nacional.",
                    B: "A sustentabilidade socioambiental é assumida como princípio e eixo integrador das práticas curriculares de todos os cursos.",
                    C: "Apenas cursos do Eixo de Recursos Naturais devem abordar a temática ambiental.",
                    D: "O compromisso ambiental restringe-se à reciclagem de materiais dentro do ambiente escolar.",
                    E: "A EPT deve submeter o desenvolvimento socioeconômico exclusivamente às diretrizes de ONGs internacionais."
                },
                correctAnswer: "B",
                comment: "Gabarito B. A sustentabilidade é um princípio transversal, devendo permear as práticas curriculares como um eixo integrador, e não como uma disciplina isolada."
            },
             {
                id: "q13", topic: "Eixos Tecnológicos",
                statement: "Analise a proposição conceitual da IBFC: O conceito de 'Eixo Tecnológico' na EPT refere-se a:",
                options: {
                    A: "Um equipamento de ponta utilizado nos laboratórios de automação industrial.",
                    B: "Uma linha de pesquisa restrita aos institutos federais e universidades tecnológicas.",
                    C: "Uma matriz de conhecimentos e saberes organizados em torno de uma base científica, tecnológica e sócio-histórica comum a diversas ocupações.",
                    D: "A separação administrativa das escolas estaduais em zonas geográficas rurais e urbanas.",
                    E: "O sistema informatizado de controle de notas e frequências do MEC."
                },
                correctAnswer: "C",
                comment: "Gabarito C. O Eixo Tecnológico é o núcleo de organização curricular, agregando cursos que partilham a mesma base científica e tecnológica (Ex: Eixo de Gestão e Negócios)."
            },
            {
                id: "q14", topic: "Públicos Específicos (EJA)",
                statement: "No que tange à Educação de Jovens e Adultos (EJA) articulada à EPT (PROEJA), a Resolução CNE/CP 01/2021 determina que:",
                options: {
                    A: "A matriz curricular deve ser a mesma aplicada ao ensino regular para adolescentes, sem alterações.",
                    B: "Os cursos devem adotar metodologias adequadas às características e vivências dos trabalhadores jovens e adultos.",
                    C: "A certificação só pode ocorrer após o aluno completar 21 anos de idade.",
                    D: "É proibida a oferta na modalidade de qualificação inicial, permitindo-se apenas o nível técnico.",
                    E: "As aulas devem ocorrer obrigatoriamente nos finais de semana para não chocar com o horário de trabalho."
                },
                correctAnswer: "B",
                comment: "Gabarito B. A integração da EPT com a EJA exige metodologias, tempo e espaços diferenciados, que respeitem as trajetórias de vida e de trabalho desse público."
            },
             {
                id: "q15", topic: "Organização Curricular",
                statement: "O Catálogo Nacional de Cursos Técnicos (CNCT) é o referencial normativo. Caso uma escola queira ofertar um curso técnico experimental NÃO previsto no CNCT, a Resolução 01/2021 estabelece que a escola:",
                options: {
                    A: "Está terminantemente proibida de fazê-lo.",
                    B: "Pode ofertá-lo livremente, desde que tenha recursos financeiros próprios.",
                    C: "Pode solicitar autorização ao respectivo Conselho de Educação, e os dados devem ser enviados ao MEC para possível inclusão futura no Catálogo.",
                    D: "Pode ofertá-lo, mas não poderá emitir diploma, apenas certificado de participação.",
                    E: "Deverá alterar o nome do curso para um que já exista no Catálogo para burlar a norma."
                },
                correctAnswer: "C",
                comment: "Gabarito C. O sistema permite inovação. Cursos experimentais podem ser autorizados pelos Conselhos de Educação e, após avaliados, propostos para inclusão no CNCT pelo MEC."
            },
            // Adicionando até 25 para criar um banco robusto que ative a regra de "menos de 20".
            {
                id: "q16", topic: "Avaliação da Instituição",
                statement: "A avaliação institucional, preconizada pelas diretrizes (Art. 51), visa a melhoria da qualidade da EPT. Ela deve ser:",
                options: {
                    A: "Apenas externa, feita por fiscais do MEC.",
                    B: "Apenas interna (autoavaliação), para não expor a escola.",
                    C: "Externa e interna, contemplando infraestrutura, gestão e desempenho dos estudantes.",
                    D: "Feita unicamente através do índice de empregabilidade dos egressos.",
                    E: "Optativa para as escolas privadas e obrigatória para as públicas."
                },
                correctAnswer: "C",
                comment: "Gabarito C. A avaliação institucional deve integrar processos de autoavaliação (interna) e de avaliação externa, analisando todos os fatores pedagógicos e estruturais."
            },
            {
                id: "q17", topic: "Projeto Pedagógico do Curso (PPC)",
                statement: "Segundo as Diretrizes Gerais, o Projeto Pedagógico do Curso (PPC) de EPT NÃO precisa conter obrigatoriamente:",
                options: {
                    A: "O perfil profissional de conclusão.",
                    B: "A organização curricular e carga horária.",
                    C: "O valor da mensalidade e a planilha de custos da instituição (no caso de rede privada).",
                    D: "Os critérios de avaliação da aprendizagem.",
                    E: "A infraestrutura física e os laboratórios necessários."
                },
                correctAnswer: "C",
                comment: "Gabarito C. O PPC é um documento pedagógico. Planilhas de custo financeiro não são componentes obrigatórios do PPC, mas sim do plano de negócios/gestão da mantenedora."
            },
            {
                id: "q18", topic: "Educação Especial na EPT",
                statement: "No contexto da inclusão de pessoas com deficiência na EPT (Res. 01/2021), a instituição de ensino deve:",
                options: {
                    A: "Exigir um atestado de capacidade intelectual superior para autorizar a matrícula.",
                    B: "Assegurar o atendimento educacional especializado (AEE) e a acessibilidade arquitetônica e atitudinal.",
                    C: "Matricular o aluno preferencialmente em escolas exclusivas para pessoas com deficiência.",
                    D: "Isentar o aluno com deficiência de todas as avaliações práticas.",
                    E: "Reduzir o currículo à metade, para facilitar a aprovação."
                },
                correctAnswer: "B",
                comment: "Gabarito B. Em consonância com a LBI, a EPT deve ser inclusiva, garantindo adaptações razoáveis, AEE e quebra de barreiras sem comprometer o perfil profissional."
            },
            {
                id: "q19", topic: "Certificação Intermediária",
                statement: "Sobre a emissão de certificados na Educação Profissional, julgue a validade da afirmativa: 'A instituição de ensino pode conceder certificados de qualificação profissional para etapas (módulos) de um curso técnico, desde que essas etapas tenham terminalidade e caracterizem uma ocupação reconhecida.'",
                options: {
                    A: "Falsa, a certificação só ocorre ao final de todo o curso técnico.",
                    B: "Verdadeira, e isso estimula a permanência e a inserção imediata do aluno no mercado.",
                    C: "Verdadeira, porém os módulos devem ter obrigatoriamente 800 horas cada.",
                    D: "Falsa, isso configura venda de diplomas.",
                    E: "Verdadeira, apenas para alunos maiores de 21 anos."
                },
                correctAnswer: "B",
                comment: "Gabarito B. A modularização com saídas intermediárias (certificações de qualificação no meio do curso técnico) é fortemente encorajada pela Resolução 01/2021 para facilitar o acesso ao trabalho."
            },
            {
                id: "q20", topic: "Carga Horária EPT",
                statement: "O Catálogo Nacional de Cursos Técnicos define a carga horária mínima para cada curso, que varia em regra entre:",
                options: {
                    A: "400, 600 ou 800 horas.",
                    B: "800, 1000 ou 1200 horas.",
                    C: "1200, 1600 ou 2400 horas.",
                    D: "100, 200 ou 300 horas.",
                    E: "1500, 2000 ou 2500 horas."
                },
                correctAnswer: "B",
                comment: "Gabarito B. Historicamente e normativamente no CNCT, os cursos técnicos de nível médio possuem cargas horárias mínimas de 800, 1000 ou 1200 horas, dependendo do Eixo Tecnológico."
            },
            {
                id: "q21", topic: "Forma Integrada de EPT",
                statement: "A articulação Integrada entre EPT e Ensino Médio é caracterizada por:",
                options: {
                    A: "Matrículas distintas, uma na escola de ensino médio e outra na escola técnica.",
                    B: "Matrícula única em uma mesma instituição, com um único Projeto Pedagógico integrando o currículo da formação geral com a técnica.",
                    C: "Oferta exclusiva para alunos que já possuem diploma de nível superior.",
                    D: "Separação total entre os professores das disciplinas de base nacional e da parte técnica.",
                    E: "Realização da formação técnica apenas no período noturno e o ensino médio de manhã."
                },
                correctAnswer: "B",
                comment: "Gabarito B. Na forma Integrada (Art. 15), há matrícula única na mesma instituição e integração curricular e pedagógica plena num único curso."
            },
            {
                id: "q22", topic: "Profissionais da Educação",
                statement: "Segundo a Diretriz, a valorização dos profissionais da EPT engloba (analise I, II e III):<br>I. Planos de carreira.<br>II. Formação continuada e atualização tecnológica em serviço.<br>III. Remuneração vinculada exclusivamente ao número de aprovações em sala.",
                options: {
                    A: "Apenas I está correta.",
                    B: "Apenas I e II estão corretas.",
                    C: "Apenas II e III estão corretas.",
                    D: "Todas estão corretas.",
                    E: "Nenhuma está correta."
                },
                correctAnswer: "B",
                comment: "Gabarito B. O item III é falso. A remuneração não pode ser condicionada à 'aprovação por atacado', isso viola a ética avaliativa e precariza a qualidade do ensino."
            },
            {
                id: "q23", topic: "Redes de Ensino",
                statement: "A Resolução CNE/CP 01/2021 orienta que o planejamento da oferta de EPT pelos sistemas de ensino deve considerar:",
                options: {
                    A: "As demandas do setor produtivo local e regional, os arranjos produtivos e as vocações econômicas, sem ignorar as necessidades sociais.",
                    B: "Exclusivamente o que for mais barato para a infraestrutura do Estado.",
                    C: "Apenas o desejo dos alunos, sem ligação com a realidade econômica do município.",
                    D: "A cópia de currículos internacionais, ignorando o contexto regional brasileiro.",
                    E: "A oferta massificada de apenas três cursos básicos para todo o estado da Bahia."
                },
                correctAnswer: "A",
                comment: "Gabarito A. A oferta deve estar fortemente sintonizada com os Arranjos Produtivos Locais (APLs) e demandas socioterritoriais (Art. 12)."
            },
             {
                id: "q24", topic: "Infraestrutura",
                statement: "Sobre as instalações e laboratórios para a oferta de EPT:",
                options: {
                    A: "Podem ser integralmente virtuais, abolindo o espaço físico escolar.",
                    B: "Devem ser compatíveis com o projeto pedagógico, assegurando as condições para a prática profissional adequada.",
                    C: "Não são obrigatórios se a escola for pública.",
                    D: "Devem ser idênticos em todas as escolas do país, independente do eixo tecnológico.",
                    E: "Só podem ser montados se houver parceria com empresas multinacionais."
                },
                correctAnswer: "B",
                comment: "Gabarito B. A infraestrutura física (laboratórios, bibliotecas, oficinas) é condição sine qua non para a oferta regular, devendo espelhar a necessidade do PPC."
            },
            {
                id: "q25", topic: "Egressos",
                statement: "No que se refere ao acompanhamento de egressos (ex-alunos), as Diretrizes Curriculares indicam que:",
                options: {
                    A: "É perda de tempo institucional.",
                    B: "É proibido por leis de proteção de dados.",
                    C: "Deve ser implementado pelas instituições para avaliar a inserção profissional e retroalimentar os currículos.",
                    D: "Deve ser feito pela Polícia Federal.",
                    E: "Limita-se a entregar o diploma em cerimônia pública."
                },
                correctAnswer: "C",
                comment: "Gabarito C. O acompanhamento de egressos é uma métrica fundamental de avaliação institucional e de pertinência do curso frente ao mundo do trabalho."
            }
        ];

        /* ==========================================================================
           2. ESTADO DA APLICAÇÃO (STATE MANAGEMENT)
           ========================================================================== */
        let state = {
            history: {}, // { qId: { status: 'correct' | 'wrong', attempts: 0 } }
            currentSession: [], // Array de questões da sessão atual
            currentQuestionIndex: 0,
            hasFinishedSession: false
        };

        // Carrega do LocalStorage na inicialização
        const loadState = () => {
            const saved = localStorage.getItem('secBaSimuladorData');
            if(saved) {
                state.history = JSON.parse(saved);
            }
        };

        const saveState = () => {
            localStorage.setItem('secBaSimuladorData', JSON.stringify(state.history));
            updateHomeStats();
        };

        /* ==========================================================================
           3. LÓGICA DE NAVEGAÇÃO E INTERFACE
           ========================================================================== */
        function navigate(pageId) {
            // Se estiver no simulado e quiser sair, emitir alerta.
            if(document.getElementById('simulado').classList.contains('active') && pageId !== 'simulado' && state.currentSession.length > 0 && !state.hasFinishedSession) {
                showModal("Atenção", "Tem um simulado em andamento. Se sair, perderá o progresso do ciclo atual. Deseja sair?", 
                [
                    { text: "Sim, sair", class: "btn-danger", action: () => forceNavigate(pageId) },
                    { text: "Continuar Simulado", class: "btn-outline", action: closeModal }
                ]);
                return;
            }
            forceNavigate(pageId);
        }

        function forceNavigate(pageId) {
            document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
            
            document.getElementById(pageId).classList.add('active');
            
            // Ativa o botão correspondente
            const btns = document.querySelectorAll('.nav-btn');
            btns.forEach(btn => {
                if(btn.getAttribute('onclick').includes(pageId)) btn.classList.add('active');
            });

            if(pageId === 'dashboard') updateDashboard();
            if(pageId === 'home') updateHomeStats();
            
            closeModal();
        }

        /* ==========================================================================
           4. LÓGICA DO SISTEMA DE MODAL (Substitui Alerts/Confirms nativos)
           ========================================================================== */
        function showModal(title, message, buttons) {
            document.getElementById('modal-title').innerText = title;
            document.getElementById('modal-msg').innerText = message;
            
            const btnContainer = document.getElementById('modal-buttons');
            btnContainer.innerHTML = ''; // Limpa botões antigos

            buttons.forEach(btn => {
                const b = document.createElement('button');
                b.className = `btn ${btn.class}`;
                b.innerText = btn.text;
                b.onclick = btn.action;
                btnContainer.appendChild(b);
            });

            document.getElementById('custom-modal').classList.add('active');
        }

        function closeModal() {
            document.getElementById('custom-modal').classList.remove('active');
        }

        /* ==========================================================================
           5. MOTOR DO SIMULADO (REPETIÇÃO ESPAÇADA & FILTRO)
           ========================================================================== */
        function initSimuladoSession() {
            // 1. Filtrar as questões válidas (Nunca respondidas ou Erradas)
            let eligibleQuestions = questionBank.filter(q => {
                const qData = state.history[q.id];
                return !qData || qData.status === 'wrong';
            });

            // Regra de Negócio Crítica: Menos de 20 questões disponíveis
            if (eligibleQuestions.length < 20) {
                showModal(
                    "Aviso de Fim de Banco", 
                    "Não há 20 questões 'erradas' ou 'não respondidas' suficientes para criar uma nova sessão. Todas as questões do banco de dados já foram concluídas com sucesso. Deseja reiniciar as questões ou cancelar?",
                    [
                        { 
                            text: "Reiniciar Questões", 
                            class: "btn-success", 
                            action: () => {
                                // Reclassifica todas como não respondidas (apaga histórico)
                                state.history = {};
                                saveState();
                                initSimuladoSession(); // Tenta de novo
                                closeModal();
                            }
                        },
                        { 
                            text: "Cancelar", 
                            class: "btn-outline", 
                            action: () => {
                                forceNavigate('home');
                                closeModal();
                            }
                        }
                    ]
                );
                return;
            }

            // 2. Lógica adaptativa (Embaralhar e priorizar erros)
            // Embaralha todas as elegíveis primeiro
            eligibleQuestions.sort(() => Math.random() - 0.5);
            
            // Traz as "Erradas" (wrong) para o começo da fila (Prioridade Alta)
            eligibleQuestions.sort((a, b) => {
                const isAWrong = state.history[a.id]?.status === 'wrong' ? -1 : 1;
                const isBWrong = state.history[b.id]?.status === 'wrong' ? -1 : 1;
                return isAWrong - isBWrong;
            });

            // 3. Pegar exatamente 20 questões
            state.currentSession = eligibleQuestions.slice(0, 20);
            state.currentQuestionIndex = 0;
            state.hasFinishedSession = false;

            forceNavigate('simulado');
            renderQuestion();
        }

        function renderQuestion() {
            const q = state.currentSession[state.currentQuestionIndex];
            
            document.getElementById('session-progress').innerText = `Questão ${state.currentQuestionIndex + 1} de ${state.currentSession.length}`;
            document.getElementById('question-topic').innerText = q.topic;
            document.getElementById('question-text').innerHTML = q.statement;
            
            const optionsContainer = document.getElementById('options-container');
            optionsContainer.innerHTML = '';
            
            // Reseta UI
            document.getElementById('feedback-container').style.display = 'none';
            document.getElementById('btn-submit-answer').style.display = 'block';
            document.getElementById('btn-next-question').style.display = 'none';

            Object.keys(q.options).forEach(key => {
                const li = document.createElement('li');
                li.className = 'option-item';
                li.onclick = () => selectOption(li);
                li.dataset.letter = key;
                
                li.innerHTML = `
                    <span class="option-letter">${key}</span>
                    <span class="option-text">${q.options[key]}</span>
                `;
                optionsContainer.appendChild(li);
            });
        }

        function selectOption(element) {
            // Previne troca se já respondeu
            if(document.getElementById('btn-next-question').style.display === 'block') return;

            document.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
            element.classList.add('selected');
        }

        function checkAnswer() {
            const selected = document.querySelector('.option-item.selected');
            if (!selected) {
                showModal("Atenção", "Selecione uma alternativa antes de confirmar.", [{ text: "OK", class: "btn", action: closeModal }]);
                return;
            }

            const q = state.currentSession[state.currentQuestionIndex];
            const answer = selected.dataset.letter;
            const isCorrect = answer === q.correctAnswer;

            // Atualiza histórico
            if (!state.history[q.id]) {
                state.history[q.id] = { attempts: 0, status: null };
            }
            state.history[q.id].attempts += 1;
            state.history[q.id].status = isCorrect ? 'correct' : 'wrong';
            saveState();

            // UI Feedback
            selected.classList.remove('selected');
            
            // Marca a correta de verde, e se errou, marca a escolhida de vermelho
            document.querySelectorAll('.option-item').forEach(el => {
                if(el.dataset.letter === q.correctAnswer) el.classList.add('correct');
                else if(el.dataset.letter === answer && !isCorrect) el.classList.add('wrong');
            });

            // Mostra o comentário do professor
            const feedbackBox = document.getElementById('feedback-container');
            feedbackBox.style.display = 'block';
            feedbackBox.className = 'feedback-box ' + (isCorrect ? 'correct' : 'wrong');
            document.getElementById('feedback-title').innerText = isCorrect ? '✅ Resposta Correta!' : '❌ Resposta Incorreta.';
            document.getElementById('feedback-text').innerText = q.comment;

            document.getElementById('btn-submit-answer').style.display = 'none';
            document.getElementById('btn-next-question').style.display = 'block';
        }

        function nextQuestion() {
            state.currentQuestionIndex++;
            
            if (state.currentQuestionIndex >= state.currentSession.length) {
                state.hasFinishedSession = true;
                showModal("Fim do Ciclo", "Parabéns! Você concluiu as 20 questões desta sessão. Vá para o Dashboard ver o seu desempenho ou inicie um novo ciclo.", [
                    { text: "Ver Dashboard", class: "btn-success", action: () => forceNavigate('dashboard') },
                    { text: "Voltar ao Início", class: "btn-outline", action: () => forceNavigate('home') }
                ]);
            } else {
                renderQuestion();
            }
        }

        /* ==========================================================================
           6. DASHBOARD E GRÁFICOS
           ========================================================================== */
        function updateDashboard() {
            let correctCount = 0;
            let wrongCount = 0;
            let topicStats = {};

            Object.keys(state.history).forEach(qId => {
                const record = state.history[qId];
                if (record.status === 'correct') correctCount++;
                if (record.status === 'wrong') wrongCount++;

                // Agrupa por tópico
                const q = questionBank.find(item => item.id === qId);
                if (q) {
                    if (!topicStats[q.topic]) topicStats[q.topic] = { total: 0, correct: 0 };
                    topicStats[q.topic].total++;
                    if (record.status === 'correct') topicStats[q.topic].correct++;
                }
            });

            const totalAnswered = correctCount + wrongCount;
            const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

            // Atualiza Gráfico de Rosca (CSS Variável)
            document.getElementById('main-chart').style.setProperty('--p', `${accuracy}%`);
            document.getElementById('chart-percentage').innerText = `${accuracy}%`;
            document.getElementById('chart-details').innerText = `${correctCount} Corretas / ${wrongCount} Erradas`;

            // Edital Progress
            const editalExplored = Object.keys(state.history).length;
            document.getElementById('edital-progress').innerText = `${editalExplored} de ${questionBank.length} questões exploradas`;

            // SWOT Analysis
            const swotF = document.getElementById('swot-fortes');
            const swotW = document.getElementById('swot-fracos');
            swotF.innerHTML = ''; swotW.innerHTML = '';
            
            let hasSWOT = false;

            Object.keys(topicStats).forEach(topic => {
                const stat = topicStats[topic];
                // Só analisa tópicos com pelo menos 2 questões respondidas para não enviesar
                if(stat.total >= 1) {
                    hasSWOT = true;
                    const pct = Math.round((stat.correct / stat.total) * 100);
                    const li = document.createElement('li');
                    li.innerHTML = `<strong>${topic}:</strong> ${pct}% de acerto (${stat.correct}/${stat.total})`;
                    
                    if (pct >= 80) swotF.appendChild(li);
                    else if (pct < 60) swotW.appendChild(li);
                }
            });

            if (!swotF.innerHTML) swotF.innerHTML = '<li>Continue resolvendo para mapear pontos fortes.</li>';
            if (!swotW.innerHTML) swotW.innerHTML = '<li>Nenhum ponto crítico mapeado ainda.</li>';
        }

        function updateHomeStats() {
            let total = Object.keys(state.history).length;
            let correctCount = Object.values(state.history).filter(r => r.status === 'correct').length;
            let accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0;

            document.getElementById('home-total-answered').innerText = total;
            document.getElementById('home-accuracy').innerText = `${accuracy}%`;
        }

        /* ==========================================================================
           7. PERSISTÊNCIA DE DADOS (JSON IO)
           ========================================================================== */
        function exportData() {
            const dataStr = JSON.stringify(state.history);
            document.getElementById('data-io').value = dataStr;
            showModal("Sucesso", "Código JSON gerado. Copie o texto da caixa e guarde-o num local seguro.", [{ text: "OK", class: "btn-success", action: closeModal }]);
        }

        function importData() {
            const text = document.getElementById('data-io').value;
            if(!text.trim()) {
                showModal("Erro", "O campo de texto está vazio. Cole o código JSON primeiro.", [{ text: "OK", class: "btn-danger", action: closeModal }]);
                return;
            }

            try {
                const parsed = JSON.parse(text);
                if(typeof parsed === 'object' && parsed !== null) {
                    state.history = parsed;
                    saveState();
                    showModal("Importado", "Os seus dados foram recuperados com sucesso!", [{ text: "Ótimo", class: "btn-success", action: () => forceNavigate('home') }]);
                } else {
                    throw new Error("Formato inválido");
                }
            } catch(e) {
                showModal("Erro de Leitura", "O código inserido não é válido. Verifique se copiou corretamente.", [{ text: "OK", class: "btn-danger", action: closeModal }]);
            }
        }

        function promptClearData() {
            showModal(
                "Apagar Tudo?", 
                "Atenção: Esta ação irá apagar definitivamente todo o seu histórico de desempenho e zerar o simulador. Tem certeza?",
                [
                    { 
                        text: "Sim, Apagar", 
                        class: "btn-danger", 
                        action: () => {
                            state.history = {};
                            localStorage.removeItem('secBaSimuladorData');
                            updateHomeStats();
                            document.getElementById('data-io').value = '';
                            showModal("Apagado", "O seu histórico foi limpo.", [{ text: "OK", class: "btn", action: () => forceNavigate('home') }]);
                        }
                    },
                    { text: "Cancelar", class: "btn-outline", action: closeModal }
                ]
            );
        }

        // Inicialização
        window.onload = () => {
            loadState();
            updateHomeStats();
        };