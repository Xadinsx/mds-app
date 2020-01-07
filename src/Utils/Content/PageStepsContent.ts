import {
  EMPTY_SELECT_ITEM_INDEX,
  FeatureQuestionModel,
  PagesStep,
  RequirementQuestionModel,
  UserStoryQuestionModel
} from '../../models/ui/Steps';

const pageStepsContent: PagesStep[] = [
  {
    title: 'Fase 0',
    content: `Este tutorial pretende guiar um “Engenheiro de Requisitos” a realizar o levantamento de requisitos usando uma metodologia ágil.\n 
De modo a realizar este levantamento, a nossa plataforma oferece uma solução seguindo X fases:\n
 Fase 1: Preparação da análise de requisitos;\n
 Fase 2: Principais Vantagens para o Negócio;\n
 Fase 3: Restrições, dependências, pressupostos e possíveis problemas;\n
 Fase 4: Esquema de Entregas, Lista de Requisitos e User Storys.\n
Antes de iniciar este tutorial é necessário ter em consideração todos os inputs e outputs!\n
Inputs:\n
Pedido de Proposta: O pedido de proposta, também conhecido como Request For Proposal, consiste na documentação enviada por parte do cliente com um pedido expresso para o desenvolvimento de um determinado software. Este será um documento importante para analisar, pois será possível extrair todas as informações iniciais.\n
Objetivo: O objetivo consiste na definição por parte do cliente de todos os objetivos do software desenvolvido. Este terá de ser tido em conta no decorrer de todo o desenvolvimento.\n
Outputs:\n
Product Backlog: O Product Backlog consiste numa lista ordenada de todos os requisitos que se consideram necessários durante o desenvolvimento de um software. Este deve estar ordenado por sprints. Quando se trabalha em agile é preciso ter em consideração que o product backlog nunca se encontra completo e que pode ir sendo modificado, alterando, adicionando ou removendo requisitos. Estas deve estar detalhadas na forma de user storys.\n
User Stories: Uma User Sotry corresponde a uma descrição curta e concisa de uma determinada funcionalidade. Esta funcionalidade deve ser descrita na perspetiva da pessoa que pretende que a pretende.\n
Sprint Backlog: A Sprint Backlog consiste no conjunto de items do Product Backlog selecionados para uma determinada Sprint. Também devem incluir o objetivo da sprint.\n `,
    subtitle: 'Pro-Tips',
    tips: `Antes de iniciar, também deve ter em consideração que uma User Story deve ser INVEST:\n
   Independent (Independente);\n
   Negotiable (Negociavel);\n
   Valuable (Ter valor);\n
   Estimate (Estimável);\n
   Sized appropriately or small (Tamanho apropriado ou pequenas);\n
   Testable (Testáveis).`,
    questions: [
      {
        required: true,
        text: 'Identificação da Organização:',
        answer: ''
      },
      {
        required: true,
        text: 'Nome da Organização:',
        answer: ''
      },
      {
        required: true,
        text: 'Nome do representante/representantes da organização:',
        answer: ''
      },
      {
        required: true,
        text: 'Visão da organização:',
        answer: ''
      },
      {
        required: true,
        text: 'Missão da organização:',
        answer: ''
      },
      {
        required: true,
        multiple: {
          text: 'A sua organização fornece algum tipo de Produto ou serviço?',
          options: [
            {
              id: '0',
              text: 'Sim',
              depthId: 'ramoAtividade',
              subQuestions: [
                {
                  required: true,
                  depthId: 'fazOrganizacao',
                  text: 'Qual o ramo em que a sua organização trabalha?',
                  answer: ''
                }
              ]
            },
            {
              id: '1',
              text: 'Não',
              depthId: 'fazOrganizacao',
              subQuestions: [
                {
                  required: true,
                  depthId: 'fazOrganizacao',
                  text: 'O que faz a sua organização?',
                  answer: ''
                }
              ]
            }
          ]
        },
        answer: ''
      }
    ]
  },
  {
    title: 'Fase 1: Preparação da análise de requisitos',
    content: `Durante esta fase será necessário entender os conceitos básicos do negócio do produto a desenvolver, bem como a sua perspetiva e objetivos. Nesta fase também deverão ser criados todos os planos para os ciclos de análise de software, as interações necessárias bem como as sprints.
\nÉ importante relembrar que numa metodologia ágil não expectável que todos os requisitos de software estejam definidos à priori ou numa etapa anterior, estes devem ser elaborados ao longo do desenvolvimento do projeto. No entanto, no início do projeto é importante realizar o levantamento da maioria das necessidades de alto nível. 
\nO importante a reter é que os requisitos estarão em constante evolução e podem inclusivamente falhar!
\nApesar dos factos apresentados, os requisitos não devem ser realizados de forma solta ou sem significado, a sua gestão deve ser feita de forma cuidadosa priorizando-os de forma correta e em função de critério coerentes e estáveis no decorrer do desenvolvimento.
     `,
    questions: [
      {
        required: true,
        text: 'Porque motivo pretende uma solução de software?',
        answer: ''
      },
      {
        required: true,
        text: 'Descreva de forma geral quais as suas necessidades de software.',
        answer: ''
      },
      {
        multiple: {
          text:
            'Tem alguma restrição temporal para o desenvolvimento do projeto?',
          options: [
            {
              id: '0',
              text: 'Sim',
              depthId: 'comData',
              subQuestions: [
                {
                  required: true,
                  depthId: 'comData',
                  text:
                    'Em que data gostaria de ter o software pronto e entregue?',
                  answer: ''
                }
              ]
            },
            {
              id: '1',
              text: 'Não',
              depthId: 'semRestricao',
              subQuestions: [
                {
                  required: true,
                  depthId: 'semRestricao',
                  text:
                    'Quanto tempo espera que o software demore a ser desenvolvido?',
                  answer: ''
                }
              ]
            }
          ]
        },
        answer: ''
      },
      {
        required: true,
        text: 'Gostaria de ter demonstrações com que frequência?',
        answer: ''
      }
    ]
  },
  {
    title: 'Fase 2: Principais vantagens para o negócio',
    content: `Nesta fase devem ser levantados todos os principais benefícios que o produto final deve representar para o cliente. Esta análise deve ser realizada em várias perspectivas, a do cliente, a de outros stakeholders e a dos utilizadores.`,
    questions: [
      {
        required: true,
        text:
          'Que benefícios pretende obter com o produto final a desenvolver?',
        answer: ''
      },
      {
        required: true,
        multiple: {
          text: 'Qual o método a utilizar?',
          options: [
            { id: '0', text: 'Faixa Etária' },
            { id: '1', text: 'Condição Social' },
            { id: '2', text: 'Formação Base' },
            { id: '3', text: 'Zona Geográfica' }
          ]
        },
        answer: ''
      },
      {
        required: true,
        text:
          'Quais serão os benefícios que considera que irá ter com o desenvolvimento do software?',
        answer: ''
      },
      {
        required: true,
        text: 'Qual será a utilidade do software para outros stakeholders?',
        answer: ''
      },
      {
        required: true,
        text:
          'Como considera que o software pode ajudar a organização a diferenciar-se de outras organizações semelhantes?',
        answer: ''
      },
      {
        required: true,
        text:
          'Que tipo de papéis têm as pessoas a interagir com o software? (Ex. funcionários...)',
        answer: ''
      }
    ]
  },
  {
    title:
      'Fase 3: Restrições, dependências, pressupostos e possíveis problemas',
    content: `Identificar e analisar no início do projeto todos os pressupostos, dependências e restrições pode ajudar a identificar de forma prematura possíveis problemas.`,
    subtitle: 'Pro-Tips',
    tips: `De modo a mitigar possíveis problemas, pode ser vantajosa a criação de diagramas para detalhar o comportamento do sistema a desenvolver, tais como:
\n Fluxo; 
\n Estrutura;
\n Máquina de estados;
\n Diagramas de casos de uso;
\nApós a resposta às perguntas desta fase, é expectável que o utilizador consiga gerar este tipo de diagramas auxiliares com o intuito de posteriormente poder voltar a debater com o cliente evitando possíveis problemas futuros.
    `,
    questions: [
      {
        multiple: {
          text: 'Tem em mente alguma restrição, dependência ou pressuposto?',
          options: [
            {
              id: '0',
              text: 'Sim',
              depthId: 'comPressuposto',
              subQuestions: [
                {
                  id: 'comPressuposto',
                  required: true,
                  depthId: 'comPressuposto',
                  text: 'Qual a restrição e que dependências podem existir?',
                  answer: ''
                }
              ]
            },
            {
              id: '1',
              text: 'Não',
              depthId: 'semRestricao',
              subQuestions: []
            }
          ]
        },
        answer: ''
      },
      {
        multiple: {
          text: 'Consegue imaginar algum problema que possa vir a existir?',
          options: [
            {
              id: '0',
              text: 'Sim',
              depthId: 'comProblema',
              subQuestions: [
                {
                  id: 'comProblema',
                  required: true,
                  depthId: 'comProblema',
                  text: 'Que problema considera que pode vir a existir?',
                  answer: ''
                }
              ]
            },
            {
              id: '1',
              text: 'Não'
            }
          ]
        },
        answer: ''
      },
      {
        required: true,
        text:
          'Existe algum regulamento ou política interna que seja necessário obedecer?',
        answer: ''
      },
      {
        required: true,
        multiple: {
          text: 'A aplicação deve ser de que tipo?',
          options: [
            { id: '0', text: 'Desktop' },
            { id: '1', text: 'Mobile' },
            { id: '2', text: 'Web' }
          ]
        },
        answer: ''
      },
      {
        text:
          'Descreva as plataformas e navegadores utilizados pela aplicação (Caso existam).',
        answer: ''
      }
    ]
  },
  {
    title: 'Fase 4: Esquema de Entregas, Lista de Requisitos e User Storys',
    content: `Estratégia de Entregas\n
Definir a estratégia de Releases a efetuar também permite uma melhor gestão dos requisitos necessário, permitindo a sua distribuição pelas diversas Sprints.
Com esta estratégia é possível definir o que entregar em cada sprint tendo em conta as prioridades do cliente.`,
    questions: [
      {
        required: true,
        number: true,
        text: 'Quantas sprints considera necessárias?',
        answer: ''
      },
      {
        type: 'Feature',
        description: ''
      } as FeatureQuestionModel,
      {
        type: 'Requirement',
        description: '',
        feature: EMPTY_SELECT_ITEM_INDEX
      } as RequirementQuestionModel,
      {
        type: 'UserStory',
        action: '',
        actor: '',
        goal: '',
        requirement: EMPTY_SELECT_ITEM_INDEX
      } as UserStoryQuestionModel
    ]
  }
];

export const REQUIREMENTS_PHASE_INDEX = 4;

export default pageStepsContent;
