// Your React component, container, is a functional component that takes a children prop and renders it inside a <div>. Here's why it's used:
// Wrapper Component – Groups child elements for consistent structure and styling.
// Reusable Layout – Enables reusability with styles or logic.
// Props.children – Renders nested components dynamically.

// eslint-disable-next-line react/prop-types
function Container({children}) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {children}
    </div>
  )
}

export default Container
