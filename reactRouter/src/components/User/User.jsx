import { useParams } from "react-router-dom"

function User() {
  const {userid} = useParams()
  return (
    <div className="text-center bg-gray-700 text-white text-3xl py-3">
      User: {userid}
    </div>
  )
}

export default User
