// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract ColorBoard {
    mapping(uint => mapping(uint => uint)) boardCells;

    uint256 randomNonce = 0;
    uint256 constant NUMBER_OF_COLORS = 4;

    enum BoardColors {
        White,
        Black,
        Red,
        Blue
    }

    function setBoardColors() public {
        for (uint256 x = 0; x < 7; x++) {
            for (uint256 y = 0; y < 5; y++) {
                randomNonce++;
                uint256 randomValue = uint256(
                    keccak256(
                        abi.encodePacked(
                            block.timestamp,
                            msg.sender,
                            randomNonce
                        )
                    )
                ) % NUMBER_OF_COLORS;
                // Checks for even and odd numbers
                if ((x % 2 == 0) && (y % 2 == 0)) {
                    boardCells[x][y] = randomValue;
                }
                if ((x % 2 == 0) && (y % 2 == 1)) {
                    boardCells[x][y] = randomValue;
                }
                if ((x % 2 == 1) && (y % 2 == 0)) {
                    boardCells[x][y] = randomValue;
                }
                if ((x % 2 == 1) && (y % 2 == 1)) {
                    boardCells[x][y] = randomValue;
                }
            }
        }
    }

    function getBoardColor(uint256 x, uint256 y) public view returns (uint256) {
        require((x < 7) && (y < 5));
        return boardCells[x][y];
    }
}
