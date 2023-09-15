// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

interface IColorBoard {
    function setBoardColors() external;

    function getBoardColor(
        uint256 x,
        uint256 y
    ) external view returns (uint256);
}
