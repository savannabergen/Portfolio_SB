import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

document.title = 'Savanna\'s Portfolio';

const metaTitle = document.createElement('meta');
metaTitle.setAttribute('property', 'og:title');
metaTitle.content = 'Savanna\'s Portfolio';
document.head.appendChild(metaTitle);

const metaDescription = document.createElement('meta');
metaDescription.setAttribute('property', 'og:description');
metaDescription.content = 'Welcome to my portfolio website!';
document.head.appendChild(metaDescription);

const metaImage = document.createElement('meta');
metaImage.setAttribute('property', 'og:image');
metaImage.content = 'https://www.savannagrace.dev/preview-image.jpg';
document.head.appendChild(metaImage);

const metaUrl = document.createElement('meta');
metaUrl.setAttribute('property', 'og:url');
metaUrl.content = 'https://www.savannagrace.dev';
document.head.appendChild(metaUrl);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);