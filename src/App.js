import './App.css';
import { Route, Routes, Link, NavLink, useSearchParams, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Register } from './pages/Register'
import { NotFound } from './pages/NotFound'

function App() {
  // Location obj is another method for storing state. 
  const location = useLocation()
  // Console log should return object with state = Evan
  console.log('location', location)
  
  //We are using searchParams to show how you can parse stuff from the url. Similar to window object url parse. You can give it state
  const [searchParams, setSearchParams] = useSearchParams({ product: 'iPhone' })
  console.log(searchParams.get("product"))
  return (
    <>
      <div className='container'>
        <Routes>
          <Route path="/" state="Evan" element={<Home />} />
          <Route path="/profile">
            {/* You can nest child routes inside of parent routes */}
            <Route index element={<Profile />} />
            <Route path="/:id" element={<Profile />} />
            {/* <Route path="new" element={<newProfile />} /> */}
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        
        <nav className='nav'>
          <div className='navList'>
            {/* Nav link is a competitor to Link. Does all the same things but just gives more styling */}
            {/* <NavLink style={({ isActive }) => {
              return isActive ? { color: 'red' } : ("")
            }}/> */}
            <Link to="/">Home</Link>
            <Link to="/">#2</Link>
            <Link to="/">#3</Link>
            <Link to="/profile">#4</Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default App;
