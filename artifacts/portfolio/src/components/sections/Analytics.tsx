import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap, ShoppingCart, Share2, Brain, Cpu, FileText,
  Bot, FileSpreadsheet, Layers, ChevronUp, ChevronDown,
  Image, TrendingUp, Search, BarChart2, Hash as HashIcon,
  XIcon,
  TwitchIcon,
  YoutubeIcon,
  FacebookIcon,
  FramerIcon,
} from "lucide-react";
import "../../styles/analytics.css";
import { SiGoogle, SiGoogleanalytics, SiGooglesearchconsole, SiGoogletagmanager, SiMailchimp, SiMeta, SiPinterest, SiReddit, SiSemrush, SiSnapchat, SiUbereats, SiZoho } from "react-icons/si";

/* ── Inline Brand SVGs ── */
const GoogleAnalyticsIcon = () => (
  <svg viewBox="0 0 24 24" className="tool-brand-svg" fill="none">
    <rect width="24" height="24" rx="4" fill="#E37400"/>
    <rect x="11" y="4" width="4" height="16" rx="2" fill="white"/>
    <rect x="4.5" y="11" width="4" height="9" rx="2" fill="white" opacity="0.7"/>
    <circle cx="19.5" cy="18" r="2.5" fill="white"/>
  </svg>
);
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="tool-brand-svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);
const GTMIcon = () => (
  <svg viewBox="0 0 24 24" className="tool-brand-svg">
    <rect width="24" height="24" rx="4" fill="#8AB4F8"/>
    <path d="M12 3L21 7.5V16.5L12 21L3 16.5V7.5L12 3Z" fill="white" opacity="0.85"/>
    <path d="M12 7L17 9.5V14.5L12 17L7 14.5V9.5L12 7Z" fill="#4285F4"/>
  </svg>
);
const MicrosoftIcon = () => (
  <svg viewBox="0 0 24 24" className="tool-brand-svg" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="10" height="10" fill="#F25022"/>
    <rect x="13" y="1" width="10" height="10" fill="#7FBA00"/>
    <rect x="1" y="13" width="10" height="10" fill="#00A4EF"/>
    <rect x="13" y="13" width="10" height="10" fill="#FFB900"/>
  </svg>
);
const MetaIcon = () => (
  <svg viewBox="0 0 24 24" className="tool-brand-svg">
    <rect width="24" height="24" rx="4" fill="#1877F2"/>
    <path d="M8.5 9.5C8.5 8.12 9.5 7 10.75 7c1.17 0 1.93.7 2.83 2.1l.82 1.3.82-1.3C16.12 7.7 16.88 7 18.13 7c1.25 0 2.25 1.12 2.25 2.5 0 .56-.16 1.1-.44 1.58L15.5 18H13l-4.06-6.92A2.97 2.97 0 018.5 9.5z" fill="white"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="tool-brand-svg" fill="#0A66C2">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const HubSpotIcon = () => (
  <svg viewBox="0 0 24 24" className="tool-brand-svg" fill="#FF7A59">
    <path d="M18.164 7.93V5.084a2.198 2.198 0 001.266-1.978V3.06A2.198 2.198 0 0017.234.864h-.047a2.198 2.198 0 00-2.196 2.196v.047a2.198 2.198 0 001.266 1.978V7.93a6.232 6.232 0 00-2.962 1.3L6.23 4.3a2.45 2.45 0 10-1.166 1.46l6.893 4.837a6.23 6.23 0 000 7.203L5.064 22.64a2.45 2.45 0 101.166 1.46l6.822-4.838a6.235 6.235 0 108.112-11.332zm-1.024 9.565a3.542 3.542 0 11.001-7.084 3.542 3.542 0 010 7.084z"/>
  </svg>
);
const ZapierIcon = () => (
  <svg viewBox="0 0 24 24" className="tool-brand-svg" fill="#FF4A00">
    <path d="M14.784 9.22l-1.4 4.314H9.22l3.78 2.748-1.44 4.434 3.78-2.748 3.78 2.748-1.44-4.434L21.46 13.534h-4.164L14.784 9.22zM9.22 14.78l1.4-4.314h4.164l-3.78-2.748 1.44-4.434-3.78 2.748-3.78-2.748 1.44 4.434L2.54 10.466h4.164L9.22 14.78z"/>
  </svg>
);
const NotionIcon = () => (
  <svg viewBox="0 0 24 24" className="tool-brand-svg" fill="white">
    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.047.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
  </svg>
);
const WordPressIcon = () => (
  <svg viewBox="0 0 24 24" className="tool-brand-svg" fill="#21759B">
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 1.542c2.347 0 4.483.875 6.1 2.3L4.844 14.868A8.456 8.456 0 013.542 12c0-4.673 3.785-8.458 8.458-8.458zM3.79 16.359l5.616-15.4A8.461 8.461 0 0120.458 12c0 4.673-3.785 8.458-8.458 8.458a8.43 8.43 0 01-8.21-4.099z"/>
  </svg>
);
const ShopifyIcon = () => (
  <svg viewBox="0 0 24 24" className="tool-brand-svg" fill="#96BF48">
    <path d="M15.337 23.979l7.216-1.561S19.625 7.2 19.61 7.065a.344.344 0 00-.343-.302c-.015 0-1.532-.03-1.532-.03s-1.019-.984-1.412-1.365v16.611zM13.99 3.847s-.63-.18-1.67-.18c-2.724 0-4.042 1.696-4.042 3.363 0 1.85 1.141 2.773 2.219 3.584.972.728 1.32 1.19 1.32 1.94 0 .957-.765 1.38-1.468 1.38-.903 0-1.958-.451-1.958-.451l-.362 2.2s.968.49 2.315.49c2.862 0 4.585-1.41 4.585-3.645 0-1.932-1.218-2.9-2.347-3.754-.948-.72-1.276-1.146-1.276-1.86 0-.784.615-1.328 1.562-1.328.753 0 1.498.265 1.498.265l.624-1.804zM11.91.51a1.68 1.68 0 00-.955.298l-.297.193s-.797-2.416-2.753-2.416c-1.626 0-2.41 1.286-2.71 2.589-.733.228-1.245.385-1.245.385L3.543 2.35S3.064 5.23 2.524 8.734L.96 19.235 12.54 21.39 16.006 20.4 13.99 3.847 11.91.51z"/>
  </svg>
);
const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" className="tool-brand-svg">
    <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83"/>
    <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF"/>
    <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E"/>
    <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262"/>
    <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE"/>
  </svg>
);
const ChatGPTIcon = () => (
  <svg viewBox="0 0 24 24" className="tool-brand-svg" fill="#10A37F">
    <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 004.981 4.18a5.985 5.985 0 00-3.998 2.9 6.046 6.046 0 00.743 7.097 5.98 5.98 0 00.51 4.911 6.051 6.051 0 006.515 2.9A5.985 5.985 0 0013.26 24a6.056 6.056 0 005.772-4.206 5.99 5.99 0 003.997-2.9 6.056 6.056 0 00-.747-7.073zM13.26 22.43a4.476 4.476 0 01-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 00.392-.681v-6.737l2.02 1.168a.071.071 0 01.038.052v5.583a4.504 4.504 0 01-4.494 4.494zM3.6 18.304a4.47 4.47 0 01-.535-3.014l.142.085 4.783 2.759a.771.771 0 00.78 0l5.843-3.369v2.332a.08.08 0 01-.032.067L9.74 19.95a4.5 4.5 0 01-6.14-1.646zM2.34 7.896a4.485 4.485 0 012.366-1.973V11.6a.766.766 0 00.388.676l5.815 3.355-2.02 1.168a.076.076 0 01-.071 0l-4.83-2.786A4.504 4.504 0 012.34 7.872zm16.597 3.855l-5.843-3.376 2.02-1.164a.076.076 0 01.071 0l4.83 2.786a4.494 4.494 0 01-.676 8.105v-5.683a.79.79 0 00-.402-.668zm2.010-3.023l-.141-.085-4.774-2.782a.776.776 0 00-.785 0L9.409 9.23V6.897a.08.08 0 01.032-.067l4.83-2.791a4.494 4.494 0 016.675 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 01-.038-.057V6.075a4.494 4.494 0 017.375-3.453l-.142.08-4.778 2.758a.795.795 0 00-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
  </svg>
);
const ClaudeIcon = () => (
  <svg viewBox="0 0 24 24" className="tool-brand-svg" fill="#CC785C">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 4.5c1.52 0 2.915.487 4.047 1.308L7.308 16.047A7.463 7.463 0 014.5 12c0-4.136 3.364-7.5 7.5-7.5zm0 15c-1.52 0-2.915-.487-4.047-1.308l8.739-8.739A7.463 7.463 0 0119.5 12c0 4.136-3.364 7.5-7.5 7.5z"/>
  </svg>
);
const LookerIcon = () => (
  <svg viewBox="0 0 24 24" className="tool-brand-svg">
    <rect width="24" height="24" rx="4" fill="#4285F4"/>
    <circle cx="12" cy="10" r="4" fill="white" opacity="0.9"/>
    <circle cx="12" cy="10" r="2" fill="#4285F4"/>
    <path d="M10 14l-3 5h10l-3-5" fill="white" opacity="0.7"/>
  </svg>
);
const AhrefsIcon = () => (
  <svg viewBox="0 0 24 24" className="tool-brand-svg" fill="#FF6B35">
    <path d="M12 2L2 19h4l6-10.4L18 19h4L12 2z"/>
  </svg>
);
const SemrushIcon = () => (
  <svg viewBox="0 0 24 24" className="tool-brand-svg" fill="#FF642D">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
  </svg>
);
const MailchimpIcon = () => (
  <svg viewBox="0 0 24 24" className="tool-brand-svg">
    <path d="M21.121 14.121c-.168.566-.71.879-1.371.879H4.25c-.66 0-1.203-.313-1.371-.879L2 10h20l-.879 4.121zM22 8.5C22 7.672 21.328 7 20.5 7h-17C2.672 7 2 7.672 2 8.5V9h20v-.5z" fill="#FFE01B"/>
    <path d="M12 5c-1.657 0-3 .895-3 2h6c0-1.105-1.343-2-3-2z" fill="#FF8C00"/>
  </svg>
);
const CanvaIcon = () => (
  <svg viewBox="0 0 24 24" className="tool-brand-svg" fill="#00C4CC">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.56 16.89c-.22.327-.56.512-.924.512-.2 0-.403-.056-.583-.17l-2.01-1.328c-.585.427-1.27.65-1.974.65-2.127 0-3.857-1.73-3.857-3.856 0-2.128 1.73-3.858 3.857-3.858 2.128 0 3.857 1.73 3.857 3.858 0 .73-.208 1.435-.592 2.042l1.32 2.01c.31.47.18 1.104-.294 1.14z"/>
  </svg>
);
const PowerBIIcon = () => (
  <svg viewBox="0 0 24 24" className="tool-brand-svg" fill="#F2C811">
    <path d="M2 4h4v16H2V4zm6-2h4v18H8V2zm6 4h4v14h-4V6z"/>
  </svg>
);
const TableauIcon = () => (
  <svg viewBox="0 0 24 24" className="tool-brand-svg" fill="#E97627">
    <path d="M11.5 1.5v4h-4v2h4v4h2v-4h4v-2h-4v-4h-2zm-8 7v3h-3v1.5h3v3H5v-3H2v-1.5h3v-3h1.5zm15 0v3h-3v1.5h3v3H20v-3h-3v-1.5h3v-3H18.5zm-7.5 7v4h-2v-4h-4v-2h4v-4h2v4h4v2h-4z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="tool-brand-svg">
    <defs>
      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#F58529"/>
        <stop offset="50%" stopColor="#DD2A7B"/>
        <stop offset="100%" stopColor="#8134AF"/>
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#ig-grad)"/>
    <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.8" fill="none"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill="white"/>
  </svg>
);
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="tool-brand-svg">
    <rect width="24" height="24" rx="4" fill="#000000"/>
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.74a4.85 4.85 0 01-1.01-.05z" fill="white"/>
  </svg>
);
const SalesforceIcon = () => (
  <svg viewBox="0 0 24 24" className="tool-brand-svg" fill="#00A1E0">
    <path d="M10.03 4.2C11.1 3.08 12.6 2.4 14.28 2.4c2.28 0 4.26 1.26 5.34 3.12a5.88 5.88 0 011.98-.36c3.24 0 5.88 2.64 5.88 5.88 0 3.24-2.64 5.88-5.88 5.88H6.12C3.3 17 1 14.7 1 11.88c0-2.52 1.74-4.62 4.08-5.22C5.52 5.46 6.72 4.2 8.22 4.2c.66 0 1.26.18 1.8.48z"/>
  </svg>
);
const ZohoIcon = () => (
  <svg viewBox="0 0 24 24" className="tool-brand-svg">
    <rect width="24" height="24" rx="4" fill="#E42527"/>
    <text x="3" y="17" fontSize="10" fontWeight="bold" fill="white">ZOHO</text>
  </svg>
);

