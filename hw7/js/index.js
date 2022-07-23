function Figure(x, y, a, color) {
    this._x = x;
    this._y = y;
    this._a = a;
    this._color = color;
}

function Line(x, y, a, b, color) {
    Figure.call(this, x, y, a, color);
    this._b = b;
    this.draw = function(ctx) {
        ctx.beginPath();
        ctx.moveTo(this._x, this._y);
        ctx.lineTo(this._a, this._b);
        ctx.strokeStyle = this._color;
        ctx.stroke();
    }
}

function Circle(x, y, a, color) {
    Figure.call(this, x, y, a, color);
    this.draw = function (ctx) {
        ctx.beginPath();
        ctx.arc(this._x, this._y, this._a, 0, 2*Math.PI);
        ctx.strokeStyle = this._color;
        ctx.stroke();
        ctx.fillStyle = this._color;
        ctx.fill();
        ctx.lineWidth = 1;
    }
}

function Rect(x, y, a, b, color) {
    Figure.call(this, x, y, a, color)
    this._b = b;
    this.draw = function (ctx) {
        ctx.beginPath();
        ctx.rect(this._x, this._y, this._a, this._b);
        ctx.strokeStyle = this._color;
        ctx.stroke();
        ctx.fillStyle = this._color;
        ctx.fill();
    }
}

function Zigzag(x, y, a, b, color) {
    Figure.call(this, x, y, a, color)
    this._b = b;
    this.draw = function (ctx) {
        let startX = this._x;
        let startY = this._y;
        let zigzagSpacing = this._a;
        ctx.strokeStyle = this._color;
        ctx.beginPath();
        ctx.moveTo(startX, startY);

        for (let n = 0; n < this._b; n++) {
            let x = startX + ((n + 1) * zigzagSpacing);
            let y;

            if (n % 2 == 0) {
                y = startY + 30;
            }
            else {
                y = startY;
            }
            ctx.lineTo(x, y);
        }

        ctx.stroke();
    }
}

function Canvas(id){
    let c = document.querySelector(id)
    this._ctx = c.getContext("2d");
    c.height = 1000;
    c.width  = 1500;

    this.add = function() {
        let ctx = this._ctx;
        [].forEach.call(arguments, function(el) {
            el.draw(ctx);
        });
    }
}

let drawArea = new Canvas('#canvasID');
let line = new Line(90, 280, 280, 375, 'rgba(252, 0, 0, 1)');
let line2 = new Line(100, 300, 200, 350, 'rgba(0, 13, 252, 1)');
let line3 = new Line(150, 350, 70, 200, 'rgba(0, 252, 4, 0.7)');
let circle = new Circle(850, 320, 100, 'rgba(230, 91, 53, 0.6)');
let circle2 = new Circle(950, 360, 50, 'rgba(120, 214, 94, 0.5)')
let rect = new Rect(360, 250, 60, 150, 'rgba(214, 94, 94, 0.6)');
let rect2 = new Rect(400, 180, 150, 250, 'rgba(95, 121, 199, 0.6)')
let rect3 = new Rect(500, 100, 120, 150, 'rgba(212, 214, 94, 0.8)')
let zigzag = new Zigzag(0, 5, 20, 80, 'rgba(184, 18, 18, 1)')
drawArea.add(line, line2);
drawArea.add(line3,circle, circle2, rect, rect2, rect3, zigzag);