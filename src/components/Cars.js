import React from 'react';

const Car = ({children,color}) => {

const colorInfo = color ? ( <p> Couleur:{color}</p>) : (<p>couleur:Neant</p>);





  return(
    <div className="cars">

    <p> Marque :  {children}</p>
   {colorInfo}


    </div>


    )
  }
  export default Car;
