const person = Object.create({

},

    {
        name: {
            value: 'Alex',
            enumerable: true, // позволяет перебирать ключ в циклах
            //writable: true, // позволяет изменять ключ
            configurable: true // позволяет удалять ключ
            // Эти штуки называются property-discriptors
        },



    })





