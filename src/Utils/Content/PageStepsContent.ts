import { PagesStep } from '../../models/ui/Steps';

const pageStepsContent: PagesStep[] = [
  {
    title: 'Fase 1',
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
        text: 'Lorem ipsum dolor sit amet, at usu stet vocibus cotidieque ?',
        answer: ''
      }
    ]
  }
];

export default pageStepsContent;
