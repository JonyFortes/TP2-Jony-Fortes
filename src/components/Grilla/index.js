import React from 'react'
import {Container} from './styled'
import Card from '../Card'


export default function Grido(props) {
  
    const { noticias } = props
    const destacadas = noticias.slice(3, 5).map(newsItem => {
      return newsItem
    })
    
    const grillaRoll = noticias.slice(5, 200).map(news => {
      return news
    })
  
    return (
      
      <div>
        <Container container spacing={3}>
          
  
          <Container item xs={12}>
          </Container>
          {destacadas.map(noticia => {
            return (
              <Container item xs={6} key={noticia._id}>
              </Container>
            )
          })}
          
          {grillaRoll.map(noticia => {
            return (
              <Container item xs={3} key={noticia._id}>
                <Card noticia={noticia} />
              </Container>
            )
          })}
  
        </Container>
      </div>
    );
  }
