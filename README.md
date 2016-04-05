# jquery.keypad
Simple HTML, CSS and jQuery keypad.

# Install
1. jQuery.keypad uses jQuery. Include the latest version in you project to use jQuery.keypad
2. Include both the js and css files.
3. Use the inline method
```jQuery
$('#elementId').keypad();
```
  to initialize the keypad.

# Features
## Form elements
If ```jQuery #elementId ``` is inside a form element, the submitButton will submit the form. Also the form will be submitted when the max-length of the input field is reached.

## Options
It is possible to change some settings during initialization. The initialization method takes a JSON object as the first parameter.
In the example beneath the default values are listed.

```jQuery
var options = {
    'length': 4,
    'password': false,
    'inputName': 'keypad',
    'inputDisabled': false,
    'buttonText': 'Submit'
};

$('#elementId').keypad(options);
```
