"use client";

import { Container } from "@mantine/core";
import Hero from "./components/Hero";
import SchoolInformationSection from "./components/SchoolInformationSection";
import GpaCalculatorSection from "./components/GpaCalculatorSection";
import ResultSection from "./components/ResultSection";

export default function Home() {

  return (
    <>

      <Container fluid sx={{ margin: 10 }} >
        <Hero />
        <Container fluid sx={{ border: "1px solid lightgrey", marginTop: "15px", padding: "30px", borderRadius: "10px" }}>
          <SchoolInformationSection />
          <GpaCalculatorSection />
          <ResultSection  />
        </Container>
      </Container>
    </>
  )
}
