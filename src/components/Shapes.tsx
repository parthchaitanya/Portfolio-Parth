export function Sphere() {
  return <div className="shape shape--sphere" aria-hidden="true" />;
}

export function Torus() {
  return <div className="shape shape--torus" aria-hidden="true" />;
}

export function Pill() {
  return <div className="shape shape--pill" aria-hidden="true" />;
}

export function Cube() {
  return (
    <div className="cube-wrap" aria-hidden="true">
      <div className="cube">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
