export interface PagesStep {
  title: string;
  content: string;
  subtitle?: string;

  tips?: string;
  questions: (QuestionModel | DynamicQuestionModel)[];
}

export interface QuestionModel {
  required?: boolean;
  number?: boolean;
  id?: string;
  depthId?: string;
  text?: string;
  multiple?: {
    text: string;
    depthId?: string;
    options: {
      id: string;
      text: string;
      depthId?: string;
      subQuestions?: QuestionModel[];
    }[];
  };
  answer: string;
}

export interface DynamicQuestionModel {
  required?: boolean;
  num: number;
  type: DynamicQuestionType;
  answer?: string;
}

export type DynamicQuestionType = 'Feature' | 'Requirement' | 'UserStory';

export interface FeatureQuestionModel extends DynamicQuestionModel {
  description: string;
  priority: number;
  sprint: number;
}

export interface RequirementQuestionModel extends DynamicQuestionModel {
  description: string;
  feature: number; // question index
}

export interface UserStoryQuestionModel extends DynamicQuestionModel {
  actor: string;
  action: string;
  goal: string;
  requirement: number; // question index
}

export function createEmptyDynamicQuestion(
  type: DynamicQuestionType
): DynamicQuestionModel {
  switch (type) {
    case 'Feature':
      return {
        type: 'Feature',
        description: ''
      } as FeatureQuestionModel;
    case 'Requirement':
      return {
        type: 'Requirement',
        description: '',
        feature: EMPTY_SELECT_ITEM_INDEX
      } as RequirementQuestionModel;
    default:
      return {
        type: 'UserStory',
        action: '',
        actor: '',
        goal: '',
        requirement: EMPTY_SELECT_ITEM_INDEX
      } as UserStoryQuestionModel;
  }
}

export interface SelectItemModel {
  index: number;
  name: string;
}

export const createEmptySelectItem: () => SelectItemModel = (): SelectItemModel => {
  return {
    name: 'Selecione uma opção...',
    index: EMPTY_SELECT_ITEM_INDEX
  };
};

export const EMPTY_SELECT_ITEM_INDEX: number = -1;
