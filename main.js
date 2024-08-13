const {
  BrowserRouter: Router,
  Route,
  Routes,
  Link,
  NavLink,
  Navigate,
  useParams,
  useLocation,
  useNavigation,
} = ReactRouterDOM;

function HomePage() {
  return <h2>Home</h2>;
}

function SongsPage() {
  return <h2>Songs</h2>;
}

function ArtistsPage() {
  return <h2>Artists</h2>;
}

function NotFound() {
  return (
    <>
      <h2>Uh oh.</h2>
      <p>
        The page you requested could not be found. Is there any chance you were
        looking for one of these?
      </p>
    </>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav className="container mt-4">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/songs">
                Songs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/artists">
                Artists
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="songs" element={<SongsPage />} />
            <Route path="artists" element={<ArtistsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
