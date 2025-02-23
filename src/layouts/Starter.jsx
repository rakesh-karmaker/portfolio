const Starter = () => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let ele = document.querySelector(".loader-text");
  $(ele).css("opacity", "1");
  let value = ele.innerText;
  let iterations = 0;
  ele.innerText = "";
  const interval = setInterval(() => {
    let letterIntervalCount = 0;
    const letterInterval = setInterval(() => {
      if (letterIntervalCount >= 3 || iterations >= 11) {
        clearInterval(letterInterval);
      } else {
        ele.innerText =
          value.slice(0, iterations) + letters[Math.floor(Math.random() * 26)];
      }
      letterIntervalCount++;
    }, 35);

    ele.innerText = value.slice(0, iterations) + value[iterations];

    if (iterations >= value.length - 1) {
      clearInterval(interval);
      loaderWindow(ele);
    }
    iterations++;
  }, 100);

  return (
    <div>
      <h1>hi</h1>
    </div>
  );
};
