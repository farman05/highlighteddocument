# Highlighted Text Display Module

This Highlighted Text Display Module is designed to enhance the Prior Authorization (PA) form by implementing a feature that highlights relevant text within the document. The module includes algorithms for text highlighting, integration with a document viewer, and basic highlighting logic.

### Source Code

- **Task 2: Highlighting Logic**
  - The source code for the highlighting logic implementation can be found in the `utils/documentHighlighter.js` file.

    ```javascript
    // HighlightingLogic.js
    const highlightText = (document, highlightText) => {
        const regex = new RegExp(highlightText, 'gi');
        return document.replace(regex, '<mark>$&</mark>');
    };
    export default highlightText;
    ```

- **Task 4: Integration with Document Viewer**
  - The integration with the document viewer can be found in the `components/HighlightedDocumentViewer` file.

    ```javascript
    // HighlightedDocumentViewer.js
    import React from 'react';
    import { Document, Page } from 'react-pdf';
    import highlightText from './HighlightingLogic';

    const HighlightedDocumentViewer = ({ documentUrl }) => {
      // Component implementation...
    };
    export default HighlightedDocumentViewer;
    ```

### README File

- **Running and Testing Instructions**
  1. Clone the repository to your local machine.
  2. Install dependencies using `npm install`.
  3. Start the application using `npm start`.
  4. The page will load with a default pdf and a input box.When you enter test that is in pdf it will be highlighted.

### Documentation
- **Highlighting Algorithm**
  - The highlighting algorithm utilizes a regular expression to search for keywords within the document text. When a match is found, the keyword is wrapped in HTML `<mark>` tags for visual highlighting.

- **Document Viewer Library**
  - The document viewer library used for this module is [react-pdf](https://github.com/wojtekmaj/react-pdf). It provides components for rendering PDF documents in React applications and supports integration with highlighting features.
