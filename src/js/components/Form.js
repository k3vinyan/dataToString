import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const tbas = (event.target.value).split('\n');
    let tbaArray = [];
    for(let i = 0; i < tbas.length; i++){
      if(i == 0){
        tbaArray.push('\"' + (tbas[i]).trim() + '\"')
      } else {
        tbaArray.push('\n\"' + (tbas[i]).trim() + '\"')
      }
    }
    this.setState({value: tbaArray})
  }

  render(){
    return(
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm'>
            <form>
              <div className='form-group'>
                <label htmlFor='input'>Input</label><br />
                <textarea rows="25" cols="25" onChange={this.handleChange}/>
              </div>
            </form>
          </div>
          <div className='col-sm'>
            <form className='form-group'>
              <label htmlFor='output'>Output</label><br />
              <textarea rows="25" cols="25" value={this.state.value} />
            </form>
          </div>
        </div>
      </div>

    )
  }
}
