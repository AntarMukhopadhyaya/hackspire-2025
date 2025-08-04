export default function ThreadsTestPage() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        background: "#000",
      }}
    >
      {/*
      <Threads
        amplitude={1}
        distance={0}
        enableMouseInteraction={true}
        className="w-full h-full"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: 48,
          fontWeight: 700,
          pointerEvents: "none",
        }}
      >
        Threads Background Test
      </div>
    </div>
  );
}
