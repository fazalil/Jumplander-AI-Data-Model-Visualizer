class DataVisualizer {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.data = [];
    }

    loadData(data) {
        this.data = data;
    }

    render() {
        if (!this.data.length) return;

        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        const maxX = Math.max(...this.data.map(d => d.x));
        const maxY = Math.max(...this.data.map(d => d.y));

        this.data.forEach(point => {
            const x = (point.x / maxX) * this.canvas.width;
            const y = this.canvas.height - (point.y / maxY) * this.canvas.height;
            ctx.beginPath();
            ctx.arc(x, y, 6, 0, 2 * Math.PI);
            ctx.fillStyle = "#00C853";
            ctx.fill();
            ctx.stroke();
        });
    }

    addPoint(x, y) {
        this.data.push({x, y});
        this.render();
    }

    clear() {
        this.data = [];
        this.render();
    }
}
