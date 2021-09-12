import React from 'react';
import Form from 'react-bootstrap/Form';
import beastarray from '../assets/data.json';
// import Main from './Main';
class Formhorn extends React.Component {
  constructor(props) {
    super(props);
  }
  hornfilters = (e) => {
    let value = parseInt(e.target.value);
    let newFilter;
    newFilter = beastarray.filter((item) => {
      if (item.horns === value) {
        return value;
      } else if (value === 0) {
        return beastarray;
      }
    });
    this.props.callBack(newFilter);
  };
  render() {
    return (
      <div>
        <Form className='selectForm'>
          <Form.Label>Choose the Number Of Hornes</Form.Label>

          <Form.Control as='select' onChange={this.hornfilters}>
            <option value='0'> All Beasts </option>
            <option value='1'> one </option>
            <option value='2'> two</option>
            <option value='3'> threee </option>
            <option value='100'> 100 </option>
          </Form.Control>
        </Form>
      </div>
    );
  }
}

export default Formhorn;
