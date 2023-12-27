import { useState, useEffect, useRef } from 'react';

export default function CatImages() {
    const [images, setImages] = useState([]);
    const [visibleImages, setVisibleImages] = useState(12);
    const [loading, setLoading] = useState(false);
    const [endOfImages, setEndOfImages] = useState(false);

    const API_KEY = process.env.REACT_APP_CAT_API_KEY;

    const observer = useRef(null);
    const lastImageRef = useRef(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://api.thecatapi.com/v1/images/search?limit=${visibleImages}&api_key=${API_KEY}`
                );
                const data = await response.json();
                setImages((prevImages) => [...prevImages, ...data]);
                setLoading(false);
            } catch (error) {
                alert("Error fetching images:", error);
                setLoading(false);
            }
        };
        fetchImages();
    }, [visibleImages]);

    useEffect(() => {
        if (loading || endOfImages) return; // Do not set up the observer while loading more images or endOfImages is true

        observer.current = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    // Load more images when the last visible image is in view
                    setVisibleImages((prevVisibleImages) => prevVisibleImages + 8);
                }
            },
            { threshold: 1 }
        );

        if (lastImageRef.current) {
            observer.current.observe(lastImageRef.current);
        }

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [loading, endOfImages]);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
                {images.map((image, index) => {
                    if (index === images.length - 1) {
                        // Set ref for the last image
                        return (
                            <div key={index} ref={lastImageRef} className="aspect-w-1 aspect-h-1">
                                <img
                                    src={image.url}
                                    alt={image.id}
                                    loading="lazy"
                                    className="object-cover w-full h-full rounded-md"
                                />
                            </div>
                        );
                    } else {
                        return (
                            <div key={index} className="aspect-w-1 aspect-h-1">
                                <img
                                    src={image.url}
                                    alt={image.id}
                                    className="object-cover w-full h-full rounded-md"
                                />
                            </div>
                        );
                    }
                })}
            </div>
            {loading &&
                <div className="flex justify-center items-center mb-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
                </div>
            }
            
            {endOfImages && <p className="text-center text-gray-500 mb-4">No more images to load</p>}


        </>
    );
}
