import React, { useState, useEffect } from 'react';

const SelectedBuildings = () => {
  const [homes, setHomes] = useState([]);

  const fetchHomes = async () => {
    try {
      const res = await fetch('https://dinmaegler.onrender.com/homes');
      const homesData = await res.json();
      console.log(homesData)
      setHomes(homesData);
    } catch (error) {
      console.error('Error fetching homes:', error);
    }
  };

  useEffect(() => {
    fetchHomes();
  }, []);

  return (
    <div className='selectedBuildings'>
        <h3>Udvalgte Boliger</h3>
        <p>There are many variations of passages of Lorem Ipsum available but the 
          this in majority have suffered alteration in some</p>
        {homes.map((home) =>(
            <div key={home.id} className='buildingCard'>
                <img src={home.images[0].url} alt="" />
                <div className='informationBox'>
                  <p>{home.adress1}. {home.adress2}</p>
                  <p>{home.postalcode} {home.city}</p>
                  <p><span>{home.type}  .</span> <span>Ejerudgift: {home.cost} kr.</span></p>
                  <hr/>
                  <p>
                      <span>{home.energylabel} </span> <span>{home.rooms} Værelser. {home.livingspace} m^2 </span><span>kr. {home.price}</span>
                  </p>
                </div>
                
            </div>
        ))}
    </div>
  );
};

export default SelectedBuildings;

