import type { FC } from 'react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Heading, HStack } from '@chakra-ui/react';
import { useNavigate } from '@tanstack/react-router';

export const Navbar: FC = () => {
  const isHome = window.location.pathname === '/';

  const navigate = useNavigate();

  return (
    <HStack p="6" borderBottom="1px solid" borderColor="gray.400" spacing="4">
      {!isHome && (
        <ArrowBackIcon cursor="pointer" boxSize={6} onClick={() => navigate({ to: '/' })} />
      )}
      <Heading
        as="h2"
        size="md"
        cursor="pointer"
        userSelect="none"
        _hover={{ textDecor: 'underline' }}
      >
        React-Query Learn
      </Heading>
    </HStack>
  );
};
