import React from "react";
import { Container, Div, Grid, H1, P, Section } from "@reflexjs/components"
import { Block } from "@reflexjs/gatsby-theme-block"
import { Image } from "@reflexjs/gatsby-plugin-image";
import styles from "./scrollytelling.module.css";
import { Link } from 'gatsby';

const sections = {
  0: {
    child: (
      <Container px="3rem" py="3rem" bg= "transparent">
        <h1> "What happens to a diatom in the upper, sunlit strata of the sea may well determine what happens...to a prawn creeping over the soft oozes of the sea floor in the blackness of mile-deep water."</h1>
        <h1> - Rachel Carson, <i>The Sea Around Us</i> </h1>
      </Container>
    ),
    background: "scrollytelling/1-LANDING.jpg",
    alt: "Center box, large image"
  },
  1: {
    child: (
      <Container px="0" py="0">
        <Grid col="1|1|2">
          <Div px="3rem" py="3rem" bg='rgba(25, 25, 36, 0)'>
            <h1>The ocean is the largest biosphere on our planet </h1> 
            <P> Hidden right under the thin veil that forms the surface of the ocean, key micro-scale biological processes shape the past, present and future of the planet. Scroll below to find how these micro-scale processes hold the key to understanding the global carbon cycle, dispersion of marine organisms in the ocean and more... </P>
          </Div>
          <Div>
          </Div>
        </Grid>
      </Container>
    ),
    background: "scrollytelling/2-LANDING.jpg",
    alt: "Largest biosphere, Left"
  },
  2: {
    child: (
      <Div px="3rem" py="3rem">
        <Grid col="1|1|2">
          <Div> </Div>
          <Div px="3rem" py="3rem" bg='rgba(25, 25, 36, 0)'>
            <P> If you imagine a deep chasm cutting into the ocean, you would find highly stratified ecosystems organized along the vertical axis. Deeper we go - everything life cares about - light, temperature, nutrient distribution, pressure, all change rapidly... </P>
          </Div>
        </Grid>
      </Div>
    ),
    background: "scrollytelling/3-LANDING.jpg",
    alt: "Far right column"
  },
  // 3: {
  //   child: (
  //     <Container px="0" py="0">
  //       <Grid col="1|1|2">
  //         <Div></Div>
  //         <Div px="3rem" py="3rem" bg = 'rgba(25, 25, 36, 0.5)'>
           
  //         </Div>
  //       </Grid>
  //     </Container>
  //   ),
  //   background: "scrollytelling/ocean_placeholder.jpg",
  //   alt: "Some sheep"
  // },
  // 3: {
  //   child: (
  //     <Container px="3rem" py="3rem" bg="background">
  //       <H1>Fourth</H1>
  //       <Block
  //         src="video-card"
  //         url="https://www.youtube-nocookie.com/embed/j0Eozd0CB1I"
  //       />
  //     </Container>
  //   ),
  //   background: "scrollytelling/ocean_placeholder.jpg",
  //   alt: "Some horses"
  // },
  3: {
    child: (
      <Container px="0" py="0">
        <Grid col="1|1|2">
          <Div px="3rem" py="3rem" bg='rgba(25, 25, 36, 0)'>
            <h1> The largest bio-mass migration on our planet</h1>
            <P> Every single day, marine plankton - microscopic in size - undertake vertical migrations from tens to hundreds of meters deep vertically. </P>
          </Div>
          <Div> <Image src = "scrollytelling/diel_migration.png" /> </Div>
        </Grid>
      </Container>
    ),
    background: "scrollytelling/4-LANDING.jpg",
    alt: "Diel migration, Left"
  },
  4: {
    child: (
      <Div px="3rem" py="3rem">
        <Grid col="1|1|2">
          <Div></Div>
          <Div px="3rem" py="3rem" bg='rgba(25, 25, 36, 0.3)'>
            <h1> The oceans absorbs almost a third of global CO<sub>2</sub> emissions. </h1>
             <P> Marine plankton die, aggregate and sink as billions and billions of sinking marine snow particles impacting planetary carbon cycle; so poetically described as
            <em>"...the most stupendous “snowfall” the earth has ever seen." - Rachel Carson (1951) </em> </P>
            <P> So, is marine snow dead or alive? How do we make measurements of such a microscopic particle traveling kilometers? </P>
          </Div>
        </Grid>
      </Div>
    ),
    background: "scrollytelling/6-LANDING-marine-snow.png",
    alt: "Far right column"
  },

  // 4: {
  //   child: (
  //     <Div px="3rem" py="3rem" bg="background">
  //       <H1>Sixth</H1>
  //       <P>This is the sixth box!</P>
  //     </Div>
  //   ),
  //   background: "scrollytelling/ocean_placeholder.jpg",
  //   alt: "A giraffe"
  // },
  5: {
    child: (
      <Container px="3rem" py="3rem" bg="transparent">
        <H1>The Challenge</H1>
        <h1> <em>So, how do you track single cells or microscopic particles only a few hundred microns in size, at microscale resolution, while allowing them to move freely along the axis of gravity, say a kilometer?</em> </h1>
      </Container>
    ),
    background: "scrollytelling/5-LANDING-blank.jpg",
    alt: "Challenge, Center"
  },
  6: {
    child: (
      <Div px="3rem" py="3rem">
        <Grid col="1|1|2">
          <Div px="3rem" py="3rem" bg="transparent">
            <h1>A Solution</h1>
            <P> Here we present, "Scale-free Vertical Tracking Microscopy" (aka Gravity Machine) to take a step towards bridging scales, enabling a new paradigm of measurement in biological oceanography. We intend to bring a piece of the ocean to the lab and bring a piece of the lab to the ocean.</P>
            <P> Explore the <Link to={`/about/`}> concept and technology </Link> behind "Gravity machine", discover a whole new kind of <Link to={`/gallery/`}> plankton data </Link> and follow our journey as we deploy these tools in lab and field settings. </P>
          </Div>
          <Div> <Image src = "scrollytelling/gravity_machine.png" /> </Div>
        </Grid>
      </Div>
    ),
    background: "scrollytelling/5-LANDING-blank.jpg",
    alt: "Solution, Far right"
  },
  7: {
    child: (
      <Container px="0" py="0">
        <Grid col="1|1|2">
          <Div px="3rem" py="3rem" bg='rgba(25, 25, 36, 0)'>
            <h1> Gallery of plankton behaviors </h1>
            <P> We present here <a href = "/gallery/">first-of-a-kind datasets</a> of never before seen plankton behaviors captured by Gravity Machine at multi-scale resolution. Are you ready for a deep dive?</P>
          </Div>
          <Div> <Image src = "scrollytelling/plankton_data.png" /> </Div>
        </Grid>
      </Container>
    ),
    background: "scrollytelling/5-LANDING-blank.jpg",
    alt: "Data Gallery, Left"
  },
}

const Scrollytelling = () => (
  <React.Fragment>
    {Object.entries(sections).map(([key, value]) => {
      return (
        <Section key={key}>
          <Image
            className={styles.graphic} src={value.background} alt={value.alt}
          />
          <Div className={styles.content}>
            {value.child}
          </Div>
        </Section>
      );
    })}
  </React.Fragment>
);

export default Scrollytelling;
