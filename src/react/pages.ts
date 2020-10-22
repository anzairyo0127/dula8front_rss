interface InsertHtml {
  top: string
}

export const html = ({ top }: InsertHtml) => `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>dula8Front</title>
    <link href="css/style.css" rel="stylesheet">
  </head>
  <body>
    <div class="app">${top}</div>
  </body>
  <script src="scripts/script.js"></script>
</html>`;
