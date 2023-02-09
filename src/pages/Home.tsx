import { CardItem } from '@app/components';
import { rootRoute, routeTree } from '@app/router';
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
      <HStack mt="4" spacing="6">
        {routeTree.children?.map((child) => (
          <>
            {(child.options.meta as any)?.name && (
              <CardItem onClick={() => navigate({ to: child.path })}>
                {(child.options.meta as any)?.name}
              </CardItem>
            )}
          </>
        ))}
      </HStack>
    </>
  );
};

export const homePageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});
