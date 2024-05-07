import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'E-commerce Web App',
        description: "Me and my team built a responsive web-app,which can handle tons of product data. I developed API using Express, Nodejs. And then for client side we made responsive web using Bootstrap and MUI. User can view product details, add them in cart, can place order or orders, then user will receive order placed confirmation and a bill pdf which will contain all the details, and also this all data will get stored in the database. I had connected my data with MongoDb Atlas Cloud and because of it I was able to access data from any machine.",
        tools: ['Express', 'MongoDB', 'Nodejs', 'Reactjs', 'Bootstrap', 'Material UI'],
        role: 'MERN Stack',
        code: '',
        demo: '',
        image: '',
    },
    {
        id: 2,
        name: 'RedditReels',
        description: "RedditReels is a Python-based web application built with Flask, integrating with Reddit and YouTube APIs, along with additional libraries and services to automate the creation and uploading of videos sourced from Reddit memes. It's a comprehensive tool for content creators looking to streamline the video creation process and share engaging content on social media platforms like YouTube.",
        tools: ['Flask', 'Python', 'Reddit API', "Moviepy", "Youtube Data API", "HTML", "CSS", "JavaScript", "AWS", "MongoDb Atlas"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: '',
    },
    {
        id: 3,
        name: 'chatPDF',
        description: `The "chatPDF" project aims to develop a question-answering system for research papers in the AI field, similar to chatPDF. As a full-stack developer on the project, you'll be responsible for building both the backend logic and frontend interface. Leveraging Python and tools like the ChatGPT API, you'll create a system that allows users to input PDF files and ask questions related to the content. The command-line interface (CLI) you develop will provide a user-friendly way for researchers and enthusiasts to extract insights from AI papers effortlessly.`,
        tools: [ "PyMuPDF", "openai", "transformers", "sentencepiece", "transformers --upgrade", "torch --upgrade", "scikit-learn --upgrade", "nltk", "pdfplumber", "tiktoken", "spacy", "pytesseract", "pdf2image", "PyPDF2", "tiktoken", "spacy", "PyMuPDF", "openai", "transformers", "sentencepiece", "torch", "scikit-learn", "nltk", "pdfplumber", "pytesseract", "pdf2image", "PyPDF2"],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: '',
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },