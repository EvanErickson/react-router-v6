import './App.css';
import { Route, Routes, Link, NavLink, useSearchParams, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Register } from './pages/Register'
import { NotFound } from './pages/NotFound'

function App() {
  /* Read me:
  *  App layout: 
  *     Outter container with top nav links, then routes, then followed by bottom nav links. This creates a shell that the routes can go inside. Whatever route is hit, the component / page will be rendered in between the two navBars.
  */

  // Location obj is another method for storing state. 
  const location = useLocation()
  // Console log should return object with state = Evan
  console.log('location', location)

  //We are using searchParams to show how you can parse stuff from the url. Similar to window object url parse. You can give it state
  const [searchParams, setSearchParams] = useSearchParams({ product: 'iPhone' })
  console.log(searchParams.get("product"))
  return (
    <>
      <div className='outterContainer'>
       <nav className='navTop'>
         <div className='navTopList'>
            {/* Nav link is a competitor to Link. Does all the same things but just gives more styling */}
            {/* <NavLink style={({ isActive }) => {
              return isActive ? { color: 'red' } : ("")
            }}/> */}
            <Link to="/">Profile</Link>
            <Link to="/">Chatroom</Link>
            <Link to="/">PrivateMessages</Link>
          </div>
        </nav>



        <Routes>
          <Route path="/" state="Evan" element={<Home />} />
          <Route path="/profile">
            {/* You can nest child routes inside of parent routes */}
            <Route index element={<Profile />} />
            <Route path=":id" element={<Profile />} />
            {/* <Route path="new" element={<newProfile />} /> */}
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <nav className='navBottom'>
          <div className='navBottomList'>
            {/* Nav link is a competitor to Link. Does all the same things but just gives more styling */}
            {/* <NavLink style={({ isActive }) => {
              return isActive ? { color: 'red' } : ("")
            }}/> */}
            <Link to="/">Settings</Link>
            <Link to="/">Home</Link>
            <Link to="/">New Likes</Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default App;
