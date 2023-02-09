import { rootRoute } from '@app/router';
import { Heading, Text } from '@chakra-ui/react';
import { Route } from '@tanstack/react-router';
import type { FC } from 'react';

const BasicReactQueryPage: FC = () => {
  return (
    <>
      <Heading as="h2" size="lg">
        Basic
      </Heading>
      <Text>Simple example of cache usage</Text>
    </>
  );
};

export const basicReactQueryPageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/basic',
  component: BasicReactQueryPage,
});
