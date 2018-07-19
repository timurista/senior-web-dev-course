# Complex subjects

## Symmetrical Encryption

jumble text, a way to have secrets.
Key is same between me and my friend.
"Hello" ==> "EI320" ==> "Hello"
Anyone with key can decrypt message

### Key exchange algorithm
  no bad actors intercepting it
  key is never transmitted
  instead they share public data
    to calculate the key




## Asymmetrical Encryption
unlike symmetricl encryption, 2 diff keys for encryption and decryption. These 2 keys

public

and

private keys

public-private key pair

message encrypted by public key can only be decrypted by same machines private key

private key is never removed, it is always there.

SSH only uses this during key exchange algorithm

before initiate a secure connection both parties generate this and share respective keys.

## Diffie Hellman Key Exchange

each party to combine private with the public data to create a unique key.

## Resources

- https://www.youtube.com/watch?v=NmM9HA2MQGI
- https://www.youtube.com/watch?v=Yjrfm_oRO0w
- https://www.youtube.com/watch?v=vsXMMT2CqqE&t=
- https://www.youtube.com/watch?v=NF1pwjL9-DE



## Hashing

Client and Server use Assymetric encryption because it is more secure than ssh. They then generate a key
and that key can be used for regular ssh (symetric encryption) since it is fast.

Server generates a challenge so client can answer the challenge.

But a middle man can just sit in the middle are read that information.

Bcrypt never meant to decrypt anything. Just a unique value of a fixed length for any input. Hashes are useful because they let us verify integrity of messages. And we can be confident that the message cannot change.


mapo generated from message contents, packet sequence number, etc. combined into hash function will generate string. 
They use same symmetric key, and because message through ssh they run through hash function again and make sure it matches clients hash.
