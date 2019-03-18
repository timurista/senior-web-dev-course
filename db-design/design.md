## Database Design

Normal forms
1) No repeated key variations 
2) All non-keys must be a function of the field ie fact or proprety of modeled entity
3) Don't duplicate facts across tables / entities
4) Dont use lists
5) Dont construct a record from smaller records -->  if you have an employee he sells cars, and you add field company which sells cars you dont want to imply that the employee who sells cars also works for that company. Don't imply facts or relationships by the presence or absence of data.
