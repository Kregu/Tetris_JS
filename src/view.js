export default class View {
    constructor(element, width, height, rows, columns) {
        this.element = element;
        this.width = width;
        this.height = height;

        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context = this.canvas.getContext('2d');
        
        this.element.appendChild(this.canvas);

        this.blockWidth = this.width / columns;
        this.blockHight = this.height / rows;
    }

    renderPlayfield(playfield) {
        for (let y = 0; y < playfield.length; y++) {
            const line = playfield[y];

            for (let x = 0; x < line.length; x++) {
                const block = line[x];
                
                if (block) {
                    this.context.fillStyle = 'red';
                    this.context.strokeStyle = 'black';
                    this.context.lineWidth = 2;

                    this.context.fillRect(x * this.blockWidth, y * this.blockHight, this.blockWidth, this.blockHight);
                }
            }
            
        }
    }

}