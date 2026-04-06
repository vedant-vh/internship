const sampleXml = `
<w:tbl>
    <w:tr><w:tc><w:t>Header</w:t></w:tc></w:tr>
    <w:tr><w:tc><w:t>{%tr for test in tests %}</w:t></w:tc></w:tr>
    <w:tr><w:tc><w:t>{{test.date_day}}</w:t></w:tc><w:tc><w:t>{{test.time}}</w:t></w:tc></w:tr>
    <w:tr><w:tc><w:t>{%tr endfor %}</w:t></w:tc></w:tr>
</w:tbl>
`;

function fixTranslation(xmlContent) {
    const loopRegex = /\{%tr\s+for\s+(\w+)\s+in\s+(\w+)\s*%\}/g;
    const endLoopRegex = /\{%tr\s+endfor\s*%\}/;
    let loopMatch;
    
    while ((loopMatch = loopRegex.exec(xmlContent)) !== null) {
        const itemVar = loopMatch[1];
        const listName = loopMatch[2];
        const startTag = loopMatch[0];
        const startIndex = loopMatch.index;
        
        const remainingXml = xmlContent.substring(startIndex + startTag.length);
        const endMatch = endLoopRegex.exec(remainingXml);
        
        if (endMatch) {
            const contentStart = startIndex + startTag.length;
            const absoluteEndIndex = contentStart + endMatch.index;

            // Find containing rows
            let startRowStart = xmlContent.lastIndexOf('<w:tr', startIndex);
            let startRowEnd = xmlContent.indexOf('</w:tr>', startIndex);
            if (startRowEnd !== -1) startRowEnd += 7;

            let endRowStart = xmlContent.lastIndexOf('<w:tr', absoluteEndIndex);
            let endRowEnd = xmlContent.indexOf('</w:tr>', absoluteEndIndex);
            if (endRowEnd !== -1) endRowEnd += 7;

            if (startRowStart !== -1 && startRowEnd !== -1 && endRowStart !== -1 && endRowEnd !== -1 && startRowEnd <= endRowStart) {
                // Find adjacent data rows
                let nextRowStart = xmlContent.indexOf('<w:tr', startRowEnd);
                if (nextRowStart !== -1 && nextRowStart >= endRowStart) {
                    // Correct: it must be between startRowEnd and endRowStart
                }
                
                // Let's find rows between them
                let dataRowsStart = startRowEnd;
                let dataRowsEnd = endRowStart;
                
                let nextRowOfDataStart = xmlContent.indexOf('<w:tr', startRowEnd);
                let lastRowOfDataStart = xmlContent.lastIndexOf('<w:tr', endRowStart);

                if (nextRowOfDataStart !== -1 && nextRowOfDataStart < endRowStart && lastRowOfDataStart !== -1 && lastRowOfDataStart >= startRowEnd) {
                    // Inject start marker into the first <w:t> of the next row
                    let firstTStart = xmlContent.indexOf('<w:t', nextRowOfDataStart);
                    if (firstTStart !== -1) {
                        let firstTClose = xmlContent.indexOf('>', firstTStart) + 1;
                        const newStartOfLoop = `{{#${listName}}}`;
                        xmlContent = xmlContent.substring(0, firstTClose) + newStartOfLoop + xmlContent.substring(firstTClose);
                        
                        // Adjust indices
                        let offset = newStartOfLoop.length;
                        endRowStart += offset;
                        endRowEnd += offset;
                        lastRowOfDataStart += offset;

                        // Inject end marker into the last </w:t> of the prev row
                        let lastTCloseTag = xmlContent.lastIndexOf('</w:t>', endRowStart); // Look before the end control row
                        if (lastTCloseTag !== -1) {
                            const newEndOfLoop = `{{/${listName}}}`;
                            xmlContent = xmlContent.substring(0, lastTCloseTag) + newEndOfLoop + xmlContent.substring(lastTCloseTag);
                            offset += newEndOfLoop.length;
                            endRowStart += newEndOfLoop.length;
                            endRowEnd += newEndOfLoop.length;
                        }

                        // Remove control rows
                        xmlContent = xmlContent.substring(0, endRowStart) + xmlContent.substring(endRowEnd);
                        xmlContent = xmlContent.substring(0, startRowStart) + xmlContent.substring(startRowEnd);
                    }
                }
                loopRegex.lastIndex = 0;
            } else {
                break; 
            }
        }
    }
    return xmlContent;
}

const fixed = fixTranslation(sampleXml);
console.log(fixed);
