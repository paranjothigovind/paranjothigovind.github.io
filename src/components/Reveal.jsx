// Console keeps still: content is visible on load and nothing animates in.
// The component stays so every section keeps its wrapper and props.
export default function Reveal({ children, className = "", as: Tag = "div" }) {
  return <Tag className={className}>{children}</Tag>;
}
