import {useEffect, useState} from 'react';

const Characters = () => {
  const urlPersonajes = "https://harry-potter-api-production.up.railway.app/personajes";
  const [characters, setCharacters] = useState([])
  const llamado_api = async () => {
    try {
      const response = await fetch(urlPersonajes)
      const responseJson = await response.json()
      setCharacters(responseJson)
      console.log(responseJson)      
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    llamado_api()
  }, [])
  return (
    characters.length > 0 ? 
    <div className='row'>
        {
            characters.map((item, index) => (
                <div key={index} className="col mt-3">
                    <div className='card shadow-sm bg-body rounded' style={{width: "300px"}}>
                        <img className='card-img-top' style={{width: "300px", height: "350px"}} src={item.imagen} atl={item.personaje} />
                        <div className='card-body'>
                            <h5 className='card-title'>{item.personaje}</h5>
                            <p className='card-text'>{item.casaDeHogwarts}</p>
                        </div>
                    </div>
                </div>
            ))
        }

    </div> : null
  )
}

export default Characters;




