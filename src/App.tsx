import React from 'react'
import ClickCount from './components/clickCount'
import AboutMe from './components/aboutMe/aboutMe'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar'

type AppProps = {

}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <AboutMe />
    </div>
  )
}

export default App
