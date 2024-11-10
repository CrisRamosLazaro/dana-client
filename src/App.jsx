import './App.css'
import AppRoutes from './routes/AppRoutes'
import Navigation from './components/Navigation'
import Footer from './components/Footer'


const App = () => {


  return (
    <div className={`h-screen w-screen`}
    >
      <Navigation />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App
