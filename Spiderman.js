class Spiderman{
    constructor(x, y, width, height){
        var options = {
            isStatic: false,
            'restitution': 0.1, 
            'friction': 0.6, 
            'density': 0.8
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height 

        this.image = loadImage("SpidermanImg/Spiderman1Fini.png"/*, "SpidermanImg/Spiderman2FiniDone.png", "SpidermanImg/Spiderman3Fini.png", "SpidermanImg/Spiderman4Fini.png", "SpidermanImg/Spiderman5FiniDone.png", "SpidermanImg/Spiderman6Fini.png"*/);

        World.add(world, this.body);



    }


    display(){

        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.image, 0, 0, this.width, this.height);

        pop();

    }

    /*walk(){

        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image("Test.gif", 0, 0, this.width, this.height);

        pop();


    }

    wer(){

        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image("Spiderman4Fini.gif", 0, 0, this.width, this.height);

        pop();


    }
*/


}