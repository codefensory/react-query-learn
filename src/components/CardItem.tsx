import { Box, Stack } from '@chakra-ui/react';
import type { FC, PropsWithChildren } from 'react';

type CardItemProps = {
  onClick?: () => void;
  select?: boolean;
};

export const CardItem: FC<PropsWithChildren<CardItemProps>> = ({
  children,
  onClick,
  select,
}) => {
  return (
    <Stack
      w="15rem"
      h="5rem"
      bg={select ? 'gray.200' : 'white'}
      border="solid 1px"
      borderColor="gray.300"
      shadow="lg"
      justifyContent="center"
      alignItems="center"
      rounded="lg"
      fontWeight="bold"
      userSelect="none"
      cursor="pointer"
      onClick={onClick}
    >
      <Box>{children}</Box>
    </Stack>
  );
};
