function openBar(seltab, barName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++)
    tabcontent[i].style.display = "none";
  tablinks = document.getElementsByClassName("tablinks");
  for (let value of tablinks)
    value.style.backgroundColor = "lightgrey";
  document.getElementById(barName).style.display = "block";
  seltab.style.backgroundColor = "lightgreen";
}