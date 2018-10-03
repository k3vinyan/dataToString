import React from 'react';
import { render } from 'react-dom';
import Layout from './js/components/Layout';
import 'bootstrap';


let div = document.createElement('div');
div.id = 'app';

document.body.appendChild(div);

class App extends React.Component {
    render(){
      return(
        <div>
          <Layout />
        </div>
      )
    }
}

render(<App />, document.getElementById('app'));
