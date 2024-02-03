import axios from 'axios';
import cheerio from 'cheerio';

window.defaultLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Festivalgel%C3%A4nde_-_Wacken_Open_Air_2016-AL1228.jpg/710px-Festivalgel%C3%A4nde_-_Wacken_Open_Air_2016-AL1228.jpg";

// Function to crawl an external webpage and get the id of every anchor with the specific event class
export async function crawlEventBritePage(url) {
  try {
    let currentPage = 1;
    let stillResults = true;
    // Array to store the events
    const events = {};

    do {
      // Make an HTTP request to the webpage
      const response = await axios.get(url + currentPage, { crossdomain: true });

      // Load the HTML content into Cheerio for easy DOM manipulation
      const $ = cheerio.load(response.data);

      // Specify the css class you want to target
      const cssClass = "event-card-link";

      // Select the a elements with the specified class
      const cardElements = $(`a.${cssClass}`);

      if(cardElements.length > 0) {
        // Iterate through each event element
        cardElements.each((index, cardElement) => {
          events[$(cardElement).attr('data-event-id')] = $(cardElement).attr('data-event-location');
        });
        currentPage++;
      } else {
        stillResults = false;
      }
    } while(stillResults);
  
    return events;
  } catch (error) {
    console.error('Error:', error.message);
  }
}
