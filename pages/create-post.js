import { Heading, Box, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { createPost } from './api/posts'

export default function CreatePost() {
  const queryClient = useQueryClient()
  const { register, handleSubmit } = useForm()
  const { mutate: createNewPost, isLoading } = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts')
    },
  })

  const onSubmit = async(data) => {
    data.userId = 1;
    console.log("data: ", data)
    createNewPost(data)
    // isLoading === false ? history.back() : null
  }

  return (
    <Box m="40px">
      <Heading mb="4">Create Post</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl mb="4">
          <FormLabel>Title</FormLabel>
          <Input {...register('title', { required: true })} />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Body</FormLabel>
          <Textarea {...register('body', { required: true })} mb="3"/>
          <Button type="submit" isLoading={isLoading} mr="4">
          Create Post
          </Button>
          <Button type="submit" onClick={() => history.back()}>
          Back
          </Button>
        </FormControl>
      </form>
    </Box>
  )
}