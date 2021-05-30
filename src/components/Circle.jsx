import { useMemo } from 'react'

export const Circle = () => {
  const dataset = useMemo(
    () =>
      Array(10)
        .fill(0)
        .map(() => [Math.random() * 120 + 10, Math.random() * 50 + 10]),
    []
  )
  return (
    <svg className='circle'>
      {dataset.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={10} fill='blue' />
      ))}
    </svg>
  )
}
