# ADR 0002: Adoptar GitHub Flow como estrategia formal de control de versiones

## Estado

Aceptado.

## Contexto

El proyecto no tenía control de versiones: el código se compartía por
carpetas ZIP y, al introducir Git, existía el riesgo de seguir operando
sin reglas (todo el equipo trabajando y comiteando directo sobre la misma
rama). Esto impide:

- Saber por qué cambió algo y cuándo.
- Revertir un cambio problemático con seguridad.
- Aislar trabajo en progreso sin pisar el de otros desarrolladores.
- Relacionar una versión desplegada con el código exacto que la generó.

Instalar Git por sí solo no resuelve esto: Git es la herramienta, pero el
"control de versiones formal" requiere reglas explícitas sobre cómo se
usan las ramas, los commits y los releases.

## Decisión

Se adopta **GitHub Flow** por ser un modelo simple, adecuado para un
proyecto pequeño con despliegues frecuentes (a diferencia de Git Flow,
pensado para releases programados con múltiples versiones en paralelo):

- `main` siempre desplegable y protegida (branch protection en GitHub:
  requiere Pull Request, al menos 1 aprobación y CI en verde).
- Una rama por tarea (`feature/`, `fix/`, `docs/`, `chore/`), creada desde
  `main` y eliminada al mergear.
- Commits en formato Conventional Commits (`feat:`, `fix:`, `docs:`...).
- Tags `vMAJOR.MINOR.PATCH` (Semantic Versioning) sobre `main` en cada
  release.

Estas reglas quedan documentadas en `CONTRIBUTING.md` y las que son
configuración de plataforma (branch protection) se aplican en
GitHub → Settings → Branches, no en un archivo del repositorio.

## Consecuencias

**Positivas**

- Historial legible: cualquier persona del equipo entiende qué cambió y
  por qué sin preguntar al autor original (mitiga la dependencia de una
  sola persona, ver `docs/PROPUESTA_DEVOPS.md`, problema 8).
- Reversión segura ante un cambio defectuoso (`git revert`, volver a un
  tag anterior).
- Trabajo paralelo sin conflictos por sobrescritura, al aislar cada
  cambio en su propia rama.

**Negativas / costos**

- Requiere disciplina del equipo para seguir la convención de nombres y
  mensajes (mitigado con el checklist del PR y, opcionalmente, un hook de
  `commitlint`).
- Un poco más de fricción por tarea (crear rama, abrir PR) comparado con
  comitear directo, que es precisamente el costo aceptado a cambio de
  seguridad y trazabilidad.
