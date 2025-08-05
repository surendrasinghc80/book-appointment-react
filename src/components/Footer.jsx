import { Stethoscope, Clock, MapPin, Calendar } from "lucide-react";

// Mock context - replace with your actual context
const useContextState = () => {
  const user = { role: "user" };
  return { user };
};

const Footer = () => {
  const { user } = useContextState();

  const handleNavigation = (path) => {
    console.log(`Navigating to: ${path}`);
  };

  return (
    <footer className="bg-blue-50 border-t border-blue-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Stethoscope className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-blue-600">HealthPort</span>
          </div>

          {/* Quick Info */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-md text-gray-800">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>Mon-Fri: 7AM-7PM | Sat-Sun: 10AM-5PM</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>123 Wellness Street, New Delhi</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 pt-4 border-t border-blue-200">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} HealthPort Hospital. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
