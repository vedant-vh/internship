/**
 * Converts ReportField[] from DB into a form definition array for the view.
 * Field types:
 *   - textarea           → long textarea
 *   - date               → date input
 *   - image              → single file upload
 *   - dynamic-text-group → add/remove rows of textareas
 *   - dynamic-image-group→ add/remove rows of file uploads
 */
function generateReportFormDefinition(reportFields) {
    const finalFields = [];
    let currentTable = null;

    for (const field of reportFields) {
        // If we see a 'table' type, it's a root
        if (field.fieldType === 'table') {
            currentTable = {
                name: field.fieldName, // e.g. "topics"
                label: field.label || makeLabel(field.fieldName),
                type: 'table',
                columns: []
            };
            finalFields.push(currentTable);
        } 
        // If we are currently inside a table AND this field's groupName matches the table, it's a column
        else if (currentTable && field.groupName === currentTable.name) {
            currentTable.columns.push({
                name: field.fieldName, 
                label: field.label || makeLabel(field.fieldName),
                type: field.fieldType
            });
        } 
        // Otherwise, it's a standard field or we've exited the table
        else {
            currentTable = null; // Exit table grouping mode
            finalFields.push({
                name:  field.fieldName,
                label: field.label || makeLabel(field.fieldName),
                type:  field.fieldType,
                isGroup: field.isGroup
            });
        }
    }
    return finalFields;
}

function makeLabel(name) {
    return name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

module.exports = { generateReportFormDefinition };
