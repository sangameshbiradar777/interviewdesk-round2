let k = 2000000;
let s = [290797];
let P = new Array(k);

const MAX_DECIMAL_VALUES = 9;

for (let i = 1; i < 2 * k + 1; i++) {
  s[i] = (s[i - 1] * s[i - 1]) % 50515093;
}

for (let i = 0; i < k; i++) {
  P[i] = [s[2 * i], s[2 * i + 1]];
}

const d = (k) => {
  let minDistance = Number.MAX_VALUE;
  P.sort((a, b) => a[0] - b[0]);
  return dividePairs(P, 0, k - 1, minDistance);
};

function dividePairs(P, start, end, minDistance) {
  if (end <= start) {
    return minDistance;
  }

  if (end === start + 1) {
    minDistance = Math.min(
      minDistance,
      Math.sqrt((P[end][0] - P[start][0]) ** 2 + (P[end][1] - P[start][1]) ** 2)
    );
    return minDistance;
  }

  let middle = Math.floor((start + end) / 2);

  minDistance = Math.min(
    minDistance,
    dividePairs(P, start, middle, minDistance)
  );
  minDistance = Math.min(
    minDistance,
    dividePairs(P, middle + 1, end, minDistance)
  );

  let strip = [];
  for (let i = start; i <= end; i++) {
    if (Math.abs(P[i][0] - P[middle][0]) < minDistance) {
      strip.push(P[i]);
    }
  }

  strip.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < strip.length; i++) {
    for (
      let j = i + 1;
      j < strip.length && strip[j][1] - strip[i][1] < minDistance;
      j++
    ) {
      minDistance = Math.min(
        minDistance,
        Math.sqrt(
          (strip[j][0] - strip[i][0]) ** 2 + (strip[j][1] - strip[i][1]) ** 2
        )
      );
    }
  }
  return minDistance;
}

const shortestDistance = d(k).toFixed(MAX_DECIMAL_VALUES);

console.log(shortestDistance);