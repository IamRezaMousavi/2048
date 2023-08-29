import { useEffect } from 'react';

export default function useEvent(
  event: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handler: (ev: any) => void,
  passive = false
) {
  useEffect(() => {
    window.addEventListener(event, handler, passive);
    return function cleanUp() {
      window.removeEventListener(event, handler, passive);
    };
  });
}
