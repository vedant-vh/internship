const Docxtemplater = require('docxtemplater');
const PizZip = require('pizzip');

const xml = `
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
    <w:body>
        <w:tbl>
            <w:tr>
                <w:tc><w:p><w:r><w:t>{{#tests}}{{name}}</w:t></w:r></w:p></w:tc>
                <w:tc><w:p><w:r><w:t>{{age}}{{/tests}}</w:t></w:r></w:p></w:tc>
            </w:tr>
        </w:tbl>
    </w:body>
</w:document>
`;

const zip = new PizZip();
zip.file('word/document.xml', xml);

try {
    const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        delimiters: { start: '{{', end: '}}' }
    });
    doc.render({ tests: [{ name: 'A', age: 1 }, { name: 'B', age: 2 }] });
    const out = doc.getZip().file('word/document.xml').asText();
    console.log("SUCCESS");
    console.log(out);
} catch (e) {
    console.log("FAILURE");
    console.error(e);
}
