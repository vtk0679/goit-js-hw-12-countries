import { alert } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export default showError;

function showError(error) {
  alert({
    text: error,
    type: 'error',
    delay: 3000,
  });
}
