import { Heading, Box, Button } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { getPost } from './api/posts'

export default function Post({ postId }) {
  const { data: post, isLoading } = useQuery([postId], getPost)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Box m="40px">
      <Heading mb="4">
        {post.title}
      </Heading>
      <div>{post.body}</div>

      <Button mt="4" type="submit" onClick={() => history.back()}>
          Back
      </Button>
    </Box>
  )
}

export async function getServerSideProps({ query }) {
  return {
    props: {
      postId: query.id,
    },
  }
}