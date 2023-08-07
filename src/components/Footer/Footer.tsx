import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

type Props = {};

export function Footer(props: Props) {
  const {} = props;
  return (
    <Flex
      h="10vh"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={2}
    >
      <Text color="#86868B" fontSize="12px" fontWeight="500">
        hello@flav.es
      </Text>
      <Text color="#86868B" fontSize="12px" fontWeight="500">
        &copy; FLAVES {new Date().getFullYear()}
      </Text>
    </Flex>
  );
}
