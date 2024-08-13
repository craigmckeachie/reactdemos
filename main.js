const { useState, useEffect } = React;

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

const BASE_URL = "http://localhost:9000";

//fetch Utility functions

function translateStatusToErrorMessage(status) {
  switch (status) {
    case 401:
      return "Please sign in again.";
    case 403:
      return "You do not have permission to view the data requested.";
    default:
      return "There was an error saving or retrieving data.";
  }
}

async function checkStatus(response) {
  if (response.ok) return response;

  const httpError = {
    status: response.status,
    statusText: response.statusText,
    url: response.url,
    body: await response.text(),
  };
  console.log(`http error status: ${JSON.stringify(httpError, null, 1)}`);

  let errorMessage = translateStatusToErrorMessage(httpError.status);
  throw new Error(errorMessage);
}

function parseJSON(response) {
  return response.json();
}

function delay(ms) {
  return function (x) {
    return new Promise((resolve) => setTimeout(() => resolve(x), ms));
  };
}

// API object, communicates with the API or the backend
const url = `${BASE_URL}/songs`;

const songAPI = {
  list() {
    return fetch(url).then(checkStatus).then(parseJSON);
  },
};

//Components UI
function HomePage() {
  return <h2>Home</h2>;
}

function SongsPage() {
  return (
    <div>
      <header className="d-flex justify-content-between mb-4">
        <h2>Songs</h2>
        <Link className="btn btn-outline-secondary" to="/songs/create">
          + Add Song
        </Link>
      </header>
      <hr />
      <SongList />
    </div>
  );
}

function SongList() {
  const [songs, setSongs] = useState([]);
  const [busy, setBusy] = useState(false);

  async function loadSongs() {
    setBusy(true);
    let data = await songAPI.list();
    setSongs(data);
    setBusy(false);
  }

  useEffect(() => {
    loadSongs();
  }, []);

  return (
    <div className="list">
      {busy && <div>Loading...</div>}

      {songs.map((song) => (
        <div className="card p-4" key={song.songID}>
          <strong>{song.title}</strong>
          <div>{song.artist}</div>
          <small>{song.year}</small>
          <Link to={`/songs/edit/${song.songID}`}>edit</Link>
        </div>
      ))}
    </div>
  );
}

function SongCreatePage() {
  return (
    <div>
      <header className="d-flex justify-content-between mb-4">
        <h2>Add Song</h2>
      </header>
      <hr />
    </div>
  );
}

function SongEditPage() {
  const { id: idFromUrl } = useParams();
  const songId = Number(idFromUrl);

  return (
    <div>
      <header className="d-flex justify-content-between mb-4">
        <h2>Edit Song</h2>
      </header>
      <hr />
      {songId}
    </div>
  );
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
            <Route path="songs/create" element={<SongCreatePage />} />
            <Route path="songs/edit/:id" element={<SongEditPage />} />
            <Route path="artists" element={<ArtistsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
