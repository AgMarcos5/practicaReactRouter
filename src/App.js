import  { Routes, Route, Link, useParams, Outlet, NavLink, useRoutes } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/Tienda">Tienda</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

const Items = () => {
  const {item} = useParams();

  return (
    <div>
    <h1>{item}</h1>
    <Outlet />
    <NavLink to="details">Detalles</NavLink>
    <br/>
    <br/>
    <NavLink to="/tienda">tienda</NavLink>
    </div>
  )
}

const ItemDetail = () => {
  const {item} = useParams();

  return (
    <div>
      <h3>Detalles de {item}</h3>
    </div>
  )

}

const Tienda = () => {
  const items = [
    'item-1',
    'item-2',
    'item-3',
    'item-4'
  ]

  return (
    <div>
      <h1>Tienda</h1>
      {items.map( i => (
        <Link key={i} to={`/items/${i}`}>{i}</Link>
      ))}
      <Link to="/">Home</Link>
    </div>
  )
}



function App2() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="tienda" element={<Tienda />} />
        <Route path='/items/:item' element={<Items />} >
          <Route path='details' element={<ItemDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

function App() {
  let element = useRoutes( [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "about",
      element: <About />
    },
    {
      path: "tienda",
      element: <Tienda />
    },
    {
      path: "/items/:item",
      element: <Items />,
      children: [
        {
          path: "details",
          element: <ItemDetail />
        }
      ]
    }
  ])

  return element;
}

export default App;
