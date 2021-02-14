import React from 'react'

export default function showGif({ params })
{
    const { id } = params;
    const url = `https://media0.giphy.com/media/${id}/giphy.gif`;

    return (
        <img src={url} />
    )

}