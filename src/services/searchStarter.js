export default function observeMyWrapper(linesChange, setStart) {
    // observe when gsc loaded, then we can find the .gsc-results-wrapper-nooverlay to observe it

    const checkgsc = document.querySelector("#gcse-my-wrapper #___gcse_0");

    if (checkgsc) {
        track___gcse_0SearchInput();
    } else {
        const observerOptions = {
            childList: true,
            attributes: true,
            subtree: false // Omit (or set to false) to observe only changes to the parent node
        }
        function callback() {
            track___gcse_0SearchInput(linesChange, setStart);
        }
        const wrapperNode = document.querySelector("#gcse-my-wrapper");
        const observer = new MutationObserver(callback);
        observer.observe(wrapperNode, observerOptions);
    }
}

function track___gcse_0SearchInput(callBack, setStart) { // observe every time gsc-lines changes
    setStart(true); // replacing the loader and enable search
    const targetNode = document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0];
    const observerOptions = {
        childList: false,
        attributes: true,

        // Omit (or set to false) to observe only changes to the parent node
        subtree: false
    }

    const observer = new MutationObserver(callBack);
    observer.observe(targetNode, observerOptions);
}
