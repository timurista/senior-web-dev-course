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



