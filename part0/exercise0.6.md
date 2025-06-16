```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST [https://studies.cs.helsinki.fi/exampleapp/new_note_spa]
    activate server
    server-->>browser: URL redirect to [https://studies.cs.helsinki.fi/exampleapp/spa]
    deactivate server
```