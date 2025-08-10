// Reusable Tailwind class strings for consistent styling

// Typography classes
export const TITLE_CLASSES =
  "text-5xl sm:text-7xl md:text-[6rem] lg:text-[8rem] xl:text-8xl 2xl:text-[8rem] font-bold text-black font-sddystopiandemo";
export const SUBTITLE_CLASSES =
  "text-center max-w-4xl mx-auto text-sm sm:text-sm md:text-xl text-black leading-relaxed font-mokoto";
export const SECTION_TITLE_CLASSES =
  "text-3xl md:text-4xl font-bold text-white mb-6 font-sddystopiandemo";
export const CARD_TITLE_CLASSES =
  "text-xl md:text-2xl font-bold text-black mb-2 transition-all duration-300 group-hover:glitch-text";
export const MOKOTO_TEXT_CLASSES = "font-mokoto";

// Layout classes
export const CONTAINER_CLASSES = "max-w-6xl mx-auto mb-20 px-4";
export const GRID_CLASSES =
  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2";
export const BENEFITS_GRID_CLASSES = "grid md:grid-cols-2 gap-8 px-2";
export const CENTER_CONTENT_CLASSES = "text-center mb-16 px-4";

// Card classes
export const CARD_BASE_CLASSES =
  "relative group cursor-pointer transition-all duration-300 hover:scale-105 h-full";
export const CARD_MIN_HEIGHT_CLASSES = "min-h-[280px]";
export const CARD_CONTENT_CLASSES =
  "relative z-10 flex flex-col h-full items-center text-center";
export const CARD_ICON_CLASSES = "w-24 h-24 relative mb-4";

// Circuit board pattern classes
export const CIRCUIT_HORIZONTAL_CLASSES =
  "absolute left-0 right-0 h-px bg-black";
export const CIRCUIT_VERTICAL_CLASSES = "absolute top-0 bottom-0 w-px bg-black";
export const CIRCUIT_NODE_CLASSES = "absolute w-1 h-1 bg-black rounded-full";

// Clip-path CSS variables
export const CLIP_PATH_VARS = {
  trapezium:
    "polygon(3% 0, 97% 0, 100% 11%, 80% 91%, 72% 100%, 24% 100%, 16% 90%, 0 12%)",
  corners:
    "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
  leftTrap: "polygon(0% 0%, 100% 10%, 100% 90%, 0% 100%)",
  rightTrap: "polygon(0% 10%, 100% 0%, 100% 100%, 0% 90%)",
  leftTrapSecondary: "polygon(0% 0%, 100% 15%, 100% 85%, 0% 100%)",
  rightTrapSecondary: "polygon(0% 15%, 100% 0%, 100% 100%, 0% 85%)",
};

// Background decoration classes
export const MATRIX_COLUMN_CLASSES =
  "absolute top-0 text-green-400 font-mono text-xs leading-none";
export const MATRIX_CONTAINER_CLASSES =
  "fixed inset-0 z-0 pointer-events-none overflow-hidden";

// Spacing utilities
export const SECTION_SPACING = "mb-20";
export const CARD_PADDING = "p-4 md:p-6";
export const CONTENT_PADDING = "px-4";

// Color utilities
export const YELLOW_GRADIENT = "bg-yellow-400";
export const ORANGE_ACCENT = "bg-orange-500";
export const CIRCUIT_OPACITY_HIGH = "opacity-70";
export const CIRCUIT_OPACITY_MED = "opacity-60";
export const CIRCUIT_OPACITY_LOW = "opacity-50";

// Contact page specific classes
export const CONTACT_TITLE_CLASSES =
  "text-7xl sm:text-8xl md:text-[8rem] lg:text-[10rem] xl:text-8xl 2xl:text-[8rem] font-bold text-black font-sddystopiandemo";
export const CONTACT_SUBTITLE_CLASSES =
  "text-center max-w-4xl mx-auto -mt-4 pb-8 text-sm sm:text-sm md:text-xl text-black leading-relaxed font-mokoto px-12 md:px-30";
export const CONTACT_CARD_GRID_CLASSES = "grid md:grid-cols-3 gap-8";
export const CONTACT_FORM_LABEL_CLASSES =
  "block text-sm font-medium text-white mb-2";
export const CONTACT_INPUT_CLASSES =
  "w-full px-4 py-3 bg-black/60 border-2 border-yellow-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300";
export const CONTACT_MAP_TITLE_CLASSES =
  "text-4xl md:text-6xl lg:text-7xl font-bold text-yellow-400 font-sddystopiandemo drop-shadow-2xl";
export const CONTACT_MAP_SUBTITLE_CLASSES =
  "text-lg md:text-xl text-white font-mokoto max-w-2xl mx-auto px-4";

