"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
// import { useAudio } from "./AudioContext"; // Commented out for now
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

export function CyberpunkNavbar() {
  // const { isPlaying, toggleAudio, isInitialized } = useAudio(); // Commented out for now
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const scrollWhenReady = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      requestAnimationFrame(() => scrollWhenReady(id));
    }
  };

  // Handle all navigation clicks and close mobile menu
  const handleNavigationClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Always close mobile menu first
    setIsMobileMenuOpen(false);

    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);

      // Check if we're currently on the home page
      if (pathname === "/") {
        // We're on home page, scroll to section
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else {
        // We're on another page, navigate to home page with section hash
        router.push(`/`);
        setTimeout(() => {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 1500);
      }
    }
    // For regular links (like /themes, /crews, /contact), let them navigate normally
    // The mobile menu is already closed above
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on window resize (when switching to desktop)
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        // md breakpoint
        setIsMobileMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu when pathname changes (navigating to different pages)
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Add state for current hash to trigger re-renders when hash changes
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    // Set initial hash
    setCurrentHash(window.location.hash);

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Handle scrolling to section when navigating from another page
  useEffect(() => {
    // Check if we have a hash in the URL and we're on the home page
    if (pathname === "/" && window.location.hash) {
      const targetId = window.location.hash.substring(1);

      // Wait a bit for the page to fully load, then scroll to section
      const timer = setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Also handle hash changes on the same page
  useEffect(() => {
    const handleHashChange = () => {
      if (pathname === "/" && window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [pathname]);

  const navItems = [
    // {
    //   name: "About",
    //   link: "/about",
    // },
    {
      name: "Themes",
      link: "/themes",
    },

    {
      name: "Schedule",
      link: "#schedule",
    },
    {
      name: "Glory",
      link: "#glory",
    },
    {
      name: "Sponsors",
      link: "#sponsors",
    },
    {
      name: "Experts",
      link: "#experts",
    },

    {
      name: "Crews",
      link: "/crews",
    },

    // {
    //   name: "Collaborations",
    //   link: "/collabs",
    // },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  // Function to check if a nav item is active
  const isNavItemActive = (itemLink: string) => {
    if (itemLink.startsWith("#")) {
      // For hash links, check if we're on home page and hash matches
      if (pathname === "/") {
        return currentHash === itemLink;
      }
      return false;
    } else {
      // For page links, check if pathname matches
      return pathname === itemLink;
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-1">
        <div className="relative w-full">
          <div className="flex items-center justify-between">
            {/* Logo - Outside the cyberpunk container */}
            <Link
              href="/"
              className="flex items-center space-x-2 -ml-4 md:ml-0"
            >
              <Image
                src="https://res.cloudinary.com/dkc5idctm/image/upload/v1757167599/logomain_g62cor_filvte.png"
                alt="Hackspire Logo"
                width={600}
                height={150}
                className="h-20 md:h-28 w-auto object-contain"
                priority
              />
            </Link>

            {/* Main navbar with corner cuts - Positioned to the right */}
            <div className="cyberpunk-navbar relative bg-black/90 backdrop-blur-sm ml-auto pointer-events-auto">
              <div className="flex items-center px-3 py-1.5 md:px-4 md:py-2">
                {/* Navigation Items - Desktop */}
                <div className="hidden md:flex items-center">
                  {navItems.map((item, index) => (
                    <div key={item.name} className="flex items-center">
                      <Link
                        href={item.link}
                        onClick={(e) => handleNavigationClick(e, item.link)}
                        className={`transition-colors duration-200 text-sm font-medium tracking-wide uppercase px-3 py-1 ${
                          isNavItemActive(item.link)
                            ? "text-yellow-400"
                            : "text-white/80 hover:text-yellow-400"
                        }`}
                      >
                        {item.name}
                      </Link>
                      {index < navItems.length - 1 && (
                        <div className="w-px h-4 bg-yellow-400/30 mx-1"></div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile hamburger menu */}
                <div className="md:hidden flex items-center">
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-white/80 hover:text-yellow-400 transition-colors duration-200 p-1"
                    aria-label="Toggle mobile menu"
                  >
                    {isMobileMenuOpen ? (
                      <X className="w-4 h-4" />
                    ) : (
                      <Menu className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-4 right-4 z-40 md:hidden"
          >
            <div className="cyberpunk-mobile-menu relative bg-black/95 backdrop-blur-md border border-yellow-400/50 rounded-lg p-6">
              {/* Mobile menu items */}
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.link}
                      onClick={(e) => handleNavigationClick(e, item.link)}
                      className={`block transition-colors duration-200 text-base font-medium tracking-wide uppercase py-3 px-4 border-l-2 ${
                        isNavItemActive(item.link)
                          ? "text-yellow-400 border-yellow-400"
                          : "text-white/80 hover:text-yellow-400 border-transparent hover:border-yellow-400"
                      }`}
                      style={{ fontFamily: "Mokoto Demo" }}
                    >
                      <span className="flex items-center">
                        <span className="text-yellow-400 mr-2">{">"}</span>
                        {item.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
