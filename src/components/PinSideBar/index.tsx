"use client";

import { useResponsiveClass } from "@/context/responsive.sidebar";
import React from "react";
import Icon from "../Icon";
import IconPinDual from "../Icons/IconPinDual";

export default function PinSideBar() {

  const { sideBarClass, handleFixBar } = useResponsiveClass();

  return (
    <button className={`${sideBarClass}`} >
      <IconPinDual className="w-4" />
    </button>
  );
}