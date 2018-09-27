const SHA256 = require('crypto-js/sha256');

/**
 * Block Class
 *
 * - represents a block in blockchain
 */
class Block {

	/**
	 * Create a new Block
	 *
	 * @param index Number  number of the block
	 * @param timestamp DateTime
	 * @param data Object
	 * @param previousHash String
	 * */
	constructor(index, timestamp, data, previousHash = '') {
		this.timestamp = timestamp;
		this.data = data;
		this.previousHash = previousHash;
		this.index = index;
		this.hash = this.calculateHash();
	}


	/** Calculate Hash
	 *
	 * @return string
	 */
	calculateHash() {
		return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data).toString());
	}
}

module.exports = Block;