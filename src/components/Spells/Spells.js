import {useEffect, useState} from 'react';

const SpellsList = () => {
   const url = 'https://harry-potter-api-production.up.railway.app/hechizos'
const [spells, setSpells] = useState([])
const apiCall = async () => {
    try {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setSpells(responseJSON)
    console.log(responseJSON)
}catch(error){
    console.log(error)
}
}
useEffect(() => {
    apiCall()
},[])
return (
    spells.length > 0 ? 
    <div className='container-spellsList'>
        {
            spells.map((item, index) => (
                <div key={index} className="card spells">
                    <div className="card-body">
                        <h5 className="card-title">{item.hechizo}</h5>
                        <p className="card-text">{item.uso}</p>
                    </div>
                </div>
            ))
        }

    </div> : null
  )
}
export default SpellsList;




