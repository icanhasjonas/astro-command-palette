import {Window} from 'happy-dom';
/**
 * Retrieves various elements related to the command palette.
 * @returns An object containing references: command palette container, the command palette element,
 * an array of action items, the input element, and a boolean indicating the visibility status of the container.
 */
export const getElements = (mockWindow?: Window) => {
  const current = mockWindow ?? window;
  const document = current.document;

  const container = document.querySelector(
    'astro-command-palette'
  ) as HTMLElement;

  const commandPalette = document.querySelector(
    'command-palette'
  ) as HTMLElement;

  const listToAttach = document.querySelector(
    'command-palette-items'
  ) as HTMLDivElement;

  const backdrop = document.querySelector(
    'command-palette-backdrop'
  ) as HTMLDivElement;

  const items = [
    ...container.querySelectorAll('command-palette-item')
  ] as HTMLElement[];

  // TODO: add tests to this function
  const getItemsVisible = () => {
    return items.filter((item: any) => {
      return current.getComputedStyle(item).display === 'flex';
    });
  };

  const input = container.querySelector(
    'command-palette-header input'
  ) as HTMLInputElement;

  const isVisible =
    container.getAttribute('data-visible') === 'true' ? true : false;

  return {
    getItemsVisible,
    commandPalette,
    listToAttach,
    backdrop,
    items,
    container,
    isVisible,
    input
  };
};
