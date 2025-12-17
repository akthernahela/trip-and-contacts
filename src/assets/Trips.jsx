const Trips = [
    {
        id: 1,
        destination: 'Parigi',
        startDate: '2025-06-01',
        endDate: '2025-06-10',
        participants: [
            {
                id: 1,
                name: 'Mario Rossi',
                email: 'mario@example.com',
                phone: '+39 333 1234567',
                emergencyContact: 'Laura Rossi - +39 333 7654321'
            },
            {
                id: 2,
                name: 'Anna Verdi',
                email: 'anna@example.com',
                phone: '+39 333 2345678',
                emergencyContact: 'Paolo Verdi - +39 333 8765432'
            }
        ]
    },
    {
        id: 2,
        destination: 'Londra',
        startDate: '2025-07-05',
        endDate: '2025-07-12',
        participants: [
            { id: 3, name: 'Luigi Bianchi' },
            { id: 5, name: 'Matteo Sini' },
            { id: 6, name: 'Amy Santiago' }
        ]
    },
    {
        id: 3,
        destination: 'Roma',
        startDate: '2025-08-15',
        endDate: '2025-08-22',
        participants: [
            { id: 4, name: 'Yasmin Orellana' },
            { id: 5, name: 'Matteo Sini' },
            { id: 6, name: 'Amy Santiago' }
        ]
    }
];

export default Trips;