import React, { Component } from "react";
import Animal from './Animal';
import About from './About';

class Home extends Component {
  render() {
    return (
      <div>
            <section>
                <div className="section-container">
                    <h1>Our Mission</h1>
                    <h2>
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <span Style="font-style: normal; text-decoration: none; border-bottom: none;">🐶</span>
                    </h2>
                </div>
            </section>
            <Animal/>
            <About/>
      </div>
    );
  }
}

export default Home;
