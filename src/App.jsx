import About from "./Components/About"
import AppHeader from "./Components/AppHeader"
import Rating from "./Components/Rating"


function App() {
  return (
    <>
      <AppHeader />
      <About />
      <Rating />
      <footer className="footers" style={{ paddingBottom: '140px' }}>
        <div
          className="dividers"
          style={{
            height: '0.6px',
            width: '100%',
            background: '#33333327',
            borderColor: ' #e8eaed'
          }}
        />
      </footer>
    </>
  )
}

export default App