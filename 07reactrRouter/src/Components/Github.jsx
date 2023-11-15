import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://api.github.com/users/anup0404")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="flex justify-center bg-gray-600 text-white text-3xl  flex-col ">
      {<img src={data.avatar_url} alt="github_pic" width={300} />}

      {<h2> Github followers:{data.followers} </h2>}
    </div>
  );
}

export default Github;
