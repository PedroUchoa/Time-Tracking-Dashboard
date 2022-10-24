import './App.css';
import logo from './Assets/images/image-jeremy.png'
import Cards from './Cards/Cards';
import iconPlay from './Assets/images/icon-play.svg'
import iconSocial from './Assets/images/icon-social.svg'
import iconWork from './Assets/images/icon-work.svg'
import iconStudy from './Assets/images/icon-study.svg'
import iconCare from './Assets/images/icon-self-care.svg'
import iconExercise from './Assets/images/icon-exercise.svg'

import { useState, useEffect } from 'react';

function App() {

  const [activated, setActivated] = useState('1')
  const [values, setValues] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/data')
      .then(resp => resp.json())
      .then(data => selectData(data))
      .catch(err => console.log(err))

      console.log('ok')

  }, [activated])


  function selectData(data) {
    switch (activated) {
      case '1':
        setValues(data.daily)
        console.log('dia')
        break
      case '2':
        setValues(data.weekly)
        console.log('semana')
        break
      case '3':
        setValues(data.monthly)
        console.log('mes')
        break
      default:
        console.log('error')
    }
  }

  function handleClick(event) {
    setActivated(event.target.id)

  }

  return (
    <div className='principal'>
      <section className='container'>
        <div className='dataContainer'>
          <div className='social'>
            <img src={logo} alt='Imagem do usuario' />
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
          </div>
          <div className='list-week'>
            <ul>
              <li><button
                onClick={handleClick}
                id='1'
                className={activated === '1' ? 'activate' : 'desactivate'}
              >Daily
              </button></li>
              <li><button
                onClick={handleClick}
                id='2'
                className={activated === '2' ? 'activate' : 'desactivate'}
              >Weekly
              </button></li>
              <li><button
                onClick={handleClick}
                id='3'
                className={activated === '3' ? 'activate' : 'desactivate'}
              >Monthly
              </button></li>
            </ul>
          </div>
        </div>
        <div className='card-container'>
          <Cards
            image={iconWork}
            color='card-orange'
            type={"Work"}
            current={values.work !== undefined? values.work.current : 0}
            previous={values.work !== undefined ? values.work.previous : 0}
          />
          <Cards
            image={iconPlay}
            color='card-blue'
            type={"Play"}
            current={values.work !== undefined ? values.play.current : 0}
            previous={values.work !== undefined ? values.play.previous : 0}
          />
          <Cards
            image={iconStudy}
            color='card-red'
            type={"Study"}
            current={values.work !== undefined ? values.study.current : 0}
            previous={values.work !== undefined ? values.study.previous : 0}
          />
          <Cards
            image={iconExercise}
            color='card-green'
            type={"Exercise"}
            current={values.work !== undefined ? values.exercise.current : 0}
            previous={values.work !== undefined ? values.exercise.previous : 0}
          />
          <Cards
            image={iconSocial}
            color='card-purple'
            type={"Social"}
            current={values.work !== undefined ? values.social.current : 0}
            previous={values.work !== undefined ? values.social.previous : 0}
          />
          <Cards
            image={iconCare}
            color='card-yellow'
            type={"Self Care"}
            current={values.work !== undefined ? values.selfcare.current : 0}
            previous={values.work !== undefined ? values.selfcare.previous : 0}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
