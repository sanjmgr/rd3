import { Fragment } from 'react'
import { linkVertical } from 'd3-shape'
import { hierarchy, tree } from 'd3-hierarchy'

export const Tree = () => {
  const dimensions = {
    width: 350,
    height: 200,
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  }
  const sizes = {
    width: dimensions.width - dimensions.right - dimensions.left,
    height: dimensions.height - dimensions.top - dimensions.bottom,
  }
  const dataset = {
    name: 'Eve',
    children: [
      {
        name: 'Cain',
      },
      {
        name: 'Seth',
        children: [
          {
            name: 'Enos',
          },
          {
            name: 'Noam',
          },
        ],
      },
      {
        name: 'Abel',
      },
      {
        name: 'Awan',
        children: [
          {
            name: 'Enoch',
          },
        ],
      },
      {
        name: 'Azura',
      },
    ],
  }
  const radius = 4
  const root = hierarchy(dataset)
  const nodes = root.descendants()
  const links = root.links()
  // tree layout
  tree().size([sizes.width, sizes.height])(root)

  const linkGenerator = linkVertical()
    .x(node => node.x)
    .y(node => node.y)

  return (
    <div>
      <h2>Hierarchy Tree</h2>
      <svg
        className='tree'
        height={dimensions.height}
        width={dimensions.width}
        // viewBox={[0, 0, dimensions.width, dimensions.height].join(' ')}
        style={{ background: 'rgb(233, 236, 241)' }}
      >
        <g
          transform={`translate(${[dimensions.left, dimensions.top].join(
            ', '
          )})`}
        >
          <g className='nodes'>
            {nodes.map(({ x, y, data: { name } }, i) => (
              <Fragment key={i}>
                <circle
                  className={`node-${i}`}
                  key={`node-${i}`}
                  cx={x}
                  cy={y}
                  r={radius}
                  stroke='blue'
                  strokeWidth={0.5}
                  fill='blue'
                />
                <text x={x} y={y} dy={-5} key={`label-${i}`} className='label'>
                  {name}
                </text>
              </Fragment>
            ))}
          </g>
          <g className='links'>
            {links.map((link, i) => (
              <path
                key={i}
                className={`link-${i}`}
                d={linkGenerator(link)}
                fill='none'
                stroke='blue'
                strokeWidth={0.5}
              />
            ))}
          </g>
        </g>
      </svg>
    </div>
  )
}
