interface InsertHtml {
  header: string;
  mainContent: string;
}

const html = ({ header, mainContent }: InsertHtml) => `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>dula8Front</title>
    <link href="css/style.css" rel="stylesheet">
  </head>
  <body>
    <div class="header">${header}</div>
    <div class="keyVisual"></div>
    <div class="sideBar"></div>
    <div class="mainContent">${mainContent}</div>
  </body>
  <script src="scripts/script.js"></script>
</html>`;

export default html;
