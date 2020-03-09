document.addEventListener('DOMContentLoaded', () => {
    const zombiesWrapper = document.querySelector('.zombies');

    zombies.forEach((zombie) => {
        const zombieElement = createZombie(zombie.type);

        zombiesWrapper.append(zombieElement);
    });
});

function createZombie(typeZombie) {
    const zombie = document.createElement('div');

    let className;

    switch (typeZombie) {
        case ZOMBIE_TYPE.SMALL:
            className = 'zombie-small';
            break;
        case ZOMBIE_TYPE.MAD:
            className = 'zombie-middle';
            break;
        case ZOMBIE_TYPE.STRONG:
            className = 'zombie-strong';
            break;
    }

    zombie.classList.add('zombie');
    zombie.classList.add(className);
    zombie.addEventListener('click', () => {
        killZombie(zombie)
    });

    return zombie;
}

function killZombie(zombie) {
    zombie.classList.add('zombie-dead');
}
