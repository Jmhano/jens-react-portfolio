import React from 'react';
import coverImage from '../../assets/cover/hero-img.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me </h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
Jennifer is a Developer and Designer who has been working in the tech industry for the past five years. Always working along side developers within Human Resources, she wanted to get a taste for it for herself, and to know what they are even talking about. Hence taking this class! Jen lives in NYC on the Upper West Side and has been there the past 12 years. In her spare time she travels everywhere possible and scuba dives at some of the worlds best locations whenever she can. 
        </p>
      </div>
    </section>
  );
}

export default About;
