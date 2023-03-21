import React from 'react';

export default function Home({ companies }) {
    return (
        <div className='text-blue-500 font-bold text-2xl'>
            Hello React

            <ul>
                {companies.map(company => <li>{company}</li>)}
            </ul>
        </div>
    )
}