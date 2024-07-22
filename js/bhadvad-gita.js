let view = document.getElementById("view-api")

const displayChapter = () => {
    fetch('https://vedicscriptures.github.io/chapters')
      .then(response => response.json())
      .then(data => {
        // Loop through each chapter object in the data
        data.forEach(chapterObj => {
          
          let  chNo = chapterObj.chapter_number;
          let  chName = chapterObj.name;
          let  verse = chapterObj.verses_count;
          let  translation = chapterObj.translation;
          let  transliteration = chapterObj.transliteration;

            let  summary = chapterObj.summary ? chapterObj.summary : 'Summary not available';

            
            view.innerHTML += `
            <div class="chapter mt-5 p-3" style="background-color: bisque; border-radius: 30px;">
              <h2>${chNo}. ${chName}</h2>
              <p>Translation: ${translation}</p>
              <p>Transliteration: ${transliteration}</p>
              <p>Summary: ${typeof summary === 'object' ? JSON.stringify(summary) : summary}</p>
              <p class = "Verses">Verses Count: ${verse}</p>
              </div>
              `;
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  
  displayChapter();
  