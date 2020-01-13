const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const collect = async () => {
  for (;;) {
    const elements = document.getElementsByClassName("claimable-bonus__icon")
    if (elements.length) {
      elements[0].click()
      await sleep(60000)
    } else {
      await sleep(2000)
    }
  }
}

collect();