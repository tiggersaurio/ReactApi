import React from 'react';
import imagePlay from '../images/icon-play.svg';
import imageWork from '../images/icon-work.svg';
import imageStudy from '../images/icon-study.svg';
import imageExercise from '../images/icon-exercise.svg';
import imageSocial from '../images/icon-social.svg';
import imageSelfCare from '../images/icon-self-care.svg';


export const Card = ({user, position}) => {

    const images = [imageWork, imagePlay, imageStudy, imageExercise, imageSocial, imageSelfCare];
    let bground;
    let image;

    if (position == 0){
        bground = "#ff8b64";
        image = images[0];
    }else if (position == 1){
        bground = "#56c2e6";
        image = images[1];
    }else if (position == 2){
        bground = "#ff5e7d";
        image = images[2];
    }else if (position == 3){
        bground = "#4acf8a";
        image = images[3];
    }else if (position == 4){
        bground = "#7235d1";
        image = images[4];
    }else {
        bground = "#f1c75b";
        image = images[5];
    }

    return (
        <div className="col">
            <div className="card tarjeta" style={{ backgroundColor: bground}}>
                <div className="d-flex justify-content-end imagen_card">
                    <img src={image} className="imagen" alt="Play Icon" />
                </div>
                <div className="card-body contenido_tarjeta">
                    <div style={{ alignItems: 'flex-end' }}>
                        <h6 className="titulo">{user.username}</h6>
                        <span className="material-symbols-outlined elipsis">more_horiz</span>
                    </div>
                    <span className="time">{user.id}hrs</span>
                    <p className="contenido_p">{user.email}</p>
                </div>
            </div>
        </div>
    )
}
