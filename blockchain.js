const Block = require('block');

class Blockchain {
	constructor() {
		this.chain = [Blockchain.createGenesisBlock()];
	}


	/**
	 * Create the very first block in the chain
	 *
	 * @return
	 */
	static createGenesisBlock() {
		return new Block(0, '01/01/2018', 'Genesis Block', '0');
	}


	/**
	 * Get the latest block in the chain
	 *
	 * @return Block
	 */
	getLatestBlock() {
		return this.chain[this.chain.length - 1];
	}


	/**
	 * Add a new block to the chain
	 *
	 * @param newBlock Block
	 * */
	addBlock(newBlock) {
		newBlock.previousHash = this.getLatestBlock().hash;
		newBlock.hash = newBlock.calculateHash();
		this.chain.push(newBlock);
	}


	/**
	 * Check if chain is valid
	 *
	 * @return boolean
	 * */
	isChainValid() {
		for (let index = 1; index < this.chain.length; index++) {

			const currentBlock = this.chain[index];
			const previousBlock = this.chain[index - 1];

			if (currentBlock.hash !== currentBlock.calculateHash()) {
				return false;
			}

			if (currentBlock.previousHash !== previousBlock.hash) {
				return false;
			}
		}

		return true;
	}
}