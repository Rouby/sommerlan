import { Box, Center, Container, Text, Title } from "@mantine/core";
import { createLazyFileRoute } from "@tanstack/react-router";
import { LAN, TextLink } from "../components";
import { GameCarousel, PartyDateAndTime, SignUpButton } from "../features";

export const Route = createLazyFileRoute("/")({
  component: () => (
    <Container>
      <LAN />

      <Title order={1}>Sommer LAN wird wild!</Title>

      <Text component="p" my="md">
        Unser LAN-Event findet jedes Jahr im Sommer statt und ist ein Muss für
        alle Gaming-Enthusiasten! Bei uns werden nicht nur zahlreiche PC-Spiele
        gespielt, sondern auch Brettspiele und andere gesellige Partyspiele. Ein
        besonderes Highlight ist unser berüchtigtes Beer-Pong-Turnier, das immer
        für viel Spaß und Spannung sorgt. Egal, ob du ein Hardcore-Gamer oder
        ein Gelegenheitsspieler bist – bei unserem Event ist für jeden etwas
        dabei!
      </Text>

      <Title order={2}>Erstelle dein Konto und bleib auf dem Laufenden</Title>

      <Text component="p" my="md">
        Melde dich jetzt an, um Zugriff auf exklusive Inhalte zu erhalten! Mit
        einem eigenen Konto kannst du detaillierte Informationen über das Event
        einsehen, darunter Bildergalerien, die Liste der Teilnehmer und vieles
        mehr. Verpasse keine Neuigkeiten und sei bestens vorbereitet für das
        nächste LAN-Event. Erstelle dein Konto noch heute und werde Teil unserer
        Gaming-Community!
      </Text>

      <Center my="md">
        <SignUpButton />
      </Center>

      <Title order={2}>Erlebe die Highlights vergangener Events</Title>

      <Text component="p" my="md">
        Du möchtest einen Eindruck davon bekommen, was dich bei unserem
        LAN-Event erwartet? In unserem{" "}
        <TextLink to="/party/archive">umfangreichen Archiv</TextLink> findest du
        Videos, Fotos und Highlights der vergangenen Jahre. Tauche ein in die
        Atmosphäre vergangener Events und sieh dir an, wie viel Spaß und Action
        dich bei uns erwartet. Lass dich inspirieren und freu dich auf das
        nächste unvergessliche Erlebnis!
      </Text>

      <Box my="md">
        <PartyDateAndTime />
      </Box>

      <Box>
        <GameCarousel />
      </Box>

      <Title order={2}>
        Alles, was du für das perfekte Gaming-Wochenende brauchst
      </Title>

      <Text component="p" my="md">
        Unser LAN-Event bietet dir alles, was du für ein unvergessliches
        Gaming-Erlebnis benötigst! Es gibt genügend Platz, um dein Zelt
        aufzuschlagen, sowie einen Tisch und einen Sitzplatz für dein
        Gaming-Setup. Mehrere Küchenbereiche stehen dir zur Verfügung, ebenso
        wie zahlreiche WC- und Duschmöglichkeiten, damit du frisch und fit
        bleibst. Außerdem gibt es eine BBQ-Station für leckere Grillabende und
        eine Auswahl an Brettspielen für entspannte Pausen zwischen den Matches.
        Wir sorgen dafür, dass es dir an nichts fehlt!
      </Text>
    </Container>
  ),
});
