import React, { useEffect, useReducer, useState } from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home, About, Events, Contact, Whoops404, Services, CompanyHistory, Location } from "./Pages";

/*
function Header(props)
{
    console.log(props);
    return (
        <header>
            <h1>{props.name}'s Kitchen</h1>
        </header>
    );
}

function Main(props)
{
    return (
        <section>
            <img src={props.img_link} 
                height={200} alt="Andrew Tran's Cool Pic"/>
            <p>We serve the most {props.adjective} food around!</p>
            <ul style={{textAlign: "left"}}>
                {props.dishes.map((dish) => (
                    <li key={dish.id}>{dish.title}</li>
                ))}
            </ul>
        </section>
    );
}

function Footer(props)
{
    return (
        <footer>
            <p>Copyright: {props.year} </p>
        </footer>
    );
}

const dishes = [
    "Macaroni and Cheese",
    "Salmon",
    "Tofu with Vegetables",
    "Minestrone"
];

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));
//console.log(dishObjects);
*/

/*
function SecretComponent()
{
    return (
        <h1>Secret information for authorized users only</h1>
    );
}

function RegularComponent()
{
    return (
        <h1>Everyone can see this component</h1>
    );
}
*/

function App(props) 
{
    //console.log(props);
    
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}>
                    <Route path="services" element={<Services />}/>
                    <Route path="history" element={<CompanyHistory />}/> 
                    <Route path="location" element={<Location />}/>  
                </Route>
                <Route path="/events" element={<Events />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="*" element={<Whoops404 />} />
            </Routes>
        </div>
    );

    //Introduction to Basic React Testing and Testing Library
    /*
    return (
        <div>
            <h1>Hello React Testing Library!!!</h1>
        </div>
    );
    */

    /*
    //Fetch Data with React Hooks
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        if(!props.login)
        {
            return;
        }
        setLoading(true);
        fetch(`https://api.github.com/users/${props.login}`)
            .then((response) => response.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError);
    }, [props.login]);

    if(loading)
    {
        return (<h1>Loading...</h1>);
    }

    if(error)
    {
        return (<pre>{JSON.stringify(null, error, 2)}</pre>);
    }

    if(!data)
    {
        return null;
    }
    else 
    {
        return (
            <div>
                <h1>{data.login}</h1>
                <p>{data.location}</p>
                <img alt={data.login} src={data.avatar_url}></img>
            </div>
        );
    }
    */

    /*
    if(data)
    {
        return (
            <div>
                <h1>{data.login}</h1>
                <p>{data.location}</p>
                <img alt={data.login} src={data.avatar_url}></img>
            </div>
        );
    }
    else
    {
        return (
            <div>No User Available!</div>
        );
    }
    */

    //Use-Reducer Basics
    /*
    const [checked, toggleButton] = useReducer(
        (checked) => !checked,
        false);
    console.log(checked ? "It is checked" : "It is not checked");

    return (
        <>
            <input type="checkbox" value={checked} onChange={ toggleButton } />
            <p>
                {checked ? "It is checked" : "It is not checked"}
            </p>
        </>
    );
    */

    //Use-State Basics (Maintains current state of certain app-component)
    /*
    const [emotion, setEmotion] = useState("happy");
    console.log(emotion);

    const [secondaryEmotion, setSecondaryEmotion] = useState("tired");
    console.log(secondaryEmotion);

    //Use-Effect Basics (Performs certain conditional functionality if the 'use-state' changes)
    useEffect(() => {
        console.log(`It's ${ emotion } around here!`);
    }, [emotion]);

    useEffect(() => {
        console.log(`It's ${ secondaryEmotion } around here!`);
    }, [secondaryEmotion]);

    return (
        <>
            <h1>The current emotions are { emotion } and { secondaryEmotion }.</h1>
            <button onClick={ () => { setEmotion("happy") }}>
                Make Happy
            </button>
            <button onClick={ () => { setSecondaryEmotion("tired") }}>
                Make Tired
            </button>
            <button onClick={ () => { setEmotion("frustrated") }}>
                Frustrate
            </button>
            <button onClick={ () => { setEmotion("enthusiastic") }}>
                Enthusiastic
            </button>
        </>
    );
    */

    //Conditional Rendering
    /*
    return (
        <>
            {props.authorized ? <SecretComponent /> : <RegularComponent />}
        </>      
    );
    */
    
    /*
    if(props.authorized) {
        return <SecretComponent />
    }
    else {
        return <RegularComponent />
    }
    */
}
/*
<div className="App">
    <Header name="Andrew" />
    <Main adjective="tasty" dishes={dishObjects} img_link="https://andrewtran03.github.io/assets/images/background-about/andrew-tran-profile-picture.PNG"/>
    <Footer year={new Date().getFullYear()} />          
</div>
*/
export default App;
