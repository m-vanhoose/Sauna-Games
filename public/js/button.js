document.addEventListener('DOMContentLoaded', () => {
    const saveGame = document.getElementById('saveGame');
    saveGame.addEventListener('click', () => {
      // Get the game ID from the element or any other source
      const gameId = saveGame.dataset.gameId;
  
      const payload = { id: gameId };
  
      fetch('/library', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (response.ok) {
            window.location.href = '/library';
          } else if (response.status === 400) {
            alert('Game already saved');
          } else {
            alert('Error saving game');
          }
        })
        .catch((error) => {
          console.error('Error saving game:', error);
          alert('Error saving game');
        });
    });
  });