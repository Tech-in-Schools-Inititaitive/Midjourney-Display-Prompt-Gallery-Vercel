import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { saveAs } from 'file-saver';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Home() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoadedInitial, setHasLoadedInitial] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const fetchImages = useCallback(async () => {
    if (!hasLoadedInitial) {
      setIsLoading(true);
    }
    const response = await axios.get('/api/images');
    setImages(response.data);
    if (!hasLoadedInitial) {
      setIsLoading(false);
      setHasLoadedInitial(true);
    }
  }, [hasLoadedInitial]);

  useEffect(() => {
    fetchImages();
    const interval = setInterval(fetchImages, 10000);
    return () => clearInterval(interval);
  }, [fetchImages]);

  if (isLoading) {
    return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}><CircularProgress /></div>
  }

  return (
    <div className="container">
      <div className="header">
        <div className="logo">🖼️</div>
        <div className="buttons">
          <button className="button" title="Refresh Images" onClick={fetchImages}>Refresh Images</button>
          <a href="#s" title="Open Dashboard">
            <button className="button">Dashboard</button>
          </a>
          <a href="#" title="Generate Images">
            <button className="button">Generate</button>
          </a>
          <a href="#" title="Sign Up">
            <button className="button">Sign Up</button>
          </a>
        </div>
      </div>

      <h1 className="title">Latest Midjourney Image <span>Display on Next.js + Vercel</span></h1>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="image-container" title={image.text}>
            <img src={image.url} className="image" onClick={() => {setIsOpen(true); setPhotoIndex(index);}}/>
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].url}
          nextSrc={images[(photoIndex + 1) % images.length].url}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].url}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          toolbarButtons={[
            <button
              onClick={() => saveAs(images[photoIndex].url, "downloadedImage.jpg")}
            >
              Download
            </button>
          ]}
        />
      )}
     <style jsx>{`
        .container {
          max-width: 100%;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .logo {
          font-size: 48px;
          flex: 0 0 100%;
          text-align: center;
          margin-bottom: 10px;
        }
        .buttons {
          display: flex;
          justify-content: space-evenly;
          gap: 20px;
          flex: 1 0 100%;
          flex-wrap: wrap;
        }
        .button {
          background: linear-gradient(to right, #ff416c, #ff4b2b);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 20px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.2s;
          outline: none;
          flex: 0 1 auto;
          margin-bottom: 10px;
        }
        .button:hover {
          background: linear-gradient(to right, #ff4b2b, #ff416c);
        }
      
        @media (min-width: 768px) {
          .logo {
            flex: 0 0 auto;
            margin-bottom: 0;
          }
          .buttons {
            flex: 1 0 auto;
            justify-content: flex-end;
          }
        }
                  .title {
                    text-align: center;
                    margin-bottom: 20px;
                    font-weight: bold;
                    font-size: 32px;
                    background: linear-gradient(to right, #ff416c, #ff4b2b);
                    background-clip: text;
                    -webkit-background-clip: text;
                    color: transparent;
                  }
                  .gallery {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                  }
                  .image-container {
                    margin: 10px;
                    border-radius: 10px;
                    overflow: hidden;
                  }
                  .image {
                    width: 300px;
                    height: 300px;
                    object-fit: cover;
                    cursor: pointer;
                    transition: transform 0.2s;
                  }
                  .image:hover {
                    transform: scale(1.1);
                  }

        // Add the following styles for the tooltip...
        .image-container {
          position: relative;
        }

        .image-container:hover::after {
          content: attr(title);
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 30%; // Cover half the image
          padding: 10px; // Increase padding
          background-color: #000;
          color: #fff;
          opacity: 0.8;
          font-size: 1.1em; // Increase font size
          text-align: center;
          display: flex;
          align-items: center; // Center the text vertically
          justify-content: center; // Center the text horizontally
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
      `}</style>
    </div>
  );
}
