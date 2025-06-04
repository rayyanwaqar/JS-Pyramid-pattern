for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br/>");
}

document.write("<hr/>");

for (var i = 5; i >= 1; i--) {
  for (var j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br/>");
}

document.write("<hr/>");

for (var i = 1; i <= 5; i++) {
  for (var j = 4; j >= i; j--) {
    document.write("&nbsp ");
  }
  for (var k = 1; k <= i; k++) {
    document.write("*");
  }
  document.write("<br/>");
}

document.write("<hr/>");

for (var i = 5; i >= 1; i--) {
  for (var j = 4; j >= i; j--) {
    document.write("&nbsp ");
  }
  for (var k = 1; k <= i; k++) {
    document.write("*");
  }
  document.write("<br/>");
}

document.write("<hr/>");

for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    document.write(j);
  }
  document.write("<br/>");
}

document.write("<hr/>");

for (var i = 5; i >= 1; i--) {
  for (var j = 1; j <= i; j++) {
    document.write(j);
  }
  document.write("<br/>");
}

document.write("<hr/>");

for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let space = 0; space < 5 - i; space++) {
        line += "&nbsp;";
    }
    for (let j = 1; j <= i; j++) {
        line += "*";
    }
    document.write(line + "<br/>");
}
