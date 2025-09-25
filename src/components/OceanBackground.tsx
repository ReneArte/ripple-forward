import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Ocean Surface Component with simplified shaders
const OceanSurface = ({ scrollProgress }: { scrollProgress: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const oceanShader = useMemo(() => ({
    uniforms: {
      time: { value: 0 },
      depth: { value: 0 },
      waveHeight: { value: 0.5 },
      opacity: { value: 1.0 }
    },
    vertexShader: `
      uniform float time;
      uniform float waveHeight;
      varying vec3 vPosition;
      varying vec3 vNormal;
      
      void main() {
        vPosition = position;
        
        // Create simple wave displacement
        float wave1 = sin(position.x * 0.3 + time * 2.0) * waveHeight;
        float wave2 = sin(position.z * 0.45 + time * 1.5) * waveHeight * 0.7;
        
        vec3 newPosition = position;
        newPosition.y += wave1 + wave2;
        
        // Simple normal calculation
        vNormal = normalize(vec3(0.0, 1.0, 0.0));
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform float depth;
      uniform float opacity;
      varying vec3 vPosition;
      varying vec3 vNormal;
      
      void main() {
        // Ocean colors that change with depth
        vec3 surfaceColor = vec3(0.1, 0.6, 0.9);
        vec3 deepColor = vec3(0.0, 0.2, 0.4);
        vec3 abyssColor = vec3(0.0, 0.05, 0.15);
        
        // Interpolate colors based on depth
        vec3 color;
        if (depth < 0.5) {
          color = mix(surfaceColor, deepColor, depth / 0.5);
        } else {
          color = mix(deepColor, abyssColor, (depth - 0.5) / 0.5);
        }
        
        // Simple lighting
        float light = max(0.3, 0.8) * (1.0 - depth * 0.5);
        color *= light;
        
        gl_FragColor = vec4(color, opacity);
      }
    `
  }), []);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = clock.elapsedTime;
      materialRef.current.uniforms.depth.value = scrollProgress;
      materialRef.current.uniforms.waveHeight.value = Math.max(0.1, 0.5 - scrollProgress * 0.4);
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[100, 100, 32, 32]} />
      <shaderMaterial
        ref={materialRef}
        {...oceanShader}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

// Underwater Particles Component
const UnderwaterParticles = ({ scrollProgress }: { scrollProgress: number }) => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = Math.random() * 30 - 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, []);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] += 0.01;
        if (positions[i] > 15) positions[i] = -15;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  const opacity = Math.max(0, scrollProgress - 0.2);

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={500}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color={new THREE.Color(0.8, 0.9, 1.0)}
        size={0.1}
        transparent
        opacity={opacity * 0.5}
      />
    </points>
  );
};

// Ocean Floor Component
const OceanFloor = ({ scrollProgress }: { scrollProgress: number }) => {
  const opacity = Math.max(0, scrollProgress - 0.8);
  
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -20, 0]}>
      <planeGeometry args={[100, 100]} />
      <meshBasicMaterial
        color={new THREE.Color(0.2, 0.15, 0.1)}
        transparent
        opacity={opacity}
      />
    </mesh>
  );
};

// Scene Setup Component
const OceanScene = ({ scrollProgress }: { scrollProgress: number }) => {
  const { camera } = useThree();

  useFrame(() => {
    // Adjust camera position based on scroll
    camera.position.y = 5 - scrollProgress * 25;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      {/* Ambient light that decreases with depth */}
      <ambientLight intensity={Math.max(0.1, 0.8 - scrollProgress * 0.6)} color={new THREE.Color(0.7, 0.8, 1.0)} />
      
      {/* Directional light (sun) that fades underwater */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={Math.max(0, 1.0 - scrollProgress)}
        color={new THREE.Color(1, 0.95, 0.8)}
      />
      
      {/* Ocean surface */}
      <OceanSurface scrollProgress={scrollProgress} />
      
      {/* Underwater particles */}
      <UnderwaterParticles scrollProgress={scrollProgress} />
      
      {/* Ocean floor */}
      <OceanFloor scrollProgress={scrollProgress} />
    </>
  );
};

// Main Ocean Background Component
const OceanBackground: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrolled / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 5, 0], fov: 75 }}
        style={{ width: '100%', height: '100%' }}
      >
        <OceanScene scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
};

export default OceanBackground;