/* ── Tool Data ── */
const allTools = [
  // Analytics & Tracking
  { name: "Google Analytics 4",        icon: SiGoogleanalytics,   category: "Analytics", glow: "#E37400", bg: "#E37400" },
  { name: "Google Search Console",     icon: GoogleIcon,          category: "Analytics", glow: "#4285F4", bg: "#001a2e" },
  { name: "Google Tag Manager",        icon: SiGoogletagmanager,             category: "Analytics", glow: "#8AB4F8", bg: "#0d1a2e" },
  { name: "Microsoft Clarity",         icon: MicrosoftIcon,       category: "Analytics", glow: "#00BCF2", bg: "#001a2e" },
  // { name: "Hotjar",                    icon: TrendingUp,          category: "Analytics", glow: "#FF3C00", bg: "#2e0a00", iconColor: "#FF3C00" },
  // { name: "Mixpanel",                  icon: BarChart2,           category: "Analytics", glow: "#7856FF", bg: "#0d0020", iconColor: "#7856FF" },
  // SEO & Research
  { name: "Ahrefs",                    icon: AhrefsIcon,          category: "SEO",       glow: "#FF6B35", bg: "#2e0d00" },
  { name: "SEMrush",                   icon: SiSemrush,           category: "SEO",       glow: "#FF642D", bg: "#b54414" },
  // { name: "Moz",                       icon: Search,              category: "SEO",       glow: "#00A4FF", bg: "#001a2e", iconColor: "#00A4FF" },
  { name: "Ubersuggest",               icon: SiUbereats,          category: "SEO",       glow: "#2D9CDB", bg: "#00162e", iconColor: "#2D9CDB" },
  // { name: "Surfer SEO",                icon: Zap,                 category: "SEO",       glow: "#8B5CF6", bg: "#0d0020", iconColor: "#8B5CF6" },
  { name: "Google Trends",             icon: TrendingUp,          category: "SEO",       glow: "#4285F4", bg: "#001a2e", iconColor: "#4285F4" },
  // Paid Ads
  { name: "Meta Ads Manager",          icon: SiMeta,              category: "Paid Ads",  glow: "#ffffff", bg: "#3564fc" },
  { name: "Google Ads",                icon: GoogleIcon,          category: "Paid Ads",  glow: "#4285F4", bg: "#001a2e" },
  { name: "LinkedIn Campaign Manager", icon: LinkedInIcon,        category: "Paid Ads",  glow: "#0A66C2", bg: "#001a2e" },
  // { name: "TikTok Ads",                icon: TikTokIcon,          category: "Paid Ads",  glow: "#FF0050", bg: "#0d0d0d" },
  { name: "Snapchat Ads",              icon: SiSnapchat,          category: "Paid Ads",  glow: "#FFFC00", bg: "#2e2e00", iconColor: "#FFFC00" },
  { name: "X Ads",                     icon: XIcon,               category: "Paid Ads",  glow: "#AAAAAA", bg: "#1a1a1a", iconColor: "#CCCCCC" },
  { name: "Amazon Ads",                icon: ShoppingCart,        category: "Paid Ads",  glow: "#FF9900", bg: "#2e1a00", iconColor: "#FF9900" },
  // Social Media
  // { name: "Hootsuite",                 icon: Share2,              category: "Social",    glow: "#00AEF0", bg: "#0d1a20", iconColor: "#00AEF0" },
  { name: "Instagram",                 icon: InstagramIcon,       category: "Social",    glow: "#DD2A7B", bg: "#1a0010" },
  { name: "Canva",                     icon: CanvaIcon,           category: "Social",    glow: "#00C4CC", bg: "#001a2e" },
  { name: "Meta Business Suite",       icon: SiMeta,              category: "Social",    glow: "#1877F2", bg: "#001a2e" },
  { name: "Pinterest Business",        icon: SiPinterest,         category: "Social",    glow: "#E60023", bg: "#2e0005", iconColor: "#E60023" },
  { name: "TikTok",                    icon: TikTokIcon,          category: "Social",    glow: "#FF0050", bg: "#0d0d0d" },
  { name: "LinkedIn",                  icon: LinkedInIcon,        category: "Social",    glow: "#0A66C2", bg: "#001a2e" },
  { name: "X",                         icon: XIcon,               category: "Social",    glow: "#AAAAAA", bg: "#1a1a1a", iconColor: "#CCCCCC" },
  { name: "Facebook",                  icon: FacebookIcon,        category: "Social",    glow: "#1877F2", bg: "#1877F2" },
  { name: "YouTube",                   icon: YoutubeIcon,         category: "Social",    glow: "#FF0000", bg: "#FF0000", iconColor: "#ffffff" },
  { name: "Reddit",                    icon: SiReddit,            category: "Social",    glow: "#FF4500", bg: "#2e0a00", iconColor: "#FF4500" },
  { name: "Snapchat",                  icon: SiSnapchat,          category: "Social",    glow: "#FFFC00", bg: "#fff200", iconColor: "#ffffff" },
  { name: "Twitch",                    icon: TwitchIcon,          category: "Social",    glow: "#9146FF", bg: "#1a002e", iconColor: "#9146FF" },
  // { name: "",                 icon: Microphone,          category: "Social",    glow: "#000000", bg: "#2e2e2e", iconColor: "#FFFFFF" },
  // CRM & Automation
  { name: "HubSpot",                   icon: HubSpotIcon,         category: "CRM",       glow: "#FF7A59", bg: "#2e1000" },
  { name: "Zoho CRM",                  icon: SiZoho,              category: "CRM",       glow: "#E42527", bg: "#2e0000" },
  { name: "Salesforce",                icon: SalesforceIcon,      category: "CRM",       glow: "#00A1E0", bg: "#001a2e" },
  { name: "Mailchimp",                 icon: SiMailchimp,         category: "CRM",       glow: "#FFE01B", bg: "#000000" },
  // { name: "Zapier",                    icon: ZapierIcon,          category: "CRM",       glow: "#FF4A00", bg: "#2e0d00" },
  // { name: "Make.com",                  icon: Layers,              category: "CRM",       glow: "#6D00CC", bg: "#0d0020", iconColor: "#6D00CC" },
  // AI Tools
  { name: "ChatGPT",                   icon: ChatGPTIcon,         category: "AI",        glow: "#10A37F", bg: "#001a14" },
  { name: "Claude AI",                 icon: ClaudeIcon,          category: "AI",        glow: "#CC785C", bg: "#2e1500" },
  { name: "Gemini AI",                 icon: Brain,               category: "AI",        glow: "#4285F4", bg: "#001a2e", iconColor: "#4285F4" },
  { name: "Midjourney",                icon: Image,               category: "AI",        glow: "#FFFFFF", bg: "#1a1a1a", iconColor: "#CCCCCC" },
  { name: "Perplexity AI",             icon: Cpu,                 category: "AI",        glow: "#b0bbbc", bg: "#131414", iconColor: "#ffffff" },
  // { name: "Jasper AI",                 icon: FileText,            category: "AI",        glow: "#7B5EA7", bg: "#0d0020", iconColor: "#7B5EA7" },
  { name: "Grammarly",                 icon: FileText,            category: "AI",        glow: "#15C39A", bg: "#001a14", iconColor: "#15C39A" },
  { name: "Copy.ai",                   icon: Bot,                 category: "AI",        glow: "#7C3AED", bg: "#0d0020", iconColor: "#7C3AED" },
  // Reporting
  // { name: "Looker Studio",             icon: LookerIcon,          category: "Reporting", glow: "#4285F4", bg: "#001a2e" },
  // { name: "Power BI",                  icon: PowerBIIcon,         category: "Reporting", glow: "#F2C811", bg: "#2e2200" },
  { name: "Tableau",                   icon: TableauIcon,         category: "Reporting", glow: "#E97627", bg: "#2e1200" },
  { name: "Excel",                     icon: FileSpreadsheet,     category: "Reporting", glow: "#217346", bg: "#001a0d", iconColor: "#217346" },
  { name: "Google Sheets",             icon: FileSpreadsheet,     category: "Reporting", glow: "#34A853", bg: "#001a0d", iconColor: "#34A853" },
  // { name: "Notion",                    icon: NotionIcon,          category: "Reporting", glow: "#FFFFFF", bg: "#1a1a1a" },
  // Website & CRO
  { name: "WordPress",                 icon: WordPressIcon,       category: "CRO",       glow: "#21759B", bg: "#001a2e" },
  { name: "Shopify",                   icon: ShopifyIcon,         category: "CRO",       glow: "#96BF48", bg: "#0d2000" },
  { name: "Figma",                     icon: FigmaIcon,           category: "CRO",       glow: "#F24E1E", bg: "#2e0a00" },
  { name: "Framer",                    icon: FramerIcon,              category: "CRO",       glow: "#0099FF", bg: "#001a2e", iconColor: "#0099FF" },
];

