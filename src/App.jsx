import { Header } from './components/Header'
import { Jumbotron } from './components/Jumbotron'
import { Studies } from './components/Studies'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
 
function App() {
  return (
    <div className="App">
      <Header />
      <Jumbotron />
      <Studies />
      <Contact />
      <Footer />
    </div>
  )
}

export default App