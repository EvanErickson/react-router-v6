import { Link, useParams } from "react-router-dom"

export const Profile = () => {
    const { id } = useParams();
    // Pulling object out of the param on other page 
    return (
        <>
            <h1>{id}</h1>
            <Link to="/profile/user1">User1</Link>
            <Link to="/profile/user2">User2</Link>
        </>
    )
}