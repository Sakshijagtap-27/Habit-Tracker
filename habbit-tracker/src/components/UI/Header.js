import styles from "./Header.module.css";

const Header = () => {
	return (
		<div className={styles.header}>
			<h1>Habit tracker</h1>
			<p>Keep your habits on track!</p>
			
		</div>
	);
};
export default Header;