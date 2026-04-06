const TemplateParser = require('../services/templateParser');
const parser = new TemplateParser('');

const textFields = [
    'department', 'academic_year', 'day', 'date', 'date&day', 'test_coordinator', 
    'HOD', 'year(FE/SE/TE/BE)', 'branch', 'semester', 'test_number', 'exam_incharge', 
    'senior_supervisor', 'project_coordinator', 'seminar_coordinator', 
    'seminar_title', 'name', 'roll_no', 'project_title', 'subject', 'lab_name', 
    'external_guide'
];

const textareaFields = [
    'note', 'color_code', 'topicwise_contents', 'references', 
    'remarks_by_coordinator', 'group_information', 'group_members', 
    'sponsorship_details', 'problem_statement', 'context', 'resources_required'
];

console.log("--- TEXT FIELDS ---");
textFields.forEach(f => {
    console.log(`${f} -> ${parser.guessFieldType(f)}`);
});

console.log("\n--- TEXTAREA FIELDS ---");
textareaFields.forEach(f => {
    console.log(`${f} -> ${parser.guessFieldType(f)}`);
});

console.log("\n--- UNKNOWN FIELD ---");
console.log(`unknown_field -> ${parser.guessFieldType('unknown_field')}`);
