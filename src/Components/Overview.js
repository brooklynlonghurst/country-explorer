import React from 'react'
import { useSelector } from 'react-redux'
import { selectDisplay } from '../redux/slices/displayCountrySlice'

function Overview() {
    const currentDisplay = useSelector(selectDisplay)

    return (
        <div className='stack'>
            <h1>{currentDisplay.name.official}</h1>
            <h2>{currentDisplay.name.common}</h2>

            <table className='overview-table'>
                <tr>
                    <td>Capitol: </td>
                    {currentDisplay.capital.map((e) => (
                        <td>{e}</td>
                    ))}
                </tr>
                <tr>
                    <td>Population: </td>
                    <td>{currentDisplay.population}</td>
                </tr>
                <tr>
                    <td>Continents: </td>
                    {currentDisplay.continents.map((e) => (
                        <td>{e}</td>
                    ))}
                </tr>

            </table>

        </div>
    )
}

export default Overview