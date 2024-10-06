# Virtuum-Cloud

**Virtuum Cloud** is a decentralized, privacy-first cloud storage solution built on top of IPFS. The goal is to create a system where users are the sole owners of their data, with no third party, not even Virtuum Cloud, having control or access. Inspired by the structure of Bitcoin, Virtuum Cloud leverages encryption and decentralized technologies to ensure true data ownership and censorship resistance.

## Key Features
- **Decentralized Storage**: Data is stored across a decentralized network using [IPFS](https://ipfs.io/), ensuring that no single entity controls user data.
- **Private Key Encryption**: Users generate their own private keys (ECDSA) which are used to encrypt and decrypt their data. Only the key holder has access.
- **File Retrieval**: Files can only be retrieved by users who possess the private key, reinforcing data security and privacy.
- **Free to Use**: Virtuum Cloud is designed to be a completely free service, allowing anyone to store and retrieve data without centralized control.

## Tech Stack
- **IPFS**: For decentralized file storage.
- **ECDSA (Elliptic Curve Digital Signature Algorithm)**: For secure encryption and decryption.
- **React.js**: Frontend framework to build the user interface.
- **Node.js**: Backend (optional for certain features like authentication).
- **Infura or Pinata (Optional)**: For IPFS pinning and persistence in the demo.

## How It Works
1. Users upload their files to Virtuum Cloud via the user interface.
2. Files are stored on the IPFS network, and a **Content Identifier (CID)** is generated.
3. A **private key** is created for the user using ECDSA, which is used to encrypt the CID.
4. The private key is stored locally by the user, and the encrypted CID is displayed to them.
5. To retrieve the file, the user inputs their private key, which decrypts the CID, and the file is fetched from IPFS.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [IPFS Daemon](https://docs.ipfs.io/install/)
- [React.js](https://reactjs.org/) (or your preferred frontend framework)
- [ipfs-http-client](https://www.npmjs.com/package/ipfs-http-client)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/virtuum-cloud.git
    cd virtuum-cloud
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Start IPFS**:
   Make sure you have IPFS installed and running locally. You can start it by running:
    ```bash
    ipfs daemon
    ```

4. **Run the Demo**:
    ```bash
    npm start
    ```

    This will start the development server and launch the application on `http://localhost:3000`.

### Using the Demo

#### File Upload
1. **Upload a File**: 
    - Select a file from your local system to upload to IPFS.
    - The file will be stored on the IPFS network and a CID (Content Identifier) will be generated.
  
2. **Generate Private Key**: 
    - The system generates an ECDSA private key that encrypts the CID.
    - You must **save your private key**—it is the only way to retrieve your file!

#### File Retrieval
1. **Enter Private Key**: 
    - To retrieve the file, you need to enter the private key that was generated during the upload process.
    - The private key decrypts the CID and allows the system to fetch the file from IPFS.

### Pinning Files (Optional)
To ensure that your files persist on the IPFS network for the demo, you can use a pinning service like [Pinata](https://pinata.cloud/) or [Infura](https://infura.io/). Pinning helps keep your file available even when nodes that store it go offline.


## Project Roadmap
- [x] File upload and retrieval using IPFS.
- [x] ECDSA-based private key generation and encryption.
- [ ] Implement data redundancy to ensure high availability of files.
- [ ] Build a distributed community for pinning files.
- [ ] Advanced user-friendly encryption key management.
- [ ] Add blockchain integration for file ownership and tracking (optional).

## Contributing
Contributions are welcome! Please submit a pull request or open an issue if you'd like to contribute to Virtuum Cloud.


---
