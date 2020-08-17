import React from "react";
import { Container, Div, Grid, H1, P, Section } from "@reflexjs/components"
import { Block } from "@reflexjs/gatsby-theme-block"
import { Image } from "@reflexjs/gatsby-plugin-image";
import styles from "./scrollytelling.module.css";

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
          <Div px="3rem" py="3rem" bg='rgba(25, 25, 36, 0.5)'>
            <h1>The ocean is the largest biosphere on our planet ... </h1>
            <h1> ... yet, key ocean processes occur at the smallest scales... </h1>
            <h1> Keep scrolling to the depths to see what makes these processes important as well as challenging to measure ... </h1>
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
          <Div px="3rem" py="3rem" bg='rgba(25, 25, 36, 0.5)'>
            <h1> Marine phytoplankton fix 50% of global carbon </h1>
             <h1> ... Micro-scale processes due to plankton and sinking marine snow shape marine environments and impact the planetary carbon cycle ... </h1>
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
          <Div> <Image src = "scrollytelling/diel_migration.png" /> </Div>
          <Div px="3rem" py="3rem" bg='rgba(25, 25, 36, 0.5)'>
            <h1>Every single day, marine plankton undertake vertical migrations wherein each organism travels many orders its own size. </h1>
            <h1> This constitutes the largest bio-mass migration on our planet. </h1>
          </Div>
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
          <Div px="3rem" py="3rem" bg='rgba(25, 25, 36, 0.5)'>
            <h1>Gravity makes the ocean vertically stratified with key parameters for life such as light, temperature, pressure, nutrient concentration changing rapidly along the vertical</h1>
          </Div>
        </Grid>
      </Div>
    ),
    background: "scrollytelling/5-LANDING-blank.jpg",
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
      <Container px="3rem" py="3rem" bg="background">
        <h1>The Challenge</h1>
        <P> How to track single cells or small particles at microscale resolution while allowing ecological scale movements along the axis of gravity </P>
      </Container>
    ),
    background: "scrollytelling/5-LANDING-blank.jpg",
    alt: "Challenge, Center"
  },
  6: {
    child: (
      <Div px="3rem" py="3rem">
        <Grid col="1|1|2">
          <Div></Div>
          <Div px="3rem" py="3rem" bg="background">
            <h1>A Solution</h1>
            <P>We developed Scale-free Vertical Tracking Microscopy (aka Gravity Machine) to take a step towards bridging scales in the ocean, enabling a new paradigm of measurement of microscale processes in the lab</P>
            <P> Explore this concept and technology as well as data of plankton behaviors at multi-scale resolution using the links below </P>
          </Div>
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
          <Div px="3rem" py="3rem" bg='rgba(25, 25, 36, 0.5)'>
            <h1> Gallery of plankton behaviors </h1>
            <P> Explore the first-ever multi-scale datasets of marine plankton behaviors captured using Gravity Machine </P>
          </Div>
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
