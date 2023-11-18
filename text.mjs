const value = "outrasInformacoesNecessidades"

const firstLetter = (name) => name.charAt(0).toUpperCase() + name.slice(1);
  const separeString = (name) => name.replace(/([A-Z])/g, " $1").trim();
  const prettify = firstLetter(value);
  const stringpretty = separeString(prettify)
  console.log(stringpretty);