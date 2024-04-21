import { useParams } from "react-router-dom"
import { useGetPostByIdQuery } from "../../app/services/postsApi"
import Card from "../../components/card"

const CurrentPost = () => {
  const params = useParams<{ id: string }>()
  const { data } = useGetPostByIdQuery(params?.id ?? "")

  if (!data) {
    return <h2>Поста не существует</h2>
  }

  const { content, id, authorId, comments, likes, likedByUser, createdAt } =
    data

  return <>{/* <Card content={content} /> */}</>
}

export default CurrentPost
