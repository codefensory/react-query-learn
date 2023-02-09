import { getRandomColors } from '@app/api';
import { Color, ColorList, ColorListSkeleton } from '@app/components';
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
import { useQuery } from '@tanstack/react-query';
import { Route } from '@tanstack/react-router';
import { FC, Suspense, useEffect, useState } from 'react';

const BasicWithoutReactQueryPage: FC = () => {
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

const BasicReactQueryPage: FC = () => {
  const {
    data: colors = [],
    isLoading,
    isError,
    error,
  } = useQuery<Color[], any>({
    queryKey: ['basic', 'randomColor'],
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

const BasicReactQueryPageWithoutLoading: FC = () => {
  const { data: colors } = useQuery({
    queryKey: ['basic', 'randomColor', 'suspense'],
    queryFn: getRandomColors,
    suspense: true,
  });

  return (
    <Box w="full">
      <Heading as="h3" size="md" mb="3">
        With react-query with <Code>Suspense</Code>
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

const BasicPage: FC = () => {
  return (
    <>
      <Heading as="h2" size="lg">
        Queries
      </Heading>
      <Text>Simple example of cache usage</Text>
      <VStack mt="4" spacing="8">
        <BasicWithoutReactQueryPage />
        <BasicReactQueryPage />
        <Suspense fallback={<BasicSkeleton />}>
          <BasicReactQueryPageWithoutLoading />
        </Suspense>
      </VStack>
    </>
  );
};

export const basicPageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/queries',
  component: BasicPage,
  meta: {
    name: 'Queries',
  },
});
