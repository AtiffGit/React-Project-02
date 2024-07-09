import './App.css'
import Header from './components/Header';
import Contactheader from './components/ContactHeader/Contactheader';
import ContactForm from './components/Form/ContactForm';

function App() {                                
 

  return (
    <>
   <Header/>
   <main className='main_container'>
   <Contactheader/>
   <ContactForm/>
   </main>
    </>
  )
}

export default App
