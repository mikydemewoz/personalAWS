import { Avatar } from "@mui/material";

export default function Welcome() {
  return (
    <div
      style={{ width: "50%", margin: "50px auto 150px", lineHeight: "2em", backgroundColor: "#f5f5f5", padding: "50px", borderRadius: "10px" }}
    >
      <Avatar
        alt="Michael Admasu"
        src="https://firebasestorage.googleapis.com/v0/b/pet-adoption-f2ba2.appspot.com/o/IMG_2055.JPEG?alt=media&token=7ff07da1-2299-4dd5-a2b1-041c9c032675"
        sx={{ width: 200, height: 200, display:'inline-block' }}
      />
      <h3>Hi, I am Michael Admasu</h3>
      <h1>Full Stack Java Web Developer</h1>
      <p>
        Talented Full Stack Java Developer with 5 years of hands-on experience
        leading complex projects through all phases of software development life
        cycle. Effective leader who designs both frontend and backend
        applications while maximizing performance and functionality. Skilled in
        using technologies such as Java, Spring Boot, React, Express,Node js,
        Kubernetes, MySQL, MongoDB, Docker, Hibernate, and Tomcat.
      </p>
    </div>
  );
}
