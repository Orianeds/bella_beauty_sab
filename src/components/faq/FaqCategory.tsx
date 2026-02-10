'use client';

import { Box, Heading, Accordion, VStack } from "@chakra-ui/react";
import { FaqItem } from "./FaqItem";

interface Question {
  id: string;
  question: string;
  answer: string;
}

interface FaqCategoryProps {
  title: string;
  questions: Question[];
}

export function FaqCategory({ title, questions }: FaqCategoryProps) {
  return (
    <Box mb={10}>
      <Heading size="md" mb={4} color="gold.400">
        {title}
      </Heading>

      <Accordion allowMultiple>
        <VStack spacing={3}>
          {questions.map((item) => (
            <FaqItem
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </VStack>
      </Accordion>
    </Box>
  );
}
