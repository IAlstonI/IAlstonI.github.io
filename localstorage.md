# Local Storage :
--COOKIES SideEffects:
--Cookies are included with every HTTP request, thereby slowing down your web application by needlessly transmitting the same data over and over.
--Cookies are included with every HTTP request, thereby sending data unencrypted over the internet (unless your entire web application is served over SSL).
--Cookies are limited to about 4 KB of data — enough to slow down your application (see above), but not enough to be terribly useful.

## INTRODUCING HTML5 STORAGE :
**local storage** :it’s a way for web pages to store named key/value pairs locally.within the client web browser like cookies
this data persists even after you navigate away from the web site, close your browser tab, exit your browser, or what have you
From your JavaScript code, you’ll access HTML5 Storage through the localStorage object on the global window object.

## USING HTML5 STORAGE :
HTML5 Storage is based on named key/value pairs. You store data based on a named key, then you can retrieve that data with the same key. The named key is a string. The data can be any type supported by JavaScript, including strings, Booleans, integers, or floats. However, the data is actually stored as a string. If you are storing and retrieving anything other than strings, you will need to use functions like parseInt() or parseFloat() to coerce your retrieved data into the expected JavaScript datatype.
Calling setItem() with a named key that already exists will silently overwrite the previous value.
Calling getItem() with a non-existent key will return null rather than throw an exception.
Calling removeItem() for removing the value for a given named key.
If you call key() with an index that is not between 0–(length-1), the function will return null.
