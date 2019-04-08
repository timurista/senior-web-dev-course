## Notes

## CAP THEOREM
In a distributed system you can only support 2 of the three CAP (consistency, availability, or partition tolerance)

- consistency -- everything receives most recent write without error
- availability - every request receives a response, without gaurantee that it contains most recent information
- partition tolerance -- system continues to operate despite arbitrary partitioning due to network failures.

CP -- good choice if your business needs require atomic reads and writes

AP -- availability and partition tolerance. Writes take some time to propogate through network as partition is resolved. Good choice for eventual consistency when system needs to work despite errors.

## Weak Consistency
After you complete reading the data, you might not see the immediate update. So you serve the closest approximation or latest version of the data. This is seen in such systems as memcached. Weak consistency is good for VOIP or real time multiplier games, or when you lose connection and don't want to persist the missing transactions.

## Eventual Consistency
After a write, reads will eventually see it (like twitter timeline). Or a chat. This can be within miliseconds. The data is also updated asynchronously and propogates through the network a good choice for DNS and email.

## Strong Consistency
After a write, reads will see it immediately. Data is updated synchronously. Good for systems that need transactions... but can take some time tom propogate.





