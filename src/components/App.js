import React from 'react';
import ImageList from './ImageList.js';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      photoIndex: 0,
      maxIndex: this.props.data.length - 1
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex(){
    if (this.state.photoIndex === this.state.maxIndex){
      this.setState({photoIndex: 0})
    } else {
      let newIndex = this.state.photoIndex + 1
      this.setState({photoIndex: newIndex })
    }
  }

  componentWillMount(){
    setInterval(this.updateIndex, 2000);
  }

  render() {
    let x = this.state.photoIndex

    return (
      <div>
        <img src={this.props.data[x]}/>
      </div>
    );
  };
};
export default App;
