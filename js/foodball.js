document.addEventListener('DOMContentLoaded', () => {
    const pitch = document.getElementById('pitch');
    const ball = document.getElementById('ball');
    const radius = Math.max(ball.offsetWidth, ball.offsetHeight) / 2;

    function moveToClient(clientX, clientY) {

        const rect = pitch.getBoundingClientRect();
        let x = clientX - rect.left;
        let y = clientY - rect.top;
        x = Math.max(radius, Math.min(rect.width - radius, x));
        y = Math.max(radius, Math.min(rect.height - radius, y));
        ball.style.left = x + 'px';
        ball.style.top = y + 'px';
    }

    pitch.addEventListener('mouseenter', () => ball.style.opacity = '1');
    pitch.addEventListener('mouseleave', () => ball.style.opacity = '0');

    pitch.addEventListener('mousemove', (ev) => {
        moveToClient(ev.clientX, ev.clientY);
    });

    pitch.addEventListener('touchmove', (ev) => {
        const t = ev.touches[0];
        if (!t) return;
        ev.preventDefault();
        moveToClient(t.clientX, t.clientY);
    }, { passive: false });

    const initX = Math.max(radius + 20, 60);
    const initY = pitch.clientHeight / 2;
    ball.style.left = initX + 'px';
    ball.style.top = initY + 'px';
});