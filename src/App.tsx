import { useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Home } from './components/Home'
import { Projects } from './components/Projects'

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isHomeOpen, setIsHomeOpen] = useState(true)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const [isSlidingRight, setIsSlidingRight] = useState(false)
  const [isSlidingLeft, setIsSlidingLeft] = useState(false)
  const [isSlidingUp, setIsSlidingUp] = useState(false)
  const [isSlidingDown, setIsSlidingDown] = useState(false)

  const openAbout = () => {
    setIsAboutOpen(true)
    setIsSlidingRight(true)
    setTimeout(() => {
      setIsSlidingRight(false)
      setIsHomeOpen(false)
    }, 500)
  }

  const closeAbout = () => {
    setIsHomeOpen(true)
    setIsSlidingLeft(true)
    setTimeout(() => {
      setIsSlidingLeft(false)
      setIsAboutOpen(false)
    }, 500)
  }

  const openContact = () => {
    setIsContactOpen(true)
    setIsSlidingLeft(true)
    setTimeout(() => {
      setIsSlidingLeft(false)
      setIsHomeOpen(false)
    }, 500)
  }

  const closeContact = () => {
    setIsHomeOpen(true)
    setIsSlidingRight(true)
    setTimeout(() => {
      setIsSlidingRight(false)
      setIsContactOpen(false)
    }, 500)
  }

  const openProjects = () => {
    setIsProjectsOpen(true)
    setIsSlidingUp(true)
    setTimeout(() => {
      setIsSlidingUp(false)
      setIsHomeOpen(false)
    }, 500)
  }

  const closeProjects = () => {
    setIsHomeOpen(true)
    setIsSlidingDown(true)
    setTimeout(() => {
      setIsSlidingDown(false)
      setIsProjectsOpen(false)
    }, 500)
  }

  return (
    <div className="overflow-hidden">
      <div
        style={
          isSlidingRight || isSlidingLeft
            ? { right: `${window.innerWidth}px` }
            : isSlidingUp || isSlidingDown
            ? { bottom: `${window.innerHeight}px` }
            : {}
        }
        className={`flex w-screen h-screen relative bg-neutral-300 ${
          isSlidingRight ? 'slide-right' : ''
        }${isSlidingLeft ? 'slide-left' : ''}${
          isSlidingUp ? 'flex-col slide-up' : ''
        }${isSlidingDown ? 'flex-col slide-down' : ''}`}
      >
        {isAboutOpen ? (
          <div
            style={
              isSlidingRight || isSlidingLeft
                ? { minWidth: `${window.innerWidth}px` }
                : { minWidth: '100%' }
            }
          >
            <About buttonHandler={closeAbout} />
          </div>
        ) : null}
        {isHomeOpen ? (
          <div
            style={
              isSlidingRight || isSlidingLeft
                ? { minWidth: `${window.innerWidth}px` }
                : isSlidingUp || isSlidingDown
                ? { minHeight: `${window.innerHeight}px` }
                : { minWidth: '100%', minHeight: '100%' }
            }
          >
            <Home
              leftButtonHandler={openAbout}
              rightButtonHandler={openContact}
              bottomButtonHandler={openProjects}
            />
          </div>
        ) : null}
        {isContactOpen ? (
          <div
            style={
              isSlidingRight || isSlidingLeft
                ? { minWidth: `${window.innerWidth}px` }
                : { minWidth: '100%' }
            }
          >
            <Contact buttonHandler={closeContact} />
          </div>
        ) : null}
        {isProjectsOpen ? (
          <div
            style={
              isSlidingUp || isSlidingDown
                ? { minHeight: `${window.innerHeight}px` }
                : { minHeight: '100%', minWidth: '100%' }
            }
          >
            <Projects buttonHandler={closeProjects} />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default App
