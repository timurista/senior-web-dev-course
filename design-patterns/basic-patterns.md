## Outline of some patterns for dev work

Evolution of the layering system. In the 90s it became apparent that you need 2 or more distinct layers to handle the client side operations and the server side which interacted with databases. The two notable CLI tools where VB, powerbuilder and delphi. UI widgets aware of SQL.

However, domain logic, business rules and validation then required that another approach be taken. This is how a third layer developed to separate the client interaction layer, domain logic layer and the data source layer.

- What is the common problem with putting more on the client?
you have more you have to maintain and upgrade. And if your client duplicates then you have n+ other places to have to duplicate code.

- What are some of the benefits of transaction script
simple procedural model
works well with a simple data source layer using row data gateway or table data gateway
open transaction then close it, easy for tools to do this behind the scenes.

- WHat is the difference between a Domain Model and a Table Model?
Domain model captures an enttiy like "a Contract" or "a Product" and encapsulates the functions relevant inside these models. A Table modle works with a Record Set, it has only one instance instead of a new instance for each Contract object. It works with record set so might be easier to encapsulate logic there.



