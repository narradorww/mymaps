import style from 'styled-components'

export const Wrapper = style.div`
position: fixed;
z-index: 9999;
top: var(--medium);
right: var(--medium);
color: var(--background);
cursor: pointer;

svg{
  transition: color 0.3s ease-in-out;
}

&:hover{
  svg{
    color: var(--highlight);
  }
}
`