// Contact page clip-paths (converted to percentage-based)
export const CONTACT_CLIP_PATHS = {
  mainTrapezium:
    "polygon(3% 0, 97% 0, 100% 11%, 80% 91%, 72% 100%, 24% 100%, 16% 90%, 0 12%)",
  contactCard:
    "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
  formContainer:
    "polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px)",
  inputField:
    "polygon(0 1%, 100% 1%, 100% 30%, 96% 79%, 68% 80%, 14% 81%, 11% 100%, 0 100%)",
  successMessage:
    "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
  mapFrame:
    "polygon(2% 42%, 0 42%, 3% 0, 97% 0, 100% 42%, 98% 42%, 98% 55%, 100% 55%, 97% 100%, 3% 100%, 0 56%, 2% 56%)",
  leftTrapMain: "polygon(0% 0%, 100% 10%, 100% 90%, 0% 100%)",
  leftTrapSecondary: "polygon(0% 0%, 100% 15%, 100% 85%, 0% 100%)",
  rightTrapMain: "polygon(0% 10%, 100% 0%, 100% 100%, 0% 90%)",
  rightTrapSecondary: "polygon(0% 15%, 100% 0%, 100% 100%, 0% 85%)",
  triangleCutUp: "polygon(0% 20%, 100% 0%, 100% 100%, 0% 80%)",
  triangleCutDown: "polygon(0% 0%, 100% 20%, 100% 80%, 0% 100%)",
};

// Tracks page specific classes
export const TRACKS_TITLE_CLASSES =
  "text-7xl sm:text-8xl md:text-[8rem] lg:text-[10rem] xl:text-8xl 2xl:text-[8rem] font-bold text-black font-sddystopiandemo";
export const TRACKS_SUBTITLE_CLASSES =
  "text-center max-w-4xl mx-auto mt-2 pb-12 text-sm sm:text-sm md:text-xl text-black leading-relaxed font-mokoto px-8 md:px-16";
export const TRACKS_CONTAINER_CLASSES =
  "min-h-screen text-white py-20 px-4 relative overflow-hidden";
export const MATRIX_WRAPPER_CLASSES =
  "fixed inset-0 z-0 pointer-events-none overflow-hidden";
export const MATRIX_OPACITY_CONTAINER = "absolute inset-0 opacity-20";
export const MODAL_PANEL_CLASSES =
  "relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-8";

// Tracks page class constants
export const TRACK_CARD_CONTAINER_CLASSES =
  "relative p-4 group cursor-pointer transition-all duration-300 hover:scale-105 h-full min-h-[460px]";
export const TRACK_CARD_BG_CLASSES =
  "absolute inset-0 bg-yellow-400 transition-all duration-300 group-hover:animate-pulse";
export const TRACK_CARD_BORDER_CLASSES =
  "absolute -inset-1 bg-yellow-500 transition-all duration-300 group-hover:bg-orange-500";
export const TRACK_CARD_GLITCH_RED_CLASSES =
  "absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-30 transition-opacity duration-150 glitch-overlay-1";
export const TRACK_CARD_GLITCH_CYAN_CLASSES =
  "absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-30 transition-opacity duration-150 glitch-overlay-2";
export const TRACK_CARD_CONTENT_CLASSES = "relative z-10 h-full flex flex-col";
export const TRACK_HEADER_CLASSES = "flex items-center justify-between mb-4";
export const TRACK_ICON_CONTAINER_CLASSES = "p-3 bg-black/20 rounded-lg";
export const TRACK_ARTICLE_BUTTON_CLASSES =
  "flex items-center justify-center w-10 h-10 rounded-full bg-black/20 text-black hover:bg-black/30 transition-all duration-200 hover:scale-110";
export const TRACK_TITLE_CLASSES =
  "text-2xl md:text-3xl font-bold text-black mb-2 transition-all duration-300 group-hover:glitch-text";
export const TRACK_SUBTITLE_CLASSES =
  "text-black text-lg leading-relaxed transition-all duration-300 group-hover:text-shadow-glow";
export const TRACK_DESCRIPTION_CLASSES =
  "text-black text-base leading-relaxed mb-2";
export const TRACK_CHALLENGES_TITLE_CLASSES = "text-black font-semibold mb-1";
export const TRACK_CHALLENGE_TAG_CLASSES =
  "px-3 py-1 text-xs bg-black/10 rounded-full text-black backdrop-blur-sm border border-black/20 hover:scale-105 transition-transform duration-200";
export const GLORY_SECTION_TITLE_CLASSES =
  "text-4xl md:text-5xl font-bold text-white mb-4 font-sddystopiandemo";
export const GLORY_SECTION_SUBTITLE_CLASSES =
  "text-white/80 text-lg max-w-3xl mx-auto font-mokoto";
export const CTA_SECTION_TITLE_CLASSES =
  "text-3xl md:text-4xl font-bold text-white mb-6 font-sddystopiandemo";
export const CTA_SECTION_TEXT_CLASSES =
  "text-white text-lg mb-8 max-w-2xl mx-auto font-mokoto";

