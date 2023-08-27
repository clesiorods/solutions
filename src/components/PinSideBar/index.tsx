"use client";

import { useResponsiveClass } from "@/context/responsive.sidebar";
import React from "react";
import Icon from "../Icon";

export default function PinSideBar() {

  const { sideBarClass, handleFixBar } = useResponsiveClass();

  return (
    <button className={`${sideBarClass}`} >
      <Icon icon="solar:pin-circle-bold-duotone" /> {sideBarClass}
    </button>
  );
}