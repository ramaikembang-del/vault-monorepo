---
title: Mermaid Rendering Test
tags: [test, mermaid]
---

# Mermaid Diagram Test

Below is a test of the Mermaid diagram rendering engine.

```mermaid
graph TD;
    A[Start Build] --> B{Choose Role};
    B -->|Field Ops| C[The Seller];
    B -->|Strategy Arch| D[The Builder];
    C --> E[Close Deals];
    D --> F[Build Systems];
    E --> G[Profit];
    F --> G;
```

If you see a diagram above, the implementation is successful.
