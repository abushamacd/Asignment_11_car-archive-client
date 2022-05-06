import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  // Handle submit
  const onSubmit = (data) => {
    // add data
    const url = `http://localhost:5000/inventory`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
      });
  };
  return (
    <div className="w-50 mx-auto">
      <h2 className="my-3 text-center">Add Item to Database</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2 form-control"
          placeholder="Name (maxLength: 25)"
          {...register("name", { required: true, maxLength: 25 })}
        />
        <textarea
          className="mb-2 form-control"
          placeholder="Description"
          {...register("description", { required: true })}
        />
        <input
          className="mb-2 form-control"
          placeholder="Price"
          type="number"
          {...register("price", { required: true })}
        />
        <input
          className="mb-2 form-control"
          placeholder="Photo URL"
          type="text"
          {...register("img", { required: true })}
        />
        <input
          className="mb-2 form-control"
          placeholder="Supplier name"
          type="text"
          {...register("supplier", { required: true })}
        />
        <input
          className="mb-2 form-control"
          placeholder="Quantity"
          type="number"
          {...register("quantity", { required: true })}
        />
        <input
          className="btn btn-outline-themeButton"
          type="submit"
          value={`Add Item`}
        />
      </form>
    </div>
  );
};

export default AddItem;
