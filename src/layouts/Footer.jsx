import styles from "../css/Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>

            {/* WAVE SVG */}
            <div className={styles.waveWrapper}>
                <svg
                    viewBox="0 0 1440 120"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    className={styles.wave}
                >
                    <path
                        d="M0,60 C180,120 360,0 540,40 C720,80 900,120 1080,80 C1260,40 1380,100 1440,80 L1440,120 L0,120 Z"
                        fill="#4a8c6f"
                    />
                </svg>
            </div>

            {/* FOOTER BODY */}
            <div className={styles.footerBody}>
                <p className={styles.credit}>Crafted by Gopala Krishnan</p>
            </div>

        </footer>
    );
}

export default Footer;