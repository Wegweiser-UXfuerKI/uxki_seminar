/* eslint-disable no-undef */
// Packages
import React, { useState, useEffect } from "react";
import axios from "axios";
import DOMPurify from 'dompurify';
import { readingTime } from "reading-time-estimator";
import showdown from "showdown";

// Assets
import coverImg from "./content/article-nutzerverhalten-cover.webp";
import mdText from "./content/informationText.md";
import "./InformationText.css";

/* 
  The info text that precedes the learning element.
  Converts a Markdown file into HTML for easier writing.
*/
function InformationText({ setCurrentView }) {

	// The estimate of how much time the user needs to read the text
	const [readingTimeEstimate, setReadingTimeEstimate] = useState();

	/*
	useEffect(() => {
		// Fetch Markdown content from external file using Axios
		axios
			.get(mdText)
			.then((response) => {
				const markdownText = response.data;

				// Adjustable
				let wordsPerMinute = 220;

				setReadingTimeEstimate(readingTime(markdownText, wordsPerMinute, "de"));

				// Convert Markdown to HTML
				const converter = new showdown.Converter();
				const convertedHtml = converter.makeHtml(markdownText);

        // Sanitize html code to prevent XSS attacks; This way there is no need to use dangeroulsySetInnerHTML 
        const sanitizedHTML = DOMPurify.sanitize(convertedHtml, {USE_PROFILES: {html: true}});
        document.getElementById('text-content').innerHTML = sanitizedHTML;
			})
			.catch((error) => {
				console.error("Error fetching Markdown content:", error);
			});
	}, []);
	*/

	useEffect(() => {
		// Fetch Markdown content from external file using Axios
        axios
            .get(mdText)
            .then((response) => {
                const markdownText = response.data;
                console.log("Markdown Content:", markdownText);

				// Adjustable
                let wordsPerMinute = 220;

                setReadingTimeEstimate(readingTime(markdownText, wordsPerMinute, "de"));

				// Convert Markdown to HTML
                const converter = new showdown.Converter();
                const convertedHtml = converter.makeHtml(markdownText);
                console.log("Converted HTML:", convertedHtml);

				// Sanitize html code to prevent XSS attacks; This way there is no need to use dangeroulsySetInnerHTML 
                const sanitizedHTML = DOMPurify.sanitize(convertedHtml, { USE_PROFILES: { html: true } });
                console.log("Sanitized HTML:", sanitizedHTML);

                document.getElementById('text-content').innerHTML = sanitizedHTML;
            })
            .catch((error) => {
                console.error("Error fetching Markdown content:", error);
            });
    }, []);

	return (
        <div id='text-wrapper' className='flex flex-col items-center h-full overflow-auto'>
            <img id='img-cover' className='mt-5' src={coverImg} alt=''/>
            <span id='reading-estimate' className='flex justify-start'>
                {readingTimeEstimate?.text}
            </span>
            <section id='text-content' style={{ wordBreak: "break-word", hyphens: "auto", language: "de" }}></section>
            <button className='cassette-btn-dark py-3 px-5 text-lightText' onClick={() => setCurrentView("interaktiv")}>
                Zur Lernanwendung
            </button>
        </div>
    );
}

export default InformationText;
