!function(){     
    function triangle(x1,y1,x2,y2,x3,y3){
        this.moveTo(x1, y1);
        this.lineTo(x2,y2);
        this.lineTo(x3,y3);
        this.closePath();
        this.strokeStyle="red";
        this.stroke();
    }
    CanvasRenderingContext2D.prototype.triangle =  triangle; 
}()