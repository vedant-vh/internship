const { generateFormDefinition } = require('../services/formGenerator');

describe('FormGenerator Service', () => {
    test('should generate correct form fields from template fields', () => {
        const fields = [
            { fieldName: 'first_name', label: 'First Name', fieldType: 'text', isTable: false },
            { fieldName: 'dob', label: 'Date of Birth', fieldType: 'date', isTable: false },
            { fieldName: 'comments', label: 'Comments', fieldType: 'textarea', isTable: false },
            { fieldName: 'participants', label: 'Participants', fieldType: 'table', isTable: false },
            { fieldName: 'participant_name', label: 'Name', fieldType: 'text', isTable: true }
        ];

        const result = generateFormDefinition(fields);

        expect(result).toHaveLength(4);
        expect(result[0]).toMatchObject({ name: 'first_name', label: 'First Name', type: 'text' });
        expect(result[1]).toMatchObject({ name: 'dob', label: 'Dob', type: 'date' });
        expect(result[2]).toMatchObject({ name: 'comments', label: 'Comments', type: 'textarea' });
        expect(result[3]).toMatchObject({ 
            name: 'participants', 
            type: 'table',
            columns: [
                { name: 'participant_name', label: 'Participant Name' }
            ]
        });
    });
});
