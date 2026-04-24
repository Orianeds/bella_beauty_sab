import { FaqQuestion } from '@/constants/faq';

export interface Question {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategoryProps {
  title: string;
  questions: Question[];
}

export interface FaqCategoryBlockProps {
  title: string;
  questions: FaqQuestion[];
}

export interface FaqItemProps {
  question: string;
  answer: string;
}