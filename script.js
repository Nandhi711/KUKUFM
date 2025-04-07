function generateStory() {
    const theme = document.getElementById('theme').value;
    const vibe = document.getElementById('vibe').value;
    const length = document.getElementById('length').value;
    const prompt = document.getElementById('prompt').value;
  
    const story = `Once upon a time in a ${theme.toLowerCase()} world, there was a child who learned about ${prompt.toLowerCase()} through a ${vibe.toLowerCase()} journey. The story lasted for ${length.toLowerCase()} and ended with a warm, sleepy smile.`;
  
    document.getElementById('storyOutput').innerText = story;
  }
  
  function speakStory() {
    const story = document.getElementById('storyOutput').innerText;
    const utterance = new SpeechSynthesisUtterance(story);
    utterance.voice = speechSynthesis.getVoices().find(voice => voice.lang === 'en-US');
    speechSynthesis.speak(utterance);
  }
  