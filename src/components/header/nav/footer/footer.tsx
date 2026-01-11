import styles from "./style.module.scss";
import { translate } from "../../anim";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>Built by:</span> Shristi Rajpoot © {new Date().getFullYear()}
        </motion.li>
      </ul>

      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>Design Inspiration:</span> Studio Lumio
        </motion.li>
      </ul>

      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>Typography:</span> Inter
        </motion.li>
      </ul>

      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>Images:</span> Unsplash
        </motion.li>
      </ul>

      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <a
            href="https://github.com/Shristirajpoot"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </motion.li>

        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <a
            href="https://www.linkedin.com/in/shristi-rajpoot-36774b281/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </motion.li>

        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <a href="mailto:shristirajpoot369@gmail.com">
            Contact
          </a>
        </motion.li>
      </ul>
    </footer>
  );
}
