# Guía de contribución - TechStore GT

Este documento define las reglas formales de control de versiones que todo
el equipo debe seguir. No son solo convenciones sugeridas: son requisito
para que un cambio pueda llegar a `main`.

## Flujo de ramas (GitHub Flow)

- `main` es la rama estable y desplegable. Nadie hace `push` directo sobre
  ella (regla aplicada además como *branch protection* en GitHub).
- Todo cambio se hace en una rama nueva, creada desde `main`:

  ```bash
  git checkout main
  git pull
  git checkout -b feature/nombre-descriptivo
  ```

  Prefijos usados:
  - `feature/` — nueva funcionalidad
  - `fix/` — corrección de un bug
  - `docs/` — solo documentación
  - `chore/` — mantenimiento, configuración, dependencias

- El cambio se integra a `main` únicamente mediante un **Pull Request**,
  con al menos una aprobación y el pipeline de CI en verde (ver
  `docs/adr/0002-flujo-de-ramas.md` para el porqué de esta decisión).
- Al mergear, la rama de feature se elimina.

## Convención de mensajes de commit

Se usa el formato [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>: <descripción corta en presente>

[cuerpo opcional explicando el porqué]
```

Tipos permitidos: `feat`, `fix`, `docs`, `chore`, `test`, `refactor`.

Ejemplos:

```
feat: agregar validación de porcentaje de descuento
fix: evitar precios negativos en calcularTotal
docs: documentar flujo de ramas en CONTRIBUTING.md
```

Un commit debe representar un cambio atómico y entendible por sí solo;
evitar commits genéricos como `cambios` o `fix2`.

## Versionado

El proyecto sigue [Semantic Versioning](https://semver.org/lang/es/)
(`MAJOR.MINOR.PATCH`) declarado en `package.json`. Cada release desde
`main` se marca con un tag:

```bash
git tag -a v1.1.0 -m "Descripción del release"
git push origin v1.1.0
```

- `MAJOR`: cambios incompatibles.
- `MINOR`: nueva funcionalidad compatible.
- `PATCH`: corrección de bugs.

## Entorno local

```bash
npm install
cp .env.example .env   # completar valores locales, nunca commitear .env
npm test
npm start
```
