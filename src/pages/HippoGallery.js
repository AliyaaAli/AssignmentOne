"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function HippoGallery() {
    const images = [
        "/hippo1.jpg", 
        "/hippo2.jpg",
        "/hippo3.jpg",
    ];
    const [index, setIndex] = useState(0);

    return (
        <div className="container">
            <h2>Hippo Gallery</h2>
            <Image 
                src={images[index]} 
                alt="Hippo" 
                width={300} 
                height={200} 
            />
            <br />
            <button onClick={() => setIndex((index + 1) % images.length)}>Next</button>
            <br />
            <Link href="/">Back To Home</Link>
        </div>
    );
}

export default HippoGallery;