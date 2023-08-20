import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import React from "react";
// import "./styles.css";
import App from "./_app";
// import ""

import { Logo } from "@pmndrs/branding";

const inter = Inter({ subsets: ["latin"] });

function Overlay() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    >
      <a
        href="https://pmnd.rs/"
        style={{ position: "absolute", bottom: 40, left: 90, fontSize: "13px" }}
      >
        pmnd.rs
        <br />
        dev collective
      </a>
      <div
        style={{ position: "absolute", top: 40, left: 40, fontSize: "13px" }}
      >
        bad —
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 40,
          fontSize: "13px",
        }}
      >
        07/02/2022
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <App />
          {/* <Overlay /> */}
          {/* <Logo
            style={{ position: "absolute", bottom: 40, left: 40, width: 30 }}
          /> */}
          <h1 className="text-5xl">Heloo</h1>
        </div>
      </main>
    </>
  );
}
