import React, { useState } from "react";
import Layout from "../components/Layout";
import { initializeApollo, addApolloState } from "../lib/apolloClient";
import { GetStaticProps } from "next";
import { MENU_QUERY, MenuListItem } from "../components/Navbar";
import { useRouter } from "next/router";
export type TeamMember = {
  name: string;
  description: string;
  image: {
    sourceUrl: string;
  };
};

type Props = {
  errors?: string;
  menuListItems: MenuListItem[];
};

const ContactPage = ({ errors, menuListItems }: Props) => {
  if (errors) {
    return (
      <Layout
        menuListItems={menuListItems}
        title="Error | Next.js + TypeScript Example"
      >
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  const router = useRouter();
  const [formValues, setFormValues] = useState({
    fName: "",
    lName: "",
    email: "",
    message: "",
  });

  const setFirstName = (fName: string) => {
    setFormValues({ ...formValues, fName: fName });
  };

  const setLastName = (lName: string) => {
    setFormValues({ ...formValues, lName: lName });
  };

  const setEmail = (email: string) => {
    setFormValues({ ...formValues, email: email });
  };

  const setMessage = (message: string) => {
    setFormValues({ ...formValues, message: message });
  };

  const onSend = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formValues }),
    };

    const wasSent = fetch(
      "api/email",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => data.successful);

    if (wasSent) {
      router.push("/");
    }
  };

  return (
    <Layout
      menuListItems={menuListItems}
      title="Home | Next.js + TypeScript Example"
    >
      <div
        className={
          "flex flex-col justify-center items-center max-w-full m-1 md:m-4 overflow-x-hidden"
        }
      >
        <form
          className="w-full max-w-lg"
          onSubmit={(e) => {
            e.preventDefault();
            onSend();
          }}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                value={formValues.fName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Jane"
              />
              {/* <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                value={formValues.lName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                E-mail
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                value={formValues.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Message
              </label>
              <textarea
                className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
                value={formValues.message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <input
                className="font-bold py-2 px-4 rounded"
                type="submit"
                value="Send"
              />
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ContactPage;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const apolloClient = initializeApollo();
    const menuListItems = await apolloClient
      .query({
        query: MENU_QUERY,
        context: { clientName: "wordPress" },
      })
      .then((res) =>
        res.data.menuItems.nodes.map(
          (node: { label: string; url: string }) => ({
            title: node.label,
            pageURL: node.url,
          })
        )
      );

    return addApolloState(apolloClient, {
      props: {
        menuListItems,
      },
    });
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
