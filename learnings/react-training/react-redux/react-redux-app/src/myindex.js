/**
 * Component Interaction /Communication:
 *  Data exchange among components
 * Parent -child -via props - data as prop
 * Child to Parent-via props -function as prop
 */
import React from 'react';
import {
    render
} from 'react-dom';
import './index.css'

const HEROS = [{
        'id': "http://lorempixel.com/100/100/",
        'name': "Amit"
    },
    {
        'id': "http://lorempixel.com/100/100/",
        'name': "Mohit"
    },
    {
        'id': "http://lorempixel.com/100/100/",
        'name': "Ritika"
    },
    {
        'id': "http://lorempixel.com/100/100/",
        'name': "Somya"
    },
    {
        'id': "http://lorempixel.com/100/100/",
        'name': "Amit"
    },
    {
        'id': "http://lorempixel.com/100/100/",
        'name': "Mohit"
    },
    {
        'id': "http://lorempixel.com/100/100/",
        'name': "Ritika"
    },
    {
        'id': "http://lorempixel.com/100/100/",
        'name': "Somya"
    },
];


const Header = () => ( < div className = "header" > Heading < /div> );



        const CardComponent = props => {
                const {
                    heros
                } = props;

                const CardItem = heros.map(hero =>
                    <
                    div className = "c-item-wrap" > < div className = "c-item-img-wrap" > < img alt = " yo"
                    src = {
                        hero.id
                    }
                    /> < /div > <
                    div className = "c-item-content-wrap" > {
                        hero.name
                    } < /div > < /div > );

                return ( < div className = "c-wrap" > {
                        CardItem
                    } < /div>);    
                }

                const App = () => ( <
                    div >
                    <
                    Header / >
                    <
                    CardComponent heros = {
                        HEROS
                    }
                    /> < /
                    div >
                )


                render( < App / > , root);