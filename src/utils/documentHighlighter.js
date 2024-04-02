const highlightText = (document, highlightText)=>{
    const regex = new RegExp(highlightText, 'gi');
    return document.replace(regex, '<mark>$&</mark>');
}

export default highlightText