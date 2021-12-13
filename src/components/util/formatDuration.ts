export function formatHmsDuration(n: number): string {
  const h = Math.floor(n / 3600);
  const m = Math.floor(n % 3600 / 60);
  const s = Math.floor(n % 3600 % 60);

  return [h, m, s]
    .map(v => v < 10 ? "0" + v : v)
    .filter((v,i) => v !== "00" || i > 0)
    .join(":");
}
