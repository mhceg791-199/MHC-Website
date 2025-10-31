import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";

function latLonToVector3(lat, lon, radius = 1) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

// ✅ الشريط المتحرك (زي طيارة بتمشي بين نقطتين)
function MovingArc({ start, end, color = "#00ffff", height = 0.3, radius = 1, speed = 1 }) {
  const startV = latLonToVector3(start[0], start[1], radius);
  const endV = latLonToVector3(end[0], end[1], radius);
  const mid = startV.clone().lerp(endV, 0.5).normalize().multiplyScalar(radius + height);
  const curve = new THREE.CatmullRomCurve3([startV, mid, endV]);
  const geom = useMemo(() => new THREE.TubeGeometry(curve, 200, 0.005, 8, false), [curve]);

  // Gradient texture للشريط
  const texture = useMemo(() => {
    const size = 128;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = 1;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, size, 0);
    gradient.addColorStop(0, "rgba(255,255,255,0)");
    gradient.addColorStop(0.5, color);
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, 1);
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    return tex;
  }, [color]);

  const mat = useRef();
  useFrame((_, delta) => {
    if (mat.current) {
      mat.current.map.offset.x -= delta * speed;
    }
  });

  return (
    <mesh geometry={geom}>
      <meshBasicMaterial ref={mat} map={texture} transparent opacity={1} depthWrite={false} />
    </mesh>
  );
}

// ✅ الكرة الأرضية + القارات + الأشرطة
export default function StripeGlobe({ maskMap }) {
  const groupRef = useRef();
  const mask = useLoader(TextureLoader, maskMap);

  // القارات (من الـ mask)
  const particles = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];

    const width = mask.image.width;
    const height = mask.image.height;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(mask.image, 0, 0);
    const data = ctx.getImageData(0, 0, width, height).data;

    for (let y = 0; y < height; y += 3) {
      for (let x = 0; x < width; x += 3) {
        const i = (y * width + x) * 4;
        const brightness = data[i] / 255;
        if (brightness > 0.4) {
          const lat = 90 - (y / height) * 180;
          const lon = (x / width) * 360 - 180;
          const pos = latLonToVector3(lat, lon, 1.001);
          vertices.push(pos.x, pos.y, pos.z);
          const color = new THREE.Color("#C5A363");
          colors.push(color.r, color.g, color.b);
        }
      }
    }

    geo.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    return geo;
  }, [mask]);

  // دوران الكرة
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  // أشرطة متحركة (زي خطوط الرحلات)
  const arcs = [
    { start: [30, -100], end: [45, 10], color: "#864721" },
    { start: [-20, 60], end: [50, 140], color: "#415E6F" },
    { start: [10, -75], end: [-30, 120], color: "#217D82" },
    { start: [0, -30], end: [50, 90], color: "#2D8A4E" },
    { start: [40, -10], end: [-25, 150], color: "#E04F4F" },
    { start: [-35, -70], end: [60, 60], color: "#6F2DA8" },
  ];

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 2, 1]} intensity={1.1} color="#fff4d6" />

      {/* البحر */}
      <mesh>
        <sphereGeometry args={[1, 128, 128]} />
        <meshStandardMaterial color="#000000" roughness={0.95} metalness={0.3} />
      </mesh>

      {/* القارات */}
      <points geometry={particles}>
        <pointsMaterial size={0.012} vertexColors />
      </points>

      {/* الأشرطة المتحركة */}
      {arcs.map((a, i) => (
        <MovingArc
          key={i}
          start={a.start}
          end={a.end}
          color={a.color}
          height={0.35}
          speed={0.5 + Math.random() * 0.5}
        />
      ))}

      <OrbitControls minDistance={1.4} maxDistance={3.5} />
    </group>
  );
}