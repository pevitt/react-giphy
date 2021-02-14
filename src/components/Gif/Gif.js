import React from 'react';
import './Gif.css';
import { Link } from "wouter";

export default function Gif({ title, id, url })
{
    return (
        <Link to={`/gif/showGif/${id}`} className="Gif">
            <h4>{title}</h4>
            <small>{id}</small>
            <img alt={title} src={url}></img>
        </Link>
    )
}