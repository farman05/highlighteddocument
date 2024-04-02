import React, {useState, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import highlightText from '../utils/documentHighlighter';
import 'react-pdf/dist/Page/TextLayer.css';

// Worker from pdfjs-dist/webpack
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const HighlightedDocumentViewer = ({ documentUrl }) => {
    console.log({ documentUrl })
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const [searchText, setSearchText] = useState('');

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const textRenderer = useCallback(
        (textItem) => highlightText(textItem.str, searchText),
        [searchText]
    );

    function onChange(event) {
        setSearchText(event.target.value);
    }

    return (
        <div>
            <div>
                <label htmlFor="search">Search:</label>
                <input type="search" id="search" value={searchText} onChange={onChange} />
            </div>
            <Document file={documentUrl} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber}
                    customTextRenderer={textRenderer}

                />
            </Document>

            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );
};

export default HighlightedDocumentViewer;
