import React from "react";
import {
  HeroSection,
  HeroTitle,
  HeroPara,
  HeroButton,
} from "./styled/Hero.styled";

function Hero() {
  return (
    <HeroSection>
      <HeroTitle>The Best Way to</HeroTitle>
      <HeroTitle gradient>Track your Daily Progress</HeroTitle>
      <HeroPara>
        UNX Allows you to track all your daily task progress using gamification
        methods and earn rewards for specific coupons
      </HeroPara>
      <HeroButton>Try this app</HeroButton>
    </HeroSection>
  );
}

export default Hero;
