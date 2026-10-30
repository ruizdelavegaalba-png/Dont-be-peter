export function goTo(screenId) {
    document.querySelectorAll('.screen').forEach((screen) => {
    screen.classList.toggle('is-active', screen.id === screenId);
    });
}