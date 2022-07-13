import React from "react";
import classes from './Cell.module.css'

// images
import nightlife from '../../../images/party.jpeg'
import cafe from '../../../images/cafe.jpeg'
import bday from '../../../images/bday.webp'
import resort from '../../../images/pool.jpeg'
import study from '../../../images/library.jpeg'
import engclubs from '../../../images/uk.webp'
import kowloon from '../../../images/kowloon.jpeg'
import nikulin from '../../../images/nikulin.jpeg'
import latenight from '../../../images/latenight.jpeg'
import coffeeboom from '../../../images/coffeeboom.webp'
import zifayet from '../../../images/ziyafet.jpeg'
import afanasich from '../../../images/afanasich.webp'
import rybamechty from '../../../images/rybamechty.jpeg'
import sadu from '../../../images/sadu.jpeg'
import manana from '../../../images/manana.jpeg'
import tauspa from '../../../images/tauspa.jpeg'
import eightlakes from '../../../images/8lakes.png'
import office from '../../../images/office.jpeg'
import smartpoint from '../../../images/smartpoint.jpeg'
import level8 from '../../../images/level8.jpeg'
import terra from '../../../images/terra.jpeg'
import americanspace from '../../../images/americanspace.jpeg'
import spasibeacoup from '../../../images/spasibeacoup.jpg'
import skillsacademy from '../../../images/skillsacademy.jpeg'
import { Link } from "react-router-dom";

const Cell = (props) => {
    const images = [
        { name: 'nightlife', image: nightlife },
        { name: 'cafe', image: cafe },
        { name: 'bday', image: bday },
        { name: 'resort', image: resort },
        { name: 'study', image: study },
        { name: 'engclubs', image: engclubs },
        { name: 'kowloon', image: kowloon },
        { name: 'nikulin', image: nikulin },
        { name: 'latenight', image: latenight },
        { name: 'coffeeboom', image: coffeeboom },
        { name: 'ziyafet', image: zifayet },
        { name: 'afanasich', image: afanasich },
        { name: 'rybamechty', image: rybamechty },
        { name: 'sadu', image: sadu },
        { name: 'manana', image: manana },
        { name: 'tauspa', image: tauspa },
        { name: 'eightlakes', image: eightlakes },
        { name: 'office', image: office },
        { name: 'smartpoint', image: smartpoint },
        { name: 'level8', image: level8 },
        { name: 'terra', image: terra },
        { name: 'americanspace', image: americanspace },
        { name: 'spasibeacoup', image: spasibeacoup },
        { name: 'skillsacademy', image: skillsacademy },

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