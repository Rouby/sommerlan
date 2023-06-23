```mermaid
sequenceDiagram
    participant Browser
    participant App
    participant Server

    App->>Server: Request registration options for username
    Server->>App: Offers registration options with challenge
    App->>Server: Registers passkey with challenge

    Browser->>+Server: Requests a auth challenge for other device
    Browser->>App: Provides QR code including challenge
    App->>Server: Solves challenge with passkey
    Server->>-Browser: Notifies browser of success

```
