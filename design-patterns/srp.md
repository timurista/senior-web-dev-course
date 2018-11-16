## Single Responsibility Principle

A software entity (class or method) should have only one reason to change.

Interfaces or OOP
create a new class.

If you have 2 reasons to change for a class, then split it into 2 clases.

example book

```js
class book {
    static numPages;
    static authorName;

    public toString() {
        return authorName + " " + numPages;
    }
}
```

Easy to violate SRP, because if we had a single method with lots of features for printing.

setNumberOfPages should not do anything other than set author name. You need to separate things.

if you have `And` in method, good chance the method is violating SRP.

## Interfaces
Usually we make interface BookHandler, it has method to print book and method to save book. Then you implement the interface and just override the method. Use interface to separate methods
It cannot saveAndPrint isntead you want distinct methods.

## Tight coupling of save method
for example what if we wanted to save the book as pdf, xml, etc.

We could make a new class.
```js
class BookSaver {
    public save(Book book) {
        // save as xml
        console.log('saving book')
    }
}
```

```js
class Book implements BookHandler {
    // override
    public void save() {
        // save as xml
        BookSaver.save(this)
    }
}
```

Doing this, the application is more flexible. Behavior and methods are separated.
