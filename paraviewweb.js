glMatrixArrayType = typeof Float32Array != "undefined" ? Float32Array : typeof WebGLFloatArray != "undefined" ? WebGLFloatArray : Array;
var vec3 = {};
vec3.create = function (a) {
  var b = new glMatrixArrayType(3);
  if (a) {
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2]
  }
  return b
};
vec3.set = function (a, b) {
  b[0] = a[0];
  b[1] = a[1];
  b[2] = a[2];
  return b
};
vec3.add = function (a, b, c) {
  if (!c || a == c) {
    a[0] += b[0];
    a[1] += b[1];
    a[2] += b[2];
    return a
  }
  c[0] = a[0] + b[0];
  c[1] = a[1] + b[1];
  c[2] = a[2] + b[2];
  return c
};
vec3.subtract = function (a, b, c) {
  if (!c || a == c) {
    a[0] -= b[0];
    a[1] -= b[1];
    a[2] -= b[2];
    return a
  }
  c[0] = a[0] - b[0];
  c[1] = a[1] - b[1];
  c[2] = a[2] - b[2];
  return c
};
vec3.negate = function (a, b) {
  b || (b = a);
  b[0] = -a[0];
  b[1] = -a[1];
  b[2] = -a[2];
  return b
};
vec3.scale = function (a, b, c) {
  if (!c || a == c) {
    a[0] *= b;
    a[1] *= b;
    a[2] *= b;
    return a
  }
  c[0] = a[0] * b;
  c[1] = a[1] * b;
  c[2] = a[2] * b;
  return c
};
vec3.normalize = function (a, b) {
  b || (b = a);
  var c = a[0], d = a[1], e = a[2], g = Math.sqrt(c * c + d * d + e * e);
  if (g) {
    if (g == 1) {
      b[0] = c;
      b[1] = d;
      b[2] = e;
      return b
    }
  } else {
    b[0] = 0;
    b[1] = 0;
    b[2] = 0;
    return b
  }
  g = 1 / g;
  b[0] = c * g;
  b[1] = d * g;
  b[2] = e * g;
  return b
};
vec3.cross = function (a, b, c) {
  c || (c = a);
  var d = a[0], e = a[1];
  a = a[2];
  var g = b[0], f = b[1];
  b = b[2];
  c[0] = e * b - a * f;
  c[1] = a * g - d * b;
  c[2] = d * f - e * g;
  return c
};
vec3.length = function (a) {
  var b = a[0], c = a[1];
  a = a[2];
  return Math.sqrt(b * b + c * c + a * a)
};
vec3.dot = function (a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
};
vec3.direction = function (a, b, c) {
  c || (c = a);
  var d = a[0] - b[0], e = a[1] - b[1];
  a = a[2] - b[2];
  b = Math.sqrt(d * d + e * e + a * a);
  if (!b) {
    c[0] = 0;
    c[1] = 0;
    c[2] = 0;
    return c
  }
  b = 1 / b;
  c[0] = d * b;
  c[1] = e * b;
  c[2] = a * b;
  return c
};
vec3.lerp = function (a, b, c, d) {
  d || (d = a);
  d[0] = a[0] + c * (b[0] - a[0]);
  d[1] = a[1] + c * (b[1] - a[1]);
  d[2] = a[2] + c * (b[2] - a[2]);
  return d
};
vec3.str = function (a) {
  return"[" + a[0] + ", " + a[1] + ", " + a[2] + "]"
};

