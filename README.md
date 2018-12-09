# Diabetes Food Database

Food information for people with diabetes. Visit the website at
https://dfdb.netlify.com/ and search for a food item.

## Contributing

The infrastructure for this app is there, but the database itself is extremely lacking. **Pull requests
are welcome!** Please look at modifying `src/database.json`.

### Running the application locally for development

Clone the repository and install dependencies

```
> git clone https://github.com/travishorn/diabetes-food-database.git
> cd diabetes-food-database
> npm install
```

Start the backend lambda service and serve the client

```
> npm run start:lambda
> npm run start:vue
```

The user interface will be available at http://localhost:8080/

## Built with

- [Axios](https://github.com/axios/axios) - Querying the database from the client.
- [Netlify](https://netlify.com) - Hosting the client and the database API.
- [Pluralize](https://github.com/blakeembrey/pluralize) - Helping normalize search queries
- [Vue](https://vuejs.org) - User interface

## License

MIT License

Copyright (c) 2018 Travis Horn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.