const categories = ["Analytics", "SEO", "Paid Ads", "Social", "CRM", "AI", "Reporting", "CRO"];

const brandSvgComponents = [
  GoogleAnalyticsIcon, GoogleIcon, GTMIcon, MicrosoftIcon, MetaIcon,
  LinkedInIcon, HubSpotIcon, ZapierIcon, NotionIcon, WordPressIcon,
  ShopifyIcon, FigmaIcon, ChatGPTIcon, ClaudeIcon, LookerIcon,
  AhrefsIcon, SemrushIcon, MailchimpIcon, CanvaIcon, PowerBIIcon,
  TableauIcon, InstagramIcon, TikTokIcon, SalesforceIcon, ZohoIcon,
];

export default function Analytics() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() =>
    activeCategory === "All"
      ? allTools
      : allTools.filter(t => t.category === activeCategory),
    [activeCategory]
  );

  const visible = showAll ? filtered : filtered.slice(0, 10);

  const handleShowLess = () => {
    setShowAll(false);
    document.getElementById("analytics")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="analytics" className="analytics-section">
      <div className="analytics-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="analytics-header"
        >
          <h2 className="analytics-title">
            <span className="text-gradient">Analytics</span> & Tools
          </h2>
          <p className="analytics-subtitle">
            Mastery of the platforms that track, measure, automate, optimize, and scale modern digital marketing.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="analytics-tabs"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`analytics-tab ${activeCategory === cat ? "analytics-tab-active" : ""}`}
              onClick={() => { setActiveCategory(cat); setShowAll(false); }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Tools Grid */}
        <div className="analytics-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((tool, index) => {
              const IconComp = tool.icon;
              const isBrand = brandSvgComponents.includes(IconComp as any);
              return (
                <motion.div
                  key={tool.name}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: (index % 10) * 0.04 }}
                  className="analytics-card"
                  style={{ "--tool-glow": tool.glow } as React.CSSProperties}
                  title={tool.name}
                >
                  <div
                    className="analytics-icon-box"
                    style={{ backgroundColor: tool.bg }}
                  >
                    {isBrand ? (
                      <IconComp />
                    ) : (
                      <IconComp
                        size={28}
                        color={(tool as any).iconColor || "#ffffff"}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <span className="analytics-tool-name">{tool.name}</span>
                  <span className="analytics-tool-category">{tool.category}</span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* View More / Show Less */}
        {filtered.length > 10 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="analytics-btn-wrapper"
          >
            <button
              className="analytics-view-btn"
              onClick={showAll ? handleShowLess : () => setShowAll(true)}
            >
              <span>{showAll ? "Show Less" : `View All ${filtered.length} Tools`}</span>
              {showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}