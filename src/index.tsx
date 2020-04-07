import React, { useMemo } from 'react';

export type Props = {
  text: string;
  match: RegExp;
  highlightClassname?: string;
};

export function Highlight({ text, match, highlightClassname }: Props) {
  const $match = useMemo(() => {
    if (match.flags.includes('g')) return match;
    return new RegExp(match.source, 'g' + match.flags);
  }, [match]);

  const matchedPieces = Array.from(text.matchAll($match)).map(([text]) => text);
  const preservedPieces = text.split($match);
  const content = [];

  let i = 0;
  while (matchedPieces.length || preservedPieces.length) {
    if (preservedPieces.length) {
      content.push(<span key={i++}>{preservedPieces.shift()}</span>);
    }
    if (matchedPieces.length) {
      content.push(
        <mark className={highlightClassname} key={i++}>
          {matchedPieces.shift()}
        </mark>
      );
    }
  }

  return <>{content}</>;
}
