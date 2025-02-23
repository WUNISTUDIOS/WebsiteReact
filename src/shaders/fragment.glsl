varying vec2 vUv;
varying float vDisplacement;
varying float vZ;
uniform float uIntensity;
uniform float uTime;
vec3 colorB = vec3(0.149,0.141,0.912);
vec3 colorA = vec3(1.000,0.047,0.009);
void main() {
  float distort = 3.0 * vDisplacement * uIntensity;

  // vec3 color = vec3(abs(vUv - 0.5) * 2.0  * (1.0 + distort), 1.0);
  float coordinate = length(vUv - 0.5) * 2.0;
  float glow = smoothstep(0.5, 0.1, coordinate) * 0.1;
  float wave = sin(vUv.y * 10.0 + uTime) * 0.1;

  vec3 color = smoothstep(abs(length(vUv.x - 0.5)) * 0.5, 1.0 + distort, colorA) * 1.0;
  color = mix(colorB, color, uIntensity);

  color += glow + wave;
  
  gl_FragColor = vec4(color ,1.0);
}