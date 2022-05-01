import styles from "./Grain.module.scss";

const Grain = ({ className }: { className?: string }) => {
  return (
    <div className={[styles["grain-container"], className].join(" ")}>
      <span className={styles["grain"]} />
    </div>
  );
};

export default Grain;
