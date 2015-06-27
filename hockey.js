//I took an OOP approach, I dont know if this is the best way for this type of project

function Object(name, total){
    this.name = name;
    this.total = total;
    
//methods

     this.display  = function() {
        if (window.location.pathname == "/Users/joecellino/Desktop/Hockey/PageTwo.html")   document.getElementById('price').value = this.total;
    }
    
    this.save = function(x){
        this.total = x;
        this.display();
        console.log(this.total);
        this.bake();
    }
    
    this.bake = function() {
        document.cookie = "cookie";
        var cookie = document.cookie;
        console.log(cookie);
        
    }

    this.ding = function() {
        var price = document.cookie;
        Object.total = price;
    }
    
}
