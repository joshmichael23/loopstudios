import React from "react";
export function Footer({
  loopstudios,
  facebook,
  twitter,
  pinterest,
  instagram
}) {
  return <footer>
          <img src={loopstudios} alt="" />
          <div className="links">
            <a>About</a>
            <a>Careers</a>
            <a>Events</a>
            <a>Products</a>
            <a>Support</a>
          </div>
          <div className="socialmedialinks">
            <a><img src={facebook}></img></a>
            <a><img src={twitter}></img></a>
            <a><img src={pinterest}></img></a>
            <a><img src={instagram}></img></a>
          </div>
          <p>&copy; 2024 Loopstudios. All rights reserved.</p>
          
        </footer>;
}
  