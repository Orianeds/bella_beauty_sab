import { Button, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { siteInfo } from "@/constants/content";

type BookingButtonsProps = {
  variant?: "default" | "footer";
};

export function BookingButtons({ variant = "default" }: BookingButtonsProps) {
  const textColor = variant === "footer" ? "white" : "black";

  return (
    <Stack align="center" spacing={3} w="100%">
      
      <Text
        color={textColor}
        textAlign="center"
        fontFamily="heading"
      >
        Choisissez votre moyen de contact préféré pour prendre rendez-vous
      </Text>

      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify="center"
      >
        <Button
          as={Link}
          href={siteInfo.socialLinks.whatsappLink}
          target="_blank"
          bg="primary.500"
          textColor="white"
          fontFamily="heading"
        >
          💬 WhatsApp
        </Button>

        <Button
          as={Link}
          href={siteInfo.socialLinks.instagram}
          target="_blank"
          bg="primary.500"
          textColor="white"
          fontFamily="heading"
        >
          📸 Instagram
        </Button>
      </Stack>
    </Stack>
  );
}