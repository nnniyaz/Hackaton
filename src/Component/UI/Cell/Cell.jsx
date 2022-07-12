import React from "react";
import classes from './Cell.module.css'

import nightlife from '../../../images/party.jpeg'
import cafe from '../../../images/cafe.jpeg'
import bday from '../../../images/bday.webp'
import resort from '../../../images/pool.jpeg'
import library from '../../../images/library.jpeg'
import britain from '../../../images/uk.webp'

const Cell = (props) => {
    const images = [
        { name: 'nightlife', image: nightlife },
        { name: 'cafe', image: cafe },
        { name: 'bday', image: bday },
        { name: 'resort', image: resort },
        { name: 'library', image: library },
        { name: 'britain', image: britain },
    ]

    let img = '';
    for (let i = 0; i < images.length; i++) {
        if (images[i].name === props.name) {
            img = images[i].image
        }
    }

    return (
        <div className={classes.cell} style={{ backgroundImage: `url(${img})` }}>
            <div className={classes.subcell}>{props.children}</div>
        </div>
    );
}

export default Cell;