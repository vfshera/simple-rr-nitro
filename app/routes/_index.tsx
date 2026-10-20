import type { Route } from "./+types/_index";

export async function loader() {
  return { message: "Hello from Loader!" };
}
export default function Index(props: Route.ComponentProps) {
  return (
    <div>
      <h1>Index {props.loaderData.message}</h1>
    </div>
  );
}
