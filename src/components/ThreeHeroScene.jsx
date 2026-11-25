import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Eye, Zap, RefreshCw } from 'lucide-react';

export default function ThreeHeroScene() {
  const mountRef = useRef(null);
  const [wireframe, setWireframe] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [speed, setSpeed] = useState(1);
  const sceneRef = useRef(null);
  const materialsRef = useRef([]);
  const animStateRef = useRef({ speed: 1, autoRotate: true });

  useEffect(() => {
    animStateRef.current = { speed, autoRotate };
  }, [speed, autoRotate]);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Dimensions
    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x070d18, 0.025);

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(16, 12, 20);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    currentMount.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x38bdf8, 2.5);
    dirLight.position.set(15, 25, 15);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const accentLight = new THREE.PointLight(0x06b6d4, 4, 30);
    accentLight.position.set(-10, 8, -5);
    scene.add(accentLight);

    const underGlow = new THREE.PointLight(0x10b981, 3, 20);
    underGlow.position.set(0, -2, 0);
    scene.add(underGlow);

    // Escalator Group
    const escalatorGroup = new THREE.Group();
    scene.add(escalatorGroup);

    // Materials
    const stepMaterial = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.85,
      roughness: 0.25,
      wireframe: false,
    });
    const edgeYellowMaterial = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      emissive: 0xd97706,
      emissiveIntensity: 0.4,
      metalness: 0.2,
      roughness: 0.5,
    });
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.35,
      roughness: 0.1,
      transmission: 0.9,
      thickness: 0.5,
    });
    const handrailMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.4,
      metalness: 0.1,
    });
    const trussMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.9,
      roughness: 0.4,
      wireframe: false,
    });

    materialsRef.current = [stepMaterial, trussMaterial];

    // Create 3D Escalator Truss / Frame
    const trussLength = 22;
    const trussHeight = 10;
    const trussWidth = 5;

    // Escalator Side Glass Balustrades
    const balustradeGeo = new THREE.BoxGeometry(0.12, 2.2, trussLength);
    const balustradeLeft = new THREE.Mesh(balustradeGeo, glassMaterial);
    balustradeLeft.position.set(-trussWidth / 2 + 0.2, 2.2, 0);
    balustradeLeft.rotation.x = -Math.atan2(trussHeight, trussLength);
    escalatorGroup.add(balustradeLeft);

    const balustradeRight = new THREE.Mesh(balustradeGeo, glassMaterial);
    balustradeRight.position.set(trussWidth / 2 - 0.2, 2.2, 0);
    balustradeRight.rotation.x = -Math.atan2(trussHeight, trussLength);
    escalatorGroup.add(balustradeRight);

    // Moving Handrail Top
    const handrailGeo = new THREE.BoxGeometry(0.3, 0.15, trussLength + 1);
    const handrailLeft = new THREE.Mesh(handrailGeo, handrailMaterial);
    handrailLeft.position.set(-trussWidth / 2 + 0.2, 3.3, 0);
    handrailLeft.rotation.x = -Math.atan2(trussHeight, trussLength);
    escalatorGroup.add(handrailLeft);

    const handrailRight = new THREE.Mesh(handrailGeo, handrailMaterial);
    handrailRight.position.set(trussWidth / 2 - 0.2, 3.3, 0);
    handrailRight.rotation.x = -Math.atan2(trussHeight, trussLength);
    escalatorGroup.add(handrailRight);

    // Metal Truss Base
    const trussGeo = new THREE.BoxGeometry(trussWidth, 1.2, trussLength + 2);
    const trussMesh = new THREE.Mesh(trussGeo, trussMaterial);
    trussMesh.position.set(0, 0, 0);
    trussMesh.rotation.x = -Math.atan2(trussHeight, trussLength);
    escalatorGroup.add(trussMesh);

    // Escalator Steps Array
    const numSteps = 24;
    const steps = [];
    const stepWidth = 3.6;
    const stepTread = 0.8;
    const stepRiser = 0.45;

    for (let i = 0; i < numSteps; i++) {
      const stepMeshGroup = new THREE.Group();

      // Step Tread Box
      const treadGeo = new THREE.BoxGeometry(stepWidth, 0.1, stepTread);
      const treadMesh = new THREE.Mesh(treadGeo, stepMaterial);
      treadMesh.castShadow = true;
      stepMeshGroup.add(treadMesh);

      // Yellow demarcation safety edges (EN 115 standard)
      const yellowEdgeGeo = new THREE.BoxGeometry(0.12, 0.11, stepTread);
      const edgeL = new THREE.Mesh(yellowEdgeGeo, edgeYellowMaterial);
      edgeL.position.x = -stepWidth / 2 + 0.06;
      stepMeshGroup.add(edgeL);

      const edgeR = new THREE.Mesh(yellowEdgeGeo, edgeYellowMaterial);
      edgeR.position.x = stepWidth / 2 - 0.06;
      stepMeshGroup.add(edgeR);

      // Step Riser (Vertical)
      const riserGeo = new THREE.BoxGeometry(stepWidth, stepRiser, 0.08);
      const riserMesh = new THREE.Mesh(riserGeo, stepMaterial);
      riserMesh.position.set(0, -stepRiser / 2, -stepTread / 2);
      stepMeshGroup.add(riserMesh);

      escalatorGroup.add(stepMeshGroup);
      steps.push({
        group: stepMeshGroup,
        offset: i / numSteps,
      });
    }

    // Grid Floor
    const gridHelper = new THREE.GridHelper(40, 40, 0x0284c7, 0x1e293b);
    gridHelper.position.y = -5;
    scene.add(gridHelper);

    // Ambient floating electrical / metro data particles
    const particleCount = 200;
    const particlesGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 35;
      particlePositions[i + 1] = Math.random() * 20 - 4;
      particlePositions[i + 2] = (Math.random() - 0.5) * 35;
    }

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particlesMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.18,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleSystem);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const onPointerMove = (e) => {
      const rect = currentMount.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x * 0.4;
      mouseY = y * 0.3;
    };

    currentMount.addEventListener('pointermove', onPointerMove);

    // Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const currentSpeed = animStateRef.current.speed;
      const currentAutoRotate = animStateRef.current.autoRotate;

      // Animate steps along the 30-degree incline slope
      const angle = Math.atan2(trussHeight, trussLength);
      const totalDist = Math.hypot(trussLength, trussHeight);

      steps.forEach((step) => {
        step.offset = (step.offset + delta * 0.08 * currentSpeed) % 1;
        const dist = (step.offset - 0.5) * totalDist;

        // Position on slope
        const z = -Math.cos(angle) * dist;
        const y = Math.sin(angle) * dist + 1.2;
        step.group.position.set(0, y, z);
      });

      // Particle subtle rotation
      particleSystem.rotation.y += delta * 0.05;

      // Camera parallax / orbit
      if (currentAutoRotate) {
        escalatorGroup.rotation.y += delta * 0.15;
      }

      // Smooth mouse tilt
      targetRotationY = mouseX * 0.5;
      targetRotationX = mouseY * 0.3;
      camera.position.x += (Math.sin(targetRotationY) * 24 - camera.position.x) * 0.05;
      camera.position.y += (12 + targetRotationX * 10 - camera.position.y) * 0.05;
      camera.lookAt(0, 2, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      const newW = currentMount.clientWidth;
      const newH = currentMount.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      currentMount.removeEventListener('pointermove', onPointerMove);
      if (renderer.domElement && currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Handle wireframe toggle
  const toggleWireframe = () => {
    const nextState = !wireframe;
    setWireframe(nextState);
    materialsRef.current.forEach((mat) => {
      mat.wireframe = nextState;
    });
  };

  const resetCamera = () => {
    setAutoRotate(true);
    setSpeed(1);
    setWireframe(false);
    materialsRef.current.forEach((mat) => {
      mat.wireframe = false;
    });
  };

  return (
    <div className="relative w-full h-[400px] md:h-[520px] rounded-2xl overflow-hidden glass-panel-glow">
      {/* 3D Canvas Mount */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* 3D Badge Overlay */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
        <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
        <span>مدل شبیه‌سازی ۳بعدی پله برقی مترو (استاندارد EN 115)</span>
      </div>

      {/* Interactive Controls Overlay */}
      <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-xl bg-slate-950/80 backdrop-blur-lg border border-slate-700/60 text-xs">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              autoRotate ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
            <span>چرخش</span>
          </button>

          <button
            onClick={toggleWireframe}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              wireframe ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{wireframe ? 'وایرفریم فعال' : 'نمای مهندسی'}</span>
          </button>

          <button
            onClick={resetCamera}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
            title="بازنشانی زاویه"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex items-center gap-2 text-slate-400">
          <span>سرعت پله:</span>
          <div className="flex gap-1">
            {[0.5, 1, 1.5].map((spd) => (
              <button
                key={spd}
                onClick={() => setSpeed(spd)}
                className={`px-2 py-0.5 rounded text-[11px] font-mono transition ${
                  speed === spd ? 'bg-cyan-500 text-white font-bold' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {spd}x
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
