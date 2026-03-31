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

browser.contextMenus.create({
  id: "paste-uuid",
  title: "Paste new UUID",
  contexts: ["editable"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "paste-uuid") {
    const uuid = crypto.randomUUID();
    browser.tabs.executeScript(tab.id, {
      code: `
        (() => {
          const uuid = "${uuid}";
          const el = document.activeElement;
          if (el.isContentEditable) {
            document.execCommand("insertText", false, uuid);
          } else {
            const start = el.selectionStart;
            const end = el.selectionEnd;
            el.value = el.value.substring(0, start) + uuid
              + el.value.substring(end);
            el.selectionStart = el.selectionEnd = start + uuid.length;
          }
        })();
      `
    });
  }
});
