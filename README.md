# Dynamic rows
This plugin allows you to dynamically generate and remove rows containing the html form elements.

## Demo

[A simple demo can be seen here](http://jquery-dynamic-row.ssdtutorials.com/)

## Usage example

Html structure:

```
<form class="dynamicWrapper">


    <div class="row">

        <div class="medium-4 columns">
            <label
                for="product-0"
                ></label>
            <input
                type="text"
                name="product-0"
                id="product-0">
        </div>

        <div class="medium-4 columns">
            <label
                for="product-0"
                ></label>
            <input
                type="text"
                name="qty-0"
                id="qty-0">
        </div>

        <div class="medium-2 columns">
            <a href="#"
               class="postfix button dynamicRemove"
                    ><i class="fa fa-minus"></i></a>
        </div>

        <div class="medium-2 columns">
            <a href="#"
               class="postfix button dynamicAdd"
            ><i class="fa fa-plus"></i></a>
        </div>

    </div>


</form>
```

And to call the plugin:

```
$('.dynamicWrapper').ssdDynamicRows();
```

## Optional arguments

```
eventType:          // event used to trigger 'add' button - default 'click'
classContainer:     // class / id of the wrapping container - default 'dynamicRows'
classRow:           // class of the row wrapping container - default 'row'
classAddButton:     // class associated with the Add button - default 'dynamicAdd'
classRemoveButton:  // class associated with the Remove button - default 'dynamicRemove',
classWarning:       // class associated with any potential validation messages (to be removed when generating new row based on the previous one) - default 'warning'
nameDivider:        // divider for row attributes i.e. product-0 - default '-'
```