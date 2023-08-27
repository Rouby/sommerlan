import { Container, Text, Title } from "@mantine/core";

export function Imprint() {
  return (
    <Container>
      <Title order={1}>Impressum</Title>
      Jonathan Burke <br />
      Gers Weiden 3 <br />
      27412 Kirchtimke
      <Text
        component="a"
        href="mailto:jonathan.burke.1311+sommerlan@googlemail.com"
      >
        jonathan.burke.1311+sommerlan@googlemail.com
      </Text>
      <Title order={2} my="md">
        Disclaimer - rechtliche Hinweise
      </Title>
      <Title order={3}>Auskunfts- und Widerrufsrecht</Title>
      <Text component="p">
        Sie haben jederzeit das Recht, sich unentgeltlich und unverzüglich über
        die zu Ihrer Person erhobenen Daten zu erkundigen. Ebenfalls können Sie
        Ihre Zustimmung zur Verwendung Ihrer angegebenen persönlichen Daten mit
        Wirkung für die Zukunft widerrufen. Hierfür wenden Sie sich bitte an den
        im Impressum angegebenen Diensteanbieter.
      </Text>
      <Title order={3}>Datenschutz (allgemein)</Title>
      <Text component="p">
        Beim Zugriff auf unsere Webseite werden automatisch allgemeine
        Informationen (sog. Server-Logfiles) erfasst. Diese beinhalten u.a. den
        von Ihnen verwendeten Webbrowser sowie Ihr Betriebssystem und Ihren
        Internet Service Provider. Diese Daten lassen keinerlei
        R&#252;ckschl&#252;sse auf Ihre Person zu und werden von uns statistisch
        ausgewertet, um unseren Internetauftritt technisch und inhaltlich zu
        verbessern. Das Erfassen dieser Informationen ist notwendig, um den
        Inhalt der Webseite korrekt ausliefern zu k&#246;nnen. Die Nutzung der
        Webseite ist grunds&#228;tzlich ohne Angabe personenbezogener Daten
        m&#246;glich. Soweit personenbezogene Daten (beispielsweise Name,
        Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit
        m&#246;glich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
        ausdr&#252;ckliche Zustimmung nicht an Dritte weitergegeben. Sofern ein
        Vertragsverh&#228;ltnis begr&#252;ndet, inhaltlich ausgestaltet oder
        ge&#228;ndert werden soll oder Sie an uns eine Anfrage stellen, erheben
        und verwenden wir personenbezogene Daten von Ihnen, soweit dies zu
        diesem Zwecke erforderlich ist (Bestandsdaten). Wir erheben, verarbeiten
        und nutzen personenbezogene Daten soweit dies erforderlich ist, um Ihnen
        die Inanspruchnahme des Webangebots zu erm&#246;glichen (Nutzungsdaten).
        S&#228;mtliche personenbezogenen Daten werden nur solange gespeichert
        wie dies f&#252;r den genannten Zweck (Bearbeitung Ihrer Anfrage oder
        Abwicklung eines Vertrags) erforderlich ist. Hierbei werden steuer- und
        handelsrechtliche Aufbewahrungsfristen von uns ber&#252;cksichtigt. Auf
        Anordnung der zust&#228;ndigen Stellen m&#252;ssen wir im Einzelfall
        Auskunft &#252;ber diese Daten (Bestandsdaten) erteilen, soweit dies
        f&#252;r Zwecke der Strafverfolgung, zur Gefahrenabwehr, zur
        Erf&#252;llung der gesetzlichen Aufgaben der
        Verfassungsschutzbeh&#246;rden oder des Milit&#228;rischen
        Abschirmdienstes oder zur Durchsetzung der Rechte am geistigen Eigentum
        erforderlich ist. Wir weisen ausdr&#252;cklich darauf hin, dass die
        Daten&#252;bertragung im Internet (z. B. bei der Kommunikation per
        E-Mail) Sicherheitsl&#252;cken aufweisen kann. Vor dem Zugriff auf Daten
        kann nicht l&#252;ckenlos gesch&#252;tzt werden. Die Nutzung von im
        Rahmen der Impressumspflicht ver&#246;ffentlichten Kontaktdaten durch
        Dritte zur &#220;bersendung von nicht ausdr&#252;cklich angeforderter
        Werbung und Informationsmaterialien wird hiermit ausdr&#252;cklich
        untersagt. Ausgenommen hiervon sind bestehende Gesch&#228;ftsbeziehungen
        bzw. es liegt Ihnen eine entsprechende Einwilligung von uns vor. Die
        Anbieter und alle auf dieser Website genannten Dritten behalten sich
        ausdr&#252;cklich rechtliche Schritte im Falle der unverlangten
        Zusendung von Werbeinformationen vor. Gleiches gilt f&#252;r die
        kommerzielle Verwendung und Weitergabe der Daten.
      </Text>
      <Title order={3}>Datenschutz (Kommentarfunktion)</Title>
      <Text component="p">
        Im Rahmen der Kommentarfunktion der Seite erheben wir personenbezogene
        Daten (z. B. Name, E-Mail) im Rahmen Ihrer Kommentierung zu einem
        Beitrag nur in dem Umfang wie Sie ihn uns mitgeteilt haben. Bei der
        Ver&#246;ffentlichung eines Kommentars wird die von Ihnen angegebene
        Email-Adresse gespeichert, aber nicht ver&#246;ffentlicht. Ihr
        angegebener Name wird ver&#246;ffentlich. Sie k&#246;nnen auch ein
        Pseudonym benutzen.
      </Text>
    </Container>
  );
}
