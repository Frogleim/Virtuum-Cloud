
import { create } from 'ipfs-http-client';
import fs from 'fs';



async function retrieveMetadata(cid, ipfs) {
    try {
        const stream = ipfs.cat(cid);
        let data = '';

        // Read the stream chunk by chunk
        for await (const chunk of stream) {
            data += chunk.toString();
        }

        // Log the raw data to inspect it
        console.log("Raw data retrieved from IPFS:", data);

        // Try to parse the data as JSON
        const metadata = JSON.parse(data);
        console.log("Metadata content retrieved from IPFS:", metadata);
    } catch (error) {
        console.error('Error retrieving metadata:', error);
    }
}

// Example usage
const cid = "Qme9VY2KL2jhZSv88SxFYkRRwEeMN9yWU2ThWUae7t3FMb";  // Your uploaded CID
const ipfs = create({ url: '/ip4/127.0.0.1/tcp/5001' });

retrieveMetadata(cid, ipfs);
