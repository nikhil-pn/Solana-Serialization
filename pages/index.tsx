
import { Center, Box, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { AppBar } from '../components/AppBar'
import { MovieList } from '../components/MovieList'
import { Form } from '../components/Form'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.App}>
      <Head>
        <title>Movie Reviews</title>
      </Head>
      <AppBar />
      <Center>
        <Box>
          <Form />
          <MovieList />
        </Box>
      </Center>
    </div>
  )
}

export default Home