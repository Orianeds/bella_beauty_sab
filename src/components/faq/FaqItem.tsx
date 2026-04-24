'use client';

import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { FaqItemProps } from "@/dto/faq/faq.types";

export function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <AccordionItem border="none">
      {({ isExpanded }) => (
        <>
          <AccordionButton
            bg="primary.400"
            px={6}
            py={4}
            borderRadius="md"
            _hover={{ bg: "primary.100" }}
          >
            <Box flex="1" textAlign="left" fontWeight="semibold" textTransform="uppercase" color="white">
              {question}
            </Box>
            {isExpanded ? <MinusIcon /> : <AddIcon />}
          </AccordionButton>

          <AccordionPanel px={6} py={4} bg="white" fontFamily="heading">
            <Text>{answer}</Text>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
}
