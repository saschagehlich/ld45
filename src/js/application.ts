import { Game } from './game/Game'

window.onload = () => {
  const container = document.querySelector<HTMLDivElement>('.application');
  (window as any).game = new Game(container)
}
