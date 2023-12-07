function odswiezDane() {
  const url1 = "https://imiki.pl/dane.json";
  const url2 = "https://imiki.pl/dane1.json";
  
  pobierzDane(url1).then(dane1 => {
    pobierzDane(url2).then(dane2 => {
      const polaczoneDane = { ...dane1, ...dane2 };
      
      document.getElementById("listaPunktow").innerHTML = "";
      document.getElementById("tabelaDodatnich").innerHTML = "<tr><th>Pozycja</th><th>Punkty</th></tr>";
      document.getElementById("tabelaUjemnych").innerHTML = "<tr><th>Pozycja</th><th>Punkty</th></tr>";
      uzupelnijTabele(polaczoneDane);
    });
  }).catch(blad => {
    console.error('Błąd podczas odświeżania danych:', blad);
  });
}
function pobierzDane(url) {
  return fetch(url)
    .then(odpowiedz => odpowiedz.json())
    .catch(blad => {
      console.error('Błąd pobierania danych:', blad);
    });
}
function uzupelnijTabele(dane) {
  dane = Object.keys(dane).map(function(key) {
    return { klucz: key, wartosc: dane[key] };
  });
  for (let i = 0; i < Object.keys(dane).length; i++) {
    const tabela = dane[i].wartosc.punkty >= 0 ? "tabelaDodatnich" : "tabelaUjemnych";

    document.getElementById(tabela).innerHTML +=
      `<tr onclick='wywolaj(${i})'>
        <td>${dane[i].wartosc.pozycja}</td>
        <td>${pobierzWartoscPunktow(dane[i].wartosc.punkty)}</td>
      </tr>`;
  }
}
function wywolaj(indeks) {
  const wypluwacz = document.getElementById("wypluwacz");
  wypluwacz.innerHTML = pobierzWartoscPunktow(dane[indeks].wartosc.punkty);
}
function pobierzWartoscPunktow(punkty) {
  return typeof punkty === "object" ? `${punkty.p0}-${punkty.p1}` : punkty;
}
function aktualizujTabele() {
  console.log("Tabela zaktualizowana");
}
odswiezDane();
