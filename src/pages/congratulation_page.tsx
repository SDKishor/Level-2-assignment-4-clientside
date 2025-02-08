import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export function PurchaseSuccess() {
  useEffect(() => {
    // Add confetti animation
    const createConfetti = () => {
      const colors = ["#10B981", "#3B82F6", "#F59E0B", "#EF4444"];
      const container = document.querySelector(".confetti-container");

      for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * 100 + "%";
        confetti.style.animationDelay = Math.random() * 2 + "s";
        confetti.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];
        container?.appendChild(confetti);
      }
    };

    createConfetti();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Confetti container */}
      <div className="confetti-container absolute inset-0 pointer-events-none"></div>

      {/* Main content */}
      <div className="relative z-10 bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full text-center animate-scale-in">
        {/* Checkmark animation */}
        <div className="flex justify-center mb-8">
          <div className="checkmark-animation">
            <CheckCircle className="w-24 h-24 text-emerald-600" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
          Congratulations! 🎉
        </h1>
        <p className="text-xl text-gray-600 mb-6 animate-fade-in-up delay-100">
          Your new vehicle is officially yours
        </p>

        {/* Order details */}
        <div className="bg-emerald-50 rounded-lg p-6 mb-8 animate-fade-in-up delay-200">
          <div className="flex justify-center gap-6 text-sm">
            <div>
              <p className="font-semibold text-emerald-600">Order Number</p>
              <p className="text-gray-600">
                #{(Math.random() * 1000000).toFixed(0)}
              </p>
            </div>
            <div>
              <p className="font-semibold text-emerald-600">
                Estimated Delivery
              </p>
              <p className="text-gray-600">7-10 business days</p>
            </div>
          </div>
        </div>

        {/* Continue button */}
        <Link
          to="/"
          className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium 
                    hover:bg-emerald-700 transition-transform hover:scale-105 animate-fade-in-up delay-300"
        >
          Continue to Dashboard
        </Link>

        <p className="text-gray-500 mt-6 text-sm animate-fade-in-up delay-400">
          We've sent a confirmation email to your registered address
        </p>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(-100vh) rotate(0deg); }
          100% { transform: translateY(100vh) rotate(360deg); }
        }

        .confetti {
          position: absolute;
          width: 8px;
          height: 8px;
          animation: confetti-fall 3s linear infinite;
          opacity: 0.7;
          border-radius: 2px;
        }

        .checkmark-animation {
          position: relative;
          animation: checkmark 1s ease-in-out;
        }

        @keyframes checkmark {
          0% { transform: scale(0); opacity: 0; }
          80% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }

        .animate-scale-in {
          animation: scaleIn 0.5s ease-out;
        }

        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
    </div>
  );
}
