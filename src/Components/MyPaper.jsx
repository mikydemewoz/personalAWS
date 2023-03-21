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
                AWS LightSail
              </Typography>
              <img
                src="https://d1.awsstatic.com/product-marketing/Lightsail/NotALogoHires1024t.bb64e1dae756b668764acf6ceb27ae987a90fd47.png"
                alt="Lightsail Logo"
                width={100}
                height={100}
              />
              <Typography variant="h6" gutterBottom textAlign={"left"}>
                <strong>
                  Build applications and websites fast with pre-configured cloud
                  resources
                </strong>
              </Typography>
              <Typography variant="body1" paragraph textAlign={"left"}>
                Lightsail has a simple administration panel, preconfigured Linux
                and Windows application stacks, and quick setup . Lightsail
                eliminates the guesswork involved in launching your server by
                automatically configuring networking, access, and security
                environments. You can consider Lightsail as ElasticBean Stalk
                but as the name Lightsail is more for a light weight
                applications 
              </Typography>
              <Typography variant="h6" gutterBottom textAlign={"left"}>
                <strong>Use Case</strong>
              </Typography>
              <Typography variant="body1" paragraph textAlign={"left"}>
                Helps you create applications for small businesses, Start
                business-specific software, including as financial and
                accounting programs, file sharing and storage, and more. Why not
                make your own websites? It will benefit you. With pre-configured
                software like WordPress, Magento, Prestashop, and Joomla, you
                can create your website in a matter of clicks. launch
                straightforward web programs Use development stacks that are
                already configured, such as LAMP, Nginx, MEAN, and Node.js.
                Constructing test environments You can try out new ideas
                risk-free by creating and deleting simple development sandboxes
                and test environments.
              </Typography>
              <Typography variant="title" color="inherit">
                <a href="./Amazon LightSail.pdf" target="_blank">
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
