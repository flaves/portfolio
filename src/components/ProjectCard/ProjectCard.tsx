import React from 'react';
import { Box, Heading, Link } from '@chakra-ui/react';

type Props = {
  name: string;
  url: string;
};

export function ProjectCard(props: Props) {
  const { name, url } = props;
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferer"
      position="relative"
      _hover={{
        '.border': {
          width: `100%`,
        },
      }}
    >
      <Heading
        color="white"
        size={[`xl`, null, null, `3xl`]}
        fontWeight="500"
        zIndex={2}
      >
        {name}
      </Heading>
      <Box
        className="border"
        width={0}
        height={5}
        backgroundColor="white"
        transition="width .3s"
        position="absolute"
        bottom={0}
        zIndex={1}
      />
    </Link>
  );
}
