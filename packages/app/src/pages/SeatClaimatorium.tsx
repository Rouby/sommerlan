import { Typography } from 'antd';
import * as React from 'react';
import { atom, useRecoilState } from 'recoil';
import { mutate, query } from '../api';
import { User } from '../auth';
import {
  Door,
  Floor,
  SeatingProvider,
  SeatPlacement,
  Table,
  Walls,
  Window,
} from '../components';

const takenSeats = atom({
  key: 'takenSeats',
  default: query<{
    data: {
      seats: { id: string; owner: User }[];
    };
  }>({
    query: `{
    seats: getSeats {
      id
      owner {
        name
        picture
      }
    }
  }`,
  }),
});

export function SeatClaimatorium(): React.ReactElement {
  const [seats, setSeats] = useRecoilState(takenSeats);

  return (
    <>
      <Typography.Title>Sitzplan</Typography.Title>
      <SeatingProvider
        value={{
          getSeatOwner(seatId) {
            return (
              seats.read().data?.seats?.find((s) => s.id === seatId)?.owner ??
              null
            );
          },
          onTakeSeat(seatId) {
            mutate<{ data: { seat: { id: string; owner: User } } }>({
              mutation: `mutation($seatId: ID!) {
                seat: takeSeat(seatId: $seatId) {
                  id
                  owner {
                    name
                    picture
                  } 
                }
              }`,
              variables: {
                seatId,
              },
            })
              .promise()
              .then(({ data: { seat } }) => {
                setSeats((d) =>
                  d.update((v) => ({
                    data: { seats: [...v.data.seats, seat] },
                  })),
                );
              });
          },
          onGiveUpSeat(seatId) {
            mutate<{ data: { seat: { id: string; owner: User } } }>({
              mutation: `mutation($seatId: ID!) {
                seat: giveUpSeat(seatId: $seatId) {
                  id
                }
              }`,
              variables: {
                seatId,
              },
            })
              .promise()
              .then(({ data: { seat } }) => {
                setSeats((d) =>
                  d.update((v) => ({
                    data: {
                      seats: v.data.seats.filter((s) => s.id !== seat.id),
                    },
                  })),
                );
              });
          },
        }}
      >
        <svg viewBox="-10 -10 560 780" width="50vw">
          <Floor />
          <Table
            kind="1"
            x={500}
            y={60}
            r={90}
            seats={[{ id: '0', placement: SeatPlacement.Front }]}
          />
          <Table
            kind="1"
            x={500}
            y={180}
            r={90}
            seats={[{ id: '1', placement: SeatPlacement.Front }]}
          />
          <Table
            kind="1"
            x={500}
            y={300}
            r={90}
            seats={[{ id: '2', placement: SeatPlacement.Front }]}
          />
          <Table
            kind="1"
            x={500}
            y={420}
            r={90}
            seats={[{ id: '3', placement: SeatPlacement.Front }]}
          />
          <Table
            kind="1"
            x={500}
            y={540}
            r={90}
            seats={[{ id: '4', placement: SeatPlacement.Front }]}
          />
          <Table
            kind="1"
            x={500}
            y={660}
            r={90}
            seats={[{ id: '5', placement: SeatPlacement.Front }]}
          />
          <Table
            kind="3"
            x={30}
            y={95}
            r={270}
            seats={[
              { id: '6', placement: SeatPlacement.Front },
              { id: '7', placement: SeatPlacement.Front },
            ]}
          />
          <Table
            kind="3"
            x={30}
            y={285}
            r={270}
            seats={[
              { id: '8', placement: SeatPlacement.Front },
              { id: '9', placement: SeatPlacement.Front },
            ]}
          />
          <Table
            kind="2"
            x={265}
            y={260}
            r={0}
            seats={[
              { id: '10', placement: SeatPlacement.Left },
              { id: '11', placement: SeatPlacement.Right },
            ]}
          />
          <Table
            kind="2"
            x={265}
            y={350}
            r={0}
            seats={[
              { id: '12', placement: SeatPlacement.Left },
              { id: '13', placement: SeatPlacement.Right },
            ]}
          />
          <Table
            kind="2"
            x={265}
            y={440}
            r={0}
            seats={[
              { id: '14', placement: SeatPlacement.Left },
              { id: '15', placement: SeatPlacement.Right },
            ]}
          />
          <Table
            kind="2"
            x={265}
            y={585}
            r={0}
            seats={[
              { id: '16', placement: SeatPlacement.Left },
              { id: '17', placement: SeatPlacement.Right },
            ]}
          />
          <Table
            kind="2"
            x={265}
            y={675}
            r={0}
            seats={[
              { id: '18', placement: SeatPlacement.Left },
              { id: '19', placement: SeatPlacement.Right },
            ]}
          />
          <Window x={538} y={150} r={90} />
          <Window x={538} y={480} r={90} />
          <Window x={175} y={-4} width={70} />
          <Window x={375} y={-4} width={70} />
          <Door x={15} y={580} r={90} />
          <Door x={75} y={724} />
          <Door x={275} y={-4} />
          <Walls />
        </svg>
      </SeatingProvider>
    </>
  );
}
