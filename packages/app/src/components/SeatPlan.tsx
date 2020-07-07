import { message, Popconfirm, Tooltip } from 'antd';
import * as React from 'react';
import { User, useUser } from '../auth';
import floorImage from './assets/floor.jpg';

const SeatingContext = React.createContext({
  getSeatOwner(_seatId: string): User | null {
    return null;
  },
  onTakeSeat(_seatId: string) {},
  onGiveUpSeat(_seatId: string) {},
});

export const SeatingProvider = SeatingContext.Provider;

export enum SeatPlacement {
  Right = 0,
  Front = 1,
  Left = 2,
  Back = 3,
}

interface SeatInfo {
  id: string;
  placement: SeatPlacement;
  owner?: User;
}

interface TableProps {
  kind: keyof typeof tableSize;
  x: number;
  y: number;
  r?: number;
  seats?: SeatInfo[];
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

export function Table({ x, y, r = 0, seats, kind }: TableProps) {
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
        .map(
          (side) => seats?.filter(({ placement }) => placement === side) ?? [],
        )
        .flatMap((seats) =>
          seats?.map(({ id, placement }, idx) => {
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
              <React.Suspense key={id} fallback={null}>
                <Seat
                  id={id}
                  x={isSide ? (width / 2 + 35) * sideMod : offset + center}
                  y={isSide ? offset + center : (height / 2 + 35) * sideMod}
                  r={placement * 90}
                  tableR={r}
                />
              </React.Suspense>
            );
          }),
        )}
    </g>
  );
}

interface SeatProps {
  id: string;
  x: number;
  y: number;
  r: number;
  tableR: number;
}

function Seat({ id, x, y, r, tableR }: SeatProps) {
  const { getSeatOwner, onTakeSeat, onGiveUpSeat } = React.useContext(
    SeatingContext,
  );

  const user = useUser();
  const owner = getSeatOwner(id);

  let seat = (
    <path
      transform={`translate(-25, -25) rotate(${r - 90}, 25, 25)`}
      fill="#535663"
      d="M41.718-1.54a4.12 4.12 0 014.116 4.116v33.616a4.12 4.12 0 01-4.116 4.122H7.088a4.116 4.116 0 01-4.116-4.12V2.574a4.115 4.115 0 014.116-4.116H41.72zm2.028 44.114a4.6 4.6 0 014.6 4.6v.606a4.6 4.6 0 01-4.6 4.6H5.06a4.6 4.6 0 01-4.6-4.6v-.606a4.6 4.6 0 014.6-4.6h38.686zm-34.06-2.26h4.146v2.26H9.688v-2.26zm24.16 0h4.15v2.26h-4.15v-2.26z"
    />
  );

  if (!owner) {
    if (user) {
      seat = (
        <Popconfirm
          title="Wunschplatz angeben?"
          okText="Ja"
          cancelText="Abbrechen"
          onConfirm={() => {
            onTakeSeat(id);
          }}
        >
          {seat}
        </Popconfirm>
      );
    } else {
      seat = (
        <g
          onClick={() => {
            message.info(
              'Du musst eingeloggt sein um einen Wunschplatz angeben zu können.',
            );
          }}
        >
          {seat}
        </g>
      );
    }
  }

  let person = null;

  if (owner) {
    let picture = (
      <circle
        r={25}
        fill={`url(#picture_${id})`}
        transform={`rotate(${-tableR})`}
      />
    );

    if (owner.name !== user?.name) {
      picture = <Tooltip title={owner.name}>{picture}</Tooltip>;
    } else {
      picture = (
        <Popconfirm
          title="Vom Platz zurücktreten?"
          okText="Ja"
          cancelText="Abbrechen"
          onConfirm={() => {
            onGiveUpSeat(id);
          }}
        >
          {picture}
        </Popconfirm>
      );
    }

    person = (
      <>
        <defs>
          <pattern
            id={`picture_${id}`}
            height="100%"
            width="100%"
            patternContentUnits="objectBoundingBox"
          >
            <image
              x="0"
              y="0"
              width="1"
              height="1"
              xlinkHref={owner.picture}
            ></image>
          </pattern>
        </defs>
        {picture}
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

interface WindowProps {
  x: number;
  y: number;
  r?: number;
  width?: number;
}

export function Window({ x, y, r = 0, width = 175 }: WindowProps) {
  return (
    <g transform={`translate(${x},${y}) rotate(${r})`}>
      <rect x={-width / 2} y={-3} width={width} height={6} />
    </g>
  );
}

interface DoorProps {
  x: number;
  y: number;
  r?: number;
  width?: number;
}

export function Door({ x, y, r = 0, width = 86 }: DoorProps) {
  return (
    <g transform={`translate(${x},${y}) rotate(${r})`}>
      <rect x={-width / 2} y={-3} width={width} height={6} />
    </g>
  );
}

export function Floor() {
  return (
    <>
      <defs>
        <pattern
          id="floor"
          patternUnits="userSpaceOnUse"
          width="100"
          height="100"
        >
          <image xlinkHref={floorImage} x="0" y="0" width="100" height="100" />
        </pattern>
      </defs>
      <path
        fill="url(#floor)"
        d="M15 580m0 -43l0 -150l-20 0l0 -391l145 0l70 0l22 0l86 0l22 0l70 0l128 0l0 66.5l0 175l0 155l0 175l0 156.5l-420 0l-86 0l-17 0l0 -101"
      />
    </>
  );
}

export function Walls() {
  return (
    <path
      fill="none"
      stroke="#999"
      strokeWidth={5}
      d="M15 580m0 -43l0 -150l-20 0l0 -391l145 0m70 0l22 0m86 0l22 0m70 0l128 0l0 66.5m0 175l0 155m0 175l0 156.5l-420 0m-86 0l-17 0l0 -101"
    />
  );
}
