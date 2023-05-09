document.addEventListener('DOMContentLoaded', () => {
    const saveGame = document.getElementById('saveGame');
    saveGame.addEventListener('click', () => {
      console.log(saveGame)
      const gameId = saveGame.dataset.gameid;
      console.log(gameId)
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