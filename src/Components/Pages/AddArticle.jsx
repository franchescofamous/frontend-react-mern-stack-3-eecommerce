import React, { useState } from "react";
import axios from "axios";

const AddArticle = () => {
  const [articleType, setArticleType] = useState("");
  const [name, setName] = useState("");
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    let article = { articleType, name, size, price, description };
    // console.log(article);
    axios
      .post("http://localhost:5000/product/add", article)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="articletype">type d'article:</label>
        <select
          name=""
          id="articletype"
          onChange={(e) => setArticleType(e.target.value)}
          required
        >
          <option value="">Selectioner le type d'article:</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Accessories">Accessories</option>
        </select>{" "}
        <br />
        <label htmlFor="name">Name of the article:</label>
        <input
          type="text"
          name=""
          id="name"
          onBlur={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label htmlFor="size">size of the article:</label>
        <input
          type="text"
          name=""
          id="size"
          onBlur={(e) => setSize(e.target.value)}
          required
        />
        <br />
        <label htmlFor="price">price of the article:</label>
        <input
          type="number"
          name=""
          id="price"
          onBlur={(e) => setPrice(e.target.value)}
          required
        />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea
          name=""
          id="description"
          onBlur={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddArticle;
