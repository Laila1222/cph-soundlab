import React, { Component } from "react";
import CarouselModern from "../carousel/carousel-modern";
import SimpleCarousel from '../carousel/carousel-slick';
import CoolCarousel from '../carousel/cool-carousel';



import "./_work.scss";

class Work extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <section className="section-work">
        <div className="work u-center-middle" >
          <h2 className="secondary-headline" data-aos='fade-up'>Work</h2>
          {/* <CarouselModern >
          </CarouselModern> */}
          {/* <SimpleCarousel /> */}
          <CoolCarousel />
        </div>
      </section>
        )
    }
}

export default Work