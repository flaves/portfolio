import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

type Props = {};

export function Footer(props: Props) {
  const {} = props;
  return (
    <Flex h="5vh" justifyContent="center">
      <Text color="white" fontSize="12px" fontWeight="500">
        &copy; FLAVES {new Date().getFullYear()}
      </Text>
    </Flex>
  );
}
