import { useMemo, useState, useEffect } from "react";
import { useAuthentication } from "../providers/authentication";

export default function Home({ data }) {
  const { user } = useAuthentication();
  const [quoteIndex, setQuoteIndex] = useState(null);

  useEffect(() => {
    if (!data || data.length < 1) {
      return;
    }

    setQuoteIndex(Math.floor(Math.random() * data.length));
  }, []);

  const selected = useMemo(() => {
    if (!data) {
      return;
    }

    return data[quoteIndex];
  }, [quoteIndex, data]);

  return (
    selected && (
      <blockquote>
        <p className="quote">&ldquo;{selected.quote}&rdquo;</p>
        <p>- {selected.source}</p>
      </blockquote>
    )
  );
}

export async function getServerSideProps() {
  let data = null;

  try {
    const res = await fetch(
      "https://api.github.com/gists/68cf4acca22d7dca00eadd4e54b7f53c",
      {
        headers: {
          Authorization: `token ${process.env.PAT}`,
        },
      }
    );

    data = await res.json();

    data = JSON.parse(data.files["sopranos-quotes.json"].content);
  } catch (error) {
    data = [
      {
        quote: "People only see what you allow them to see.",
        source: "Dr. Jennifer Melfi",
      },
    ];
  }

  return { props: { data } };
}
