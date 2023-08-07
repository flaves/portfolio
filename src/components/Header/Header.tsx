import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Logo } from '../Logo/Logo';

type Props = {};

export function Header(props: Props) {
  const {} = props;
  return (
    <Flex h="10vh" justifyContent="center">
      <Logo />
    </Flex>
  );
}
