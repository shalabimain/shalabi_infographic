(() =>{
    
   
    function fetchData(){
    
       
        // console.log("gv");
        fetch (`./includes/connect.php`)
        .then(res => res.json())
        .then(data => {
            parsePaperWaste(data[0]);
        })
        .catch(function(error){
            console.error(error);
        });

    }

    function parsePaperWaste(waste){
        //debugger;
        // take the database data and put it on page
        const { ID, Heading, description } = Paperwaste
        
        document.querySelector("#footerText").textContent = Heading;
        document.querySelector("#footerHead").textContent = description;
        
        
    };
    fetchData();
    
})();





TweenMax.to("#orangeline", 2, {scale:1, rotation:360});

TweenMax.from("#blueline_1_", 3, {scale:1, rotation:220});

TweenMax.to("#blueline_10_", 3, {scale:1, rotation:360});


TweenMax.from("#trash", 1, {scale:1, rotation:360});


TweenMax.from("#glasspic", 1, {scale:3, rotation:360});

TweenMax.from("#bottlepic", 1, {scale:2, rotation:360});