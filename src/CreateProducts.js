import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useFormik } from "formik";

function CreateProducts() {
  let { ProductId } = useParams();
  const navigate = useNavigate();

  let formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      content: "",
    },
    validate: (values) => {
      let errors = {};

      if (!values.title) {
        errors.name = "please enter title";
      }
      if (!values.image) {
        errors.image = "please add image adress";
      }
      if (!values.content) {
        errors.content = "please enter content";
      }

      return errors;
    },

    onSubmit: async (values) => {
      //  console.log(values);
      try {
        let data = await fetch(
          `https://61f1b9df072f86001749f34c.mockapi.io/product`,
          {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        alert("Data Added Successfully");
        // console.log(values)
        navigate("/products");
        // await axios.put(`https://61f1b9df072f86001749f34c.mockapi.io/users/${userId}`,values)
        // alert("Data Edited Successfully")
        // navigate("/tables")
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  name="title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                  type="text"
                  className={`form-control ${
                    formik.errors.title ? "error-border" : " "
                  }`}
                  placeholder=""
                  id="title"
                />
                {formik.errors.name ? (
                  <span style={{ color: "red" }}>{formik.errors.name}</span>
                ) : null}
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label htmlFor="image">image</label>
                <input
                  name="image"
                  onChange={formik.handleChange}
                  value={formik.values.image}
                  type="text"
                  className={`form-control ${
                    formik.errors.image ? "error-border" : ""
                  }`}
                  placeholder=""
                  id="position"
                />
                {formik.errors.image ? (
                  <span style={{ color: "red" }}>{formik.errors.image}</span>
                ) : null}
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label htmlFor="content">Content</label>
                <input
                  name="content"
                  onChange={formik.handleChange}
                  value={formik.values.content}
                  type="text"
                  className={`form-control ${
                    formik.errors.content ? "error-border" : ""
                  }`}
                  placeholde=""
                  id="content"
                />
                {formik.errors.content ? (
                  <span style={{ color: "red" }}>{formik.errors.content}</span>
                ) : null}
              </div>
            </div>
          </div>
          <input type={"submit"} value="submit" className="btn btn-primary" />
        </form>
      </div>
    </>
  );
}

export default CreateProducts;
