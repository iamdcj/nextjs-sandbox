import Head from "next/head";
import { useMemo, useState, useEffect } from "react";
import { useAuthentication } from "../../providers/authentication";

export default function Home({ data }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmission = (event) => {
    event.preventDefault();

  };

  return (
    <form onSubmit={handleSubmission}>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={formData.password}
      />
      <button type="submit">Login</button>
    </form>
  );
}
