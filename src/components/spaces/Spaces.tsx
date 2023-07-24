import { useState } from "react";

const Spaces: React.FC = () => {
  const [shrink, setShrink] = useState(false);

  const space = (
    <div>
      <div
        className={`utilitySpace ${shrink ? "" : "max"}`}
        onClick={() => setShrink(!shrink)}
      >
        <h2>BChecker</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
          modi maxime perferendis accusamus commodi, blanditiis nam pariatur
          possimus odit dolore niimport "./Spaces.css";hil cum, adipisci
          accusantium porro ducimus deleniti tempore similique unde. Nesciunt
          laborum, error consequatur nam excepturi dicta illo possimus optio.
          Doloremque, corrupti. Cum, iure, laboriosam quibusdam natus earum
          facilis delectus neque quaerat vel at tempora possimus, cumque debitis
          veniam exercitationem. Nobis sapiente explicabo, facilis optio dicta
          perferendis voluptate dolorum ipsam natus distinctio adipisci sint
          vitae eius deserunt voluptates eos obcaecati accusantium unde quasi
          qui doloremque deleniti doloribus commodi mollitia! Vero. Excepturi
          cum exercitationem earum dicta commodi, nam beatae voluptatibus
          molestiae voluptatem in? Placeat excepturi cupiditate necessitatibus
          asperiores, dolores adipisci nihil maxime incidunt magni! Ipsum
          architecto cupiditate fugiat quos laboriosam eligendi!
        </p>
      </div>
    </div>
  );

  const render = space;

  return render;
};

export default Spaces;
