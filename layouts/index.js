export default function Layout(frontMatter) {
  return ({ children: content }) => {
    // React hooks, for example `useState` or `useEffect`, go here.
    return (
      <div>
        <h1>{frontMatter.title}</h1>
        {content}
      </div>
    )
  }
}
