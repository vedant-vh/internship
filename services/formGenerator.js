function generateLabel(fieldName) {
    let label = fieldName.replace(/_/g, ' ');
    label = label.replace(/(\D)(\d)/g, '$1 $2');
    return label
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}



function generateFormDefinition(templateFields, loopTables = []) {
    const formDefinition = [];
    const normalFields   = [];
    const tableGroups    = []; 
    let   currentGroup   = null;

    templateFields.forEach(field => {
        if (!field.isTable) {
            normalFields.push(field);
        } else if (field.fieldType === 'table') {
            currentGroup = { root: field, columns: [] };
            tableGroups.push(currentGroup);
        } else if (currentGroup) {
            currentGroup.columns.push(field);
        }
    });

    normalFields.forEach(field => {
        formDefinition.push({
            name:  field.fieldName,
            label: field.label || generateLabel(field.fieldName),
            type:  field.fieldType || 'text'
        });
    });

    const allTables = tableGroups.map(({ root, columns }) => ({
        name:    root.fieldName,
        label:   root.label || generateLabel(root.fieldName),
        type:    'table',
        subTables: [],
        columns: columns.map(col => ({
            name:  col.fieldName,
            label: col.label || generateLabel(col.fieldName),
            type:  col.fieldType || 'text'
        }))
    }));

    const topLevelTables = [];
    const itemVarToTableName = {};
    
    loopTables.forEach(t => {
        itemVarToTableName[t.itemVar] = t.name;
    });

    allTables.forEach(table => {
        if (table.name.includes('.')) {
            const prefix = table.name.split('.')[0];
            const parentTableName = itemVarToTableName[prefix];
            if (parentTableName) {
                const parentTable = allTables.find(t => t.name === parentTableName);
                if (parentTable) {
                    parentTable.subTables.push(table);
                    return; 
                }
            }
        }
        topLevelTables.push(table);
    });

    topLevelTables.forEach(t => formDefinition.push(t));

    return formDefinition;
}

module.exports = { generateLabel, generateFormDefinition };
