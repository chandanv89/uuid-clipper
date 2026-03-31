browser.browserAction.onClicked.addListener(async () => {
  const uuid = crypto.randomUUID();

  try {
    await navigator.clipboard.writeText(uuid);
    browser.browserAction.setBadgeText({ text: "\u2713" });
    browser.browserAction.setBadgeBackgroundColor({ color: "#4CAF50" });
    setTimeout(() => browser.browserAction.setBadgeText({ text: "" }), 1500);
  } catch (err) {
    console.error("Failed to copy UUID:", err);
  }
});
