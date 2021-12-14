---
chapter: 9000
---

# siunitx Package

```tex
$$
  {\num{12345,67890}} \\
  {\num{1+-2i}}       \\
  {\num{.3e45}}       \\
  {\num{1.654 x 2.34 x 3.430}}
$$
```

$$
  \num{12345,67890} \\
  \num{1+-2i}       \\
  \num{.3e45}       \\
  \num{1.654 x 2.34 x 3.430}
$$

```tex
$$
  \si{kg.m.s^{-1}}                \\
  \si{\kilogram\metre\per\second} \\
  \si[per-mode=symbol]
    {\kilogram\metre\per\second}  \\
  \si[per-mode=symbol]
    {\kilogram\metre\per\ampere\per\second}
$$
```

$$
  \si{kg.m.s^{-1}}                \\
  \si{\kilogram\metre\per\second} \\
  \si[per-mode=symbol]
    {\kilogram\metre\per\second}  \\
  \si[per-mode=symbol]
    {\kilogram\metre\per\ampere\per\second}
$$

```tex
$$
  \numlist{10;20;30}                    \\
  \SIlist{0.13;0.67;0.80}{\milli\metre} \\
  \numrange{10}{20}                     \\
  \SIrange{0.13}{0.67}{\milli\metre}
$$
```

$$
  \numlist{10;20;30}                    \\
  \SIlist{0.13;0.67;0.80}{\milli\metre} \\
  \numrange{10}{20}                     \\
  \SIrange{0.13}{0.67}{\milli\metre}
$$

```tex
  \num{123}     \\
  \num{1234}    \\
  \num{12345}   \\
  \num{0.123}   \\
  \num{0,1234}  \\
  \num{.12345}  \\
  \num{3.45d-4} \\
  \num{-e10}
```

$$
  \num{123}     \\
  \num{1234}    \\
  \num{12345}   \\
  \num{0.123}   \\
  \num{0,1234}  \\
  \num{.12345}  \\
  \num{3.45d-4} \\
  \num{-e10}
$$

```tex
$\numlist{10;30;50;70}$
```

\(\numlist{10;30;50;70}\)

```tex
  \ang{10}    \\
  \ang{12.3}  \\
  \ang{4,5}   \\
  \ang{1;2;3} \\
  \ang{;;1}   \\
  \ang{+10;;} \\
  \ang{-0;1;}
```

$$
  \ang{10}    \\
  \ang{12.3}  \\
  \ang{4,5}   \\
  \ang{1;2;3} \\
  \ang{;;1}   \\
  \ang{+10;;} \\
  \ang{-0;1;}
$$

```tex
  \si{kg.m/s^2} \\
  \si{g_{polymer}~mol_{cat}.s^{-1}}
```

$$
  \si{kg.m/s^2} \\
  \si{g_{polymer}~mol_{cat}.s^{-1}}
$$