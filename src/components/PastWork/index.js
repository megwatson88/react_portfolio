import React from 'react';

function PastWork(props) {
    const currentWork = {
        name: 'Current Work',
        description: 'Currently working on a project for a client.',
    };
    return (
        <section>
            <h2>{capitalizeFirstLetter(currentCategory.name)}</h2>
            <p>{currentCategory.name}</p>
            <div>
            <img src = {photo} alt = "Past work" className= "img-thumbnail mx-1"/>
            </div>
        </section>
    );
}

export default PastWork;