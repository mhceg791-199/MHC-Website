import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function ModelView({ children }) {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 2.6], fov: 45 }}
      style={{ background: '#050b11' }}
      className='h-[38vh] md:h-[85vh]'
    >
      {children}
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
