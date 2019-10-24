import React from 'react';
import Grido from '../Grilla';
import dayjs from 'dayjs';
import { Container } from './styled';

class Home extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        noticias:[],
        filter:'',
    }
}

async componentDidMount(){
    const date = dayjs()
    const dateFormatted = date.format('YYYY[-]MM[-]DD')
    try {
        const response = await fetch(`https://api.canillitapp.com/latest/${dateFormatted}`);
        if (!response.ok) {
          throw Error(response.statusText);
        }
        const json = await response.json();
        this.setState({ 
          news: json, 
        });
        console.log(this.state.news)
    } catch (error) {
        console.log(error);
    }
}
    render() {
      return (
        
          <Container>
            
           
            <Grido noticias={this.state.noticias} />
        
          </Container>
      );
    }
  }
  
export default Home