# Chapter 7: “Forms”

## **1.ADDING TEXT:**
There are several types of form controls that you can use to collect information from visitors to your site :
Text input (single-line) : <input type="text" name=" " maxlength = "" size="" > When the type attribute has a value of text, it creates a singleline ,
name When users enterinformation into a form,
the server needs to know which form control each piece of data was entered into 
maxlengthIts value is the number of characters they may enter. 

## 2. Making Choices:
Radio buttons : type="radio" The value attribute indicates the value that is sent to
the server for the selected option, The checked attribute can be used to indicate which value.

## 3. Submitting Forms:
Submit buttons :type="submit" The submit button is used to send a form to the server.
Image buttons :type="image"

## 4. Uploading Files:
File upload : type="file" This type of input creates a box that looks like a text input followed by a browse button.

## 5. Button and hidden
Button :The <button> element was introduced to allow users more control over how their buttons appear, and to allow other elements to appear inside the button.
  
## 6. Labelling Form Controls:** element can be used in two ways. It can:
Wrap around both the text description and the form input.
Be kept separate from the form control and use the for attribute to indicate which form control it is a label for .
  
## 7. Grouping Form Elements**
<fieldset> You can group related form controls together inside the <fieldset> element. This is particularly helpful for longer forms.
The <legend> element can come directly after the opening <fieldset> tag and contains a caption which helps identify the purpose of that group of form controls.

## Chapter 14: “Lists, Tables & Forms”
In addition to the CSS properties covered in other chapters which work with the contents of all elements,
there are several others that are specifically used to control the appearance of lists, tables, and forms.
  
## Chapter 6: “Events”
DIFFERENT EVENT | TYPES —————-|—— UIEVENTS | Occur when a user interacts with the browser’s user interface (UI) rather than the web page EVENT DESCRIPTION.
load | Web page has finished loading. unload | Web page is unloading (usually because a new page was requested). error | 
Browser encounters a JavaScript error or an asset doesn’t exist. resize| Browser window has been resized. scroll | User has scrolled up or down the page.
