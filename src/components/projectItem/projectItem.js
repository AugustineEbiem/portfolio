import React, { useRef, useReducer } from 'react';
// import "../../css/style.scss";

import cn from 'classnames';

import animate from './animate';
import Title from './title';
import Image from './image';

const initialState = {
    opacity: 0,
    parallaxPos: {x: 0, y: -20},
    scale: 0.8,
    rotationPosition: 0,
    active: false,
}

function reducer (state, action) {
    switch(action.type) {
        case "MOUSE/ENTER": {
            return {
                ...state,
                active: true,
            }
        }
        case "MOUSE/LEAVE": {
            return {
                ...state,
                active: false,
            }
        }
        case "CHANGE/OPACITY": {
            return {
                ...state,
                opacity: action.payload
            }
        }
        case "MOUSE/COORDINATES": {
            return {
                ...state,
                parallaxPos: action.payload
            }
        }
        case "CHANGE/ROTATION": {
            return {
                ...state,
                rotationPosition: action.payload
            }
        }
        case "CHANGE/SCALE": {
            return {
                ...state,
                scale: action.payload
            }
        }
        default: {
            throw new Error();
        }
    }
}

export default function ProjectItem( {project, itemIndex} ) {
    const listItem = useRef(null);
    const [state, dispatch] = useReducer(reducer, initialState);
    const easeMethod = 'easeInOutCubic';

    const parallax = (event) => {
        const speed = -5;
        const x = (window.innerWidth - event.pageX * speed)/100;
        const y = (window.innerHeight - event.pageY * speed)/100;

        dispatch({type: 'MOUSE/COORDINATES', payload: {x, y}})
    }

    const handleOpacity = (initialOpacity, newOpacity, duration) => {
        animate({
            fromValue: initialOpacity,
            toValue: newOpacity,
            onUpdate: (newOpacity, callback) => {
                dispatch({type: 'CHANGE/OPACITY', payload: newOpacity});
                callback();
            },
            onComplete: () => {},
            duration: duration,
            easeMethod: easeMethod
        }) 
    }

    const handleRotation = (currentRotation, duration) => {

        // Random between -15 and 15
        const newRotation = Math.random() * 15 * (Math.round(Math.random()) ? 1 : -1);

        animate({
            fromValue: currentRotation,
            toValue: newRotation,
            onUpdate: (newOpacity, callback) => {
                dispatch({ type: 'CHANGE/ROTATION', payload: newOpacity });
                callback();
            },
            onComplete: () => {},
            duration: duration,
            easeMethod: easeMethod
        }) 
    }

    const handleScale = (initialScale, newScale, duration) => {
        animate({
            fromValue: initialScale,
            toValue: newScale,
            onUpdate: (newOpacity, callback) => {
                dispatch({type: 'CHANGE/SCALE', payload: newOpacity});
                callback();
            },
            onComplete: () => {},
            duration: duration,
            easeMethod: easeMethod
        })
    }

    const handleMouseEnter = () => {
        handleScale(0.8, 1, 500)
        handleOpacity(0, 1, 500);
        handleRotation(state.rotationPosition, 500);
        listItem.current.addEventListener('mousemove', parallax);
        dispatch({type: 'MOUSE/ENTER'});
    }

    const handleMouseLeave = () => {
        listItem.current.removeEventListener('mousemove', parallax)
        handleOpacity(1, 0, 800);
        handleScale(1, initialState.scale, 500);
        handleRotation(state.rotationPosition, 500);

        dispatch({ type: "MOUSE/COORDINATES", payload: initialState.parallaxPos });
        dispatch({type: 'MOUSE/LEAVE'});
    }

    return (
        <li className="project-item-container" ref={listItem}>
            <Title 
                title={project.title} 
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
            />
            <Image 
                url={project.url}
                opacity={state.opacity}
                parallaxPos={state.parallaxPos}
                rotationPosition={state.rotationPosition}
                scale={state.scale}
            />

            {/* <div className='info-block'> */}
            <div className={cn("info-block", {'as-active': state.active})}>
                <p className='info-block-header'>
                    <span>
                        #0{itemIndex}
                    </span>
                </p>

                {project.info.map((element) => (
                    <p key={element}>
                        <span>{element}</span>
                    </p>
                ))}
            </div>
        </li>
    );
}