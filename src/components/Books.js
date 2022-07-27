import {useEffect, useState} from 'react';

const Books = () => {
  const urlLibros = "https://harry-potter-api-production.up.railway.app/libros";
  const [books, setBooks] = useState([])
  const llamado_api = async () => {
    try {
      const response = await fetch(urlLibros)
      const responseJson = await response.json()
      setBooks(responseJson)
      console.log(responseJson)      
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    llamado_api()
  }, [])
  return (
    books.length > 0 ? 
    <div className='books'>
        {
            books.map((item, index) => (
                <div key={index} className="books card">
                    <div className="card-body">
                        <h5 className="card-title">{item.libro}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Fecha de lanzamiento: {item.fecha_de_lanzamiento}</h6>
                        <p className="card-text">{item.descripcion}</p>
                    </div>
                </div>
            ))
        }

    </div> : null
  )
}

export default Books;




