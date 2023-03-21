import { Heading, SimpleGrid, Box, Button, Flex, Spacer, Alert, AlertIcon, AlertDescription, AlertTitle } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { getAllPosts, deletePost } from './api/posts'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const { data: posts, isLoading } = useQuery('posts', getAllPosts)
  const [showAlert, setShowAlert] = useState(false)
  const [deletedTitle, setDeletedTitle] = useState('')
  const [postsData, setPostData] = useState([])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if(showAlert === true) {
    setTimeout(() => {
      setShowAlert(false)
    }, 3000);
  }

  const onDeleteHandler = (post) => {
    const index = posts.findIndex(obj => obj.id === post.id)
    if (index !== -1) {
      posts.splice(index, 1)
    }

    deletePost(post.id)
    setDeletedTitle(post.title)
    setShowAlert(true)
  }

  return (
    <Box m="20px">
      {showAlert && <Alert status='success'>
        <AlertIcon />
        <AlertTitle>Deleted!</AlertTitle>
        <AlertDescription>Your Post with title <b>{deletedTitle}</b>, has been deleted.</AlertDescription>
      </Alert>}
      <Heading mb="4">
        <Flex>
            <Button mt="4" colorScheme="white" textColor={"black"}>
              NextJS Challange
            </Button>
          <Spacer />
          <div>
          <Link href="/create-post">
            <Button mt="4" colorScheme="blue">
              Create Post
            </Button>
          </Link>
          </div>
        </Flex>
      </Heading>
      
      <SimpleGrid columns={2} spacing={4}>
        {posts.map(post => (
          <Box
            key={post.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p="4"
          >
            <Heading size="md" mb="2">
            <Flex>
            {post.title}
            <Spacer />
             <Link href={`/post?id=${post.id}`}>
              <Button mt="4" ms="2" colorScheme="green">
                Detail
              </Button>
            </Link>
             <Link href={`/edit-post?id=${post.id}`}>
              <Button mt="4" ms="2" colorScheme="blue">
                Edit
              </Button>
            </Link>
            <Button mt="4" ms="2" colorScheme="red" onClick={() => {onDeleteHandler(post)}}>
              Delete
            </Button>
            </Flex>
            
            </Heading>
            <div>{post.body}</div>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}
