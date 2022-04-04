/**
 * js_timer
 *
 */
document.addEventListener('DOMContentLoaded', () => {
  const elem = document.querySelectorAll('.js_timer');
  elem.forEach((e) => {
    const NOW = new Date().getTime();
    const START = new Date(e.dataset.start).getTime();
    const END = new Date(e.dataset.end).getTime();
      let flag = false; // Global Flag
      /**
      * check start date
      *
      * @return Boolean;
      */
      const checkerStart = () => {
        if (NOW > START) return true;
        else return false;
      }
      /**
      * check end date
      *
      * @return Boolean;
      */
      const checkerEnd = () => {
        if (NOW < END) return true;
        else return false;
      }
      /*
      * judge
      *
      * @return Boolean;
      */
      if (START && END) if (checkerStart() && checkerEnd()) flag = true;
      else if (START && !END) if (checkerStart()) flag = true;
      else if (!START && END) if (checkerEnd()) flag = true;
      else flag = false;
    if (!flag) e.remove();
  })
})
