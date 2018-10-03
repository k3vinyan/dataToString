import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../css/form.css';

export default class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: '', copyButton: 'Copy'}

    this.handleChange = this.handleChange.bind(this);
    this.test = this.test.bind(this)
  }

  handleChange(event){
    const tbas = (event.target.value).split('\n');
    let tbaArray = [];
    for(let i = 0; i < tbas.length; i++){
      if(i == 0){
        tbaArray.push('\"' + (tbas[i]).trim() + '\"')
      } else {
        tbaArray.push(' \n\"' + (tbas[i]).trim() + '\"')
      }
    }
    this.setState({value: tbaArray})
  }

  test(event){
    event.preventDefault()
    const data = document.getElementById('newData');
    data.select();
    document.execCommand('copy');
    let button = document.getElementById('copyButton');
    this.setState({copyButton: 'Copied!'})
  }

  render(){
    return(
      <div className='container-fluid jumbotron'>
        <div className='row'>
          <div className='col-sm'>
            <form>
              <div className='form-group'>
                <label htmlFor='input'>Input:</label><br />
                <textarea rows="25" cols="25" className='form-control' onChange={this.handleChange}/>
              </div>
            </form>
          </div>
          <div className='col-sm'>
            <form className='form-group'>
              <label htmlFor='output'>Output:</label>
              <button type='button' className='btn btn-outline-light btn-sm' id='copyButton' onClick={this.test}>{this.state.copyButton}</button><br />
              <textarea rows="25" cols="25" value={this.state.value} className='form-control' id='newData'/>
            </form>
          </div>
        </div>
      </div>

    )
  }
}
