# EAML
EduApps Markup Language

No HTML code, just JavaScript!

### Contents
- [How to use](#how-to-use)
- [You chose when show your elements](#you-chose-when-show-your-elements)
- [More TAGS](#more-tags)
- [Help wanted](#help-wanted)

## How to use

#### HTML Core:
```html
<!DOCTYPE html>
<html>
  <head>
    <!--PLACED AT HEAD-->
    <script src="/eaml.js"></script>
  </head>
  <body>
    <script type="text/javascript">
      //imports Button element
      eaml.uses(eaml.tag.Button);
      
      //the main function, the code MAY dont work out of this
      //or another function
      function main() {
        //create the button, but doesn't show
        var button = new eaml.tag.Button("show Hello World");
        //show the button
        button.show();
        button.onClick(function() {
          alert("Hello World");
        });
      }
    </script>
  </body>
</html>
```

## You chose when show your elements
the function `.show()` can do the same as `document.appendChild()`
but is'nt too large and dont need more than 2 little lines

## More TAGS
tags supported:
- eaml
  - tag
    - Button
  - fature
    - window

## Help wanted
I need help to make this possible, just the `Button` element its created...
But i dont have money, just the possible fame.
