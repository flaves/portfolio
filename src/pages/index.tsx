import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { Box, Container, Flex } from '@chakra-ui/react';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard/ProjectCard';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

type Props = PageProps & {};

function Home(props: Props) {
  const {} = props;
  return (
    <Box bg="black" h="100vh">
      <Header />
      <Container maxW="container.xl">
        <Flex
          as="section"
          h="85vh"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={5}
        >
          {projects.map((project) => (
            <ProjectCard name={project.name} url={project.url} />
          ))}
        </Flex>
      </Container>
      <Footer />
    </Box>
  );
}

export default Home;

export const Head: HeadFC = () => (
  <>
    <title>Flaves</title>
    <meta name="description" content="Flaves" />
  </>
);
