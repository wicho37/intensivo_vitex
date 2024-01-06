/* import Community from "components/Community" */
import "./app.css"

function App() {

  return (
    <div className="total">
      <div className="container">
        <div className="community">
          <h1>Join our community</h1>
          <h2>30-day hassie-free money back guarantee</h2>
          <div className="parrafo-1">
            <p>Gain acces to our full library of tutorials along with expert code reviews.</p>
            <p> Perfect for any developers who ace serious about honing ther skills.</p>
          </div>
        </div>

        <div className="content-2">
          <div className="valor">
            <h3>Monthly Suscription</h3>
            <div className="precio">
              <h4>$29</h4>
              <a>Per month</a>
            </div>
            <p>Full access for less than $1 a day</p>
            <button>Sign Up</button>
          </div>
          <div className="menu-list">
            <h3>Why Us</h3>
            <ul>
              <li>Tutorials by industry expert </li>
              <li>Peer & expert code review</li>
              <li>Coding exercises</li>
              <li>Access to our GitHub repos</li>
              <li>Community forum</li>
              <li>Flashcard decks</li>
              <li>New videos every week</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
