import { connect } from "react-redux";
import styles from "./UsersPage.module.sass";
import { useEffect } from "react";
import { getUsersThunk } from "../../store/slices/usersSlice";

export const UsersPage = ({ users, isFetching, error, get }) => {
  useEffect(() => {
    get();
  }, []);

  const mapUsers = (u) => (
    <li className={styles.userItem} key={u.login.uuid}>
      <img className={styles.userPhoto} src={u.picture.large} alt="photo" />
      <div className={styles.usersData}>
        <h2 className={styles.userName}>
          {u.name.first} {u.name.last}
        </h2>
        <p>Age: {u.dob.age}</p>
        <p>Email: {u.email}</p>
        <p>Tel: {u.phone}</p>
      </div>
    </li>
  );

  return (
    <div>
      {error && <div>Error</div>}
      {isFetching && <div>Loading...</div>}
      {!error && !isFetching && (
        <ul className={styles.userContainer}>{users.map(mapUsers)}</ul>
      )}
    </div>
  );
};

const mapStateToProps = ({ user }) => user;

const mapDispatchToProps = (dispatch) => ({
  get: () => dispatch(getUsersThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
