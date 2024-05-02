import New from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link, Form, redirect } from "react-router-dom";

export default function Newpost() {
  

  return (
    <Modal>
    <Form method='post' className={New.form} >
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          name="Body"
          placeholder="Something Here"
          required
          rows={3}
        />
      </p>
      <p>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="Author"
          required
          placeholder="Your name"
        />
      </p>
      <p className={New.actions}>
        <Link to={'/'} type="button">
          Cancel
        </Link>
        <button>Submit</button>
      </p>
    </Form>
    </Modal>
  );
}

export async function action({ request }) {
  try {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);

    const res = await fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    
    return redirect('/');
  } catch (error) {
    console.error('Error:', error.message);
    return error;
  }
}

 
