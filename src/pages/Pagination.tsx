import { getPageColor } from '@app/api';
import { Color, ColorList, ColorListSkeleton } from '@app/components';
import { rootRoute } from '@app/router';
import {
  Box,
  Button,
  Heading,
  HStack,
  Text,
  useBoolean,
  useCounter,
  VStack,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { Route } from '@tanstack/react-router';
import { FC, useEffect, useState } from 'react';

const PaginationWithoutReactQuery: FC<{ page: string | number }> = ({
  page,
}) => {
  const [colors, setColors] = useState([]);

  const [isLoading, setIsLoading] = useBoolean(true);

  useEffect(() => {
    setIsLoading.on();

    getPageColor(page).then((data) => {
      setColors(data);

      setIsLoading.off();
    });
  }, [page]);

  return (
    <Box w="full">
      <Heading as="h3" size="md" mb="3">
        Without react-query
      </Heading>
      {isLoading ? <ColorListSkeleton /> : <ColorList colors={colors} />}
    </Box>
  );
};

const PaginationWithReactQuery: FC<{ page: string | number }> = ({ page }) => {
  const {
    data: colors = [],
    isLoading,
    isError,
    error,
  } = useQuery<Color[], any>({
    queryKey: ['pagination', 'colors', page],
    queryFn: () => getPageColor(page),
  });

  return (
    <Box w="full">
      <Heading as="h3" size="md" mb="3">
        Without react-query
      </Heading>
      {(isError && error) ?? <Text color="red">{error.message}</Text>}
      {isLoading ? <ColorListSkeleton /> : <ColorList colors={colors} />}
    </Box>
  );
};

const PaginationPage: FC = () => {
  const {
    valueAsNumber: page,
    isAtMax,
    isAtMin,
    increment,
    decrement,
  } = useCounter({
    min: 0,
    max: 2,
    defaultValue: 0,
  });

  return (
    <>
      <Heading as="h2" size="lg">
        Pagination
      </Heading>
      <Text>Simple example of pagination using cache</Text>
      <HStack mt="4">
        <Button isDisabled={isAtMin} onClick={() => decrement()}>
          prev
        </Button>
        <Text>{page + 1}</Text>
        <Button isDisabled={isAtMax} onClick={() => increment()}>
          next
        </Button>
      </HStack>
      <VStack mt="4" spacing="8">
        <PaginationWithoutReactQuery page={page} />
        <PaginationWithReactQuery page={page} />
      </VStack>
    </>
  );
};

export const paginationPageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/pagination',
  component: PaginationPage,
  meta: {
    name: 'Pagination',
  },
});
