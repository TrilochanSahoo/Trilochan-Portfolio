"use client";
import React from "react";
import { motion } from "framer-motion";
import DockElement from "./ui/dock-element";
import { dockItems } from "@/constants";

const Dock = () => {
  return (
    <motion.div
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        type: "spring",
        damping: 10,
        delay: 3.5,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative flex md:justify-center justify-start z-50"
    >
      <DockElement
        desktopClassName="fixed bottom-4 "
        mobileClassName="fixed bottom-4"
        items={dockItems}
      />
    </motion.div>
  );
};

export default Dock;
