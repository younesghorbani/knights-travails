class Cell {
    constructor(position, path) {
        this.position = position;
        this.path = path;
    }
}

const isOnBoard = (row, column, numberOfRows, numberOfColumns) => {
    if (
        row >= 0 && row < numberOfRows &&
        column >= 0 && column < numberOfColumns
    ) return true;

    return false;
};

const knightMoves = (source, destination, numberOfRows, numberOfColumns) => {
    const directionX = [ -2, -1, 1, 2, -2, -1, 1, 2 ];
    const directionY = [ -1, -2, -2, -1, 1, 2, 2, 1 ];

    const visitedCells = [];

    for (let i = 0; i < numberOfRows; i++) {
        visitedCells[i] = new Array(numberOfColumns).fill(false);
    }

    const cellsQueue = [new Cell(source, [source])];

    let moves = null;

    while (cellsQueue.length > 0) {
        const { position, path } = cellsQueue.shift();
        const currentRow = position[0];
        const currentColumn = position[1];
        visitedCells[currentRow][currentColumn] = true;

        if (
            currentRow === destination[0] &&
            currentColumn === destination[1]
        ) {
            moves = [...path];
            break;
        }

        for (let i = 0; i < 8; i++) {
            const newRow = currentRow + directionX[i];
            const newColumn = currentColumn + directionY[i];

            if (
                isOnBoard(newRow, newColumn, numberOfRows, numberOfColumns) &&
                !visitedCells[newRow][newColumn]
            ) {
                const newPosition = [newRow, newColumn];
                cellsQueue.push(
                    new Cell(newPosition, [...path, newPosition])
                );
            }
        }
    }

    return moves;
};

const displayKnightMoves = (numberOfRows = 8, numberOfColumns = 8) => {
    const source = [
        Math.floor(Math.random() * numberOfRows),
        Math.floor(Math.random() * numberOfColumns)
    ];
    
    const destination = [
        Math.floor(Math.random() * numberOfRows),
        Math.floor(Math.random() * numberOfColumns)
    ];

    console.log(`Source: [${source}]`);
    console.log(`Destination: [${destination}]\n`);
    
    const moves = knightMoves(source, destination, numberOfRows, numberOfColumns);

    if (moves) {
        console.log(`You made it in ${moves.length} moves! Here's your path:`);
        moves.forEach(move => console.log(move));
    } else {
        console.log('There is no path from source to destination.');
    }
};

displayKnightMoves();