import H2 from "./H2";

const H1 = ({ className, ...props }) => (
  <h1
    className="text-4xl max-w-xl mx-auto p-4 text-center text-medium"
    {...props}
  />
);

export default H1;
