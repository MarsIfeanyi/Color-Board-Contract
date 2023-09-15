// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Board {
    // color mapping
    mapping(uint => string) indexToColor;

    // 2D array with 35 cells
    uint[7][5] public board;

    constructor() {
        // Initializing the mapping
        indexToColor[1] = "white";
        indexToColor[2] = "black";
        indexToColor[3] = "red";
        indexToColor[4] = "blue";
    }

    function setColor(uint x, uint y, uint colorIndex) public {
        require(x < 7 && y < 5, "Coordinates out of bounds");
        require(
            bytes(indexToColor[colorIndex]).length != 0,
            "Invalid colorIndex"
        );

        board[x][y] = colorIndex;
    }

    function getColor(uint x, uint y) public view returns (string memory) {
        require(x < 7 && y < 5, "Coordinates out of bounds");
        return indexToColor[board[x][y]];
    }
}
