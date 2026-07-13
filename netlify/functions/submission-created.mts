import { db } from "../../db/index.js";
import { contactSubmissions } from "../../db/schema.js";

interface FormPayload {
  form_name: string;
  data: {
    fullname?: string;
    email?: string;
    message?: string;
  };
}

export default async (req: Request) => {
  const { payload } = (await req.json()) as { payload: FormPayload };

  if (payload.form_name !== "contact") {
    return new Response("Ignored", { status: 200 });
  }

  const { fullname, email, message } = payload.data;

  if (!fullname || !email || !message) {
    return new Response("Missing fields", { status: 400 });
  }

  await db.insert(contactSubmissions).values({
    fullName: fullname,
    email,
    message,
  });

  return new Response("OK", { status: 200 });
};
