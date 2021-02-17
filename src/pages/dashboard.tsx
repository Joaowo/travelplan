import { useContext } from 'react'
import AuthContext from '../contexts/auth'
import Skeleton from 'react-loading-skeleton'

const Dashboard: React.FC = () => {
  const { user, isLoading, handleLogout } = useContext(AuthContext)

  const { username, role, expiration } = JSON.parse(user)

  const showSkeleton = isLoading

  return (
    <div className="col-md-12">
      <h1 test-id="dashboard-title">These are your Travels</h1>
      <p>{username}</p>
      <p>{role}</p>
      <p>{expiration}</p>

      <button onClick={handleLogout}>Logout</button>
      <br />
      {showSkeleton && <Skeleton height={40} count={5} />}
    </div>
  )
}

export default Dashboard
