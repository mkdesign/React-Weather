import React from 'react'

// first : since this component is only rendering something, we only use functional component and not class component
//second : with arrow functions we can replace it like this 
// => {} TO THIS => ()  because we are only returning one item

const Weather = props => (
    <div className="weather__info">
        {
            props.city && props.country && 
            <p className="weather__key">
                Location : <span className="weather__value">{props.city} , {props.country}</span>
            </p>
        }
        {
            props.temprature &&
            <p className="weather__key">Temprature : 
                <span className="weather__value"> {props.temprature}</span>
            </p>
        }
        {
            props.humidity && 
            <p className="weather__key">
                Humidity : <span className="weather__value"> {props.humidity}</span>
            </p>
        }
        {
            props.description && 
            <p className="weather__key">Conditions : 
                <span className="weather__value"> {props.description}</span>
            </p>
        }
        {
            props.error && 
            <p className="weather__key">
                <span className="weather__value"> {props.error}</span>
            </p>
        }
    </div>
)

export default Weather;