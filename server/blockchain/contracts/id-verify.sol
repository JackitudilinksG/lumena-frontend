// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IDVerifier {
    address public owner;
    mapping(bytes32 => bool) public storedHashes;
    event IDHashAdded(bytes32 indexed hash);


    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    // Function to store an ID hash
    function addIDHash(bytes32 hash) external onlyOwner {
        require(!storedHashes[hash], "Hash already exists");
        storedHashes[hash] = true;
        emit IDHashAdded(hash);
    }

    // Function to verify if an ID hash exists
    function verifyID(bytes32 hash) external view returns (bool) {
        return storedHashes[hash];
    }
}
