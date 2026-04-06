const sampleXml = `
<w:tbl>
    <w:tr>
        <w:tc><w:p><w:r><w:t>Date &amp; Day</w:t></w:r></w:p></w:tc>
    </w:tr>
    <w:tr>
        <w:tc><w:p><w:r><w:t>{%tr for test in tests %}</w:t></w:r></w:p></w:tc>
    </w:tr>
    <w:tr>
        <w:tc><w:p><w:r><w:t>{{test.date_day}}</w:t></w:r></w:p></w:tc>
    </w:tr>
    <w:tr>
        <w:tc><w:p><w:r><w:t>{%tr endfor %}</w:t></w:r></w:p></w:tc>
    </w:tr>
</w:tbl>
`;

function fixTranslation(xmlContent) {
    const loopRegex = /\{%tr\s+for\s+(\w+)\s+in\s+(\w+)\s*%\}/g;
    const endLoopRegex = /\{%tr\s+endfor\s*%\}/;
    let loopMatch;
    
    let resultXml = xmlContent;

    while ((loopMatch = loopRegex.exec(resultXml)) !== null) {
        const itemVar = loopMatch[1];
        const listName = loopMatch[2];
        const startTag = loopMatch[0];
        const startIndex = loopMatch.index;
        
        // Find end loop
        const remainingXml = resultXml.substring(startIndex + startTag.length);
        const endMatch = endLoopRegex.exec(remainingXml);
        
        if (endMatch) {
            const endIndexInRange = endMatch.index;
            const absoluteEndIndex = startIndex + startTag.length + endIndexInRange;
            const endTag = endMatch[0];

            // 1. Handle START tag: find containing <w:tr>...</w:tr>
            let startRowStart = resultXml.lastIndexOf('<w:tr', startIndex);
            let startRowEnd = resultXml.indexOf('</w:tr>', startIndex) + 7;
            
            // 2. Handle END tag: find containing <w:tr>...</w:tr>
            let endRowStart = resultXml.lastIndexOf('<w:tr', absoluteEndIndex);
            let endRowEnd = resultXml.indexOf('</w:tr>', absoluteEndIndex) + 7;

            if (startRowStart !== -1 && startRowEnd !== -1 && endRowStart !== -1 && endRowEnd !== -1) {
                // We found the rows!
                const newStartOfLoop = `{{#${listName}}}`;
                const newEndOfLoop = `{{/${listName}}}`;

                // Extract the content *between* the control rows
                let loopContent = resultXml.substring(startRowEnd, endRowStart);
                
                // Replace item.field with field inside the content
                const itemPattern = new RegExp(`\\{\\{\\s*${itemVar}\\.`, 'g');
                loopContent = loopContent.replace(itemPattern, '{{');

                const before = resultXml.substring(0, startRowStart);
                const after = resultXml.substring(endRowEnd);

                resultXml = before + newStartOfLoop + loopContent + newEndOfLoop + after;
                
                // Reset regex because we modified the string
                loopRegex.lastIndex = 0; 
            } else {
                // Fallback to original logic if rows aren't found (though they should be in a table)
                // [Original logic omitted for simplicity in test]
            }
        }
    }
    return resultXml;
}

const fixed = fixTranslation(sampleXml);
console.log("--- ORIGINAL XML ---");
console.log(sampleXml);
console.log("--- FIXED XML ---");
console.log(fixed);

if (fixed.includes('<w:tr>') && !fixed.includes('{%tr')) {
    const rowCount = (fixed.match(/<w:tr/g) || []).length;
    console.log(`Remaining rows: ${rowCount}`);
    if (rowCount === 2) {
        console.log("SUCCESS: Control rows removed correctly.");
    } else {
        console.log(`FAILURE: Expected 2 rows (header + data), found ${rowCount}.`);
    }
}
