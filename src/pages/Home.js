import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <p>Display profiles here and allow them to swipe or click yes button on each profile</p>
            <Link to="/register">Sign Up</Link>
        </>
    )
}
