<!DOCTYPE html>
<html>
<head>
<script>
function confirmInput() {
  fname = document.forms[0].fname.value;
  alert("Hello " + fname + "! You will now be redirected to JoseRamos.dev");
}
</script>
</head>
<body>

<form onsubmit="confirmInput()" action="https://www.joseramos.dev/">
  Enter your name: <input id="fname" type="text" size="20">
  <input type="submit">
</form>

</body>
</html>
