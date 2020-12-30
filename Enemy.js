class thug{

    constructor(x, y, width, height){
        var options = {
            isStatic: false,
            'restitution': 0.1, 
            'friction': 0.6, 
            'density': 0.8
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;

        this.image = loadImage("Enemy.png");

        World.add(world, this.body);


    }


    display(){
           
        if(this.body !== null){

            var angle = this.body.angle;
            var pos = this.body.position;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);

            pop();

        }
        


    }

    destroy(){

            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            image(this.image, this.body.position.x, this.body.position.y, 50, 50);
            pop();
          

    }

}