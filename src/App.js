import './App.css';
import Testimonio from './components/testimonio'

function App() {
  return (
    <div className="App">
       <div className="contenedor-principal">
         <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</h1>
         <Testimonio 
         nombre='Grogu'
         pais='Suecia'
         imagen='testimonio-grogu.jpg'
         cargo='Ingeniero en software'
         empresa='Spotify'
         testimonio='Me daba "miedo" aprender React, pagar por algún curso largo que posiblemente no esté actualizado y abandonarlo en una semana. Aquí encontré oro. Aprendí los conceptos básicos y ahora solo queda practicar y hacer más ejercicios y programas. '
         alt='foto de grogu'
         />
         <Testimonio 
         nombre='Darth Vader'
         pais='Holanda'
         imagen='testimonio-darth.jpg'
         cargo='Ingeniero fullstack'
         empresa='google'
         testimonio='Aprende los fundamentos de React en este curso desde cero. Crearás cuatro proyectos paso a paso y aprenderás los fundamentos para comenzar a crear aplicaciones web interactivas con React. . '
         alt='foto de Darth vader'
         />
         <Testimonio 
         nombre='Mando'
         pais='UK'
         imagen='testimonio-mando.jpg'
         cargo='Ingeniero en Redes'
         empresa='IBM'
         testimonio='Oficialmente este Curso de React desde Cero ya está posicionado, y por lo tanto es el que en mi opinión vale la pena verlo.
         Ya ví todos los cursos, tanto de HTML y CSS, JAVASCRIPT y ahora REACT. '
         alt='foto de mando'
         />
       </div>
    </div>
  );
}

export default App;
