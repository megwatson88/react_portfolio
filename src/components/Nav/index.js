import React, { useEffects } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";



function Nav() {
    const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    
    } = props;

    useEffects(() => {
        document.title = CapitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);


    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    <span role="img" aria-label="logo"> 🏠 </span> Megan's Work
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                    <a href="#about" onclick={() => setContactSelected(false)}>
                        About Me
                    </a>
                     </li>
                     <li className={`mx-2 ${contactSelected && 'navActive'}`}> 
                     <span onClick={() => setContactSelected(true)}> 
                     Contact
                     </span>
                     </li>
                     {categories.map((category) =>(
                         <li className = {`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'}`} key={category.name}> 
                         <span onClick={() => {
                             setCurrentCategory(category);
                             setContactSelected(false);
                         }}> 
                         {capitalizeFirstLetter(category.name)}
                         </span>
                         </li>
                     ))}
                     
                </ul>
            </nav>
        </header>
    );
}

export default Nav;