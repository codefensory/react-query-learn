import { Navbar } from '@app/components';
import { Box } from '@chakra-ui/react';
import { Outlet } from '@tanstack/react-router';
import type { FC, PropsWithChildren } from 'react';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box p="6">{<Outlet />}</Box>
    </>
  );
};
