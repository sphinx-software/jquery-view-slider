# jquery-view-slider


##Mark up:

```
     <!-- Dependencies -->
     <link rel="stylesheet" href="bower_components/animate.css/animate.min.css">
     <link rel="stylesheet" href="sphinx-jquery-view-slider.css">
     
     <script src="bower_components/jquery/dist/jquery.min.js"></script>
     <script src="sphinx-jquery-view-slider.js"></script>
     <!---->

    <div id="viewContainer">
        <div data-view="foo">
            <h1>Foo</h1>
        </div>
        <div data-view="bar">
            <h1>Bar</h1>
        </div>
    </div>
```


##Usage:

```
var navigator = new ViewNavigator($element);

navigator.transit('foo').then(function () {
    console.log('Transition has finished');
});

```