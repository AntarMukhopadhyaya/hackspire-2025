import CyberButton from "./CyberButton";

export default function ButtonDemo() {
  const handleRegisterClick = () => {
    // Add your registration logic here
    console.log("Register Now clicked!");
    // You could redirect to registration page:
    // window.location.href = "/register";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black gap-8 p-8">
      <h1 className="text-4xl font-bold text-cyber-yellow mb-8">
        Cyber Button Demo
      </h1>

      {/* Main Register Button */}
      <CyberButton onClick={handleRegisterClick}>Register Now</CyberButton>

      {/* Additional button examples */}
      <div className="flex flex-wrap gap-4 mt-8">
        <CyberButton onClick={() => console.log("Learn More clicked!")}>
          Learn More
        </CyberButton>

        <CyberButton href="/about">About Us</CyberButton>

        <CyberButton onClick={() => console.log("Join Team clicked!")}>
          Join Team
        </CyberButton>
      </div>

      <p className="text-cyber-blue mt-8 text-center max-w-md">
        Hover over the buttons to see the glitch effect! The corners are cut,
        yellow background with orange border, and uses Mokoto Demo font.
      </p>
    </div>
  );
}
