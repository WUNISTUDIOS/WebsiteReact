varying vec2 vUv;
varying float vDisplacement;
uniform float uIntensity;
uniform float uTime;


void main() {
  float distort = 2.0 * vDisplacement * uIntensity;

  vec3 color = vec3(abs(vUv - 0.5) * 2.0  * (1.0 - distort), 1.0);
  
  gl_FragColor = vec4(color ,1.0);
}