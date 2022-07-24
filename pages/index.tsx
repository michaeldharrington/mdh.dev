import type { NextPage } from "next";
import NextLink from "next/link";
import Head from "next/head";
import {
  Avatar,
  Link,
  Icon,
  Box,
  Flex,
  Stack,
  HStack,
  Text,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FiMapPin, FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>mdh.dev</title>
        <meta name="description" content="michaeldharrington" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <Box mt={6} mx={6}>
          <Stack mt={0} direction={"row"} spacing={4} align={"top"}>
            <Avatar
              name="Michael D Harrington"
              src="/images/mdh460.png"
              size="lg"
            />
            <Stack direction={"column"} spacing={0}>
              <Text fontWeight={600}>Michael D Harrington</Text>
              <Text fontWeight={400} color="gray.600">
                Developer Relations at{" "}
                <Link href="https://github.com/zoom" isExternal>
                  Zoom <ExternalLinkIcon />
                </Link>
              </Text>
              <HStack alignItems="top">
                <Flex align="center" mr={1}>
                  <Icon mr={0.5} as={FiMapPin} color="gray.600" />
                  <Text color="gray.600">Denver</Text>
                </Flex>
                <NextLink href="https://github.com/michaeldharrington" passHref>
                  <Link isExternal>
                    <Icon as={FiGithub} mt={2} color="gray.600" />
                  </Link>
                </NextLink>
                <NextLink href="https://twitter.com/mdharrington_" passHref>
                  <Link isExternal>
                    <Icon as={FiTwitter} mt={2} color="gray.600" />
                  </Link>
                </NextLink>
                <NextLink
                  href="https://www.linkedin.com/in/michaeldharrington/"
                  passHref
                >
                  <Link isExternal>
                    <Icon as={FiLinkedin} mt={2} color="gray.600" />
                  </Link>
                </NextLink>
              </HStack>
            </Stack>
          </Stack>
        </Box>
      </main>
    </div>
  );
};

export default Home;
