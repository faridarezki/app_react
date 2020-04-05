import React ,{Component} from 'react';
import Car from './Cars';

class Mycars extends Component {
  render() {

      return(

        <div>

        <h1> CATALOGUE  </h1>

        <Car color ="" >  Ford      </Car>
        <Car  color="">  Mercedes  </Car>
        <Car color ="">  Peugeot   </Car>
        </div>

      );
  }
}

export default Mycars;
