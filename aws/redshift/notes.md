## History
most basic type of storage is key-value store. Key mapped to value, no type constraint on value. 

## Document Store
Document store has type, value, etc. Keys are mapped to documents and they contain nested attributes. Document can have n number of fields.
key as primary key
like row

## Columns
Every row has value for every columns
relational db

datafile, every db headers and values

stored at specific offset

## Relational DB
primary key whih has every attribute in a column. Each row has a value. Every db has header and values. Stored in form of pages. All rows, columns, tables are stored. 

## Structure of actual rows
header [c0, c1, c3]
header [c0, c1, c2]
notice above the the offset depends on col type like 32int or 64int etc

## When can it be inefficient?
when you only need a small number of columns but the table has many cols

lets say we only need c1, but we need 2 pages to grab the other values of the next column. Query has to read all pages in all rows and all columns.

## Column storage
work on cols, all cols treated individually. stored comntigioulsy in sorted order. You get a block of values. Can be complex, need a psuedo layer to do rows. It's complex for query engine, not from end user.

## Partial domain
only need partial set of fields not full set of fields. Columnar is very efficient.

columns make it easy to compress
ratio compression is greater. Reduces disk I/O, disk access is slower than cpu cost. If dataset size is too large, it can be slow.

## Column oriented processing
reading all cols of a row is expensive.
updating / inserting rows also expensive in time

hybrid column stores, read optimized storage and write-optimized OLTP storage. Data written in batch modes for OLTP. Working with many columns at once costs you also.

If you need to work with many columns at once, if you need 900 cols out of 1000 then you should use row or data store.

## Redshift nodes
cluster of leader node 
client connections
    - porting or other tools that use redshift as backend
    - query processor efficient
    - encoding schemes
    - parrallel task processing
    - based on postgressql base engine
        - layer of query processor    


Client applications
contact with Leader Node
drivers jdbc, odbec

compute nodes are slices as clusters. It assigns tasks and collects

## Node Slices
client applications
    sql
cluster
    one or more compute nodes

manages all tasks, requests and response from client and sends back to client app.

leader node assigns code to individual compute nodes.

all execution plan
    leader node figures out which node needs to compute or execute a class.

node slices on given cluster
    you see what capacity power
    so you need a certain number of nodes
        4 compute nodes
    each node has 2 node slice
        and each can work in parrallel

Internal network
    leader and compute nodes

compute nodes can never be reached by ssh on client computer


