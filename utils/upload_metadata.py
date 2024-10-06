import json
import ipfshttpclient

# Connect to your IPFS daemon (Make sure IPFS is running)
client = ipfshttpclient.connect('/dns/localhost/tcp/5001/http')

# Metadata structure
metadata = {
    "public_key": "YOUR_PUBLIC_KEY",  # Replace with the actual public key
    "files": {
        "example_file.txt": "QmExampleCID12345"  # Replace with actual file and CID mappings
    }
}

# Save metadata to a file
with open('metadata.json', 'w') as f:
    json.dump(metadata, f)

# Upload the metadata file to IPFS
try:
    res = client.add('metadata.json')  # Upload the file
    metadata_cid = res['Hash']  # Get the CID of the uploaded metadata
    print(f"Metadata uploaded to IPFS: {metadata_cid}")
except Exception as e:
    print(f"Error uploading metadata to IPFS: {e}")
