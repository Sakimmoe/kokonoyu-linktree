export function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/bg-character.png')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.58)_0%,rgba(255,255,255,0.40)_40%,rgba(255,240,246,0.50)_72%,rgba(243,236,255,0.66)_100%)]" />
    </div>
  );
}
