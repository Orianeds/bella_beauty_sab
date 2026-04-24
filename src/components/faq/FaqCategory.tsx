'use client';

import { Box, Heading, Accordion, VStack } from "@chakra-ui/react";
import { FaqItem } from "./FaqItem";
import { FaqCategoryProps } from "@/dto/faq/faq.types";


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
