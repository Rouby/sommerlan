import { Carousel, Embla } from "@mantine/carousel";
import { Image } from "@mantine/core";
import { useInterval } from "@mantine/hooks";
import { useState } from "react";
import { useQuery } from "urql";
import { graphql } from "../../gql";

export function GameCarousel() {
  const [{ data }] = useQuery({
    query: graphql(`
      query gameCarousel {
        nextParty {
          gamesPlayed {
            id
            game {
              id
              name
              image
            }
          }
        }
      }
    `),
  });

  const [embla, setEmbla] = useState<Embla>(null);

  useInterval(
    () => {
      embla.scrollNext();
    },
    5000,
    { autoInvoke: true },
  );

  if ((data?.nextParty?.gamesPlayed.length ?? 0) === 0) {
    return null;
  }

  return (
    <Carousel
      withIndicators
      withControls
      height={300}
      slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
      slideGap={{ base: 0, sm: "md" }}
      loop
      align="center"
      getEmblaApi={setEmbla}
    >
      {data?.nextParty?.gamesPlayed.map((gamePlayed) => (
        <Carousel.Slide key={gamePlayed.id}>
          <Image
            src={gamePlayed.game.image}
            alt={gamePlayed.game.name}
            fit="contain"
            h="100%"
            radius="xl"
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
