<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Provider Network</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            font-family: 'Poppins', sans-serif;
            background: radial-gradient(circle, #0f0c29, #302b63, #24243e);
            color: white;
            text-align: center;
        }
        #canvas-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
        }
        .overlay {
            position: absolute;
            top: 20px;
            width: 100%;
            text-align: center;
        }
        .title {
            font-size: 2.5em;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 2px;
            background: -webkit-linear-gradient(left, #ff416c, #ff4b2b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .info-box {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(255, 255, 255, 0.1);
            padding: 15px 25px;
            border-radius: 10px;
            backdrop-filter: blur(5px);
            font-size: 1.2em;
            animation: fadeIn 1.5s ease-in-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body>
    <div id="canvas-container"></div>
    <div class="overlay">
        <div class="title">Explore the Provider Network</div>
    </div>
    <div class="info-box">Connecting providers worldwide with seamless integration.</div>
    <script>
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('canvas-container').appendChild(renderer.domElement);

        const geometry = new THREE.SphereGeometry(10, 32, 32);
        const material = new THREE.MeshStandardMaterial({ color: 0xff5733, metalness: 0.8, roughness: 0.2, wireframe: true });
        const globe = new THREE.Mesh(geometry, material);
        scene.add(globe);

        const light1 = new THREE.PointLight(0xffffff, 1.5, 100);
        light1.position.set(20, 20, 20);
        scene.add(light1);

        const light2 = new THREE.AmbientLight(0x404040, 1.2);
        scene.add(light2);

        camera.position.z = 30;

        function animate() {
            requestAnimationFrame(animate);
            globe.rotation.x += 0.003;
            globe.rotation.y += 0.005;
            renderer.render(scene, camera);
        }

        animate();
    </script>
</body>
</html>
