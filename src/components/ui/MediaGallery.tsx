'use client';

import {
  Box,
  Button,
  HStack,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { SmartVideo } from "./SmartVideo";
import { CloseIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { MediaGroup, MediaItem } from "@/dto/prestation/prestation-detail.types";

type Props = {
  groups: MediaGroup[];
  defaultGroupId?: string;
};

export const MediaGallery = ({ groups, defaultGroupId }: Props) => {

  if (!groups?.length) return null;

  const hasMultipleGroups = groups.length > 1;

  const initialFilter =
    defaultGroupId && groups.some((g) => g.id === defaultGroupId)
      ? defaultGroupId
      : hasMultipleGroups
      ? "all"
      : groups[0]?.id ?? "all";

  const [activeFilter, setActiveFilter] = useState<string>(initialFilter);
  const [selected, setSelected] = useState<MediaItem | null>(null);

  const filters = hasMultipleGroups
    ? ["all", ...groups.map((g) => g.id)]
    : groups.map((g) => g.id);

  const filteredItems =
    activeFilter === "all"
      ? groups.flatMap((g) => g.items)
      : groups.find((g) => g.id === activeFilter)?.items ?? [];

  const getGroupTitle = (id: string) =>
    groups.find((g) => g.id === id)?.title ?? id;

  return (
    <Box>
      {/* FILTRES */}
      {hasMultipleGroups && (
        <HStack spacing={3} mb={6} flexWrap="wrap">
          {filters.map((filter) => (
            <Button
              key={filter}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? "solid" : "outline"}
            >
              {filter === "all" ? "Tous" : getGroupTitle(filter)}
            </Button>
          ))}
        </HStack>
      )}

      {/* GRID */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {filteredItems.map((item) => (
          <Box
            key={item.src} // ✅ fix clé React
            position="relative"
            width="100%"
            height="300px"
            cursor="pointer"
            onClick={() => item?.src && setSelected(item)}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="gray.100"
            borderRadius="md"
            transition="0.2s"
            _hover={{ transform: "scale(1.02)" }} // ✨ effet hover
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={item.alt || "media"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw" // 🚀 perf Next
                style={{
                  objectFit: "contain",
                }}
              />
            ) : (
              <SmartVideo src={item.src} poster={item.poster} />
            )}
          </Box>
        ))}
      </SimpleGrid>

      {/* LIGHTBOX */}
      <Modal isOpen={!!selected} onClose={() => setSelected(null)} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalBody p={0} position="relative">
            <IconButton
              aria-label="close"
              icon={<CloseIcon />}
              onClick={() => setSelected(null)}
              position="absolute"
              top={2}
              right={2}
              zIndex={10}
            />

            {/* IMAGE */}
            {selected?.type === "image" && selected?.src ? (
              <Image
                src={selected.src}
                alt={selected.alt || "media"}
                fill
                sizes="100vw"
                style={{ objectFit: "contain" }}
              />
            ) : null}

            {/* VIDEO */}
            {selected?.type === "video" && selected?.src ? (
              <SmartVideo
                src={selected.src}
                poster={selected.poster}
              />
            ) : null}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};