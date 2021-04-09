const sleep = sec => new Promise(resolve => setTimeout(resolve, sec * 1000));

const collect = async () => {
    await sleep(30);

    // the point container
    const target = document.getElementsByClassName("community-points-summary")[0];
    
    // create a new mutation observer
    const observer = new MutationObserver(() => {
        // check if the points button exists
        const element = document.getElementsByClassName("claimable-bonus__icon")[0];

        if (element) {
            // click the claim bonus button
            element.click();
        }
        
    });
    
    // disconnect the observer when the page unloads
    window.onbeforeunload = () => observer.disconnect();
    
    // start observing changes
    observer.observe(target, { subtree: true, childList: true });
};

// collect points
collect();