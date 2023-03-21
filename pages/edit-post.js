import { Heading, Box, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getPost, updatePost } from './api/posts'

export default function EditPost({ postId }) {
  console.log("postId: ", postId);
  const queryClient = useQueryClient()
  const { register, handleSubmit, setValue } = useForm()
  const { data: post, isLoading: isPostLoading } = useQuery([postId], getPost)

  const { mutate: updateExistingPost, isLoading: isUpdateLoading } = useMutation(updatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries(['post', postId])
      queryClient.invalidateQueries('posts')
    },
  })

  const onSubmit = data => {
    updateExistingPost({ id: postId, ...data })
  }

  if (isPostLoading) {
    return <div>Loading...</div>
  }

  // Pre-populate form with existing post data
  setValue('title', post.title)
  setValue('body', post.body)

  return (
    <Box m="40px">
      <Heading mb="4">Edit Post</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl mb="4">
          <FormLabel>Title</FormLabel>
          <Input {...register('title', { required: true })} />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Body</FormLabel>
          <Textarea {...register('body', { required: true })} />
        </FormControl>
        <Button type="submit" isLoading={isUpdateLoading} mr="4">
          Save Changes
        </Button>
        <Button onClick={() => history.back()} mr="4">
          Cancel
        </Button>
      </form>
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
