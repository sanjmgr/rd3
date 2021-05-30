import { useMemo } from 'react'

export const Line = () => {
  const dataset = useMemo(
    () =>
      Array(10)
        .fill(0)
        .map(() => [
          Math.random() * 45 + 2,
          Math.random() * 45 + 100,
          Math.random() * 45 + 150,
          Math.random() * 45 + 100,
        ]),
    []
  )

  return (
    <svg className='line'>
      {dataset.map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke='black'
          strokeWidth={1.5}
        />
      ))}
    </svg>
  )
}
