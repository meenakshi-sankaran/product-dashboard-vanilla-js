# Product Dashboard

An asynchronous web application built with HTML, CSS, and vanilla JavaScript that retrieves and displays business inventory data dynamically from an external Store Products API.

## Project Features and Checklist
* **Asynchronous Operations:** Implements modern asynchronous JavaScript architecture using dual methodologies: traditional `.then()`/`.catch()` chaining and modern `async`/`await` paradigms with comprehensive `try`/`catch` error blocks.
* **Dynamic UI Rendering:** Constrains API data stream payloads strictly to the top five inventory items, programmatically parsing and appending content cards directly into the DOM container.
* **Data Transformation:** Normalizes and formats raw integer pricing values fetched in currency cents directly into user-friendly decimal layouts (`$xx.xx`).
* **Interactive CSS Enhancements:** Features fluid hardware-accelerated grid layers and interactive structural card transformations using CSS transitions and `:hover` pseudoclasses to animate layout scaling and dynamic drop-shadow highlights.
