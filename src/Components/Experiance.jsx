import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate"  sx={{ maxWidth: "800px", margin: "0 auto" }}>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          2017 - 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <BuildIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "#14F5C0" }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: "50px", px: 2 }}>
          <Typography variant="h6" component="span">
            Spectrum Engineering PLC
          </Typography>
          <Typography>Fullstack Software Engineer</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          2020 - 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#14F5C0" }}/>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "#035DE8" }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: "50px", px: 2 }}>
          <Typography variant="h6" component="span">
          Tigu Tech
          </Typography>
          <Typography>Senior Software Developer</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          2019 - 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#035DE8" }} />
          <TimelineDot color="primary" variant="outlined">
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "50px", px: 2 }}>
          <Typography variant="h6" component="span">
            Simplex Advertising
          </Typography>
          <Typography>Graphic designer and Web developer</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
