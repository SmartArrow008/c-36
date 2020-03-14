class Form{
    //abstract writing
    constructor(){
        this.input = createInput("name");
        this.button = createButton('play');
        this.greeting = createElement('h3');
    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();  
      }
    display(){
        var title = createElement('h2');
        title.html("Car Racing game");
        title.position(130,0);

        

        this.input.position(330,160);
        this.button.position(250,200);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            //shorthand
            playerCount+= 1;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("hello "+player.name);
            this.greeting.position(430,160);
        })

    }
}