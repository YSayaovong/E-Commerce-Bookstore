import { useEffect, useState } from "react";

const GRAPHQL_ENDPOINT = "https://countries.trevorblades.com/";

const QUERY = `
  query GetCountries {
    countries(filter: { code: { in: ["US", "CA", "GB"] } }) {
      code
      name
      emoji
    }
  }
`;

export default function GraphqlBadge() {
  const [state, setState] = useState({
    loading: true,
    error: null,
    countries: [],
  });

  useEffect(() => {
    let cancelled = false;

    fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: QUERY }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (cancelled) return;

        if (result.errors) {
          setState({
            loading: false,
            error: result.errors[0],
            countries: [],
          });
          return;
        }

        setState({
          loading: false,
          error: null,
          countries: result.data?.countries ?? [],
        });
      })
      .catch((err) => {
        if (cancelled) return;
        setState({
          loading: false,
          error: err,
          countries: [],
        });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (state.loading) {
    return <span className="small muted">GraphQL: loading…</span>;
  }

  if (state.error) {
    return <span className="small muted">GraphQL error</span>;
  }

  const text = state.countries
    .map((c) => `${c.emoji} ${c.code}`)
    .join(" · ");

  return (
    <span className="small muted">
      Powered by GraphQL ({text})
    </span>
  );
}
