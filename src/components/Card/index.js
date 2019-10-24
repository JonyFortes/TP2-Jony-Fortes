import React from 'react'
import {Container} from './styled'

function Card(props) {
    const [expanded, setExpanded] = React.useState(false);
    const {noticia} = props
    const {
      category,
      img_url,
      url,
      title
      } = noticia
  
    function handleExpandClick() {
      setExpanded(!expanded);
    }
  
    return (
  
        <Container>
        <img src={img_url} alt={title}/>
        <div>
            <a src={url}><h2>{title}</h2></a>
            <h3>{category}</h3>
        </div>
    </Container>


   
    );
  }

export default Card