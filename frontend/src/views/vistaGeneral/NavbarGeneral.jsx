import React, { useEffect, useState } from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import "./general.css";

function NavbarGeneral() {

  //Menu
  const itemRenderer = (item) => (
    <a className="flex align-items-center p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {item.shortcut}
        </span>
      )}
    </a>
  );

  const items = [
    {
      label: "Inicio",
      icon: "pi pi-home",
    },
    {
      label: "Donar",
      icon: "pi pi-star",
    },
    // {
    //   label: "Projects",
    //   icon: "pi pi-search",
    //   items: [
    //     {
    //       label: "Core",
    //       icon: "pi pi-bolt",
    //       shortcut: "⌘+S",
    //       template: itemRenderer,
    //     },
    //     {
    //       label: "Blocks",
    //       icon: "pi pi-server",
    //       shortcut: "⌘+B",
    //       template: itemRenderer,
    //     },
    //     {
    //       label: "UI Kit",
    //       icon: "pi pi-pencil",
    //       shortcut: "⌘+U",
    //       template: itemRenderer,
    //     },
    //     {
    //       separator: true,
    //     },
    //     {
    //       label: "Templates",
    //       icon: "pi pi-palette",
    //       items: [
    //         {
    //           label: "Apollo",
    //           icon: "pi pi-palette",
    //           badge: 2,
    //           template: itemRenderer,
    //         },
    //         {
    //           label: "Ultima",
    //           icon: "pi pi-palette",
    //           badge: 3,
    //           template: itemRenderer,
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      label: "Contactanos",
      icon: "pi pi-envelope",
      badge: 3,
      template: itemRenderer,
    },
  ];

  const start = (
    <>
      {" "}
      <img
        alt="logo"
        src="https://primefaces.org/cdn/primereact/images/logo.png"
        height="40"
        className="mr-2"
      />
    </>
  );

  const end = (
    <div className="flex align-items-center gap-2">
      <InputText placeholder="Buscar" type="text" className="w-8rem sm:w-auto" />
      {/* <Avatar
        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
        shape="circle"
      /> */}
    </div>
  );

  ///


  return (
    <>
      {" "}
      <div className="fullscreen-container">
        <Menubar model={items} start={start} end={end} />
      </div>
 
    </>
  );
}

export default NavbarGeneral;
