import { useParams } from "react-router-dom"

function ProfilePage() {

    const { username } = useParams();

    return (
        <div>
            Welcome {username}
        </div>
    )
}

export default ProfilePage