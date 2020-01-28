import React from "react";

const experience = [
  {
    startDate: new Date("2016-06-06"),
    endDate: new Date("2020-06-06"),
    title: "Workplace nondescript, Malmö",
    children: (
      <>
        <p>First Line Describing Job Title</p>
        <p>second line</p>
      </>
    )
  },
  {
    startDate: new Date("2013-06-06"),
    endDate: new Date("2013-02-06"),
    title: "Workplace nondescript, Bristol",
    children: (
      <>
        <p>First Line Describing Job Title, item 2</p>
        <p>second line</p>
      </>
    )
  },
  {
    startDate: new Date("2004-06-06"),
    endDate: new Date("2008-06-06"),
    title: "Workplace nondescript, Copenhagen",
    children: (
      <>
        <p>First Line Describing Job Title, item 3</p>
        <p>second line</p>
      </>
    )
  },
  {
    startDate: new Date("2000-06-06"),
    endDate: new Date("2001-06-06"),
    title: "Workplace nondescript, Perth",
    children: (
      <>
        <p>First Line Describing Job Title, item 4</p>
        <p>second line</p>
      </>
    )
  }
];

const education = [
  {
    startDate: new Date("2013-06-06"),
    endDate: new Date("2015-06-06"),
    title: "University Nondescript, Malmö",
    children: (
      <>
        <p>MSc of Life</p>
        <p>second line</p>
      </>
    )
  },
  {
    startDate: new Date("2014-06-06"),
    endDate: new Date("2014-06-06"),
    title: "University Nondescript, Bristol",
    children: (
      <>
        <p>Postgraduate Exchange in Life</p>
        <p>second line</p>
      </>
    )
  },
  {
    startDate: new Date("2009-06-06"),
    endDate: new Date("2010-06-06"),
    title: "University Nondescript, Copenhagen",
    children: (
      <>
        <p>Erasmus Year Abroad for Life</p>
        <p>second line</p>
      </>
    )
  },
  {
    startDate: new Date("2007-06-06"),
    endDate: new Date("2011-06-06"),
    title: "University Nondescript, Perth",
    children: (
      <>
        <p>BSc in Life Study Abroad</p>
        <p>second line</p>
      </>
    )
  }
];

const achievements = [
  {
    title: "Lorem ipsum dolor sit amet",
    children: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh
          non purus semper scelerisque.
        </p>
      </>
    )
  },
  {
    title: "Lorem ipsum dolor sit amet",
    children: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh
          non purus semper scelerisque.
        </p>
      </>
    )
  }
];

const socialMediaData = [
  {
    link: "https://www.facebook.com/",
    icon: "iconfinder_Circled_Facebook.svg",
    description: "facebook.com/personpersson"
  },

  {
    link: "https://github.com/",
    icon: "iconfinder_Circled_Github.svg",
    description: "github.com/personpersson"
  },

  {
    link: "https://www.linkedin.com/in/",
    icon: "iconfinder_Circled_Linkedin.svg",
    description: "linkedin.com/personpersson"
  }
];

export { achievements, experience, education, socialMediaData };
