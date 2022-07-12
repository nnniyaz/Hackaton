import { Link } from 'react-router-dom';
import Cell from '../Cell/Cell';
import classes from './Row.module.css'

const Row = (props) => {
    return (
        <div className={classes.row}>
            <Link className='link' to={`/${props.cells.path}/${props.cells.imgName1}`}><Cell name={props.cells.imgName1} >{props.cells.child1}</Cell></Link>
            <Link className='link' to={`/${props.cells.path}/${props.cells.imgName2}`}><Cell name={props.cells.imgName2} >{props.cells.child2}</Cell></Link>
            <Link className='link' to={`/${props.cells.path}/${props.cells.imgName3}`}><Cell name={props.cells.imgName3} >{props.cells.child3}</Cell></Link>
        </div>
    );
}

export default Row;