const canvas = document.getElementById('ai-background');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let nodes = [];
const numNodes = 50;

class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 5;
    this.vx = (Math.random() - 0.5) * 0.7; // Velocidad en X
    this.vy = (Math.random() - 0.5) * 0.7; // Velocidad en Y
    this.connections = [];
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 200, 255, 0.7)';
    ctx.fill();
    ctx.closePath();
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;

    // Rebote en los bordes
    if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
    if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;
  }

  connectTo(otherNode) {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(otherNode.x, otherNode.y);
    ctx.strokeStyle = 'rgba(0, 200, 255, 0.3)';
    ctx.stroke();
    ctx.closePath();
  }
}

function createNodes() {
  nodes = [];
  for (let i = 0; i < numNodes; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    nodes.push(new Node(x, y));
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  nodes.forEach(node => {
    node.move(); // Movimiento suave
    node.draw();
    node.connections = [];
    nodes.forEach(otherNode => {
      const distance = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);
      if (distance < 150 && node !== otherNode) {
        node.connectTo(otherNode);
        node.connections.push(otherNode);
      }
    });
  });

  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  createNodes();
});

createNodes();
animate();
