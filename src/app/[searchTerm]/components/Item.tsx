import React from "react";
import Link from "next/link";
import Image from "next/image";
type Props = {
  result: Result;
};

export default function Item({ result }: Props) {
  const itemTextCol = (
    <div className="flex flex-col justiry-center">
      <h2>
        <Link
          href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          target="_blank"
          className="text-xl font-bold underline"
        >
          {result?.title}
        </Link>
      </h2>
      <p>{result?.extract}</p>
    </div>
  );
  const content = result?.thumbnail?.source ? (
    <div>
      <article className="m-4 max-w-lg">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col justify-center">
            {" "}
            <Image
              src={result.thumbnail.source}
              alt={result.title}
          
              loading="lazy"
            ></Image>
          </div>
        </div>
        {itemTextCol}
      </article>
    </div>
  ) : (
    <article className="m-4 max-w-lg">{itemTextCol}</article>
  );

  return content;
}
