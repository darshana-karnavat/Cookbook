import React from "react";

const Receipe = () => {
  return (
    <div className="my-2">
      {/* <link to="./pages/salad.html" className="text-decoration-none" /> */}
      <div
        className="p-2 shadow-lg m-auto"
        style={{ width: "95%", minHeight: 300 }}
      >
        <img
          src="https://images.unsplash.com/photo-1555178897-2b91b4a9c9e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          className="card-img-top"
          alt="salad"
          style={{ width: "50%", padding: 20 }}
        />
        <div
          className="py-auto d-inline-block"
          style={{
            width: "50%",
            verticalAlign: "middle",
            padding: 20,
          }}
        >
          <h3 className="text-center text-dark fs-4">Fresh Tomato Soup</h3>
          <p>
            <b>Ingredients </b>
            <br />1 large onion, diced 1 carrot, finely chopped 1 stick celery,
            finely chopped 50g butter thyme, 3 sprigs 2 bay leaves 500g vine
            tomatoes,8 tbsp crème fraîche basil, a few leaves
          </p>
          <p>
            <b>Procedure</b> <br />
            Cook the onion, carrot and celery in the butter for 10-15 minutes
            until really soft. Add the herbs and cook for a minute then tip in
            the tomatoes. Simmer for 30 minutes, fish out the herbs, add 4 tbsp
            of the crème fraîche then use a stick blender or food processor to
            whizz until completely smooth. STEP 2 Season then ladle into bowls,
            adding another spoon of crème fraîche and a couple of basil leaves
            to each
          </p>
        </div>
      </div>
    </div>
  );
};

export default Receipe;
