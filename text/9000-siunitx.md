---
chapter: 9000
---

# siunitx Package

## TeX Code

```tex
 n(O2)&=\SI{.15}{\mol}\qquad\qquad &n(Fe3O4)&=\SI{0.3}{\mol}
```

### Rendering

\[
 n(O2)&=\SI{.15}{\mol}\qquad\qquad &n(Fe3O4)&=\SI{0.3}{\mol}
\]

## TeX Code

```tex
  \si{kg.m.s^{-1}}                \\
  \si{\kilogram\metre\per\second} \\
  \si[per-mode=symbol]
    {\kilogram\metre\per\second}  \\
  \si[per-mode=symbol]
    {\kilogram\metre\per\ampere\per\second}
```

### Rendering

\[
  \si{kg.m.s^{-1}}                \\
  \si{\kilogram\metre\per\second} \\
  \si[per-mode=symbol]
    {\kilogram\metre\per\second}  \\
  \si[per-mode=symbol]
    {\kilogram\metre\per\ampere\per\second}
\]