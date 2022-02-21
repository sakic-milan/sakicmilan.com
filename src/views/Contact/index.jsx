import styles from "./styles.module.scss";

const Contact = () => {
  return (
    <>
      <h1>Contact</h1>
      <p className="pageDescription">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className={styles.form}
      >
        <p>
          <label htmlFor="name">Your Name:</label>
          <input id="name" type="text" name="name" />
        </p>
        <p>
          <label htmlFor="email">Your Email: </label>
          <input id="email" type="email" name="email" />
        </p>
        <p>
          <label htmlFor="message">Message: </label>
          <textarea id="message" name="message" rows="12"></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
};

export default Contact;
