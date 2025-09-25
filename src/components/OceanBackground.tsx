import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sky, Float } from '@react-three/drei';
import * as THREE from 'three';

// Ocean Surface Component
const OceanSurface = ({ scrollProgress }: { scrollProgress: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const oceanShader = useMemo(() => ({
    uniforms: {
      time: { value: 0 },
      depth: { value: 0 },
      waveHeight: { value: 0.5 },
      waveFrequency: { value: 0.3 },
      sunlightIntensity: { value: 1.0 },
      opacity: { value: 1.0 }
    },
    vertexShader: `
      uniform float time;
      uniform float waveHeight;
      uniform float waveFrequency;
      varying vec3 vPosition;
      varying vec3 vNormal;
      
      void main() {
        vPosition = position;
        
        // Create wave displacement
        float wave1 = sin(position.x * waveFrequency + time * 2.0) * waveHeight;
        float wave2 = sin(position.z * waveFrequency * 1.5 + time * 1.5) * waveHeight * 0.7;
        float wave3 = sin((position.x + position.z) * waveFrequency * 0.8 + time * 2.5) * waveHeight * 0.5;
        
        vec3 newPosition = position;
        newPosition.y += wave1 + wave2 + wave3;
        
        // Calculate normal for lighting
        float dx = cos(position.x * waveFrequency + time * 2.0) * waveFrequency * waveHeight;
        float dz = cos(position.z * waveFrequency * 1.5 + time * 1.5) * waveFrequency * 1.5 * waveHeight * 0.7;
        vNormal = normalize(vec3(-dx, 1.0, -dz));
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform float depth;
      uniform float sunlightIntensity;
      uniform float opacity;
      varying vec3 vPosition;
      varying vec3 vNormal;
      
      void main() {
        // Ocean colors that change with depth
        vec3 surfaceColor = vec3(0.1, 0.6, 0.9);
        vec3 shallowColor = vec3(0.2, 0.8, 0.9);
        vec3 deepColor = vec3(0.0, 0.2, 0.4);
        vec3 abyssColor = vec3(0.0, 0.05, 0.15);
        
        // Interpolate colors based on depth
        vec3 color;
        if (depth < 0.3) {
          color = mix(surfaceColor, shallowColor, depth / 0.3);
        } else if (depth < 0.7) {
          color = mix(shallowColor, deepColor, (depth - 0.3) / 0.4);
        } else {
          color = mix(deepColor, abyssColor, (depth - 0.7) / 0.3);
        }
        
        // Simple lighting
        float light = max(0.3, dot(vNormal, normalize(vec3(1.0, 1.0, 0.5)))) * sunlightIntensity;
        color *= light;
        
        // Add some foam/sparkle on surface
        if (depth < 0.1) {
          float foam = sin(vPosition.x * 10.0 + time * 3.0) * sin(vPosition.z * 10.0 + time * 2.0);
          foam = smoothstep(0.8, 1.0, foam);
          color = mix(color, vec3(1.0), foam * 0.3);
        }
        
        gl_FragColor = vec4(color, opacity);
      }
    `
  }), []);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = clock.elapsedTime;
      materialRef.current.uniforms.depth.value = scrollProgress;
      materialRef.current.uniforms.sunlightIntensity.value = Math.max(0.1, 1.0 - scrollProgress * 0.8);
      materialRef.current.uniforms.waveHeight.value = Math.max(0.1, 0.5 - scrollProgress * 0.4);
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[100, 100, 64, 64]} />
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
    const positions = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = Math.random() * 30 - 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
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
          count={1000}
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
      <meshLambertMaterial
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
      {/* Sky - only visible at surface */}
      {scrollProgress < 0.3 && (
        <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        />
      )}
      
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