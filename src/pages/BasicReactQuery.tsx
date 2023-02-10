import { getRandomColors } from '@app/api';
import {
  Color,
  ColorList,
  ColorListSkeleton,
  ErrorFallback,
} from '@app/components';
import { rootRoute } from '@app/router';
import {
  Box,
  Code,
  Heading,
  Skeleton,
  Text,
  useBoolean,
  VStack,
} from '@chakra-ui/react';
import { QueryErrorResetBoundary, useQuery } from '@tanstack/react-query';
import { Route } from '@tanstack/react-router';
import { FC, Suspense, useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const QueriesWithoutReactQuery: FC = () => {
  const [colors, setColors] = useState([]);

  const [isLoading, setIsLoading] = useBoolean(true);

  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getRandomColors()
      .then((data) => {
        setColors(data);

        setIsLoading.off();
      })
      .catch((error) => {
        setError(error);

        setIsLoading.off();
      });
  }, []);

  if (error) {
    return <Text color="red">{error.message}</Text>;
  }

  return (
    <Box w="full">
      <Heading as="h3" size="md" mb="3">
        Without react-query
      </Heading>
      {isLoading ? <ColorListSkeleton /> : <ColorList colors={colors} />}
    </Box>
  );
};

const QueriesWithReactQuery: FC = () => {
  const {
    data: colors = [],
    isLoading,
    isError,
    error,
  } = useQuery<Color[], any>({
    queryKey: ['queries', 'randomColor'],
    queryFn: getRandomColors,
  });

  if (isError) {
    return <Text color="red">{error.message}</Text>;
  }

  return (
    <Box w="full">
      <Heading as="h3" size="md" mb="3">
        With react-query
      </Heading>
      {isLoading ? <ColorListSkeleton /> : <ColorList colors={colors} />}
    </Box>
  );
};

const QueriesWithReactQueryAndSuspense: FC = () => {
  const { data: colors } = useQuery({
    queryKey: ['queries', 'randomColor', 'suspense'],
    queryFn: getRandomColors,
    suspense: true,
  });

  return (
    <Box w="full">
      <Heading as="h3" size="md" mb="3">
        With react-query and <Code>Suspense</Code>
      </Heading>
      <ColorList colors={colors} />
    </Box>
  );
};

const BasicSkeleton: FC = () => {
  return (
    <Box w="full">
      <Skeleton h="24px" mb="3" />
      <ColorListSkeleton />
    </Box>
  );
};

const QueriesPage: FC = () => {
  return (
    <>
      <Heading as="h2" size="lg">
        Queries
      </Heading>
      <Text>Simple example of cache usage</Text>
      <VStack mt="4" spacing="8">
        <QueriesWithoutReactQuery />
        <QueriesWithReactQuery />
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
              <Suspense fallback={<BasicSkeleton />}>
                <QueriesWithReactQueryAndSuspense />
              </Suspense>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </VStack>
    </>
  );
};

export const queriesPageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/queries',
  component: QueriesPage,
  meta: {
    name: 'Queries',
  },
});
