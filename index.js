
    window.onload = function () {
        
        let ddlYears = document.getElementById("ddlYears");
 
    
        var currentYear = (new Date()).getFullYear();
 
      
        for (var i = 1950; i <= currentYear; i++) {
            var option = document.createElement("OPTION");
            option.innerHTML = i;
            option.value = i;
            ddlYears.appendChild(option);
        }
    };

   

    
