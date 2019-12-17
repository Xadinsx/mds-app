export interface PagesStep {
  title: string;
  content: string;
  subtitle: string;

  tips: string;
  questions: {
    required?: boolean;
    text?: string;
    multiple?: {
      text: string;
      options: { id: string; text: string }[];
    };
    answer: string;
  }[];
}
