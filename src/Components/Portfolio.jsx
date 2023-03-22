import { Box, Grid } from "@mui/material";
import WorkCard from "./WorkCard";

export default function Portfolio() {
  return (
    <div
      style={{ margin: "0px auto", backgroundColor: "#F7F7F7", width: "100%" }}
    >
      <Box sx={{border:'1px solid #F7F7F7'}} padding={5} >
        <Grid
          container
          rowSpacing={5}
          justifySelf={'center'}
          marginLeft={5}
        >
          <Grid item xs={12} md={4} sm={6}>
            <WorkCard {...{Title:'Library Management System',Desc:"Developed library system to manage book borrowing process with functionalities for admin and registered users. Technologies Used: Java, Java SE, Swing, IntelliJ, NetBeans.",img:'https://imageio.forbes.com/specials-images/imageserve/5e7cce1921695a000666cc29/Java-14/960x0.jpg?format=jpg&width=960'}}/>
          </Grid>
          <Grid item xs={12} md={4} sm={6} >
            <WorkCard {...{Title:'WAP Chat',Desc:"Built real-time chap application with persistent user and group chat state. Technologies Used: JavaScript, Express, MVC, Socket.IO, MongoDB, Tailwind, JWT, Docker, VS Code",img:'https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.png'}} />
          </Grid>
          <Grid item xs={12} md={4} sm={6} >
            <WorkCard {...{Title:'Property Management System',Desc:"Created web application for users to search for houses for sale. Technologies Used: Spring Boot, React, Redux, Material UI, E-Chart, Redis, Postgres, AWS S3, Spring Security, JWT, Docker.",img:'https://miro.medium.com/max/700/1*-uckV8DOh3l0bCvqZ73zYg.png'}} />
          </Grid>
          <Grid item xs={12} md={4} sm={6} >
            <WorkCard {...{Title:'House Rental',Desc:"Designed reliable and functional web application to coordinate rental properties. Technologies Used: Spring Boot, HTML5, CSS, JavaScript, React, Material UI, MongoDB, Redis, Kafka, SMTP, Web Client, RESET, ISTIO, Zipkin, Kiali, Circuit Breaker, Spring Security, JWT, Docker, GitHub, GitHub Actions, AWS S3, GCP.",img:'https://cdn.icon-icons.com/icons2/2699/PNG/512/kubernetes_logo_icon_168360.png'}}/>
          </Grid>
          <Grid item xs={12} md={4} sm={6} >
            <WorkCard {...{Title:'Personal Porfolio',Desc:"Designed reliable and functional web based portfolio. Technologies Used: HTML5, CSS, JavaScript, React, Material UI,AWS S3, Route 53, CloudFront, API Gateway, Lambda, DynamoDB, SNS, SQS ",img:'https://cbeitsolutions.com/wp-content/uploads/2019/11/amazon-aws-logo-transparent.png'}}/>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
