"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function VentureEnhancer() {
  const [target, setTarget] = useState<Element | null>(null);

  useEffect(() => {
    setTarget(document.querySelector(".venture-strip"));
  }, []);

  if (!target) return null;

  return createPortal(
    <>
      <a className="venture-logo-card" href="https://www.srisuprajainfracon.com" target="_blank" rel="noreferrer">
        <span>Professional assignment · Real estate</span>
        <div className="venture-logo-box">
          <Image src="/images/sri-supraja-infracon-logo.svg" alt="Sri Supraja Infracon logo" fill sizes="(max-width: 760px) 80vw, 28vw" />
        </div>
        <strong>Sri Supraja Infracon</strong>
        <p>Project marketing · Lead generation · CRM</p>
        <Arrow />
      </a>
      <a className="venture-logo-card" href="https://suprajahotels.com" target="_blank" rel="noreferrer">
        <span>Business support · Hospitality</span>
        <div className="venture-logo-box">
          <Image src="/images/supraja-hotels-logo.svg" alt="Supraja Hotels logo" fill sizes="(max-width: 760px) 80vw, 28vw" />
        </div>
        <strong>Supraja Hotels</strong>
        <p>Digital marketing · Booking systems · Reporting</p>
        <Arrow />
      </a>
    </>,
    target,
  );
}
