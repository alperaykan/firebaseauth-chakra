import {
  Heading,
  Text
} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'

export default function Homepage() {
  const currentUser = useAuth()
  return (
    <Layout>
      <Heading>Home page</Heading>
      <Text my={6}>{currentUser?.email}</Text>
    </Layout>
  )
}
