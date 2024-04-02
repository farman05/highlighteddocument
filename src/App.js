import logo from './logo.svg';
import './App.css';
import HighlightedDocumentViewer from './components/HighlightedDocumentViewer';
import samplePDf from './test.pdf'
function App() {
  return (
    <div className="App">
       <div>
            <h1>Highlighted Document Viewer</h1>
            <HighlightedDocumentViewer documentUrl={samplePDf} />
        </div>
    </div>
  );
}

export default App;
