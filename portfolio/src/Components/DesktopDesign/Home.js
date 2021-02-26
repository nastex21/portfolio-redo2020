import React, { useEffect, useState, useRef } from "react";

function Home({sizeImage}) {
  const widthSize = useRef(null);
  const [imageWidth, setWidth] = useState(0);


  useEffect(() => {
    setWidth(widthSize.current.clientWidth);
  });

  useEffect(() => {
    console.log(imageWidth);
    sizeImage(imageWidth);
  }, [imageWidth]);

  return (
    <div id="home" className="contentDiv">
      <img ref={widthSize} className="img-fluid" src="/images/IMG-3210.jpg" alt="Me" />
      <section>
        <h4 id="title-name">Software Engineer</h4>
        <h1>Tony Salazar</h1>
        <h1>
          <div id="typedtext"></div>
        </h1>
        <p>
          Hello, my name is Tony and I’m a passionate software engineer! I love
          taking what are originally thoughts and ideas, putting pen to paper
          and then creating fully-fledged web applications! And with new
          technologies on the horizon and the field always evolving, part of the
          thrill is to be on your toes to learn new things. So thank you for
          taking your time visiting my page and I hope you learn more about me
          and the things I can do!{" "}
        </p>
      </section>
    </div>
  );
}

export default Home;
