import './index.css'
import Body from './components/body'
import User from './components/user'
function App() {
  return (
    <div className="app">
      <header className="app__header">Thunder Times</header>
      <div className="container">
        <Body />
        <User />
      </div>
    </div>
  )
}

export default App
