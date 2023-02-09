import { Button, Text, VStack } from '@chakra-ui/react';
import type { FC } from 'react';
import type { FallbackProps } from 'react-error-boundary';

export const ErrorFallback: FC<FallbackProps> = ({
  resetErrorBoundary,
  error,
}) => (
  <VStack justifyContent="flex-start">
    <Text color="red">{error.message}</Text>
    <Button onClick={resetErrorBoundary}>Try again</Button>
  </VStack>
);
