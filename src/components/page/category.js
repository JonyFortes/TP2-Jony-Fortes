import React from 'react';
import Grido from '../Grilla';
import { Container } from './styled';

class Category extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            noticias: [],
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.slug !== this.props.match.params.slug) {
          this.fetchCategoryNews()
        }
    }

    componentDidMount() {
        this.fetchCategoryNews()
    }

    async fetchCategoryNews(){
        const slug = this.props.match.params.slug
        const categoriesId = {
            politica: '1',
            internacionales: '2',
            tecnologia: '3',
            espectaculos: '4',
            deportes: '5',
        }
        try {
            const response = await fetch(`https://api.canillitapp.com/news/category/${categoriesId[slug]}`);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            console.log(json)
            this.setState({
                noticias: json,
            });

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

export default Category