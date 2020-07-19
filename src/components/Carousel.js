import React from 'react';

import Card from '../components/Card';

import flags from '../assets/images/flags.png';
import shopping from '../assets/images/shopping.jpg';
import smiley from '../assets/images/smiley.png';
import room from '../assets/images/room.png';
import { Container,Row } from 'react-bootstrap';

class Carousel extends React.Component {

    constructor(props){
        super(props);

        this.state={
            items:[
                {
                    id: 0,
                    title: 'Python',
                    subTitle: 'Python program',
                    imgSrc: flags,
                    link: 'https://www.google.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Mysql',
                    subTitle: 'Mysql program',
                    imgSrc: shopping,
                    link: 'https://www.google.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Mongo',
                    subTitle: 'mongo program',
                    imgSrc: smiley,
                    link: 'https://www.google.com/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Wong Wong',
                    subTitle: 'Website',
                    imgSrc: room,
                    link: 'https://www.google.com/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Wong Wong',
                    subTitle: 'Website',
                    imgSrc: room,
                    link: 'https://www.google.com/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Wong Wong',
                    subTitle: 'Website',
                    imgSrc: room,
                    link: 'https://www.google.com/',
                    selected: false
                },
            ]
        }
    }



    makeItems = (items) =>{
        return items.map(item =>{
            return <Card item={item} key={item.id}/>
        })
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );

    }

}


export default Carousel;