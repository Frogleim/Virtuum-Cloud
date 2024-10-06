from ecdsa import SigningKey, SECP256k1, VerifyingKey


# Generate ECDSA Private Key (randomly)
def generate_private_key():
    private_key = SigningKey.generate(curve=SECP256k1)
    return private_key.to_string().hex()  # Return as a hex string


def get_public_key(private_key_hex):
    private_key = SigningKey.from_string(bytes.fromhex(private_key_hex), curve=SECP256k1)
    public_key = private_key.get_verifying_key()
    return public_key.to_string().hex()



if __name__ == '__main__':
    # Generate Private Key
    private_key = generate_private_key()
    print("Private Key:", private_key)
    public_key = get_public_key(private_key)
    print(f"Public Key: {public_key}")
