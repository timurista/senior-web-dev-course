## Outline of some patterns for dev work

Evolution of the layering system. In the 90s it became apparent that you need 2 or more distinct layers to handle the client side operations and the server side which interacted with databases. The two notable CLI tools where VB, powerbuilder and delphi. UI widgets aware of SQL.

However, domain logic, business rules and validation then required that another approach be taken. This is how a third layer developed to separate the client interaction layer, domain logic layer and the data source layer.

