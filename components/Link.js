export default function Link({ className, ...props }) {
  return <a className="text-primary hover:underline" {...props} />;
}
