import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Splash() {
  return (
    <div className="splash-screen">
      <div className="content-block">
        <div className="splash-images">
          <div className="mosaic">
            <div className="mosaic-image-2 animate pop">
              <figure id="splash-2">
                <img src="https://grumpycatpics.s3.us-west-1.amazonaws.com/5m71nu9uv7q31.jpg" />
              </figure>
            </div>
            <div className="mosaic-image-3 animate pop delay-1">
              <figure id="splash-5">
                <img src="https://grumpycatpics.s3.us-west-1.amazonaws.com/grumpy-cat-TF2014-stock2_2040.jpg" />
              </figure>
            </div>
            <div className="mosaic-image-1 animate pop delay-2">
              <figure id="splash-1">
                <img src="https://grumpycatpics.s3.us-west-1.amazonaws.com/5ad89bd88a376d560b8b462b.jpeg" />
              </figure>
            </div>
          </div>
        </div>
        <div className="splash-copy">
          <p className="animate fade delay-2">They hate kids.</p>
          <p className="animate fade delay-6">They hate dogs.</p>
          <p className="animate fade delay-10">They probably hate you.</p>
          <p className="animate fade delay-14">
            But who can resist a face like this?
          </p>
        </div>
      </div>
      <div className="cta-block animate flip">
        <h2>Find and adopt your very own Grumpy Cat</h2>
        <a className="button-link" href="/search">
          GET STARTED
        </a>
      </div>
    </div>
  );
}
