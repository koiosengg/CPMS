import { Link } from "react-router-dom";
import SEO from "./SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 - Page Not Found"
        description="The page you are looking for does not exist."
      />
      <div
        style={{
          minHeight: "65vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 20px",
          textAlign: "center",
          fontFamily: "inherit"
        }}
      >
        <div style={{ maxWidth: "500px" }}>
          <h1 style={{ fontSize: "72px", fontWeight: 800, color: "#003f6c", margin: 0 }}>
            404
          </h1>
          <h2 style={{ fontSize: "28px", fontWeight: 700, margin: "16px 0 8px 0", color: "#111" }}>
            Page Not Found
          </h2>
          <p style={{ color: "#666", fontSize: "16px", marginBottom: "24px" }}>
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/"
            style={{
              display: "inline-block",
              backgroundColor: "#00a6b7",
              color: "#fff",
              padding: "12px 24px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "15px"
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
