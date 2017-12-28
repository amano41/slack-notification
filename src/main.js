function postMessage(webhook, channel, username, icon_emoji, message, attachments) {

  var payload = {
    "channel": channel,
    "username": username,
    "icon_emoji": icon_emoji,
    "text": message,
    "attachments": attachments
  };

  return sendHttpRequest_(webhook, payload);
}


function sendHttpRequest_(webhook, payload) {

  var headers = {
    "Content-type": "application/json; charset=utf-8"
  }

  var options = {
    "method": "POST",
    "headers": headers,
    "payload": JSON.stringify(payload)
  }
  Logger.log(options);

  var response = UrlFetchApp.fetch(webhook, options);
  Logger.log(response);

  return response.getContentText("UTF-8");
}
