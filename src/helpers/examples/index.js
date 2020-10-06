const examples = [
    {
        description: 'Lista 4; #1 - 1.1',
        maximize: "10x + 12y",
        constraints: "x + y <= 100\n2x + 3y <= 270\nx >= 0 \ny >= 0"
    },
    {
        description: 'Lista 4; #1 - 1.2',
        maximize: "2x + 3y + 4z",
        constraints: "x + y + z <= 100\n2x + y <= 210\nx <= 80\nx >= 0\ny >= 0\nz >= 0"
    },
    {
        description: 'Lista 4; #1 - 1.3',
        maximize: "0,2x + 2y + 4z",
        constraints: "x + y <= 20\n3x + z <= 50\nx + y - z <= 15\nx >= 0\ny >= 0\nz >= 0"
    },
    {
        description: 'Lista 4; #1 - 1.5',
        maximize: "2x + 4z",
        constraints: "x + 2y + z <= 8000\n2x <= 6000\ny + z <= 620\nx >= 0\ny >= 0\nz >= 0"
    },
    {
        description: 'Lista 4; #1 - 1.6',
        maximize: "2x + 4y + 6z",
        constraints: "x + y + z <= 100\n2x - y + 5z <= 50\nx + z <= 200\nx >= 0\ny >= 0\nz >= 0"
    },

    {
        description: 'Lista 4; #2 - 2.1',
        maximize: "5x + 2y",
        constraints: "2x + y <= 6\n6x + 5y <= 60\nx >= 0 \ny >= 0"
    },
    {
        description: 'Lista 4; #2 - 2.2',
        maximize: "100x + 150y",
        constraints: "2x + 3y <= 120\nx <= 40\ny <= 30\nx >= 0\ny >= 0"
    },
    {
        description: 'Lista 4; #2 - 2.3',
        maximize: "10x + 30y + 4000",
        constraints: "x + y <= 600\nx >= 100\ny <= 200\nx >= 0\ny >= 0"
    },

]

export default examples