var mat3 = {};
mat3.create = function (a) {
  var b = new glMatrixArrayType(9);
  if (a) {
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = a[3];
    b[4] = a[4];
    b[5] = a[5];
    b[6] = a[6];
    b[7] = a[7];
    b[8] = a[8];
    b[9] = a[9]
  }
  return b
};
mat3.set = function (a, b) {
  b[0] = a[0];
  b[1] = a[1];
  b[2] = a[2];
  b[3] = a[3];
  b[4] = a[4];
  b[5] = a[5];
  b[6] = a[6];
  b[7] = a[7];
  b[8] = a[8];
  return b
};
mat3.identity = function (a) {
  a[0] = 1;
  a[1] = 0;
  a[2] = 0;
  a[3] = 0;
  a[4] = 1;
  a[5] = 0;
  a[6] = 0;
  a[7] = 0;
  a[8] = 1;
  return a
};
mat3.transpose = function (a, b) {
  if (!b || a == b) {
    var c = a[1], d = a[2], e = a[5];
    a[1] = a[3];
    a[2] = a[6];
    a[3] = c;
    a[5] = a[7];
    a[6] = d;
    a[7] = e;
    return a
  }
  b[0] = a[0];
  b[1] = a[3];
  b[2] = a[6];
  b[3] = a[1];
  b[4] = a[4];
  b[5] = a[7];
  b[6] = a[2];
  b[7] = a[5];
  b[8] = a[8];
  return b
};
mat3.toMat4 = function (a, b) {
  b || (b = mat4.create());
  b[0] = a[0];
  b[1] = a[1];
  b[2] = a[2];
  b[3] = 0;
  b[4] = a[3];
  b[5] = a[4];
  b[6] = a[5];
  b[7] = 0;
  b[8] = a[6];
  b[9] = a[7];
  b[10] = a[8];
  b[11] = 0;
  b[12] = 0;
  b[13] = 0;
  b[14] = 0;
  b[15] = 1;
  return b
};
mat3.str = function (a) {
  return"[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + "]"
};
var mat4 = {};
mat4.create = function (a) {
  var b = new glMatrixArrayType(16);
  if (a) {
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = a[3];
    b[4] = a[4];
    b[5] = a[5];
    b[6] = a[6];
    b[7] = a[7];
    b[8] = a[8];
    b[9] = a[9];
    b[10] = a[10];
    b[11] = a[11];
    b[12] = a[12];
    b[13] = a[13];
    b[14] = a[14];
    b[15] = a[15]
  }
  return b
};
mat4.set = function (a, b) {
  b[0] = a[0];
  b[1] = a[1];
  b[2] = a[2];
  b[3] = a[3];
  b[4] = a[4];
  b[5] = a[5];
  b[6] = a[6];
  b[7] = a[7];
  b[8] = a[8];
  b[9] = a[9];
  b[10] = a[10];
  b[11] = a[11];
  b[12] = a[12];
  b[13] = a[13];
  b[14] = a[14];
  b[15] = a[15];
  return b
};
mat4.identity = function (a) {
  a[0] = 1;
  a[1] = 0;
  a[2] = 0;
  a[3] = 0;
  a[4] = 0;
  a[5] = 1;
  a[6] = 0;
  a[7] = 0;
  a[8] = 0;
  a[9] = 0;
  a[10] = 1;
  a[11] = 0;
  a[12] = 0;
  a[13] = 0;
  a[14] = 0;
  a[15] = 1;
  return a
};
mat4.transpose = function (a, b) {
  if (!b || a == b) {
    var c = a[1], d = a[2], e = a[3], g = a[6], f = a[7], h = a[11];
    a[1] = a[4];
    a[2] = a[8];
    a[3] = a[12];
    a[4] = c;
    a[6] = a[9];
    a[7] = a[13];
    a[8] = d;
    a[9] = g;
    a[11] = a[14];
    a[12] = e;
    a[13] = f;
    a[14] = h;
    return a
  }
  b[0] = a[0];
  b[1] = a[4];
  b[2] = a[8];
  b[3] = a[12];
  b[4] = a[1];
  b[5] = a[5];
  b[6] = a[9];
  b[7] = a[13];
  b[8] = a[2];
  b[9] = a[6];
  b[10] = a[10];
  b[11] = a[14];
  b[12] = a[3];
  b[13] = a[7];
  b[14] = a[11];
  b[15] = a[15];
  return b
};
mat4.determinant = function (a) {
  var b = a[0], c = a[1], d = a[2], e = a[3], g = a[4], f = a[5], h = a[6], i = a[7], j = a[8], k = a[9], l = a[10], o = a[11], m = a[12], n = a[13], p = a[14];
  a = a[15];
  return m * k * h * e - j * n * h * e - m * f * l * e + g * n * l * e + j * f * p * e - g * k * p * e - m * k * d * i + j * n * d * i + m * c * l * i - b * n * l * i - j * c * p * i + b * k * p * i + m * f * d * o - g * n * d * o - m * c * h * o + b * n * h * o + g * c * p * o - b * f * p * o - j * f * d * a + g * k * d * a + j * c * h * a - b * k * h * a - g * c * l * a + b * f * l * a
};
mat4.inverse = function (a, b) {
  b || (b = a);
  var c = a[0], d = a[1], e = a[2], g = a[3], f = a[4], h = a[5], i = a[6], j = a[7], k = a[8], l = a[9], o = a[10], m = a[11], n = a[12], p = a[13], r = a[14], s = a[15], A = c * h - d * f, B = c * i - e * f, t = c * j - g * f, u = d * i - e * h, v = d * j - g * h, w = e * j - g * i, x = k * p - l * n, y = k * r - o * n, z = k * s - m * n, C = l * r - o * p, D = l * s - m * p, E = o * s - m * r, q = 1 / (A * E - B * D + t * C + u * z - v * y + w * x);
  b[0] = (h * E - i * D + j * C) * q;
  b[1] = (-d * E + e * D - g * C) * q;
  b[2] = (p * w - r * v + s * u) * q;
  b[3] = (-l * w + o * v - m * u) * q;
  b[4] = (-f * E + i * z - j * y) * q;
  b[5] = (c * E - e * z + g * y) * q;
  b[6] = (-n * w + r * t - s * B) * q;
  b[7] = (k * w - o * t + m * B) * q;
  b[8] = (f * D - h * z + j * x) * q;
  b[9] = (-c * D + d * z - g * x) * q;
  b[10] = (n * v - p * t + s * A) * q;
  b[11] = (-k * v + l * t - m * A) * q;
  b[12] = (-f * C + h * y - i * x) * q;
  b[13] = (c * C - d * y + e * x) * q;
  b[14] = (-n * u + p * B - r * A) * q;
  b[15] = (k * u - l * B + o * A) * q;
  return b
};
mat4.toRotationMat = function (a, b) {
  b || (b = mat4.create());
  b[0] = a[0];
  b[1] = a[1];
  b[2] = a[2];
  b[3] = a[3];
  b[4] = a[4];
  b[5] = a[5];
  b[6] = a[6];
  b[7] = a[7];
  b[8] = a[8];
  b[9] = a[9];
  b[10] = a[10];
  b[11] = a[11];
  b[12] = 0;
  b[13] = 0;
  b[14] = 0;
  b[15] = 1;
  return b
};
mat4.toMat3 = function (a, b) {
  b || (b = mat3.create());
  b[0] = a[0];
  b[1] = a[1];
  b[2] = a[2];
  b[3] = a[4];
  b[4] = a[5];
  b[5] = a[6];
  b[6] = a[8];
  b[7] = a[9];
  b[8] = a[10];
  return b
};
mat4.toInverseMat3 = function (a, b) {
  var c = a[0], d = a[1], e = a[2], g = a[4], f = a[5], h = a[6], i = a[8], j = a[9], k = a[10], l = k * f - h * j, o = -k * g + h * i, m = j * g - f * i, n = c * l + d * o + e * m;
  if (!n)return null;
  n = 1 / n;
  b || (b = mat3.create());
  b[0] = l * n;
  b[1] = (-k * d + e * j) * n;
  b[2] = (h * d - e * f) * n;
  b[3] = o * n;
  b[4] = (k * c - e * i) * n;
  b[5] = (-h * c + e * g) * n;
  b[6] = m * n;
  b[7] = (-j * c + d * i) * n;
  b[8] = (f * c - d * g) * n;
  return b
};
mat4.multiply = function (a, b, c) {
  c || (c = a);
  var d = a[0], e = a[1], g = a[2], f = a[3], h = a[4], i = a[5], j = a[6], k = a[7], l = a[8], o = a[9], m = a[10], n = a[11], p = a[12], r = a[13], s = a[14];
  a = a[15];
  var A = b[0], B = b[1], t = b[2], u = b[3], v = b[4], w = b[5], x = b[6], y = b[7], z = b[8], C = b[9], D = b[10], E = b[11], q = b[12], F = b[13], G = b[14];
  b = b[15];
  c[0] = A * d + B * h + t * l + u * p;
  c[1] = A * e + B * i + t * o + u * r;
  c[2] = A * g + B * j + t * m + u * s;
  c[3] = A * f + B * k + t * n + u * a;
  c[4] = v * d + w * h + x * l + y * p;
  c[5] = v * e + w * i + x * o + y * r;
  c[6] = v * g + w * j + x * m + y * s;
  c[7] = v * f + w * k + x * n + y * a;
  c[8] = z * d + C * h + D * l + E * p;
  c[9] = z * e + C * i + D * o + E * r;
  c[10] = z * g + C * j + D * m + E * s;
  c[11] = z * f + C * k + D * n + E * a;
  c[12] = q * d + F * h + G * l + b * p;
  c[13] = q * e + F * i + G * o + b * r;
  c[14] = q * g + F * j + G * m + b * s;
  c[15] = q * f + F * k + G * n + b * a;
  return c
};
mat4.multiplyVec3 = function (a, b, c) {
  c || (c = b);
  var d = b[0], e = b[1];
  b = b[2];
  c[0] = a[0] * d + a[4] * e + a[8] * b + a[12];
  c[1] = a[1] * d + a[5] * e + a[9] * b + a[13];
  c[2] = a[2] * d + a[6] * e + a[10] * b + a[14];
  return c
};
mat4.multiplyVec4 = function (a, b, c) {
  c || (c = b);
  var d = b[0], e = b[1], g = b[2];
  b = b[3];
  c[0] = a[0] * d + a[4] * e + a[8] * g + a[12] * b;
  c[1] = a[1] * d + a[5] * e + a[9] * g + a[13] * b;
  c[2] = a[2] * d + a[6] * e + a[10] * g + a[14] * b;
  c[3] = a[3] * d + a[7] * e + a[11] * g + a[15] * b;
  return c
};
mat4.translate = function (a, b, c) {
  var d = b[0], e = b[1];
  b = b[2];
  if (!c || a == c) {
    a[12] = a[0] * d + a[4] * e + a[8] * b + a[12];
    a[13] = a[1] * d + a[5] * e + a[9] * b + a[13];
    a[14] = a[2] * d + a[6] * e + a[10] * b + a[14];
    a[15] = a[3] * d + a[7] * e + a[11] * b + a[15];
    return a
  }
  var g = a[0], f = a[1], h = a[2], i = a[3], j = a[4], k = a[5], l = a[6], o = a[7], m = a[8], n = a[9], p = a[10], r = a[11];
  c[0] = g;
  c[1] = f;
  c[2] = h;
  c[3] = i;
  c[4] = j;
  c[5] = k;
  c[6] = l;
  c[7] = o;
  c[8] = m;
  c[9] = n;
  c[10] = p;
  c[11] = r;
  c[12] = g * d + j * e + m * b + a[12];
  c[13] = f * d + k * e + n * b + a[13];
  c[14] = h * d + l * e + p * b + a[14];
  c[15] = i * d + o * e + r * b + a[15];
  return c
};
mat4.scale = function (a, b, c) {
  var d = b[0], e = b[1];
  b = b[2];
  if (!c || a == c) {
    a[0] *= d;
    a[1] *= d;
    a[2] *= d;
    a[3] *= d;
    a[4] *= e;
    a[5] *= e;
    a[6] *= e;
    a[7] *= e;
    a[8] *= b;
    a[9] *= b;
    a[10] *= b;
    a[11] *= b;
    return a
  }
  c[0] = a[0] * d;
  c[1] = a[1] * d;
  c[2] = a[2] * d;
  c[3] = a[3] * d;
  c[4] = a[4] * e;
  c[5] = a[5] * e;
  c[6] = a[6] * e;
  c[7] = a[7] * e;
  c[8] = a[8] * b;
  c[9] = a[9] * b;
  c[10] = a[10] * b;
  c[11] = a[11] * b;
  c[12] = a[12];
  c[13] = a[13];
  c[14] = a[14];
  c[15] = a[15];
  return c
};
mat4.rotate = function (a, b, c, d) {
  var e = c[0], g = c[1];
  c = c[2];
  var f = Math.sqrt(e * e + g * g + c * c);
  if (!f)return null;
  if (f != 1) {
    f = 1 / f;
    e *= f;
    g *= f;
    c *= f
  }
  var h = Math.sin(b), i = Math.cos(b), j = 1 - i;
  b = a[0];
  f = a[1];
  var k = a[2], l = a[3], o = a[4], m = a[5], n = a[6], p = a[7], r = a[8], s = a[9], A = a[10], B = a[11], t = e * e * j + i, u = g * e * j + c * h, v = c * e * j - g * h, w = e * g * j - c * h, x = g * g * j + i, y = c * g * j + e * h, z = e * c * j + g * h;
  e = g * c * j - e * h;
  g = c * c * j + i;
  if (d) {
    if (a != d) {
      d[12] = a[12];
      d[13] = a[13];
      d[14] = a[14];
      d[15] = a[15]
    }
  } else d = a;
  d[0] = b * t + o * u + r * v;
  d[1] = f * t + m * u + s * v;
  d[2] = k * t + n * u + A * v;
  d[3] = l * t + p * u + B * v;
  d[4] = b * w + o * x + r * y;
  d[5] = f * w + m * x + s * y;
  d[6] = k * w + n * x + A * y;
  d[7] = l * w + p * x + B * y;
  d[8] = b * z + o * e + r * g;
  d[9] = f * z + m * e + s * g;
  d[10] = k * z + n * e + A * g;
  d[11] = l * z + p * e + B * g;
  return d
};
mat4.rotateX = function (a, b, c) {
  var d = Math.sin(b);
  b = Math.cos(b);
  var e = a[4], g = a[5], f = a[6], h = a[7], i = a[8], j = a[9], k = a[10], l = a[11];
  if (c) {
    if (a != c) {
      c[0] = a[0];
      c[1] = a[1];
      c[2] = a[2];
      c[3] = a[3];
      c[12] = a[12];
      c[13] = a[13];
      c[14] = a[14];
      c[15] = a[15]
    }
  } else c = a;
  c[4] = e * b + i * d;
  c[5] = g * b + j * d;
  c[6] = f * b + k * d;
  c[7] = h * b + l * d;
  c[8] = e * -d + i * b;
  c[9] = g * -d + j * b;
  c[10] = f * -d + k * b;
  c[11] = h * -d + l * b;
  return c
};
mat4.rotateY = function (a, b, c) {
  var d = Math.sin(b);
  b = Math.cos(b);
  var e = a[0], g = a[1], f = a[2], h = a[3], i = a[8], j = a[9], k = a[10], l = a[11];
  if (c) {
    if (a != c) {
      c[4] = a[4];
      c[5] = a[5];
      c[6] = a[6];
      c[7] = a[7];
      c[12] = a[12];
      c[13] = a[13];
      c[14] = a[14];
      c[15] = a[15]
    }
  } else c = a;
  c[0] = e * b + i * -d;
  c[1] = g * b + j * -d;
  c[2] = f * b + k * -d;
  c[3] = h * b + l * -d;
  c[8] = e * d + i * b;
  c[9] = g * d + j * b;
  c[10] = f * d + k * b;
  c[11] = h * d + l * b;
  return c
};
mat4.rotateZ = function (a, b, c) {
  var d = Math.sin(b);
  b = Math.cos(b);
  var e = a[0], g = a[1], f = a[2], h = a[3], i = a[4], j = a[5], k = a[6], l = a[7];
  if (c) {
    if (a != c) {
      c[8] = a[8];
      c[9] = a[9];
      c[10] = a[10];
      c[11] = a[11];
      c[12] = a[12];
      c[13] = a[13];
      c[14] = a[14];
      c[15] = a[15]
    }
  } else c = a;
  c[0] = e * b + i * d;
  c[1] = g * b + j * d;
  c[2] = f * b + k * d;
  c[3] = h * b + l * d;
  c[4] = e * -d + i * b;
  c[5] = g * -d + j * b;
  c[6] = f * -d + k * b;
  c[7] = h * -d + l * b;
  return c
};
mat4.frustum = function (a, b, c, d, e, g, f) {
  f || (f = mat4.create());
  var h = b - a, i = d - c, j = g - e;
  f[0] = e * 2 / h;
  f[1] = 0;
  f[2] = 0;
  f[3] = 0;
  f[4] = 0;
  f[5] = e * 2 / i;
  f[6] = 0;
  f[7] = 0;
  f[8] = (b + a) / h;
  f[9] = (d + c) / i;
  f[10] = -(g + e) / j;
  f[11] = -1;
  f[12] = 0;
  f[13] = 0;
  f[14] = -(g * e * 2) / j;
  f[15] = 0;
  return f
};
mat4.perspective = function (a, b, c, d, e) {
  a = c * Math.tan(a * Math.PI / 360);
  b = a * b;
  return mat4.frustum(-b, b, -a, a, c, d, e)
};
mat4.ortho = function (a, b, c, d, e, g, f) {
  f || (f = mat4.create());
  var h = b - a, i = d - c, j = g - e;
  f[0] = 2 / h;
  f[1] = 0;
  f[2] = 0;
  f[3] = 0;
  f[4] = 0;
  f[5] = 2 / i;
  f[6] = 0;
  f[7] = 0;
  f[8] = 0;
  f[9] = 0;
  f[10] = -2 / j;
  f[11] = 0;
  f[12] = -(a + b) / h;
  f[13] = -(d + c) / i;
  f[14] = -(g + e) / j;
  f[15] = 1;
  return f
};
mat4.lookAt = function (a, b, c, d) {
  d || (d = mat4.create());
  var e = a[0], g = a[1];
  a = a[2];
  var f = c[0], h = c[1], i = c[2];
  c = b[1];
  var j = b[2];
  if (e == b[0] && g == c && a == j)return mat4.identity(d);
  var k, l, o, m;
  c = e - b[0];
  j = g - b[1];
  b = a - b[2];
  m = 1 / Math.sqrt(c * c + j * j + b * b);
  c *= m;
  j *= m;
  b *= m;
  k = h * b - i * j;
  i = i * c - f * b;
  f = f * j - h * c;
  if (m = Math.sqrt(k * k + i * i + f * f)) {
    m = 1 / m;
    k *= m;
    i *= m;
    f *= m
  } else f = i = k = 0;
  h = j * f - b * i;
  l = b * k - c * f;
  o = c * i - j * k;
  if (m = Math.sqrt(h * h + l * l + o * o)) {
    m = 1 / m;
    h *= m;
    l *= m;
    o *= m
  } else o = l = h = 0;
  d[0] = k;
  d[1] = h;
  d[2] = c;
  d[3] = 0;
  d[4] = i;
  d[5] = l;
  d[6] = j;
  d[7] = 0;
  d[8] = f;
  d[9] = o;
  d[10] = b;
  d[11] = 0;
  d[12] = -(k * e + i * g + f * a);
  d[13] = -(h * e + l * g + o * a);
  d[14] = -(c * e + j * g + b * a);
  d[15] = 1;
  return d
};
mat4.str = function (a) {
  return"[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + "]"
};
quat4 = {};
quat4.create = function (a) {
  var b = new glMatrixArrayType(4);
  if (a) {
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = a[3]
  }
  return b
};
quat4.set = function (a, b) {
  b[0] = a[0];
  b[1] = a[1];
  b[2] = a[2];
  b[3] = a[3];
  return b
};
quat4.calculateW = function (a, b) {
  var c = a[0], d = a[1], e = a[2];
  if (!b || a == b) {
    a[3] = -Math.sqrt(Math.abs(1 - c * c - d * d - e * e));
    return a
  }
  b[0] = c;
  b[1] = d;
  b[2] = e;
  b[3] = -Math.sqrt(Math.abs(1 - c * c - d * d - e * e));
  return b
};
quat4.inverse = function (a, b) {
  if (!b || a == b) {
    a[0] *= 1;
    a[1] *= 1;
    a[2] *= 1;
    return a
  }
  b[0] = -a[0];
  b[1] = -a[1];
  b[2] = -a[2];
  b[3] = a[3];
  return b
};
quat4.length = function (a) {
  var b = a[0], c = a[1], d = a[2];
  a = a[3];
  return Math.sqrt(b * b + c * c + d * d + a * a)
};
quat4.normalize = function (a, b) {
  b || (b = a);
  var c = a[0], d = a[1], e = a[2], g = a[3], f = Math.sqrt(c * c + d * d + e * e + g * g);
  if (f == 0) {
    b[0] = 0;
    b[1] = 0;
    b[2] = 0;
    b[3] = 0;
    return b
  }
  f = 1 / f;
  b[0] = c * f;
  b[1] = d * f;
  b[2] = e * f;
  b[3] = g * f;
  return b
};
quat4.multiply = function (a, b, c) {
  c || (c = a);
  var d = a[0], e = a[1], g = a[2];
  a = a[3];
  var f = b[0], h = b[1], i = b[2];
  b = b[3];
  c[0] = d * b + a * f + e * i - g * h;
  c[1] = e * b + a * h + g * f - d * i;
  c[2] = g * b + a * i + d * h - e * f;
  c[3] = a * b - d * f - e * h - g * i;
  return c
};
quat4.multiplyVec3 = function (a, b, c) {
  c || (c = b);
  var d = b[0], e = b[1], g = b[2];
  b = a[0];
  var f = a[1], h = a[2];
  a = a[3];
  var i = a * d + f * g - h * e, j = a * e + h * d - b * g, k = a * g + b * e - f * d;
  d = -b * d - f * e - h * g;
  c[0] = i * a + d * -b + j * -h - k * -f;
  c[1] = j * a + d * -f + k * -b - i * -h;
  c[2] = k * a + d * -h + i * -f - j * -b;
  return c
};
quat4.toMat3 = function (a, b) {
  b || (b = mat3.create());
  var c = a[0], d = a[1], e = a[2], g = a[3], f = c + c, h = d + d, i = e + e, j = c * f, k = c * h;
  c = c * i;
  var l = d * h;
  d = d * i;
  e = e * i;
  f = g * f;
  h = g * h;
  g = g * i;
  b[0] = 1 - (l + e);
  b[1] = k - g;
  b[2] = c + h;
  b[3] = k + g;
  b[4] = 1 - (j + e);
  b[5] = d - f;
  b[6] = c - h;
  b[7] = d + f;
  b[8] = 1 - (j + l);
  return b
};
quat4.toMat4 = function (a, b) {
  b || (b = mat4.create());
  var c = a[0], d = a[1], e = a[2], g = a[3], f = c + c, h = d + d, i = e + e, j = c * f, k = c * h;
  c = c * i;
  var l = d * h;
  d = d * i;
  e = e * i;
  f = g * f;
  h = g * h;
  g = g * i;
  b[0] = 1 - (l + e);
  b[1] = k - g;
  b[2] = c + h;
  b[3] = 0;
  b[4] = k + g;
  b[5] = 1 - (j + e);
  b[6] = d - f;
  b[7] = 0;
  b[8] = c - h;
  b[9] = d + f;
  b[10] = 1 - (j + l);
  b[11] = 0;
  b[12] = 0;
  b[13] = 0;
  b[14] = 0;
  b[15] = 1;
  return b
};
quat4.slerp = function (a, b, c, d) {
  d || (d = a);
  var e = c;
  if (a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3] < 0)e = -1 * c;
  d[0] = 1 - c * a[0] + e * b[0];
  d[1] = 1 - c * a[1] + e * b[1];
  d[2] = 1 - c * a[2] + e * b[2];
  d[3] = 1 - c * a[3] + e * b[3];
  return d
};
quat4.str = function (a) {
  return"[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + "]"
};
if (!this.JSON) {
  this.JSON = {};
}
(function () {
  function f(n) {
    return n < 10 ? '0' + n : n;
  }

  if (typeof Date.prototype.toJSON !== 'function') {
    Date.prototype.toJSON = function (key) {
      return isFinite(this.valueOf()) ? this.getUTCFullYear() + '-' + f(this.getUTCMonth() + 1) + '-' + f(this.getUTCDate()) + 'T' + f(this.getUTCHours()) + ':' + f(this.getUTCMinutes()) + ':' + f(this.getUTCSeconds()) + 'Z' : null;
    };
    String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (key) {
      return this.valueOf();
    };
  }
  var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {'\b': '\\b', '\t': '\\t', '\n': '\\n', '\f': '\\f', '\r': '\\r', '"': '\\"', '\\': '\\\\'}, rep;

  function quote(string) {
    escapable.lastIndex = 0;
    return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
      var c = meta[a];
      return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + string + '"';
  }

  function str(key, holder) {
    var i, k, v, length, mind = gap, partial, value = holder[key];
    if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
      value = value.toJSON(key);
    }
    if (typeof rep === 'function') {
      value = rep.call(holder, key, value);
    }
    switch (typeof value) {
      case'string':
        return quote(value);
      case'number':
        return isFinite(value) ? String(value) : 'null';
      case'boolean':
      case'null':
        return String(value);
      case'object':
        if (!value) {
          return'null';
        }
        gap += indent;
        partial = [];
        if (Object.prototype.toString.apply(value) === '[object Array]') {
          length = value.length;
          for (i = 0; i < length; i += 1) {
            partial[i] = str(i, value) || 'null';
          }
          v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' : '[' + partial.join(',') + ']';
          gap = mind;
          return v;
        }
        if (rep && typeof rep === 'object') {
          length = rep.length;
          for (i = 0; i < length; i += 1) {
            k = rep[i];
            if (typeof k === 'string') {
              v = str(k, value);
              if (v) {
                partial.push(quote(k) + (gap ? ': ' : ':') + v);
              }
            }
          }
        } else {
          for (k in value) {
            if (Object.hasOwnProperty.call(value, k)) {
              v = str(k, value);
              if (v) {
                partial.push(quote(k) + (gap ? ': ' : ':') + v);
              }
            }
          }
        }
        v = partial.length === 0 ? '{}' : gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' : '{' + partial.join(',') + '}';
        gap = mind;
        return v;
    }
  }

  if (typeof JSON.stringify !== 'function') {
    JSON.stringify = function (value, replacer, space) {
      var i;
      gap = '';
      indent = '';
      if (typeof space === 'number') {
        for (i = 0; i < space; i += 1) {
          indent += ' ';
        }
      } else if (typeof space === 'string') {
        indent = space;
      }
      rep = replacer;
      if (replacer && typeof replacer !== 'function' && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
        throw new Error('JSON.stringify');
      }
      return str('', {'': value});
    };
  }
  if (typeof JSON.parse !== 'function') {
    JSON.parse = function (text, reviver) {
      var j;

      function walk(holder, key) {
        var k, v, value = holder[key];
        if (value && typeof value === 'object') {
          for (k in value) {
            if (Object.hasOwnProperty.call(value, k)) {
              v = walk(value, k);
              if (v !== undefined) {
                value[k] = v;
              } else {
                delete value[k];
              }
            }
          }
        }
        return reviver.call(holder, key, value);
      }

      text = String(text);
      cx.lastIndex = 0;
      if (cx.test(text)) {
        text = text.replace(cx, function (a) {
          return'\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        });
      }
      if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
        j = eval('(' + text + ')');
        return typeof reviver === 'function' ? walk({'': j}, '') : j;
      }
      throw new SyntaxError('JSON.parse');
    };
  }
}());
var escapeJSONString = (function () {
  var escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, meta = {'\b': '\\b', '\t': '\\t', '\n': '\\n', '\f': '\\f', '\r': '\\r', '"': '\\"', '\\': '\\\\'};
  return function (string) {
    escapable.lastIndex = 0;
    return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
      var c = meta[a];
      return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + string + '"';
  };
})();
function toJSON(o) {
  var marker = "$_$jabsorbed$813492";
  var markerHead;
  var fixups = [];

  function removeMarkers() {
    var next;
    while (markerHead) {
      next = markerHead[marker].prev;
      delete markerHead[marker];
      markerHead = next;
    }
  }

  var omitCircRefOrDuplicate = {};
  var json;

  function subObjToJSON(o, p, ref) {
    var v = [], fixup, original, parent, circRef, i;
    if (o === null || o === undefined) {
      return"null";
    } else if (typeof o === 'string') {
      return escapeJSONString(o);
    } else if (typeof o === 'number') {
      return o.toString();
    } else if (typeof o === 'boolean') {
      return o.toString();
    } else {
      if (o[marker]) {
        fixup = [ref];
        parent = p;
        while (parent) {
          if (original) {
            original.unshift(parent[marker].ref);
          }
          if (parent === o) {
            circRef = parent;
            original = [circRef[marker].ref];
          }
          fixup.unshift(parent[marker].ref);
          parent = parent[marker].parent;
        }
        if (circRef) {
          if (JSONRpcClient.fixupCircRefs) {
            fixup.shift();
            original.shift();
            fixups.push([fixup, original]);
            return omitCircRefOrDuplicate;
          } else {
            removeMarkers();
            throw new Error("circular reference detected!");
          }
        } else {
          if (JSONRpcClient.fixupDuplicates) {
            original = [o[marker].ref];
            parent = o[marker].parent;
            while (parent) {
              original.unshift(parent[marker].ref);
              parent = parent[marker].parent;
            }
            fixup.shift();
            original.shift();
            fixups.push([fixup, original]);
            return omitCircRefOrDuplicate;
          }
        }
      } else {
        o[marker] = {parent: p, prev: markerHead, ref: ref};
        markerHead = o;
      }
      if (o.constructor === Date) {
        if (o.javaClass) {
          return'{javaClass: "' + o.javaClass + '", time: ' + o.valueOf() + '}';
        } else {
          return'{javaClass: "java.util.Date", time: ' + o.valueOf() + '}';
        }
      } else if (o.constructor === Array) {
        for (i = 0; i < o.length; i++) {
          json = subObjToJSON(o[i], o, i);
          v.push(json === omitCircRefOrDuplicate ? null : json);
        }
        return"[" + v.join(", ") + "]";
      } else {
        for (var attr in o) {
          if (attr === marker) {
          } else if (o[attr] === null || o[attr] === undefined) {
            v.push("\"" + attr + "\": null");
          } else if (typeof o[attr] == "function") {
          } else {
            json = subObjToJSON(o[attr], o, attr);
            if (json !== omitCircRefOrDuplicate) {
              v.push(escapeJSONString(attr) + ": " + json);
            }
          }
        }
        return"{" + v.join(", ") + "}";
      }
    }
  }

  json = subObjToJSON(o, null, "root");
  removeMarkers();
  if (fixups.length) {
    return{json: json, fixups: fixups};
  } else {
    return{json: json};
  }
}
function JSONRpcClient() {
  var arg_shift = 0, req, _function, methods, self, name, arg0type = (typeof arguments[0]), doListMethods = true;
  if (arg0type === "function") {
    this.readyCB = arguments[0];
    arg_shift++;
  } else if (arguments[0] && arg0type === "object" && arguments[0].length) {
    this._addMethods(arguments[0]);
    arg_shift++;
    doListMethods = false;
  }
  this.serverURL = arguments[arg_shift];
  this.user = arguments[arg_shift + 1];
  this.pass = arguments[arg_shift + 2];
  this.objectID = 0;
  if (doListMethods) {
    this._addMethods(["system.listMethods"]);
    req = JSONRpcClient._makeRequest(this, "system.listMethods", []);
    if (this.readyCB) {
      self = this;
      req.cb = function (result, e) {
        if (!e) {
          self._addMethods(result);
        }
        self.readyCB(result, e);
      };
    }
    if (!this.readyCB) {
      methods = JSONRpcClient._sendRequest(this, req);
      this._addMethods(methods);
    } else {
      JSONRpcClient.async_requests.push(req);
      JSONRpcClient.kick_async();
    }
  }
}
JSONRpcClient.prototype.createCallableProxy = function (objectID, javaClass) {
  var cp, req, methodNames, name, i;
  cp = new JSONRPCCallableProxy(objectID, javaClass);
  for (name in JSONRpcClient.knownClasses[javaClass]) {
    cp[name] = JSONRpcClient.bind(JSONRpcClient.knownClasses[javaClass][name], cp);
  }
  return cp;
};
function JSONRPCCallableProxy() {
  this.objectID = arguments[0];
  this.javaClass = arguments[1];
  this.JSONRPCType = "CallableReference";
}
JSONRpcClient.knownClasses = {};
JSONRpcClient.Exception = function (errorObject) {
  var m;
  for (var prop in errorObject) {
    if (errorObject.hasOwnProperty(prop)) {
      this[prop] = errorObject[prop];
    }
  }
  if (this.trace) {
    m = this.trace.match(/^([^:]*)/);
    if (m) {
      this.name = m[0];
    }
  }
  if (!this.name) {
    this.name = "JSONRpcClientException";
  }
};
JSONRpcClient.Exception.CODE_REMOTE_EXCEPTION = 490;
JSONRpcClient.Exception.CODE_ERR_CLIENT = 550;
JSONRpcClient.Exception.CODE_ERR_PARSE = 590;
JSONRpcClient.Exception.CODE_ERR_NOMETHOD = 591;
JSONRpcClient.Exception.CODE_ERR_UNMARSHALL = 592;
JSONRpcClient.Exception.CODE_ERR_MARSHALL = 593;
JSONRpcClient.Exception.prototype = new Error();
JSONRpcClient.Exception.prototype.toString = function (code, msg) {
  var str = "";
  if (this.name) {
    str += this.name;
  }
  if (this.message) {
    str += ": " + this.message;
  }
  if (str.length == 0) {
    str = "no exception information given";
  }
  return str;
};
JSONRpcClient.default_ex_handler = function (e) {
  var a, str = "";
  for (a in e) {
    str += a + "\t" + e[a] + "\n";
  }
  alert(str);
};
JSONRpcClient.toplevel_ex_handler = JSONRpcClient.default_ex_handler;
JSONRpcClient.profile_async = false;
JSONRpcClient.max_req_active = 1;
JSONRpcClient.requestId = 1;
JSONRpcClient.fixupCircRefs = true;
JSONRpcClient.fixupDuplicates = true;
JSONRpcClient.transformDates = false;
JSONRpcClient.transformDateWithoutHint = false;
JSONRpcClient.javaDateClasses = {'java.util.Date': true, 'java.sql.Date': true, 'java.sql.Time': true, 'java.sql.Timestamp': true};
JSONRpcClient.bind = function (functionName, context) {
  return function () {
    return functionName.apply(context, arguments);
  };
};
JSONRpcClient._createMethod = function (client, methodName) {
  var serverMethodCaller = function () {
    var args = [], callback;
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    if (typeof args[0] == "function") {
      callback = args.shift();
    }
    var req = JSONRpcClient._makeRequest(this, methodName, args, this.objectID, callback);
    if (!callback) {
      return JSONRpcClient._sendRequest(client, req);
    } else {
      JSONRpcClient.async_requests.push(req);
      JSONRpcClient.kick_async();
      return req.requestId;
    }
  };
  return serverMethodCaller;
};
JSONRpcClient.prototype.createObject = function () {
  var args = [], callback = null, constructorName, _args, req;
  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  if (typeof args[0] == "function") {
    callback = args.shift();
  }
  constructorName = args[0] + ".$constructor";
  _args = args[1];
  req = JSONRpcClient._makeRequest(this, constructorName, _args, 0, callback);
  if (callback === null) {
    return JSONRpcClient._sendRequest(this, req);
  } else {
    JSONRpcClient.async_requests.push(req);
    JSONRpcClient.kick_async();
    return req.requestId;
  }
};
JSONRpcClient.CALLABLE_REFERENCE_METHOD_PREFIX = ".ref";
JSONRpcClient.prototype._addMethods = function (methodNames, dontAdd) {
  var name, obj, names, n, method, methods = [], javaClass, tmpNames, startIndex, endIndex;
  for (var i = 0; i < methodNames.length; i++) {
    obj = this;
    names = methodNames[i].split(".");
    startIndex = methodNames[i].indexOf("[");
    endIndex = methodNames[i].indexOf("]");
    if ((methodNames[i].substring(0, JSONRpcClient.CALLABLE_REFERENCE_METHOD_PREFIX.length) == JSONRpcClient.CALLABLE_REFERENCE_METHOD_PREFIX) && (startIndex != -1) && (endIndex != -1) && (startIndex < endIndex)) {
      javaClass = methodNames[i].substring(startIndex + 1, endIndex);
    } else {
      for (n = 0; n < names.length - 1; n++) {
        name = names[n];
        if (obj[name]) {
          obj = obj[name];
        } else {
          obj[name] = {};
          obj = obj[name];
        }
      }
    }
    name = names[names.length - 1];
    if (javaClass) {
      method = JSONRpcClient._createMethod(this, name);
      if (!JSONRpcClient.knownClasses[javaClass]) {
        JSONRpcClient.knownClasses[javaClass] = {};
      }
      JSONRpcClient.knownClasses[javaClass][name] = method;
    } else {
      method = JSONRpcClient._createMethod(this, methodNames[i]);
      if ((!obj[name]) && (!dontAdd)) {
        obj[name] = JSONRpcClient.bind(method, this);
      }
      methods.push(method);
    }
    javaClass = null;
  }
  return methods;
};
JSONRpcClient._getCharsetFromHeaders = function (http) {
  var contentType, parts, i;
  try {
    contentType = http.getResponseHeader("Content-type");
    parts = contentType.split(/\s*;\s*/);
    for (i = 0; i < parts.length; i++) {
      if (parts[i].substring(0, 8) == "charset=") {
        return parts[i].substring(8, parts[i].length);
      }
    }
  } catch (e) {
  }
  return"UTF-8";
};
JSONRpcClient.async_requests = [];
JSONRpcClient.async_inflight = {};
JSONRpcClient.async_responses = [];
JSONRpcClient.async_timeout = null;
JSONRpcClient.num_req_active = 0;
JSONRpcClient._async_handler = function () {
  var res, req;
  JSONRpcClient.async_timeout = null;
  while (JSONRpcClient.async_responses.length > 0) {
    res = JSONRpcClient.async_responses.shift();
    if (res.canceled) {
      continue;
    }
    if (res.profile) {
      res.profile.dispatch = new Date();
    }
    try {
      res.cb(res.result, res.ex, res.profile);
    } catch (e) {
      JSONRpcClient.toplevel_ex_handler(e);
    }
  }
  while (JSONRpcClient.async_requests.length > 0 && JSONRpcClient.num_req_active < JSONRpcClient.max_req_active) {
    req = JSONRpcClient.async_requests.shift();
    if (req.canceled) {
      continue;
    }
    JSONRpcClient._sendRequest(req.client, req);
  }
};
JSONRpcClient.kick_async = function () {
  if (!JSONRpcClient.async_timeout) {
    JSONRpcClient.async_timeout = setTimeout(JSONRpcClient._async_handler, 0);
  }
};
JSONRpcClient.cancelRequest = function (requestId) {
  if (JSONRpcClient.async_inflight[requestId]) {
    JSONRpcClient.async_inflight[requestId].canceled = true;
    return true;
  }
  var i;
  for (i in JSONRpcClient.async_requests) {
    if (JSONRpcClient.async_requests[i].requestId == requestId) {
      JSONRpcClient.async_requests[i].canceled = true;
      return true;
    }
  }
  for (i in JSONRpcClient.async_responses) {
    if (JSONRpcClient.async_responses[i].requestId == requestId) {
      JSONRpcClient.async_responses[i].canceled = true;
      return true;
    }
  }
  return false;
};
JSONRpcClient._makeRequest = function (client, methodName, args, objectID, cb) {
  var req = {};
  req.client = client;
  req.requestId = JSONRpcClient.requestId++;
  var obj = "{id:" + req.requestId + ",method:";
  if ((objectID) && (objectID > 0)) {
    obj += "\".obj[" + objectID + "]." + methodName + "\"";
  } else {
    obj += "\"" + methodName + "\"";
  }
  if (cb) {
    req.cb = cb;
  }
  if (JSONRpcClient.profile_async) {
    req.profile = {submit: new Date()};
  }
  var j = toJSON(args);
  obj += ",params:" + j.json;
  if (j.fixups) {
    obj += ",fixups:" + toJSON(j.fixups).json;
  }
  req.data = obj + "}";
  return req;
};
JSONRpcClient._sendRequest = function (client, req) {
  var http;
  if (req.profile) {
    req.profile.start = new Date();
  }
  http = JSONRpcClient.poolGetHTTPRequest();
  JSONRpcClient.num_req_active++;
  http.open("POST", client.serverURL, !!req.cb, client.user, client.pass);
  try {
    http.setRequestHeader("Content-type", "text/plain");
  } catch (e) {
  }
  if (req.cb) {
    http.onreadystatechange = function () {
      var res;
      if (http.readyState == 4) {
        http.onreadystatechange = function () {
        };
        res = {cb: req.cb, result: null, ex: null};
        if (req.profile) {
          res.profile = req.profile;
          res.profile.end = new Date();
        } else {
          res.profile = false;
        }
        try {
          res.result = client._handleResponse(http);
        } catch (e) {
          res.ex = e;
        }
        if (!JSONRpcClient.async_inflight[req.requestId].canceled) {
          JSONRpcClient.async_responses.push(res);
        }
        delete JSONRpcClient.async_inflight[req.requestId];
        JSONRpcClient.kick_async();
      }
    };
  } else {
    http.onreadystatechange = function () {
    };
  }
  JSONRpcClient.async_inflight[req.requestId] = req;
  try {
    http.send(req.data);
  } catch (e) {
    JSONRpcClient.poolReturnHTTPRequest(http);
    JSONRpcClient.num_req_active--;
    throw new JSONRpcClient.Exception({code: JSONRpcClient.Exception.CODE_ERR_CLIENT, message: "Connection failed"});
  }
  if (!req.cb) {
    delete JSONRpcClient.async_inflight[req.requestId];
    return client._handleResponse(http);
  }
  return null;
};
JSONRpcClient.prototype._handleResponse = function (http) {
  if (!this.charset) {
    this.charset = JSONRpcClient._getCharsetFromHeaders(http);
  }
  var status, statusText, data;
  try {
    status = http.status;
    statusText = http.statusText;
    data = http.responseText;
  } catch (e) {
    JSONRpcClient.poolReturnHTTPRequest(http);
    JSONRpcClient.num_req_active--;
    JSONRpcClient.kick_async();
    throw new JSONRpcClient.Exception({code: JSONRpcClient.Exception.CODE_ERR_CLIENT, message: "Connection failed"});
  }
  JSONRpcClient.poolReturnHTTPRequest(http);
  JSONRpcClient.num_req_active--;
  if (status != 200) {
    throw new JSONRpcClient.Exception({code: status, message: statusText});
  }
  ;
  return this.unmarshallResponse(data);
};
JSONRpcClient.prototype.unmarshallResponse = function (data) {
  function applyFixups(obj, fixups) {
    function findOriginal(ob, original) {
      for (var i = 0, j = original.length; i < j; i++) {
        ob = ob[original[i]];
      }
      return ob;
    }

    function applyFixup(ob, fixups, value) {
      var j = fixups.length - 1;
      for (var i = 0; i < j; i++) {
        ob = ob[fixups[i]];
      }
      ob[fixups[j]] = value;
    }

    for (var i = 0, j = fixups.length; i < j; i++) {
      applyFixup(obj, fixups[i][0], findOriginal(obj, fixups[i][1]));
    }
  }

  function transformDate(obj) {
    function hasOnlyProperty(obj, prop) {
      var i, count = 0;
      if (obj.hasOwnProperty(prop)) {
        for (i in obj) {
          if (obj.hasOwnProperty(i)) {
            count++;
            if (count > 1) {
              return;
            }
          }
        }
        return true;
      }
    }

    var i, d;
    if (obj && typeof obj === 'object') {
      if ((obj.javaClass && JSONRpcClient.javaDateClasses[obj.javaClass])) {
        d = new Date(obj.time);
        if (obj.javaClass !== 'java.util.Date') {
          d.javaClass = obj.javaClass;
        }
        return d;
      } else if (JSONRpcClient.transformDateWithoutHint && hasOnlyProperty(obj, 'time')) {
        return new Date(obj.time);
      } else {
        for (i in obj) {
          if (obj.hasOwnProperty(i)) {
            obj[i] = transformDate(obj[i]);
          }
        }
        return obj;
      }
    } else {
      return obj;
    }
  }

  var obj;
  try {
    eval("obj = " + data);
  } catch (e) {
    throw new JSONRpcClient.Exception({code: 550, message: "error parsing result"});
  }
  if (obj.error) {
    throw new JSONRpcClient.Exception(obj.error);
  }
  var r = obj.result;
  var i, tmp;
  if (r) {
    if (r.objectID && r.JSONRPCType == "CallableReference") {
      return this.createCallableProxy(r.objectID, r.javaClass);
    } else {
      r = JSONRpcClient.extractCallableReferences(this, JSONRpcClient.transformDates ? transformDate(r) : r);
      if (obj.fixups) {
        applyFixups(r, obj.fixups);
      }
    }
  }
  return r;
};
JSONRpcClient.extractCallableReferences = function (client, root) {
  var i, tmp, value;
  for (i in root) {
    if (typeof(root[i]) == "object") {
      tmp = JSONRpcClient.makeCallableReference(client, root[i]);
      if (tmp) {
        root[i] = tmp;
      } else {
        tmp = JSONRpcClient.extractCallableReferences(client, root[i]);
        root[i] = tmp;
      }
    }
    if (typeof(i) == "object") {
      tmp = JSONRpcClient.makeCallableReference(client, i);
      if (tmp) {
        value = root[i];
        delete root[i];
        root[tmp] = value;
      } else {
        tmp = JSONRpcClient.extractCallableReferences(client, i);
        value = root[i];
        delete root[i];
        root[tmp] = value;
      }
    }
  }
  return root;
};
JSONRpcClient.makeCallableReference = function (client, value) {
  if (value && value.objectID && value.javaClass && value.JSONRPCType == "CallableReference") {
    return client.createCallableProxy(value.objectID, value.javaClass);
  }
  return null;
};
JSONRpcClient.http_spare = [];
JSONRpcClient.http_max_spare = 8;
JSONRpcClient.poolGetHTTPRequest = function () {
  var http = JSONRpcClient.http_spare.pop();
  if (http) {
    return http;
  }
  return JSONRpcClient.getHTTPRequest();
};
JSONRpcClient.poolReturnHTTPRequest = function (http) {
  if (JSONRpcClient.http_spare.length >= JSONRpcClient.http_max_spare) {
    delete http;
  } else {
    JSONRpcClient.http_spare.push(http);
  }
};
JSONRpcClient.msxmlNames = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "MSXML2.XMLHTTP.5.0", "MSXML2.XMLHTTP.4.0", "Microsoft.XMLHTTP"];
JSONRpcClient.getHTTPRequest = function () {
  try {
    JSONRpcClient.httpObjectName = "XMLHttpRequest";
    return new XMLHttpRequest();
  } catch (e) {
  }
  for (var i = 0; i < JSONRpcClient.msxmlNames.length; i++) {
    try {
      JSONRpcClient.httpObjectName = JSONRpcClient.msxmlNames[i];
      return new ActiveXObject(JSONRpcClient.msxmlNames[i]);
    } catch (e) {
    }
  }
  JSONRpcClient.httpObjectName = null;
  throw new JSONRpcClient.Exception({code: 0, message: "Can't create XMLHttpRequest object"});
};
var flashRenderers = new Object();
var jsRenderers = new Object();
var javaRenderers = new Object();
var jsRendererInteraction = new Object();
var paraviewObjects = new Object();
var __nb_global_ie_methods__ = 1;
var __mouse_interaction_call_completed = true;
var __noop = function () {
}
var __mouse_interaction_callback = function () {
  __mouse_interaction_call_completed = true;
}
function consumeEvent(event) {
  if (event.preventDefault) {
    event.preventDefault();
  } else {
    event.returnValue = false;
  }
  return false;
}
function touchInteraction(rendererId, sessionId, viewId, action, event) {
  if (!jsRendererInteraction[rendererId]) {
    jsRendererInteraction[rendererId] = {pendingAction: 0, lastX: 0, lastY: 0};
  }
  var rendererInfo = jsRendererInteraction[rendererId];
  var height = jsRenderers[rendererId].view.height;
  var width = jsRenderers[rendererId].view.width;
  event.preventDefault();
  if (action == 'down') {
    if (rendererInfo.pendingAction == 2) {
      paraviewObjects[sessionId].sendEvent('MouseEvent', viewId + ' 2 0 ' + rendererInfo.lastX + ' ' + rendererInfo.lastY + ' 0 0');
      rendererInfo.pendingAction = 0;
    } else if (rendererInfo.pendingAction == 3) {
      paraviewObjects[sessionId].sendEvent('MouseEvent', viewId + ' 2 0 0 ' + rendererInfo.lastY + ' 1 0');
    }
    rendererInfo.pendingAction = 1;
    rendererInfo.lastX = event.touches[0].pageX / width;
    rendererInfo.lastY = -event.touches[0].pageY / height;
    paraviewObjects[sessionId].sendEvent('MouseEvent', viewId + ' 0 0 ' + rendererInfo.lastX + ' ' + rendererInfo.lastY + ' 0 0');
  } else if (action == 'move' && (rendererInfo.pendingAction == 2 || rendererInfo.pendingAction == 1) && event.scale == 1) {
    rendererInfo.pendingAction = 2;
    rendererInfo.lastX = event.touches[0].pageX / width;
    rendererInfo.lastY = -event.touches[0].pageY / height;
    paraviewObjects[sessionId].sendEvent('MouseMove', viewId + ' 1 0 ' + rendererInfo.lastX + ' ' + rendererInfo.lastY + ' 0 0');
  } else if (action == 'move' && event.scale != 1) {
    if (rendererInfo.pendingAction == 2 || rendererInfo.pendingAction == 1) {
      paraviewObjects[sessionId].sendEvent('MouseEvent', viewId + ' 2 0 ' + rendererInfo.lastX + ' ' + rendererInfo.lastY + ' 0 0');
      paraviewObjects[sessionId].sendEvent('MouseEvent', viewId + ' 0 0 0 0 1 0');
    }
    rendererInfo.pendingAction = 3;
    rendererInfo.lastY = (1 - event.scale) / 10;
    paraviewObjects[sessionId].sendEvent('MouseEvent', viewId + ' 1 0 0 ' + rendererInfo.lastY + ' 1 0');
  }
}
function mouseInteraction(rendererId, sessionId, viewId, action, event) {
  consumeEvent(event);
  jsRendererInteraction.lastRealEvent = event;
  var width = jsRenderers[rendererId].view.width;
  var height = jsRenderers[rendererId].view.height;
  if (action == 'down') {
    if (jsRendererInteraction.needUp) {
      paraviewObjects[sessionId].sendEvent('MouseEvent', viewId + ' 2 ' + jsRendererInteraction.lastEvent);
    }
    jsRendererInteraction.isDragging = true;
    jsRendererInteraction.needUp = true;
    if (navigator.appName.indexOf("Microsoft") == -1) {
      jsRendererInteraction.button = event.button + ' ';
    } else {
      switch (event.button) {
        case 1:
          break;
          jsRendererInteraction.button = '0 ';
        case 4:
          jsRendererInteraction.button = '1 ';
          break;
        case 2:
          jsRendererInteraction.button = '2 ';
          break;
      }
    }
    jsRendererInteraction.action = " 0 ";
    jsRendererInteraction.keys = "";
    if (event.ctrlKey) {
      jsRendererInteraction.keys += "1";
    } else {
      jsRendererInteraction.keys += "0";
    }
    if (event.shiftKey) {
      jsRendererInteraction.keys += " 1";
    } else {
      jsRendererInteraction.keys += " 0";
    }
    jsRendererInteraction.x = event.screenX;
    jsRendererInteraction.y = event.screenY;
    var docX = 0;
    var docY = 0;
    if (event.pageX == null) {
      var d = (document.documentElement && document.documentElement.scrollLeft != null) ? document.documentElement : document.body;
      docX = event.clientX + d.scrollLeft;
      docY = event.clientY + d.scrollTop;
    } else {
      docX = event.pageX;
      docY = event.pageY;
    }
    jsRendererInteraction.xOrigin = docX - jsRenderers[rendererId].getPageX();
    jsRendererInteraction.yOrigin = docY - jsRenderers[rendererId].getPageY();
    var ratio = jsRenderers[rendererId].interactiveRatio;
    updateRendererSize(sessionId, viewId, width / ratio, height / ratio);
  } else if (action == 'move') {
    jsRendererInteraction.action = " 1 ";
  } else if (action == 'up' || action == 'click') {
    __last_move_completed = true;
    jsRendererInteraction.isDragging = false;
    jsRendererInteraction.needUp = false;
    jsRendererInteraction.action = " 2 ";
    var mouseInfo = ((event.screenX - jsRendererInteraction.x + jsRendererInteraction.xOrigin) / width) + " " + (1 - (event.screenY - jsRendererInteraction.y + jsRendererInteraction.yOrigin) / height) + " " + jsRendererInteraction.keys;
    jsRendererInteraction.lastEvent = jsRendererInteraction.button + mouseInfo;
    jsRendererInteraction.scale = 1;
    jsRendererInteraction.button = event.button + ' ';
    jsRendererInteraction.keys = "0 0";
    paraviewObjects[sessionId].sendEvent('MouseEvent', viewId + jsRendererInteraction.action + jsRendererInteraction.lastEvent);
    updateRendererSize(sessionId, viewId, width, height);
    jsRenderers[rendererId].interacting();
  }
  if (jsRendererInteraction.isDragging) {
    var mouseInfoDrag = ((event.screenX - jsRendererInteraction.x + jsRendererInteraction.xOrigin) / width) + " " + (1 - (event.screenY - jsRendererInteraction.y + jsRendererInteraction.yOrigin) / height) + " " + jsRendererInteraction.keys;
    var mouseAction = 'MouseEvent';
    if (action == 'move') {
      mouseAction = 'MouseMove';
    }
    if (!__mouse_interaction_call_completed) {
      return false;
    }
    __mouse_interaction_call_completed = false;
    jsRenderers[rendererId].interacting();
    jsRendererInteraction.lastEvent = jsRendererInteraction.button + mouseInfoDrag;
    paraviewObjects[sessionId].sendEventWithCallback(mouseAction, viewId + jsRendererInteraction.action + jsRendererInteraction.lastEvent, __mouse_interaction_callback);
  }
  return false;
}
function getFlashApplet(appName) {
  if (navigator.appName.indexOf("Microsoft") != -1) {
    return window[appName];
  } else {
    return document[appName];
  }
}
function flexParaWebRendererLoaded(id) {
  getFlashApplet(id).initializeView(flashRenderers[id].sessionId, flashRenderers[id].viewId);
  getFlashApplet(id).showInfo(false);
}
function updateFlexFps(id, fps) {
  flashRenderers[id].fps = fps;
}
function updateJavaFps(id, fps) {
  javaRenderers[id].fps = fps;
}
function updateRendererSize(sessionId, viewId, sizeWidth, sizeHeight) {
  if (sizeWidth < 10) {
    sizeWidth = 10;
    alert("Try to resize server window with invalide size: " + sizeWidth + ' x ' + sizeHeight)
  }
  if (sizeHeight < 10) {
    sizeHeight = 10;
  }
  paraviewObjects[sessionId].UpdateViewsSize({size: [sizeWidth, sizeHeight], viewId: viewId});
}
function JsonRpcObjectBuilder(methodName, methodArguments) {
  var args = [];
  if (typeof(methodArguments) != "undefined") {
    if (typeof(methodArguments) != "object") {
      args = [methodArguments];
    } else {
      args = methodArguments;
    }
  }
  return{id: 1, method: methodName, params: args};
}
function executeRemote(paraviewInstance, methodName, methodArguments) {
  try {
    var reply_string = paraviewInstance.jsonRpcClient.VisualizationsManager.invoke(paraviewInstance.sessionId, JSON.stringify(JsonRpcObjectBuilder(methodName, methodArguments)));
    paraviewInstance.lastActivity = new Date().getTime();
    var json = JSON.parse(reply_string);
    if (json.error) {
      throw json.error.message;
    }
    if (json.result.error) {
      throw json.result.error.message;
    }
    if (json.result.result)
      return attatchMethods(paraviewInstance, json.result.result);
    return attatchMethods(paraviewInstance, json.result);
  } catch (e) {
    if (paraviewInstance.errorListener) {
      if (paraviewInstance.errorListener.manageError(e)) {
        throw(e);
      }
    } else {
      throw(e);
    }
  }
}
function executeAsyncRemote(paraviewInstance, methodName, methodArguments, callback) {
  try {
    paraviewInstance.lastActivity = new Date().getTime();
    paraviewInstance.jsonRpcClient.VisualizationsManager.invoke(new AsynchCallback(paraviewInstance, callback), paraviewInstance.sessionId, JSON.stringify(JsonRpcObjectBuilder(methodName, methodArguments)));
  } catch (e) {
    if (paraviewInstance.errorListener) {
      if (paraviewInstance.errorListener.manageError(e)) {
        throw(e);
      }
    } else {
      throw(e);
    }
  }
}
function AsynchCallback(paraviewInstance, wrappedCallback) {
  return function (reply_string) {
    try {
      var json = JSON.parse(reply_string);
      if (json.error) {
        throw json.error.message;
      }
      if (json.result.error) {
        throw json.result.error.message;
      }
      var trueResult = {};
      if (json.result.result) {
        trueResult = attatchMethods(paraviewInstance, json.result.result);
      } else {
        trueResult = attatchMethods(paraviewInstance, json.result);
      }
      return wrappedCallback(trueResult);
    } catch (e) {
      if (paraviewInstance.errorListener) {
        if (paraviewInstance.errorListener.manageError(e)) {
          throw(e);
        }
      } else {
        throw(e);
      }
    }
  }
}
function attatchMethods(paraviewInstance, replyObj) {
  if (replyObj.__jsonclass__ == "Proxy") {
    replyObj._method = function () {
      var real_params = JsonRpcObjectBuilder(replyObj.__selfid__, JsonRpcObjectBuilder(extractMethodName(arguments), extractArguments(arguments)));
      return executeRemote(paraviewInstance, "execute_command_on", real_params);
    }
    replyObj._async_method = function () {
      var callback = arguments[0];
      var args = new Array();
      for (var i = 2; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      return executeAsyncRemote(paraviewInstance, "execute_command_on", JsonRpcObjectBuilder(replyObj.__selfid__, JsonRpcObjectBuilder(arguments[1], args)), callback);
    }
    replyObj._get = function () {
      var real_params = JsonRpcObjectBuilder(replyObj.__selfid__, JsonRpcObjectBuilder(extractMethodName(arguments), []));
      return executeRemote(paraviewInstance, "handle_property", real_params);
    }
    replyObj._set = function () {
      var real_params = JsonRpcObjectBuilder(replyObj.__selfid__, JsonRpcObjectBuilder(extractMethodName(arguments), extractArguments(arguments)));
      return executeRemote(paraviewInstance, "handle_property", real_params);
    }
    var index;
    for (index in replyObj.__properties__) {
      var propertyName = replyObj.__properties__[index];
      replyObj["get" + propertyName] = appendMethodName(replyObj._get, "get" + propertyName);
      replyObj["set" + propertyName] = appendMethodName(replyObj._set, "set" + propertyName);
    }
    for (index in replyObj.__methods__) {
      var methodName = replyObj.__methods__[index];
      replyObj[methodName] = appendMethodName(replyObj._method, methodName);
    }
    replyObj['getLatest'] = appendMethodName(function () {
      return executeRemote(paraviewInstance, "get_last_version", replyObj.__selfid__);
    }, methodName);
  }
  return replyObj;
}
function appendMethodName(methodToCall, methodName) {
  return function () {
    var args = new Array();
    args.push(methodName);
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    return methodToCall.apply(this, args);
  };
}
function appendAsyncMethodName(methodToCall, methodName) {
  return function () {
    var args = new Array();
    args.push(arguments[0]);
    args.push(methodName);
    for (var i = 1; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    return methodToCall.apply(this, args);
  };
}
function extractMethodName(args) {
  return args[0];
}
function extractArguments(args) {
  if (args.length == 2) {
    return args[1];
  } else {
    var resultArgs = new Array();
    for (var i = 1; i < args.length; i++) {
      resultArgs.push(args[i]);
    }
    return resultArgs;
  }
}
function Paraview(coreServiceURL) {
  this.coreServiceURL = coreServiceURL;
  this.jsonRpcClient = new JSONRpcClient(coreServiceURL + "/json");
  this.plugins = {};
  this.lastActivity = 0;
  this.sessionId = '';
  this.webGLPieceSize = '10000000';
  this.errorListener;
  this.lastChangeTimestamp = 0;
  this.onChanges = function (obj) {
    console.log(obj);
    if (this.enableCollaborationListener) {
      this.fetchCollaborationNotification();
    }
  }
  this.enableCollaborationListener = false;
}
Paraview.prototype.sendEvent = function (command, content) {
  try {
    this.lastActivity = new Date().getTime();
    this.jsonRpcClient.VisualizationsManager.forwardWithoutReply(this.sessionId, command, content);
  } catch (e) {
    if (this.errorListener) {
      if (this.errorListener.manageError(e)) {
        throw(e);
      }
    } else {
      throw(e);
    }
  }
}
Paraview.prototype.sendEventWithCallback = function (command, content, callback) {
  try {
    if (callback == null) {
      callback = __noop;
    }
    this.lastActivity = new Date().getTime();
    this.jsonRpcClient.VisualizationsManager.forwardWithoutReply(callback, this.sessionId, command, content);
  } catch (e) {
    if (this.errorListener) {
      if (this.errorListener.manageError(e)) {
        throw(e);
      }
    } else {
      throw(e);
    }
  }
}
Paraview.prototype.loadFile = function (filename) {
  try {
    this.lastActivity = new Date().getTime();
    var reply_string = this.jsonRpcClient.VisualizationsManager.loadFile(this.sessionId, filename);
    var json = JSON.parse(reply_string);
    if (json.error) {
      throw json.error.message;
    }
    if (json.result.error) {
      throw json.result.error.message;
    }
    if (json.result.result)
      return attatchMethods(this, json.result.result);
    return attatchMethods(this, json.result);
  } catch (e) {
    if (this.errorListener) {
      if (this.errorListener.manageError(e)) {
        throw(e);
      }
    } else {
      throw(e);
    }
  }
}
Paraview.prototype.createSession = function (name, comment, settingId) {
  try {
    if (!settingId)
      settingId = "default";
    var _pv_ = this;
    this.sessionId = this.jsonRpcClient.VisualizationsManager.createVisualization(name, comment, settingId);
    var reply = executeRemote(_pv_, "get_module", []);
    var method = function () {
      return executeRemote(_pv_, "execute_command", JsonRpcObjectBuilder(extractMethodName(arguments), extractArguments(arguments)));
    }
    var async_method = function () {
      var callback = arguments[0];
      var args = new Array();
      for (var i = 2; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      return executeAsyncRemote(_pv_, "execute_command", JsonRpcObjectBuilder(arguments[1], args), callback);
    }
    for (var i = 0; i < reply.length; i++) {
      var methodname = reply[i];
      this[methodname] = appendMethodName(method, methodname);
      this["Async" + methodname] = appendAsyncMethodName(async_method, methodname);
    }
    paraviewObjects[this.sessionId] = this;
  } catch (e) {
    if (this.errorListener) {
      if (this.errorListener.manageError(e)) {
        throw(e);
      }
    } else {
      throw(e);
    }
  }
}
Paraview.prototype.connectToSession = function (sessionId) {
  var _pv_ = this;
  this.sessionId = sessionId;
  var reply = executeRemote(this, "get_module", []);
  var method = function () {
    return executeRemote(_pv_, "execute_command", JsonRpcObjectBuilder(extractMethodName(arguments), extractArguments(arguments)));
  }
  var async_method = function () {
    var callback = arguments[0];
    var args = new Array();
    for (var i = 2; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    return executeAsyncRemote(_pv_, "execute_command", JsonRpcObjectBuilder(arguments[1], args), callback);
  }
  for (var i = 0; i < reply.length; i++) {
    var methodname = reply[i];
    this[methodname] = appendMethodName(method, methodname);
    this["Async" + methodname] = appendAsyncMethodName(async_method, methodname);
  }
  paraviewObjects[this.sessionId] = this;
}
Paraview.prototype.disconnect = function () {
  try {
    this.jsonRpcClient.VisualizationsManager.stopVisualization(this.sessionId);
  } catch (e) {
    if (this.errorListener) {
      if (this.errorListener.manageError(e)) {
        throw(e);
      }
    } else {
      throw(e);
    }
  }
}
Paraview.prototype.loadPlugins = function () {
  var _pv_ = this;
  var reply = executeRemote(_pv_, "get_plugins", []);
  for (var index = 0; index < reply.length; index++) {
    var pluginName = reply[index];
    this.plugins[pluginName] = this.getPlugin(pluginName);
  }
}
Paraview.prototype.getPlugin = function (pluginName) {
  try {
    var _pv_ = this;
    var plugin = executeRemote(_pv_, "get_plugin", [pluginName]);
    plugin._method = function () {
      var real_params = JsonRpcObjectBuilder(pluginName, JsonRpcObjectBuilder(extractMethodName(arguments), extractArguments(arguments)));
      return executeRemote(_pv_, "execute_command_on_plugin", real_params);
    }
    plugin._async_method = function () {
      var callback = arguments[0];
      var args = new Array();
      for (var i = 2; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      if (args.length == 1) {
        return executeAsyncRemote(_pv_, "execute_command_on_plugin", JsonRpcObjectBuilder(pluginName, JsonRpcObjectBuilder(arguments[1], arguments[2])), callback);
      } else {
        return executeAsyncRemote(_pv_, "execute_command_on_plugin", JsonRpcObjectBuilder(pluginName, JsonRpcObjectBuilder(arguments[1], args)), callback);
      }
    }
    var index;
    for (index in plugin.__methods__) {
      var methodName = plugin.__methods__[index];
      plugin[methodName] = appendMethodName(plugin._method, methodName);
      plugin["Async" + methodName] = appendAsyncMethodName(plugin._async_method, methodName);
    }
    return plugin;
  } catch (e) {
    if (this.errorListener) {
      if (this.errorListener.manageError(e)) {
        throw(e);
      }
    } else {
      throw(e);
    }
  }
}
Paraview.prototype.updateConfiguration = function (enableRendering, imageDeliveryType, geometryDeliveryType) {
  var configuration = "";
  this.lastActivity = new Date().getTime();
  if (enableRendering) {
    configuration = configuration + "1 ";
  } else {
    configuration = configuration + "0 ";
  }
  if (imageDeliveryType == "JPEG") {
    configuration = configuration + "1 ";
  } else if (imageDeliveryType == "PNG") {
    configuration = configuration + "2 ";
  } else if (imageDeliveryType == "RAW") {
    configuration = configuration + "3 ";
  } else {
    configuration = configuration + "0 ";
  }
  if (geometryDeliveryType == "WebGL") {
    configuration = configuration + "1 " + this.webGLPieceSize;
  } else if (geometryDeliveryType == "-") {
    configuration = configuration + "-1 " + this.webGLPieceSize;
  } else {
    configuration = configuration + "0 " + this.webGLPieceSize;
  }
  this.sendEvent('Configure', configuration);
}
Paraview.prototype.startCollaborationNotification = function (functionToTrigger) {
  this.enableCollaborationListener = true;
  if (functionToTrigger) {
    this.onChange = functionToTrigger;
  }
}
Paraview.prototype.stopCollaborationNotification = function () {
  this.enableCollaborationListener = false;
}
Paraview.prototype.fetchCollaborationNotification = function () {
  if (this.enableCollaborationListener) {
    var request = new XMLHttpRequest();
    var url = this.coreServiceURL + "?sid=" + this.sessionId + "&time=" + this.lastChangeTimestamp;
    console.log("Fetching " + url);
    try {
      request.open("GET", url, false);
      request.overrideMimeType('text/plain; charset=x-user-defined');
      request.onreadystatechange = function () {
        if (request.status == 200 && request.readyState == 4) {
          aux = JSON.parse(request.responseText);
          this.lastChangeTimestamp = aux.timestamp;
          this.onChanges(aux);
        }
      }
      request.send();
    } catch (e) {
      if (this.errorListener) {
        if (this.errorListener.manageError(e)) {
          throw(e);
        }
      } else {
        throw(e);
      }
    }
  }
}
Paraview.prototype.getServerInformations = function () {
  try {
    var reply_string = this.jsonRpcClient.VisualizationsManager.getResourceInformations();
    var tmp = eval("[" + reply_string + "]");
    return tmp[0];
  } catch (e) {
    if (this.errorListener) {
      if (this.errorListener.manageError(e)) {
        throw(e);
      }
    } else {
      throw(e);
    }
  }
}
ParaViewWeb.JavaScriptRenderer.prototype.getImageURL = function () {
  var urlTail = "";
  if (this.localTimeStamp < 5 || !this.useLongPolling) {
    urlTail = "&nonBlockingRequest";
  }
  return this.baseURL + "?sid=" + this.sessionId + "&vid=" + this.viewId + "&change=" + (this.nbStart) + "-" + (this.localTimeStamp++) + urlTail;
}
ParaViewWeb.JavaScriptRenderer.prototype.bindToElementId = function (elementId) {
  document.getElementById(elementId).appendChild(this.view);
}
ParaViewWeb.JavaScriptRenderer.prototype.unbindToElementId = function (elementId) {
  document.getElementById(elementId).removeChild(this.view);
}
ParaViewWeb.JavaScriptRenderer.prototype.bindToElement = function (element) {
  element.appendChild(this.view);
}
ParaViewWeb.JavaScriptRenderer.prototype.unbindToElement = function (element) {
  element.removeChild(this.view);
}
ParaViewWeb.JavaScriptRenderer.prototype.init = function (sessionId, viewId) {
  this.sessionId = sessionId;
  this.viewId = viewId;
}
ParaViewWeb.JavaScriptRenderer.prototype.disableLongPolling = function (maxFPS) {
  this.useLongPolling = false;
  this.targetDeltaT = 1000 / maxFPS;
}
ParaViewWeb.JavaScriptRenderer.prototype.enableLongPolling = function () {
  this.useLongPolling = true;
}
ParaViewWeb.JavaScriptRenderer.prototype.interacting = function () {
  this.status = 10;
  if (this.waitForInteraction && !this.useLongPolling) {
    this.loadImage();
  }
}
ParaViewWeb.JavaScriptRenderer.prototype.start = function () {
  if (navigator.appName.indexOf("Microsoft") == -1) {
    this.view.setAttribute("onmousedown", "mouseInteraction('" + this.view.id + "','" + this.sessionId + "','" + this.viewId + "','down',event)");
    this.view.setAttribute("onmouseup", "mouseInteraction('" + this.view.id + "','" + this.sessionId + "','" + this.viewId + "','up',event)");
    this.view.setAttribute("onmousemove", "mouseInteraction('" + this.view.id + "','" + this.sessionId + "','" + this.viewId + "','move',event)");
    this.view.setAttribute("onclick", "mouseInteraction('" + this.view.id + "','" + this.sessionId + "','" + this.viewId + "','click',event)");
    this.view.setAttribute("oncontextmenu", "consumeEvent(event)");
    this.view.setAttribute("ontouchstart", "touchInteraction('" + this.view.id + "','" + this.sessionId + "','" + this.viewId + "','down',event);");
    this.view.setAttribute("ontouchmove", "touchInteraction('" + this.view.id + "','" + this.sessionId + "','" + this.viewId + "','move',event);");
  } else {
    __nb_global_ie_methods__++;
    var currentRootMethodName = "__ie_mouseinteract_" + window.__nb_global_ie_methods__;
    eval(currentRootMethodName + " = function (action,event){mouseInteraction('" + this.view.id + "','" + this.sessionId + "','" + this.viewId + "',action,event);}");
    var currentRootMethod = eval(currentRootMethodName);
    this.view.attachEvent('onmousedown', function (event) {
      currentRootMethod('down', event);
    });
    this.view.attachEvent('onmouseup', function (event) {
      currentRootMethod('up', event);
    });
    this.view.attachEvent('onmousemove', function (event) {
      currentRootMethod('move', event);
    });
    this.view.attachEvent('onclick', function (event) {
      currentRootMethod('click', event);
    });
    this.view.attachEvent('oncontextmenu', function (event) {
      consumeEvent(event);
    });
  }
  this.localTimeStamp = 0;
  this.nbError = 0;
  this.nbShow = 0;
  this.nbStart++;
  this.loadImage();
}
ParaViewWeb.JavaScriptRenderer.prototype.loadImage = function () {
  this.bgImage.src = this.getImageURL();
  this.bgImage.onload = this.show;
  this.bgImage.onabort = function (e) {
    this.otherThis.nbError++;
    if (this.otherThis.nbError < 10) {
      setTimeout('jsRenderers["' + this.otherThis.view.id + '"].loadImage()', 500);
    }
  }
  this.bgImage.onerror = function (e) {
    this.otherThis.nbError++;
    if (this.otherThis.nbError < 10) {
      setTimeout('jsRenderers["' + this.otherThis.view.id + '"].loadImage()', 500);
    }
  }
}
ParaViewWeb.JavaScriptRenderer.prototype.show = function () {
  try {
    renderer = jsRenderers[this.viewId];
    renderer.realWidth = this.width;
    renderer.realHeight = this.height;
    if (navigator.appName.indexOf("Microsoft") != -1) {
      var previousWidth = document.images[this.viewId].width;
      var previousHeigth = document.images[this.viewId].height;
      document.images[this.viewId].src = this.src;
      document.images[this.viewId].width = previousWidth;
      document.images[this.viewId].height = previousHeigth;
    } else {
      document.images[this.viewId].src = this.src;
    }
    this.otherThis.nbShow++;
    if (this.otherThis.nbShow % 20 == 0) {
      this.otherThis.nbShow = 0;
      var newTime = new Date().getTime();
      this.otherThis.fps = Math.floor(20000 / (newTime - this.otherThis.lastImageTime));
      this.otherThis.lastImageTime = newTime;
    }
    this.otherThis.nbError = 0
    this.waitForInteraction = false;
    if (this.otherThis.useLongPolling) {
      this.otherThis.loadImage();
    } else if (this.otherThis.status > 0) {
      this.otherThis.status--;
      setTimeout("jsRenderers['" + this.otherThis.view.id + "'].loadImage()", this.otherThis.targetDeltaT);
    } else {
      this.waitForInteraction = true;
    }
  } catch (e) {
  }
}
ParaViewWeb.JavaScriptRenderer.prototype.setSize = function (width, height) {
  this.view.width = width;
  this.view.height = height;
}
ParaViewWeb.JavaScriptRenderer.prototype.updateServerSizeIfNeeded = function () {
  if (this.view.width != this.realWidth || this.view.height != this.realHeight) {
    updateRendererSize(this.sessionId, this.viewId, this.view.width, this.view.height);
    return true;
  }
  return false;
}
ParaViewWeb.JavaScriptRenderer.prototype.getPageX = function () {
  var location = 0;
  var node = this.view;
  while (node) {
    location += node.offsetLeft;
    node = node.offsetParent;
  }
  return location;
}
ParaViewWeb.JavaScriptRenderer.prototype.getPageY = function () {
  var location = 0;
  var node = this.view;
  while (node) {
    location += node.offsetTop;
    node = node.offsetParent;
  }
  return location;
}
var mvMatrixStack = [];
function mvPushMatrix(m) {
  var copy = mat4.create();
  mat4.set(m, copy);
  mvMatrixStack.push(copy);
}
function mvPopMatrix() {
  if (mvMatrixStack.length == 0) {
    throw"Invalid popMatrix!";
  }
  return mvMatrixStack.pop();
}
function handleMouseDown(event, id) {
  render = webglRenderers[id];
  render.mouseDown = true;
  render.lastMouseX = event.clientX;
  render.lastMouseY = event.clientY;
  if (!render.offlineMode) {
    paraviewObjects[render.sessionId].sendEvent('MouseEvent', render.viewId + ' 0 0');
    updateRendererSize(render.sessionId, render.viewId, render.view.width / render.interactionRatio, render.view.height / render.interactionRatio);
  }
  event.preventDefault();
  return false;
}
function handleMouseUp(event, id) {
  render = webglRenderers[id];
  render.mouseDown = false;
  if (!render.offlineMode) {
    paraviewObjects[render.sessionId].sendEvent('MouseEvent', render.viewId + ' 2 0');
    updateRendererSize(render.sessionId, render.viewId, render.view.width, render.view.height);
    render.forceUpdateCamera();
    render.requestMetaData();
  }
  event.preventDefault();
}
function handleMouseMove(event, id) {
  render = webglRenderers[id];
  if (!render.mouseDown) {
    return;
  }
  var newX = event.clientX;
  var newY = event.clientY;
  var deltaX = newX - render.lastMouseX;
  var deltaY = newY - render.lastMouseY;
  if (event.button == 0) {
    var rX = deltaX / 50.0;
    var rY = deltaY / 50.0;
    var mx = mat4.create();
    mat4.identity(mx);
    mat4.rotate(mx, rX, [0, 1, 0]);
    var my = mat4.create();
    mat4.identity(my);
    mat4.rotate(my, rY, [1, 0, 0]);
    mat4.multiply(mx, my, mx);
    mat4.multiply(mx, render.rotMatrix, render.rotMatrix);
  } else if (event.button == 1) {
    z = Math.abs(render.sceneJSON.Renderers[0].LookAt[9] - render.sceneJSON.Renderers[0].LookAt[3]);
    aux = z / render.objScale;
    render.translation[0] += aux * deltaX / 1500.0;
    render.translation[1] -= aux * deltaY / 1500.0;
  } else if (event.button == 2) {
    render.objScale += render.objScale * (deltaY) / 200.0;
  } else {
    render.objScale += render.objScale * (deltaY) / 200.0;
  }
  render.lastMouseX = newX;
  render.lastMouseY = newY;
  event.preventDefault();
}
function mouseServerInt(rendererId, sessionId, viewId, action, event) {
  consumeEvent(event);
  render = webglRenderers[rendererId];
  render.interaction.lastRealEvent = event;
  var width = render.view.width;
  var height = render.view.height;
  if (action == 'down') {
    if (render.interaction.needUp) {
      paraviewObjects[sessionId].sendEvent('MouseEvent', viewId + ' 2 ' + render.interaction.lastEvent);
    }
    render.interaction.isDragging = true;
    render.interaction.needUp = true;
    switch (event.button) {
      case 1:
        render.interaction.button = '0 ';
        break;
      case 4:
        render.interaction.button = '1 ';
        break;
      case 2:
        render.interaction.button = '2 ';
        break;
    }
    render.interaction.action = " 0 ";
    render.interaction.keys = "";
    if (event.ctrlKey) {
      render.interaction.keys += "1";
    } else {
      render.interaction.keys += "0";
    }
    if (event.shiftKey) {
      render.interaction.keys += " 1";
    } else {
      render.interaction.keys += " 0";
    }
    render.interaction.x = event.screenX;
    render.interaction.y = event.screenY;
    var docX = event.pageX;
    var docY = event.pageY;
    render.interaction.xOrigin = docX - render.getPageX();
    render.interaction.yOrigin = docY - render.getPageY();
  } else if (action == 'move') {
    render.interaction.action = " 1 ";
  } else if (action == 'up' || action == 'click') {
    render.interaction.isDragging = false;
    render.interaction.needUp = false;
    render.interaction.action = " 2 ";
    var mouseInfo = ((event.screenX - render.interaction.x + render.interaction.xOrigin) / height) + " " + (1 - (event.screenY - render.interaction.y + render.interaction.yOrigin) / height) + " " + render.interaction.keys;
    render.interaction.lastEvent = render.interaction.button + mouseInfo;
    paraviewObjects[sessionId].sendEvent('MouseEvent', viewId + render.interaction.action + render.interaction.lastEvent);
    render.interaction.scale = 1;
    render.interaction.button = event.button + ' ';
    render.interaction.keys = "0 0"
  }
  if (render.interaction.isDragging) {
    var mouseInfoDrag = ((event.screenX - render.interaction.x + render.interaction.xOrigin) / height) + " " + (1 - (event.screenY - render.interaction.y + render.interaction.yOrigin) / height) + " " + render.interaction.keys;
    var mouseAction = 'MouseEvent';
    if (action == 'move') {
      mouseAction = 'MouseMove';
    }
    render.interaction.lastEvent = render.interaction.button + mouseInfoDrag;
    paraviewObjects[sessionId].sendEvent(mouseAction, viewId + render.interaction.action + render.interaction.lastEvent);
  }
  return false;
}

ParaViewWeb = {
  test: function () {
    console.log("Calling function ParaViewWeb.test()");
    return "success";
  },

  JavaScriptRenderer: function (rendererId, coreServiceURL) {
    this.baseURL = coreServiceURL + "/LastPicture";
    this.sessionId = "";
    this.viewId = "";
    this.nbError = 0;
    this.nbStart = 0;
    this.interactiveRatio = 2;
    this.localTimeStamp = 0;
    this.bgImage = new Image();
    this.status = 0;
    this.realWidth = -1;
    this.realHeight = -1;
    this.view = new Image();
    this.view.id = rendererId;
    this.view.alt = "ParaView Renderer";
    this.lastImageTime = new Date().getTime();
    this.fps = 0;
    this.targetDeltaT = 33;
    this.nbShow = 0;
    this.useLongPolling = true;
    this.waitForInteraction = true;
    this.bgImage.viewId = rendererId;
    this.bgImage.otherThis = this;
    jsRenderers[rendererId] = this;
  }
};
