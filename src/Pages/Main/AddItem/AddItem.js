import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.config";
import { toast, ToastContainer } from "react-toastify";

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const [user] = useAuthState(auth);
  // Handle submit
  const onSubmit = (data) => {
    // add item to DB
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
        if (result.insertedId) {
          toast("Your item id added to DB");
        }
      });
    // Reset form after add data
    reset();
  };
  return (
    <div className="w-50 mx-auto">
      <h2 className="my-3 text-center">Add Item to Database</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        {/* Email input field */}
        <input
          className="mb-2 form-control"
          placeholder="User email"
          type="email"
          value={user?.email}
          readOnly
          {...register("email", { required: true })}
        />
        {/* Item name input field */}
        <input
          className="mb-2 form-control"
          placeholder="Item's Name (maxLength: 25)"
          {...register("name", { required: true, maxLength: 25 })}
        />
        {/* Item description input field */}
        <textarea
          className="mb-2 form-control"
          placeholder="Description"
          {...register("description", { required: true })}
        />
        {/* Item price input field */}
        <input
          className="mb-2 form-control"
          placeholder="Price"
          type="number"
          min="1"
          {...register("price", { required: true })}
        />
        {/* Item image url input field */}
        <input
          className="mb-2 form-control"
          placeholder="Photo URL"
          type="text"
          {...register("img", { required: true })}
        />
        {/* Item supplier name input field */}
        <input
          className="mb-2 form-control"
          placeholder="Supplier name"
          type="text"
          {...register("supplier", { required: true })}
        />
        {/* Item quantity input field */}
        <input
          className="mb-2 form-control"
          placeholder="Quantity"
          type="number"
          min="1"
          {...register("quantity", { required: true })}
        />
        <small className="theme_color">All field are required</small>
        <input
          className="btn btn-outline-themeButton mt-2"
          type="submit"
          value={`Add Item`}
        />
        <ToastContainer />
      </form>
    </div>
  );
};

export default AddItem;
