import Image from "next/image";
import styles from "@/styles/Home.module.css";
import withAuthToken from "@/hoc/withAuth";

const ProtectedPage = () => {
  return (
    <div>
      <h1>Welcome to the Protected Page</h1>
      <p>You have access to this page because you are authenticated.</p>
      <Image 
            src="https://media.istockphoto.com/id/177428869/photo/men-without-eyes.jpg?s=2048x2048&w=is&k=20&c=aI-w0YJ3fzcxBraO1LdNjnUIrXjo8emjmpoR_YQIFUo=" 
            alt="alt" 
            width={500} 
            height={500} />
    </div>
  );
};

const VerifyToken = withAuthToken(ProtectedPage);

function home() {
  return (
    <div className={styles.page}>
        <h1>Home</h1>
        <VerifyToken />
    </div>
  )
}

export default home
