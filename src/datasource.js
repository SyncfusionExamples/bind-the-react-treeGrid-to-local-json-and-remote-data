"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.summaryData = [
    {
        ID: '1',
        Name: 'Order 1',
        units: '1395',
        unitPrice: '47.00',
        price: 65565,
        category: 'Seafoods',
        subtask: [
            { ID: '1.1', Name: 'Mackerel', category: 'Frozen seafood', units: '235', unitPrice: '12.26', price: 2881.1 },
            { ID: '1.2', Name: 'Yellowfin Tuna', category: 'Frozen seafood', units: '324', unitPrice: '18.45', price: 5977.8 },
            { ID: '1.3', Name: 'Herrings', category: 'Frozen seafood', units: '488', unitPrice: '11.45', price: 5587.6 },
            { ID: '1.4', Name: 'Preserved Olives', category: 'Edible', units: '125', unitPrice: '19.56', price: 2445 },
            { ID: '1.5', Name: 'Sweet corn Frozen', category: 'Edible', units: '223', unitPrice: '12.34', price: 2751.82 }
        ]
    },
    {
        ID: '2',
        Name: 'Order 2',
        units: '1944',
        unitPrice: '58.45',
        price: 1245.73,
        category: 'Products',
        subtask: [
            { ID: '2.1', Name: 'Tilapias', category: 'Frozen seafood', units: '278', unitPrice: '15.45', price: 4295.1 },
            { ID: '2.2', Name: 'White Shrimp', category: 'Frozen seafood', units: '560', unitPrice: '17.66', price: 9889.6 },
            { ID: '2.3', Name: 'Fresh Cheese', category: 'Dairy', units: '323', unitPrice: '12.35', price: 3989 },
            { ID: '2.4', Name: 'Blue Veined Cheese', category: 'Dairy', units: '370', unitPrice: '15.77', price: 5834.9 },
            { ID: '2.5', Name: 'Butter', category: 'Dairy', units: '413', unitPrice: '19.45', price: 8032.85 }
        ]
    },
    {
        ID: '3',
        Name: 'Order 3',
        units: '1120',
        unitPrice: '33.45',
        price: 37464,
        category: 'Crystals',
        subtask: [
            { ID: '3.1', Name: 'Lead glassware', category: 'Solid crystals', units: '542', unitPrice: '19.56', price: 10601.52 },
            { ID: '3.2', Name: 'Pharmaceutical Glassware', category: 'Solid crystals', units: '324', unitPrice: '11.36', price: 3680.64 },
            { ID: '3.3', Name: 'Glass beads', category: 'Solid crystals', units: '254', unitPrice: '16.11', price: 4091.94 }
        ]
    },
]

exports.projectData = [
    { 'TaskID': 1, 'TaskName': 'Parent Task 1', 'StartDate': new Date('02/23/2017'), 'Duration': 3, 'Priority': 'Normal',
        'EndDate': new Date('02/27/2017'), 'Progress': '40' },
    { 'TaskID': 2, 'TaskName': 'Child Task 1', 'StartDate': new Date('02/23/2017'), 'Duration': 4, 'Priority': 'Low',
        'EndDate': new Date('02/27/2017'), 'Progress': '40', 'ParentItem': 1 },
    { 'TaskID': 3, 'TaskName': 'Child Task 2', 'StartDate': new Date('02/23/2017'), 'Duration': 2, 'Priority': 'Normal',
        'EndDate': new Date('02/27/2017'), 'Progress': '40', 'ParentItem': 1 },
    { 'TaskID': 4, 'TaskName': 'Child Task 3', 'StartDate': new Date('02/23/2017'), 'Duration': 2, 'Priority': 'Low',
        'EndDate': new Date('02/27/2017'), 'Progress': '40', 'ParentItem': 1 },
    { 'TaskID': 5, 'TaskName': 'Parent Task 2', 'StartDate': new Date('03/14/2017'), 'Duration': 6, 'Priority': 'Normal',
        'EndDate': new Date('03/18/2017'), 'Progress': '40' },
    { 'TaskID': 6, 'TaskName': 'Child Task 1', 'StartDate': new Date('03/02/2017'), 'Duration': 11, 'Priority': 'High',
        'EndDate': new Date('03/06/2017'), 'Progress': '40', 'ParentItem': 5 },
    { 'TaskID': 7, 'TaskName': 'Child Task 2', 'StartDate': new Date('03/02/2017'), 'Duration': 7, 'Priority': 'Critical',
        'EndDate': new Date('03/06/2017'), 'Progress': '40', 'ParentItem': 5 },
    { 'TaskID': 8, 'TaskName': 'Child Task 3', 'StartDate': new Date('03/02/2017'), 'Duration': 10, 'Priority': 'Breaker',
        'EndDate': new Date('03/06/2017'), 'Progress': '40', 'ParentItem': 5 },
    { 'TaskID': 9, 'TaskName': 'Child Task 4', 'StartDate': new Date('03/02/2017'), 'Duration': 15, 'Priority': 'High',
        'EndDate': new Date('03/06/2017'), 'Progress': '40', 'ParentItem': 5 },
    { 'TaskID': 10, 'TaskName': 'Parent Task 3', 'StartDate': new Date('03/09/2017'), 'Duration': 17, 'Priority': 'Breaker',
        'EndDate': new Date('03/13/2017'), 'Progress': '40' },
    { 'TaskID': 11, 'TaskName': 'Child Task 1', 'StartDate': new Date('03/9/2017'), 'Duration': 0, 'Priority': 'Low',
        'EndDate': new Date('03/13/2017'), 'Progress': '40', 'ParentItem': 10 },
    { 'TaskID': 12, 'TaskName': 'Child Task 2', 'StartDate': new Date('03/9/2017'), 'Duration': 10, 'Priority': 'Breaker',
        'EndDate': new Date('03/13/2017'), 'Progress': '40', 'ParentItem': 10 },
    { 'TaskID': 13, 'TaskName': 'Child Task 3', 'StartDate': new Date('03/9/2017'), 'Duration': 11, 'Priority': 'Normal',
        'EndDate': new Date('03/13/2017'), 'Progress': '40', 'ParentItem': 10 },
    { 'TaskID': 14, 'TaskName': 'Child Task 4', 'StartDate': new Date('03/9/2017'), 'Duration': 1, 'Priority': 'Normal',
        'EndDate': new Date('03/13/2017'), 'Progress': '40', 'ParentItem': 10 },
    { 'TaskID': 15, 'TaskName': 'Child Task 5', 'StartDate': new Date('03/9/2017'), 'Duration': 14, 'Priority': 'Critical',
        'EndDate': new Date('03/13/2017'), 'Progress': '40', 'ParentItem': 10 }
];