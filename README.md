# Diabetes Food Database

Food information for people with diabetes. Visit the website at
https://dfdb.netlify.com/ and search for a food item.

## Contributing

The infrastructure for this app is there, but the database itself is extremely
lacking. **Pull requests are welcome!** Please look at modifying
`src/assets/database.json`.

When adding a new food, please include the following properties:

- **name** - The name of the food. Will be used for searching. Must be unique,
  singular (smoothie instead smoothies) and all lowercase (carrot instead of
  Carrot).
- **displayName** - A prettier name of the food. If the name is sugar, the
  displayName might be Sugar (with capitalization).
- **alternateNames** - An array of names people might also use when searching
  for this food. Should also be singular and all lowercase.
- **level** - A number from 1 to 5.
  - 1 = Avoid - Diabetic people should stay away from this food.
  - 2 = Caution - This food can be eaten in moderation or under certain
    conditions.
  - 3 = Okay - Neutral. No significant positive or negative health effects.
  - 4 = Good - Food that is good for a diabetic person to eat.
  - 5 = Great - Foods at this level are among the healthiest options.
- **explanation** - A reason why this food is or is not healthy.
- **suggestions** - Actions to take regarding this food. Alternatives to this
  food if it is unhealthy.

## Built with

- [Freepik - Flaticon](https://www.flaticon.com) - Blood drop icon
- [Fuse](http://fusejs.io/) - Fuzzy text search
- [Hero Icons](https://heroicons.com/) - Search icon
- [Netlify](https://netlify.com) - Hosting the client and the database API
- [Pluralize](https://github.com/blakeembrey/pluralize) - Helping normalize
  search queries
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vue, Vue Router, and Pinia](https://vuejs.org) - User interface

## License

MIT License

Copyright (c) 2022 Travis Horn

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
