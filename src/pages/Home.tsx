import { CardItem } from '@app/components';
import { rootRoute } from '@app/router';
import { Code, Heading, HStack, Text } from '@chakra-ui/react';
import { Route, useNavigate } from '@tanstack/react-router';

const HomePage = () => {
  const navigate = useNavigate({ from: '/' });

  return (
    <>
      <Heading as="h2" size="lg">
        Home page
      </Heading>
      <Text>
        Here we are going to add a list of demo actions using{' '}
        <Code>react-query</Code>
      </Text>
      <HStack mt="4">
        <CardItem onClick={() => navigate({ to: '/basic' })}>Basic</CardItem>
        <CardItem>Pagination</CardItem>
      </HStack>
    </>
  );
};

export const homePageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});
