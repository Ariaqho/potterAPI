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
    <div className='container-books'>
        {
            books.map((item, index) => (
              <div key={index} className="card mb-3 book__child" style={{width: "45%"}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={require(`../media/img/hp${index}.jpeg`)} className="img-fluid rounded-start" alt={item.libro}/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.libro}</h5>
                      <p className="card-text">{item.descripcion}</p>
                      <p className="card-text"><small className="text-muted">Fecha de lanzamiento: {item.fecha_de_lanzamiento}</small></p>
                    </div>
                  </div>
                </div>
             </div>
            ))
        }

    </div> : null
  )
}

export default Books;