// Tracks page clip-path variables
export const TRACKS_CLIP_PATHS = {
  mainTrapezium:
    "polygon(5% 0, 95% 0, 100% 15%, 90% 85%, 85% 100%, 15% 100%, 10% 85%, 0 15%)",
  leftTrapMain: "polygon(0% 0%, 100% 10%, 100% 90%, 0% 100%)",
  leftTrapSecondary: "polygon(0% 0%, 100% 15%, 100% 85%, 0% 100%)",
  rightTrapMain: "polygon(0% 10%, 100% 0%, 100% 100%, 0% 90%)",
  rightTrapSecondary: "polygon(0% 15%, 100% 0%, 100% 100%, 0% 85%)",
  triangleCutUp: "polygon(0% 20%, 100% 0%, 100% 100%, 0% 80%)",
  triangleCutDown: "polygon(0% 0%, 100% 20%, 100% 80%, 0% 100%)",
  // Track card corner cuts (percentage-based version of 20px cuts)
  trackCard:
    "polygon(1.5% 0%, 100% 0%, 100% calc(100% - 1.5%), calc(100% - 1.5%) 100%, 0% 100%, 0% 1.5%)",
};

// About page specific styles
export const ABOUT_TITLE_CLASSES =
  "text-7xl sm:text-8xl md:text-[8rem] lg:text-[10rem] xl:text-8xl 2xl:text-[8rem] font-bold text-black font-sddystopiandemo";

export const ABOUT_SUBTITLE_CLASSES =
  "text-center max-w-4xl mx-auto mt-2 pb-12 text-xs sm:text-sm md:text-xl text-black leading-relaxed font-mokoto px-8 md:px-16";

export const ABOUT_SECTION_TITLE_CLASSES =
  "text-4xl md:text-5xl font-bold text-black mb-6 font-sddystopiandemo";

export const ABOUT_SECTION_TEXT_CLASSES =
  "text-lg md:text-xl leading-relaxed text-black max-w-3xl mx-auto font-mokoto";

export const ABOUT_FEATURE_TITLE_CLASSES =
  "text-2xl font-bold text-black mb-4 font-sddystopiandemo";

export const ABOUT_FEATURE_TEXT_CLASSES =
  "text-black leading-relaxed font-mokoto";

export const ABOUT_VISION_TITLE_CLASSES =
  "text-4xl md:text-5xl font-bold text-white mb-8 font-sddystopiandemo";

export const ABOUT_VISION_TEXT_CLASSES =
  "text-xl md:text-2xl leading-relaxed text-black mb-6 font-mokoto";

export const ABOUT_VISION_QUOTE_CLASSES =
  "text-lg text-black italic font-mokoto";

export const ABOUT_CTA_TITLE_CLASSES =
  "text-3xl md:text-4xl font-bold text-white mb-6 font-sddystopiandemo";

export const ABOUT_CTA_TEXT_CLASSES = "text-lg text-gray-300 mb-8 font-mokoto";

export const ABOUT_CONTAINER_CLASSES =
  "relative p-4 group cursor-pointer transition-all duration-300 hover:scale-105";

export const ABOUT_CYBERPUNK_BG_CLASSES =
  "absolute inset-0 bg-yellow-400 transition-all duration-300 group-hover:animate-pulse";

export const ABOUT_CYBERPUNK_BORDER_CLASSES =
  "absolute -inset-1 bg-yellow-500 transition-all duration-300 group-hover:bg-orange-500";

export const ABOUT_CONTENT_WRAPPER_CLASSES = "relative z-10 p-8 md:p-12";

export const ABOUT_CONTENT_WRAPPER_SMALL_CLASSES = "relative z-10 p-8";

export const ABOUT_ICON_CONTAINER_CLASSES =
  "p-3 bg-black/20 rounded-lg w-fit mb-4";

// About page clip-paths (percentage-based)
export const ABOUT_CLIP_PATHS = {
  mainTrapezium:
    "polygon(5% 0, 95% 0, 100% 15%, 90% 85%, 85% 100%, 15% 100%, 10% 85%, 0 15%)",
  cornerCuts:
    "polygon(1.5% 0%, 100% 0%, 100% calc(100% - 1.5%), calc(100% - 1.5%) 100%, 0% 100%, 0% 1.5%)",
  leftTrapMain: "polygon(0% 0%, 100% 10%, 100% 90%, 0% 100%)",
  leftTrapSecondary: "polygon(0% 0%, 100% 15%, 100% 85%, 0% 100%)",
  rightTrapMain: "polygon(0% 10%, 100% 0%, 100% 100%, 0% 90%)",
  rightTrapSecondary: "polygon(0% 15%, 100% 0%, 100% 100%, 0% 85%)",
};

// Layout component styles
export const LAYOUT_BODY_CLASSES = "antialiased";
export const LAYOUT_SPOTLIGHT_CONTAINER_CLASSES =
  "fixed top-0 left-0 w-full h-full z-0 pointer-events-none";
export const LAYOUT_CONTENT_CONTAINER_CLASSES = "relative z-10";

// Layout gradients (as CSS variables for better performance)
export const LAYOUT_GRADIENTS = {
  cyberpunkSpotlight:
    "radial-gradient(ellipse 60% 40% at 20% 10%, rgba(234, 179, 8, 0.25) 0%, rgba(161, 98, 7, 0.15) 40%, rgba(120, 53, 15, 0.08) 70%, transparent 100%)",
  holographicOverlay:
    "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.6) 75%)",
};
