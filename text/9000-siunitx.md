---
chapter: 9000
---

# siunitx Package

## TeX Code

```tex
\num{12345,67890} \\
\num{1+-2i} \\ 
\num{.3e45} \\ 
\num{1.654 x 2.34 x 3.430} \\
```

### Rendering

$$
\num{12345,67890} \\
\num{1+-2i} \\ 
\num{.3e45} \\ 
\num{1.654 x 2.34 x 3.430} \\
$$

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

$$
\si{kg.m.s^{-1}}                \\
\si{\kilogram\metre\per\second} \\
\si[per-mode=symbol]
  {\kilogram\metre\per\second}  \\
\si[per-mode=symbol]
  {\kilogram\metre\per\ampere\per\second}
$$