  function login()
  {

  var x=document.forms["myform"]["uname"].value;
  if(x=="talha"||x=="abijith")
  {
     return true;
  }
  else
  {
    alert("Wrong username or password");
    return false;
  }
  
  }

  function cancel()
  {
    alert("Do you want to go back to homepage?")
    return true;
  }

      function load()
      {
        
        document.getElementById("para").innerHTML="logging in as abijith";
      }