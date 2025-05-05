// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IDVerifier {
    mapping(bytes32 => bool) public storedHashes;

    // Function to store an ID hash
    function addIDHash(bytes32 hash) external {
        storedHashes[hash] = true;
    }

    // Function to verify if an ID hash exists
    function verifyID(bytes32 hash) external view returns (bool) {
        return storedHashes[hash];
    }
}
