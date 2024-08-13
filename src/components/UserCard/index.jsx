import { connect } from "react-redux";
import { FaHeart } from "react-icons/fa";
import classNames from "classnames";
import styles from "./UserCard.module.css";
import { toggleFavourite } from "../../store/slices/userCardSlice";

function UserCard({ user, toggle }) {
  const { firstName, lastName, isFavourite } = user;

  const buttonClassName = classNames(styles.btnCard, {
    [styles.isFavouritBtn]: isFavourite,
  });

  return (
    <article className={styles.mainContainer}>
      <h1>User Card</h1>
      <div className={styles.containerCard}>
        <p className={styles.userName}>
          {firstName} {lastName}
        </p>
        <button className={buttonClassName} onClick={() => toggle()}>
          <FaHeart />
        </button>
      </div>
    </article>
  );
}

const mapStateToProps = ({ cardUser }) => cardUser;

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleFavourite()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
