import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import { Box, Flex } from "@chakra-ui/layout";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Box bg="gray.100" w="100vw" h="100vh">
      <Box w={800} mx="auto" py={10}>
        <Flex direction="column">
          <header>
            <Header />
          </header>
          <main>{children}</main>
        </Flex>
      </Box>
    </Box>
  </div>
);

export default Layout;
