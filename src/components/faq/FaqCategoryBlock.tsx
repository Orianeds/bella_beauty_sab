import { Accordion, Box, Heading, VStack } from '@chakra-ui/react';
import { FaqItem } from './FaqItem';
import { FaqCategoryBlockProps } from '@/dto/faq/faq.types';



export function FaqCategoryBlock({ title, questions }: FaqCategoryBlockProps) {
  return (
    <Box>
      <Heading
        mb={6}
        size="lg"
        color="gold.400"
        textTransform="uppercase"
        textAlign="center"
      >
        {title}
      </Heading>

      <Accordion allowMultiple>
        <VStack spacing={4} align="stretch">
            {questions.map((q, index) => (
            <FaqItem
                key={index}
                question={q.question}
                answer={q.answer}
            />
            ))}
        </VStack>
      </Accordion>
    </Box>
  );
}
