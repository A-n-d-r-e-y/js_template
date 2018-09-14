var controller = (function() {

    return {
        test: function()
        {
            console.log("hello world!!!");
        }
    }

})();


var app = (function(module1){
    
    return {
        run: function()
        {
            module1.test();
        }
    }
})(controller);


app.run();