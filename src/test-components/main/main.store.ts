import { writable, Writable, readable } from 'svelte/store';

export function createCounter(countDown) {
    const counter = writable(countDown);
    let interval = setInterval(() => {
        counter.update(c => c > 0 && c - 1);

    }, 1000);

    const unsubscribe = counter.subscribe(c => {
        if (c === 0) {
            clearInterval(interval);
            unsubscribe();
        }
    });

    return counter;

}
