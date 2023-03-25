const soundsElement = document.querySelector('#sounds');

(async () => {
    const sounds = await getSounds();
    addSoundsToPage(sounds);
})();

async function getSounds() {
  const response = await fetch('https://hasangha04.github.io/SoundBoard/sounds.json');
  const json = await response.json();
  return json;
}

function addSoundsToPage(sounds)
{
    sounds.forEach(sound => {
        const soundDiv = document.createElement('div');
        const soundTitle = document.createElement('h2');
        soundTitle.textContent = sound.title;
        soundDiv.appendChild(soundTitle);
        soundsElement.appendChild(soundDiv);
    });
}