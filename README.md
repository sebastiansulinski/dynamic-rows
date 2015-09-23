# Dynamic rows
jQuery plugin, which allows you to dynamically append and remove rows containing the html form elements.

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
container:          // identifier of the wrapping container - default '.dynamicRows'
row:                // identifier of the row wrapping container - default '.row'
addButton:          // identifier associated with the Add button - default '.dynamicAdd'
removeButton:       // identifier associated with the Remove button - default '.dynamicRemove',
warning:            // identifier representing with any potential validation messages wrapper - default '.warning'
clearWarningMethod: // validation message clearing method - default 'remove', you can also choose 'removeClass'
clearWarningClass:  // validation message clearing class - to be removed when clearing messages - default 'show'
nameDivider:        // divider for row attributes i.e. product-0 - default '-'
```

If you'd like to use for instance `data-*` attributes for your validation messages you could use it in the following way:

```
<form class="dynamicWrapper">


    <div class="row">

        <div class="medium-4 columns">
            <label
                for="product-0"
                >
                <span data-validation="product-0">
                    <span data-case="required">Invalid entry</span>
                </span>
                </label>
            <input
                type="text"
                name="product-0"
                id="product-0">
        </div>

        <div class="medium-4 columns">
            <label
                for="product-0"
                >
                <span data-validation="qty-0">
                    <span data-case="required">Invalid entry</span>
                </span>
                </label>
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

and update the plugin initiation with:

```
$('.dynamicWrapper').ssdDynamicRows({
    warningIdentifier: '[data-validation] [data-case]',
    clearWarningMethod: 'removeClass',
    clearWarningClass: 'show'
});
```

With the above, when the validation message is showed it is appended the `show` class, which needs to be removed when generating new row - hence we've specified the `clearWarningClass` as `show` and `clearWarningMethod` as `removeClass` as oppose to `remove`, which would remove the validation message rather than hide it.