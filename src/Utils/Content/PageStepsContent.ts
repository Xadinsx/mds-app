import {
  EMPTY_SELECT_ITEM_INDEX,
  FeatureQuestionModel,
  PagesStep,
  RequirementQuestionModel,
  UserStoryQuestionModel
} from '../../models/ui/Steps';

const pageStepsContent: PagesStep[] = [
  {
    title: 'Fase 1',
    content: `Este tutorial pretende guiar um “Engenheiro de Requisitos” a realizar o levantamento de requisitos usando uma metodologia ágil.\n 
De modo a realizar este levantamento, a nossa plataforma oferece uma solução seguindo X fases:\n
  Fase 1: Preparação da análise de requisitos;\n
  Fase 2: Principais Vantagens para o Negócio;\n
  Fase 3: Restrições, dependências, pressupostos e possíveis problemas;\n
  Fase 4: Esquema de Entregas, Lista de Requisitos e User Storys.\n
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
        text: 'Lorem ipsum dolor sit amet, at usu stet vocibus cotidieque ?',
        answer: ''
      },
      { text: 'Lorem ipsum dolor sit amet ?', answer: '' },
      {
        required: true,
        multiple: {
          text: 'Qual o método a utilizar?',
          options: [
            { id: '0', text: 'Método A' },
            { id: '1', text: 'Método B' },
            { id: '2', text: 'Método C' },
            { id: '3', text: 'Método D' }
          ]
        },
        answer: ''
      }
    ]
  },
  {
    title: 'Fase 2',
    content:
      'It is more difficult to undermine faith than knowledge, love succumbs to change less than to respect, hatred is more durable than aversion, and at all times the driving force of the most important changes in this world has been found less in a scientific knowledge animating the masses, but rather in a fanaticism dominating them and in a hysteria which drove them forward.',
    subtitle: 'Pro-Tips',
    tips:
      '1: Lorem ipsum dolor sit amet, at usu stet vocibus cotidieque, te novum iudico nam. Eos amet laboramus ne. \n 2:Lorem ipsum dolor sit amet, at usu stet vocibus cotidieque, te novum iudico nam. Eos amet laboramus ne. \n 3: Lorem ipsum dolor sit amet, at usu stet vocibus cotidieque, te novum iudico nam. Eos amet laboramus ne.',
    questions: [
      {
        required: true,
        text: 'Lorem ipsum dolor sit amet, at usu stet vocibus cotidieque ?',
        answer: ''
      },
      {
        multiple: {
          text: 'Qual o método a utilizar?',
          options: [
            { id: '0', text: 'Método A' },
            { id: '1', text: 'Método B' },
            { id: '2', text: 'Método C' },
            { id: '3', text: 'Método D' }
          ]
        },
        answer: ''
      }
    ]
  },
  {
    title: 'Fase 3',
    content:
      'It is more difficult to undermine faith than knowledge, love succumbs to change less than to respect, hatred is more durable than aversion, and at all times the driving force of the most important changes in this world has been found less in a scientific knowledge animating the masses, but rather in a fanaticism dominating them and in a hysteria which drove them forward.',
    subtitle: 'Pro-Tips',
    tips:
      '1: Lorem ipsum dolor sit amet, at usu stet vocibus cotidieque, te novum iudico nam. Eos amet laboramus ne. \n 2:Lorem ipsum dolor sit amet, at usu stet vocibus cotidieque, te novum iudico nam. Eos amet laboramus ne. \n 3: Lorem ipsum dolor sit amet, at usu stet vocibus cotidieque, te novum iudico nam. Eos amet laboramus ne.',
    questions: [
      {
        text: 'Lorem ipsum dolor sit amet, at usu stet vocibus cotidieque ?',
        answer: ''
      },
      {
        text: 'Lorem ipsum dolor sit amet ?',
        answer: ''
      },
      {
        text: 'Lorem ipsum dolor sit amet ?',
        answer: ''
      }
    ]
  },
  {
    title: 'Fase 4',
    content:
      'It is more difficult to undermine faith than knowledge, love succumbs to change less than to respect, hatred is more durable than aversion, and at all times the driving force of the most important changes in this world has been found less in a scientific knowledge animating the masses, but rather in a fanaticism dominating them and in a hysteria which drove them forward.',
    subtitle: 'Pro-Tips',
    tips:
      '1: Lorem ipsum dolor sit amet, at usu stet vocibus cotidieque, te novum iudico nam. Eos amet laboramus ne. \n 2:Lorem ipsum dolor sit amet, at usu stet vocibus cotidieque, te novum iudico nam. Eos amet laboramus ne. \n 3: Lorem ipsum dolor sit amet, at usu stet vocibus cotidieque, te novum iudico nam. Eos amet laboramus ne.',
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

export const REQUIREMENTS_PHASE_INDEX = 3;

export default pageStepsContent;
