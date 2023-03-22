import { Grid, Paper, Typography } from "@mui/material";
import "@fontsource/roboto/400.css";
export default function MyPaper() {
  return (
    <div style={{ width: "80%", margin: "auto auto 50px" }}>
      <Grid container>
        <Grid item xs={12}>
          <Paper elevation={4} sx={{ padding: 5 }}>
            <div>
              <Typography variant="h4" gutterBottom>
                AWS 
              </Typography>
              {/* <img
                // src="https://d1.awsstatic.com/product-marketing/Lightsail/NotALogoHires1024t.bb64e1dae756b668764acf6ceb27ae987a90fd47.png"
                // src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Famazonwebservices%2F&psig=AOvVaw22GGjo8RAFH-gBArE-UJie&ust=1679593848941000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPCV_uaM8P0CFQAAAAAdAAAAABAI"
                // alt="Lightsail Logo"
                width={100}
                height={100}
              /> */}
              <Typography variant="h6" gutterBottom textAlign={"left"}>
                <strong>
                  Build applications and websites fast with pre-configured cloud
                  resources
                </strong>
              </Typography>
              <Typography variant="body1" paragraph textAlign={"left"}>
              AWS Lambda, Amazon Simple Notification Service (SNS), 
              and Amazon Simple Queue Service (SQS) are powerful AWS 
              services that are widely used in building serverless applications. 
              In this blog, we will explore these services and how they can be 
              used together to build robust and scalable serverless applications.
              </Typography>
              <Typography variant="h6" gutterBottom textAlign={"left"}>
                <strong>Use Case</strong>
              </Typography>
              <Typography variant="body1" paragraph textAlign={"left"}>
              AWS Lambda is a compute service that allows you to run code without the need to provision or manage servers. It supports a wide range of programming languages and enables you to build serverless applications that can be scaled on-demand. Lambda functions can be triggered by various AWS services, including SNS and SQS.

SNS is a fully managed messaging service that enables you to decouple microservices and distributed systems. It allows you to send messages to multiple subscribers or endpoints, including email, SMS, HTTP/HTTPS, and Lambda functions. SNS provides a high-throughput, reliable, and durable messaging system that can be used in a wide range of applications.

SQS is a fully managed message queuing service that enables you to decouple and scale microservices and distributed systems. It provides a reliable, highly available, and scalable message queue that can be used to asynchronously send and receive messages between distributed systems. SQS supports both standard and FIFO queues, and it can be used with Lambda functions to process messages as they are received.
              </Typography>
              <Typography variant="title" color="inherit">
                <a href="./Assignment 6.pdf" target="_blank">
                  Continue reading...
                </a>
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
