# Dynamic rows
jQuery plugin, which allows you to dynamically append and remove rows containing the html form elements.

## Demo

[A simple demo can be seen here](http://jquery-dynamic-row.ssdtutorials.com/)

## Usage example

Html structure (illustrative purposes only):

```
<form>

    <div data-ssd-dynamic-wrapper>

        <div class="row" data-ssd-dynamic-row>

            <div class="medium-4 columns" data-ssd-dynamic-field>
                <label for="product-0">
                    <span data-validation="product-0">
                        <span data-case="required">Invalid entry</span>
                    </span>
                </label>
                <input
                    type="text"
                    name="product-0"
                    id="product-0"
                    >
            </div>

            <div class="medium-4 columns" data-ssd-dynamic-field>
                <label for="qty-0">
                    <span data-validation="qty-0">
                        <span data-case="required">Invalid entry</span>
                    </span>
                </label>
                <input
                    type="text"
                    name="qty-0"
                    id="qty-0"
                    >
            </div>

            <div class="medium-2 columns">
                <a
                    href="#"
                    class="postfix button expanded"
                    data-ssd-dynamic-remove
                    ><i class="fa fa-minus"></i></a>
            </div>

            <div class="medium-2 columns">
                <a
                    href="#"
                    class="postfix button expanded dn"
                    data-ssd-dynamic-add
                    ><i class="fa fa-plus"></i></a>
            </div>

        </div>

    </div>


    <input
        type="submit"
        class="button"
        value="SUBMIT"
        >

</form>
```

And to call the plugin:

```
$('[data-ssd-dynamic-wrapper]').ssdDynamicRows({

    clear_warning: function(row) {

        row.find('[data-validation] [data-case]').removeClass('show');
        row.find(':input').removeClass('warning');

    },

    other_elements: {
        '[data-validation]' : 'data-validation'
    }

});
```

## Optional arguments

```
event_type:         // event type used with the `add` and `remove` buttons - default `click`

hide_css_class:     // css class name that has its `display` property set to `none`.
                    // Used for hiding buttons - default `dn`

row:                // row container identifier - default `[data-ssd-dynamic-row]`

button_add:         // add button identifier - default `[data-ssd-dynamic-add]`

button_remove:      // remove button identifier - default `[data-ssd-dynamic-remove]`,

other_elements:     // object containing properties representing other elements i.e. `[data-validation]`
                    // and their associated values representing attribute of these elements
                    // that needs its value incremented with each new row i.e. `data-validation`
                    // `data-validation="product-0"`

divider:            // divider for the attributes i.e. `product-0` - default `-`

clear_warning:      // method to be executed on the newly created row
                    // example above shows how it can be used
                    // to clear all validation messages / styling from the row
                    // that has been used to clone / generate the new one
```