import { getPageColor, reGeneratePages } from '@app/api';
import { Color, ColorList, ColorListSkeleton } from '@app/components';
import { rootRoute } from '@app/router';
import { Button, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Route } from '@tanstack/react-router';
import type { FC } from 'react';

const MutationsPage: FC = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: reGeneratePages,
  });

  const mutationAndInvalidate = useMutation({
    mutationFn: async () => {
      await reGeneratePages();

      queryClient.invalidateQueries(['mutations', 'colors']);
    },
  });

  const { data: colors = [], isLoading } = useQuery<Color[]>({
    queryKey: ['mutations', 'colors'],
    queryFn: () => getPageColor(0),
  });

  return (
    <>
      <Heading as="h2" size="lg">
        Mutations
      </Heading>
      <Text>Simple example of mutation</Text>
      <HStack mt="4">
        <Button
          isLoading={mutation.isLoading}
          onClick={() => mutation.mutate()}
        >
          Mutate
        </Button>
        <Button
          onClick={() =>
            queryClient.invalidateQueries({ queryKey: ['mutations', 'colors'] })
          }
        >
          Invalidate
        </Button>
        <Button
          isLoading={mutationAndInvalidate.isLoading}
          onClick={() => mutationAndInvalidate.mutate()}
        >
          Mutate and invalidate
        </Button>
      </HStack>
      <VStack mt="4" spacing="8">
        {isLoading ? <ColorListSkeleton /> : <ColorList colors={colors} />}
      </VStack>
    </>
  );
};

export const mutationsPageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/mutations',
  component: MutationsPage,
  meta: {
    name: 'Mutations',
  },
});
