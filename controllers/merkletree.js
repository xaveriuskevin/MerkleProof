const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
const { ethers } = require("ethers");

const leaves = [
  "0x818833a439DA3a34253304993A78052644237855",
  "0xe3f67c7ad8Af0dFFe5C17b397cAf94582306ec4B",
  "0x409d3543754C0629dCEA5A1DAA7d8edD72AaDdfE",
].map((x) => keccak256(ethers.solidityPacked(["address"], [x])));

const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
const root = tree.getRoot().toString("hex");

//Part Of Whitelist
const encodedSori = keccak256(
  ethers.solidityPacked(
    ["address"],
    ["0xe3f67c7ad8Af0dFFe5C17b397cAf94582306ec4B"]
  )
);

const encodedTori = keccak256(
  ethers.solidityPacked(
    ["address"],
    ["0x818833a439DA3a34253304993A78052644237855"]
  )
);

const encodedMeri = keccak256(
  ethers.solidityPacked(
    ["address"],
    ["0x409d3543754C0629dCEA5A1DAA7d8edD72AaDdfE"]
  )
);

const proof = tree.getHexProof(encodedMeri);
const verify = tree.verify(proof, encodedMeri, root);
console.log(verify);
console.log(root + " Root");
console.log(proof + " Proof");

const merkletree = async (req, res) => {
  try {
    const { fullName, username, password, phoneNumber } = req.body;

    const userId = crypto.randomBytes(16).toString("hex");

    const serverClient = connect(api_key, api_secret, app_id);

    const hashedPassword = await bcrypt.hash(password, 10);

    const token = serverClient.createUserToken(userId);

    res
      .status(200)
      .json({ token, fullName, username, userId, hashedPassword, phoneNumber });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error });
  }
};

module.exports = { merkletree };
