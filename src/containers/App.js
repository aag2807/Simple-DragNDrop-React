import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Board from './Board';
import Tickets from './Tickets';
import Header from '../components/Header/Header';
import axios from 'axios'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

class App extends Component {
  constructor(){
    super ();
    this.state = {
      dataSource: []
    }
  }

  async componentDidMount(){
    let {data} = await axios.get('https://raw.githubusercontent.com/PacktPublishing/React-Projects/master/Chapter03/public/assets/data.json')
    let map = [];
    
    if(data.length > 0){
      data.forEach(task => map.push(task))
    }

    this.setState({
      dataSource: map
    })
  };


  render() {
    const lanes = [
      { id: 1, title: 'To Do' },
      { id: 2, title: 'In Progress' },
      { id: 3, title: 'Review' },
      { id: 4, title: 'Done' },
    ]
    const { dataSource } = this.state;
    console.log(dataSource)

    return (
      <>
        <GlobalStyle />
        <AppWrapper>
          <Header />
          <Board
            lanes={lanes}
            dataSource={dataSource}
          />
          <Tickets
          dataSource={dataSource}
          />
        </AppWrapper>
      </>
    );
  }
}

export default App;