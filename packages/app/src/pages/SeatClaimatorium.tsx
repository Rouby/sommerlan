import { Popconfirm, Tooltip, Typography } from 'antd';
import * as React from 'react';

enum SeatPlacement {
  Right = 0,
  Front = 1,
  Left = 2,
  Back = 3,
}

export function SeatClaimatorium(): React.ReactElement {
  return (
    <>
      <Typography.Title>Sitzplan</Typography.Title>
      <svg viewBox="-2 -2 536 724" width="50vw">
        <Table kind="1" x={500} y={60} r={90} seats={[SeatPlacement.Front]} />
        <Table kind="1" x={500} y={180} r={90} seats={[SeatPlacement.Front]} />
        <Table kind="1" x={500} y={300} r={90} seats={[SeatPlacement.Front]} />
        <Table kind="1" x={500} y={420} r={90} seats={[SeatPlacement.Front]} />
        <Table kind="1" x={500} y={540} r={90} seats={[SeatPlacement.Front]} />
        <Table kind="1" x={500} y={660} r={90} seats={[SeatPlacement.Front]} />
        <Table
          kind="3"
          x={30}
          y={95}
          r={270}
          seats={[SeatPlacement.Front, SeatPlacement.Front]}
        />
        <Table
          kind="3"
          x={30}
          y={285}
          r={270}
          seats={[SeatPlacement.Front, SeatPlacement.Front]}
        />
        <Table
          kind="2"
          x={265}
          y={260}
          r={0}
          seats={[SeatPlacement.Left, SeatPlacement.Right]}
        />
        <Table
          kind="2"
          x={265}
          y={350}
          r={0}
          seats={[SeatPlacement.Left, SeatPlacement.Right]}
        />
        <Table
          kind="2"
          x={265}
          y={440}
          r={0}
          seats={[SeatPlacement.Left, SeatPlacement.Right]}
        />

        <Table
          kind="2"
          x={265}
          y={585}
          r={0}
          seats={[SeatPlacement.Left, SeatPlacement.Right]}
        />
        <Table
          kind="2"
          x={265}
          y={675}
          r={0}
          seats={[SeatPlacement.Left, SeatPlacement.Right]}
        />
      </svg>
    </>
  );
}

interface TableProps {
  kind: keyof typeof tableSize;
  x: number;
  y: number;
  r?: number;
  seats?: SeatPlacement[];
}

const tableSize = {
  '1': {
    width: 120,
    height: 63,
  },
  '2': {
    width: 110,
    height: 90,
  },
  '3': {
    width: 190,
    height: 60,
  },
};

function Table({ x, y, r = 0, seats, kind }: TableProps) {
  const { width, height } = tableSize[kind];

  return (
    <g transform={`translate(${x}, ${y}) rotate(${r})`}>
      <rect
        fill="#222"
        stroke="#ccc"
        strokeWidth="3"
        x={-width / 2}
        y={-height / 2}
        width={width}
        height={height}
      />
      {Object.values(SeatPlacement)
        .map((side) => seats?.filter((placement) => placement === side) ?? [])
        .flatMap((seats) =>
          seats?.map((placement, idx) => {
            const isSide =
              placement === SeatPlacement.Left ||
              placement === SeatPlacement.Right;
            const sideMod =
              placement === SeatPlacement.Left ||
              placement === SeatPlacement.Back
                ? -1
                : 1;
            const mainAxis = isSide ? height : width;
            const availableSegment = mainAxis / seats.length;
            const offset = availableSegment * idx - mainAxis / 2;
            const center = availableSegment / 2;
            return (
              <Seat
                key={`${placement}.${idx}`}
                x={isSide ? (width / 2 + 35) * sideMod : offset + center}
                y={isSide ? offset + center : (height / 2 + 35) * sideMod}
                r={placement * 90}
                tableR={r}
              />
            );
          }),
        )}
    </g>
  );
}

interface SeatProps {
  x: number;
  y: number;
  r: number;
  tableR: number;
}

function Seat({ x, y, r, tableR }: SeatProps) {
  const user =
    Math.random() > 0.5
      ? {
          id: `Google_${Math.random()}`,
          name: 'Jonathan Burke',
          picture:
            'https://avatars1.githubusercontent.com/u/457863?s=88&u=92e1ba7ae3c7875a7be5e72a2f48f33f47b1988b&v=4',
        }
      : null;

  let seat = (
    <path
      transform={`translate(-25, -25) rotate(${r - 90}, 25, 25)`}
      fill="#535663"
      d="M41.718-1.54a4.12 4.12 0 014.116 4.116v33.616a4.12 4.12 0 01-4.116 4.122H7.088a4.116 4.116 0 01-4.116-4.12V2.574a4.115 4.115 0 014.116-4.116H41.72zm2.028 44.114a4.6 4.6 0 014.6 4.6v.606a4.6 4.6 0 01-4.6 4.6H5.06a4.6 4.6 0 01-4.6-4.6v-.606a4.6 4.6 0 014.6-4.6h38.686zm-34.06-2.26h4.146v2.26H9.688v-2.26zm24.16 0h4.15v2.26h-4.15v-2.26z"
    />
  );

  if (!user) {
    seat = (
      <Popconfirm
        title="Wunschplatz angeben?"
        okText="Ja"
        cancelText="Abbrechen"
      >
        {seat}
      </Popconfirm>
    );
  }

  let person = null;

  if (user) {
    person = (
      <>
        <defs>
          <pattern
            id={user.id}
            height="100%"
            width="100%"
            patternContentUnits="objectBoundingBox"
          >
            <image
              x="0"
              y="0"
              width="1"
              height="1"
              xlinkHref={user.picture}
            ></image>
          </pattern>
        </defs>
        <Tooltip title={user.name}>
          <circle
            r={25}
            fill={`url(#${user.id})`}
            transform={`rotate(${-tableR})`}
          />
        </Tooltip>
      </>
    );
  }

  return (
    <g transform={`translate(${x}, ${y}) `}>
      {seat}
      {person}
    </g>
  );
}
