import { create } from 'ipfs-http-client';
import fs from 'fs';

// Connect to your IPFS daemon
const ipfs = create({ url: 'http://localhost:5001' });

// Function to upload metadata to IPFS
async function uploadMetadata(publicKey, fileMapping) {
    // Create metadata object
    const metadata = {
        public_key: publicKey,
        files: fileMapping
    };

    // Convert metadata object to JSON string
    const metadataJson = JSON.stringify(metadata);

    // Save the metadata to a file
    fs.writeFileSync('metadata.json', metadataJson);

    // Upload the metadata file to IPFS
    try {
        const { cid } = await ipfs.add(fs.readFileSync('metadata.json'));
        console.log(`Metadata uploaded to IPFS: ${cid.toString()}`);
        return cid.toString();  // Return the CID for future reference
    } catch (error) {
        console.error('Error uploading metadata to IPFS:', error);
    }
}

// Example usage
const publicKey = "d5fc3c87932137d526027a0db69f3f1997690d6c3c0de36958050857e571de436d624192900a54641b8820731188d3f025f5756ac0d82a549c4179df58f45a90";  // Replace with your actual public key
const fileMapping = {
    "Bilboard.pdf": "Qmb8pWZuCmfrckLVKYWBXpg5oaMso6zJGMWpwYAvrpc8xs"  // Replace with actual file and CID mappings
};

// Call the uploadMetadata function
uploadMetadata(publicKey, fileMapping);
