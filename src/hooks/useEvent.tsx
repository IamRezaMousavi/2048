import { useEffect } from "react";

export default function useEvent(
    event: any,
    handler: { (this: Window, ev: any): any; (this: Window, ev: any): any; },
    passive = false
) {
    useEffect(() => {
        window.addEventListener(event, handler, passive);
        return function cleanUp() {
            window.removeEventListener(event, handler, passive);
        }
    })
}
