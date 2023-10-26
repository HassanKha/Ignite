import { React } from 'react';
import styled from "styled-components"
import { motion } from "framer-motion"
import { useDispatch } from 'react-redux';
import loadDetails from './../Actions/detailsActions';
import {Link} from "react-router-dom"
import { smallImage } from './../util';
import { popup } from "../animations";

const Game = ({name,release,image,id}) => {
    console.log(name,release,image,id)
const Stringid = id.toString();

const dispatch = useDispatch();

const LoadDetailsHandler = () => {
    document.body.style.overflow = "hidden";
dispatch(loadDetails(id));

};

    return(
        <StyledGame variants={popup}
        initial="hidden"
        animate="show" layoutId={Stringid} onClick={LoadDetailsHandler}>
        <Link to={`/game/${id}`}>
         <motion.h3  layoutId={`title ${Stringid}`}>{name}</motion.h3>
         <p>{release}</p>
         <motion.img layoutId={`image ${Stringid}`} src={image && smallImage(image,640)} alt={name}></motion.img>
         </Link>
        </StyledGame>
         )
}

const StyledGame = styled(motion.div)  `
min-height: 30vh;
box-shadow:0px 5px 30px rgba(0,0,0,0.1);
text-align: center;
border-radius: 1rem;
cursor: pointer;
overflow: hidden;
img {
    width:100%;
    height: 40vh;
    object-fit: cover;
}
`

export default Game;