---
title: "falcon"
publish_date: 2022-10-25
---

[falcon](https://github.com/rajikaimal/falcon) is a static generator running on Bun. Currently it's a work in progress.
The goal of this project is to experiment how Bun performs with static site generation compared to other existing solutions.

The implementation isn't novel. Many of the APIs are directly inspired by Remix, and Next.js.

## Routing

- Routing is filed based.
- Currently it supports top level routing with layouts.
- Roadmap includes nested routes as well.
- Every page comes under `/pages` directory.

```
interface Props {
  data: {
    phone: number;
  };
}

export const loader = (): Omit<Props, "styles"> => {
  const data = {
    phone: 81234567,
  };

  return { data };
};

export default function AboutPage({ data, styles }: Props) {
  const { phone } = data;

  return <div>Phone number: {phone}</div>;
}
```

## Data loading

```
interface Props {
  styles: any;
  data: {
    phone: number;
  };
}

export const loader = (): Omit<Props, "styles"> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
  const json = await response.json();
  const results = json.results;
  return { data: results };
};

export default function PokemonsPage({ data }: Props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.text}> Pokemons list</div>
      <ul>
        {data.map((pokemon: any) => (
          <li key={pokemon.name} style={styles.text}>
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

## Live Reload

https://github.com/rajikaimal/falcon/assets/8940086/a39d4c70-0f23-4b4e-9930-ddb73ef807fc
