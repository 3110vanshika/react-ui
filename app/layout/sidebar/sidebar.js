"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { navItems } from "./navitem";
import { useRouter } from "next/navigation";

export default function Sidebar({ collapsed, setCollapsed }) {
  const [openMenus, setOpenMenus] = useState({});
  const [activeItem, setActiveItem] = useState(0);

  const toggleSubmenu = (i) => {
    if (collapsed) return;
    setOpenMenus((prev) => ({ ...prev, [i]: !prev[i] }));
  };


  return (
    <aside
      className={`
        fixed flex flex-col h-screen border-r border-[#E8E8E8]
        transition-[width] duration-300 ease-in-out p-2 bg-white
        ${collapsed ? "w-20" : "w-64"}
      `}
    >
      {/* Toggle button */}
      <button
        onClick={() => {
          setCollapsed((currentValue) => !currentValue);

          setOpenMenus({});
        }}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        className="absolute top-8 -right-3 z-10 w-6 h-6 rounded-full
          bg-[#7c6af7] hover:bg-[#6a58e0] hover:scale-110
          flex items-center justify-center
          text-white shadow-lg
          transition-all duration-300 ease-in-out"
      >
        <ChevronRight
          size={13}
          className={`transition-transform duration-300 ease-in-out ${collapsed ? "rotate-0" : "rotate-180"}`}
        />
      </button>

      {/* Brand */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-[#E8E8E8] overflow-hidden">
        <div className="w-8 h-8 rounded-full bg-[#7c6af7] flex items-center justify-center
          text-white text-[11px] font-bold tracking-wider shrink-0
          transition-transform duration-300 ease-in-out hover:scale-110"
        >
          RU
        </div>
        <span
          className={`
            text-[#7c6af7] text-sm font-semibold tracking-widest uppercase
            whitespace-nowrap overflow-hidden
            transition-[max-width,opacity] duration-300 ease-in-out
            ${collapsed ? "max-w-0 opacity-0" : "max-w-40 opacity-100"}
          `}
        >
          React UI
        </span>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1 px-2 py-4 flex-1 overflow-y-auto">
        {navItems.map((item, i) => {
          const Icon = item.icon;
          const hasSubmenu = item.submenu?.length > 0;
          const isOpen = !!openMenus[i];
          const isActive = activeItem === i;

          return (
            <div key={i}>
              {/* Parent row */}
              <button
                onClick={() => {
                  setActiveItem(i);
                  if (hasSubmenu) toggleSubmenu(i);
                }}
                className={`
                  w-full flex items-center gap-3 rounded-lg px-3 py-2.5
                  transition-all duration-150
                  ${isActive
                    ? "bg-[#e8e6ff] text-[#7c6af7]"
                    : "text-[#888897] hover:text-black hover:bg-[#f4f3ff]"}
                `}
              >
                {/* Lucide icon */}
                <Icon
                  size={18}
                  className="shrink-0 transition-transform duration-150 hover:scale-110"
                />

                {/* Label */}
                <span
                  className={`
                    flex-1 text-left text-[13px] tracking-wide whitespace-nowrap overflow-hidden
                    transition-[max-width,opacity] duration-300 ease-in-out
                    ${collapsed ? "max-w-0 opacity-0" : "max-w-40 opacity-100"}
                  `}
                >
                  {item.label}
                </span>

                {/* Chevron */}
                {hasSubmenu && (
                  <ChevronRight
                    size={13}
                    className={`
                      shrink-0 transition-[transform,max-width,opacity] duration-300 ease-in-out
                      ${isOpen ? "rotate-90" : "rotate-0"}
                      ${collapsed ? "max-w-0 opacity-0 overflow-hidden" : "max-w-4 opacity-100"}
                    `}
                  />
                )}
              </button>

              {/* Submenu */}
              {hasSubmenu && (
                <div
                  className={`
                    flex flex-col gap-0.5 overflow-hidden mt-1
                    transition-[max-height,opacity] duration-300 ease-in-out
                    ${isOpen && !collapsed ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  {item.submenu.map((sub, j) => {
                    const SubIcon = sub.icon;
                    return (
                      <button
                        key={j}
                        className="w-full flex items-center gap-3 rounded-lg pl-9 pr-3 py-2
                          text-[13px] text-[#888897] hover:text-black hover:bg-[#f4f3ff]
                          transition-all duration-150"
                      >
                        <SubIcon size={14} className="shrink-0 text-[#7c6af7]" />
                        <span className="whitespace-nowrap overflow-hidden">{sub.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-2 pb-4 border-t border-[#E8E8E8] pt-4">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-7 h-7 rounded-full bg-[#2a2a2f] flex items-center justify-center
            text-[#888897] text-[10px] font-bold shrink-0"
          >
            JD
          </div>
          <span
            className={`
              text-[#888897] text-[12px] whitespace-nowrap overflow-hidden
              transition-[max-width,opacity] duration-300 ease-in-out
              ${collapsed ? "max-w-0 opacity-0" : "max-w-40 opacity-100"}
            `}
          >
            john@dev.io
          </span>
        </div>
      </div>
    </aside>
  );
}