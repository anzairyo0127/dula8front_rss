interface InsertHtml {
  header: string;
  mainContent: string;
}

const html = ({ header, mainContent }: InsertHtml) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>dula8Front</title>
    </head>
    <body>
      <div class="header">${header}</div>
      <div class="keyVisual"></div>
      <div class="sideBar"></div>
      <div class="mainContent">${mainContent}</div>
    </body>
    <script src="js/react.js" defer></script>
  </html>
`;

export default html;
