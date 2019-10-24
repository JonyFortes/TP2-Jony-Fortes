import React from 'react'
import {Link} from 'react-router-dom'
import { Container } from './styled'

const Navbar = () => {
    return(
        <Container>
            <h1>NOTICIAS</h1>
            <Link to={'/'}>HOME</Link>
            <Link to={'/category/politica'}>Politica</Link>
            <Link to={'/category/internacionales'}>Internacionales</Link>
            <Link to={'/category/tecnologia'}>Tecnología</Link>
        </Container>
    )
}

export default Navbar