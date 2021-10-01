import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Splash() {
  return (
    <div className="splash-screen">
      <div className="splash-images">
        <figure id="splash-1">
          <img src="https://grumpycatpics.s3.us-west-1.amazonaws.com/5ad89bd88a376d560b8b462b.jpeg" />
        </figure>
        <figure id="splash-2">
          <img src="https://grumpycatpics.s3.us-west-1.amazonaws.com/5m71nu9uv7q31.jpg" />
        </figure>
        <figure id="splash-3">
          <img src="https://grumpycatpics.s3.us-west-1.amazonaws.com/976991f1-26a3-4f91-8663-cb34744f190a-Roger_Arizona_Humane_Society.jpg" />
        </figure>
        <figure id="splash-4">
          <img src="https://grumpycatpics.s3.us-west-1.amazonaws.com/angry-cat-82.jpg" />
        </figure>
        <figure id="splash-5">
          <img src="https://grumpycatpics.s3.us-west-1.amazonaws.com/grumpy-cat-TF2014-stock2_2040.jpg" />
        </figure>
        <figure id="splash-6">
          <img src="https://grumpycatpics.s3.us-west-1.amazonaws.com/TELEMMGLPICT000248276054_trans_NvBQzQNjv4BqiRVm8Eg3WaSTXAgwVKb9FLmCS7HcsteVPA2vRgFjDHY.webp" />
        </figure>
      </div>
      <div className="splash-copy">
        <h2>Find and adopt your very own Grumpy Cat!</h2>
        <a href="/search">Start searching</a>
      </div>
    </div>
  );
}
