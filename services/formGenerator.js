function generateLabel(fieldName) {
    let label = fieldName.replace(/_/g, ' ');
    label = label.replace(/(\D)(\d)/g, '$1 $2');
    return label
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

/**
 * Build the form field definition array from the DB TemplateField rows.
 *
 * Grouping strategy (no metadata column required):
 *   Fields arrive ordered by id ASC (insertion order).
 *   Upload always writes:  table-root → its columns → next table-root → its columns → …
 *   So we walk the list: every time we see a 'table' root we start a new group,
 *   and every subsequent isTable column until the next root belongs to that group.
 */
function generateFormDefinition(templateFields) {
    const formDefinition = [];
    const normalFields   = [];
    const tableGroups    = []; // [{ root, columns[] }]
    let   currentGroup   = null;

    templateFields.forEach(field => {
        if (!field.isTable) {
            normalFields.push(field);
        } else if (field.fieldType === 'table') {
            // New table root → start a fresh group
            currentGroup = { root: field, columns: [] };
            tableGroups.push(currentGroup);
        } else if (currentGroup) {
            // Column → belongs to the most-recently-seen table root
            currentGroup.columns.push(field);
        }
    });

    // Regular (non-table) fields first
    normalFields.forEach(field => {
        formDefinition.push({
            name:  field.fieldName,
            label: field.label || generateLabel(field.fieldName),
            type:  field.fieldType || 'text'
        });
    });

    // Tables with correctly-grouped columns
    tableGroups.forEach(({ root, columns }) => {
        formDefinition.push({
            name:    root.fieldName,
            label:   root.label || generateLabel(root.fieldName),
            type:    'table',
            columns: columns.map(col => ({
                name:  col.fieldName,
                label: col.label || generateLabel(col.fieldName),
                type:  col.fieldType || 'text'   // 'srno' passes through here for Auto badge
            }))
        });
    });

    return formDefinition;
}

module.exports = { generateLabel, generateFormDefinition };
