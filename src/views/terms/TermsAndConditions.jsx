import React, { useState } from 'react';

const TermsAndConditions = ({ setDisplay }) => {
  const [product, setProduct] = useState(0);
  const headers = [
    'General Terms and Conditions',
    'Terms For BLACK+DECKER 20V Max Cordless Drill / Driver with 30-Piece Accessories (LD120VA)',
    'Circular Saw, HYCHIKA 1500W/12.5A Corded Electric Saw with 5500RPM, 2Pcs Blades(24T+ 40T) Plus 1 Allen Wrench, Max Cutting Depth 2-1/2" (90°), 1-4/5" (45°)',
  ];

  return (
    <div
      className="flex ui dimmer modals page visible active"
      onClick={() => setDisplay(false)}
    >
      <div
        class="ui standard test modal transition visible active"
        style={{ maxHeight: '75vh', overflow: 'auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div class="header ta-center">{headers[product]}</div>
        <div class="content" style={{ padding: '5% 8%' }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. At
            auctor urna nunc id cursus metus. Mi ipsum faucibus vitae aliquet
            nec ullamcorper sit amet risus. Sollicitudin ac orci phasellus
            egestas tellus. Pharetra sit amet aliquam id diam maecenas sapien et
            ligula.
          </p>
          <p>
            A scelerisque purus semper eget duis at tellus at. Dolor sit amet
            consectetur adipiscing elit ut aliquam. A cras semper auctor neque
            vitae tempus quam. Dui ut ornare lectus sit amet est. dui faucibus
            in ornare quam viverra. Morbi tristique senectus et netus. Urna
            condimentum mattis pellentesque id. Eu tincidunt tortor aliquam
            nulla facilisi cras fermentum odio eu.
          </p>
          <p>
            Massa tincidunt nunc pulvinar sapien et ligula ullamcorper.
            Adipiscing enim eu turpis egestas. Amet mauris commodo quis
            convallis tellus id interdum velit laoreet id. In eu mi bibendum
            neque egestas congue quisque egestas. Venenatis tellus in metus
            vulputate eu scelerisque felis. Leo a diam sollicitudin tempor id eu
            in cursus turpis massa dui ut. Tempus imperdiet nulla malesuada
            pellentesque elit. Amet venenatis urna cursus eget nunc scelerisque
            viverra. Ac orci phasellus egestas tellus rutrum tellus. Posuere ac
            ut consequat semper viverra nam libero justo. Non curabitur gravida
            arcu ac tortor dignissim convallis aenean.
          </p>

          <br />
          <br />
          <div className="flex" style={{ justifyContent: 'center' }}>
            <button
              className="ui green button"
              style={{ width: '40%' }}
              onClick={(e) => {
                if (product < headers.length - 1) {
                  setProduct(product + 1);
                }
              }}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
