import { Box, HStack, Skeleton, VStack } from '@chakra-ui/react';
import type { FC } from 'react';

export type Color = {
  r: number;
  g: number;
  b: number;
};

type ColorListProps = {
  colors: Color[];
};

export const ColorList: FC<ColorListProps> = ({ colors }) => {
  return (
    <HStack w="full">
      {colors.map((color) => (
        <Box
          w="full"
          h="50px"
          rounded="sm"
          bg={`rgb(${color.r}, ${color.g}, ${color.b})`}
        ></Box>
      ))}
    </HStack>
  );
};

export const ColorListSkeleton: FC = () => {
  return (
    <HStack w="full">
      <Skeleton h="50px" w="full" />
      <Skeleton h="50px" w="full" />
      <Skeleton h="50px" w="full" />
      <Skeleton h="50px" w="full" />
      <Skeleton h="50px" w="full" />
      <Skeleton h="50px" w="full" />
      <Skeleton h="50px" w="full" />
      <Skeleton h="50px" w="full" />
      <Skeleton h="50px" w="full" />
      <Skeleton h="50px" w="full" />
    </HStack>
  );
};
