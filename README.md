# ic-buttonset

An accessible buttonset component that plays w/ Twitter's 2.x Bootstrap styles.

## Getting started

```sh
$ npm install
$ bower install
$ grunt dev

# open a new tab
$ grunt karma:watch
```

## Using the component

Once you've included in your favorite Ember build, drop this in your template:

```handlebars
{{#ic-buttonset value=filter default="2"}}
  {{ic-button label="Open" value="1"}}
  {{ic-button label="Closed" value="2"}}
  {{ic-button label="All" value="3"}}
{{/ic-buttonset}}
```

Buttonsets take two optional parameters:

  * **value**: A property to bind this buttonset's value to.
  * **default**: The default value of the component. Must be a value used by one of the buttonset's buttons.

Buttons also have two parameters:
  * **label**: The text label of this button.
  * **value**: The value assigned to the bound property (see "value" on the buttonset).

## License

Copyright (c) 2013 Instructure, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
