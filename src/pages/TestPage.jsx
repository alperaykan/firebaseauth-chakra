import { Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'

export default function TestPage() {
  return (
    <Layout>
      <Heading>Test page</Heading>
      <Container maxW='container.lg' py={4}>
      </Container>
    </Layout>
  )
}
