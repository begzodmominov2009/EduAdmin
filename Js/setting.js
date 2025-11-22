const switches = document.querySelectorAll('button[data-slot="switch"]');

// Har bir switch uchun funksiya ishlatish
switches.forEach((switchBtn) => {
    const thumb = switchBtn.querySelector('[data-slot="switch-thumb"]');

    function setState(state) {
        switchBtn.setAttribute('data-state', state);
        thumb.setAttribute('data-state', state);
        switchBtn.setAttribute(
            'aria-checked',
            state === "checked" ? "true" : "false"
        );
        switchBtn.value = state === "checked" ? "on" : "off";
    }

    // Click bo‘lganda checked ↔ unchecked qilish
    switchBtn.addEventListener("click", () => {
        const current = switchBtn.getAttribute("data-state");

        if (current === "checked") {
            setState("unchecked");
        } else {
            setState("checked");
        }
    });
});