<!--
	imgDir = "/graphics/";

        if (document.images){           //Active Images
                home_off=new Image();
                home_off.src=imgDir + "home_off.gif";
                home_on=new Image();
                home_on.src=imgDir + "home_on.gif";

                bio_off=new Image();
                bio_off.src=imgDir + "bio_off.gif";
                bio_on=new Image();
                bio_on.src=imgDir + "bio_on.gif";

                gigs_off=new Image();
                gigs_off.src=imgDir + "gigs_off.gif";
                gigs_on=new Image();
                gigs_on.src=imgDir + "gigs_on.gif";

                clips_off=new Image();
                clips_off.src=imgDir + "clips_off.gif";
                clips_on=new Image();
                clips_on.src=imgDir + "clips_on.gif";

                band_off=new Image();
                band_off.src=imgDir + "band_off.gif";
                band_on=new Image();
                band_on.src=imgDir + "band_on.gif";

                pics_off=new Image();
                pics_off.src=imgDir + "pics_off.gif";
                pics_on=new Image();
                pics_on.src=imgDir + "pics_on.gif";

                booking_off=new Image();
                booking_off.src=imgDir + "booking_off.gif";
                booking_on=new Image();
                booking_on.src=imgDir + "booking_on.gif";



        }


        
        //Switch sections
        function goTo(sectionName){
                if(document.images){
                        document[currentSection].src=eval(currentSection+"_off.src");
                        document[sectionName].src=eval(sectionName+"_on.src");
                        currentSection=sectionName;
                }
        }

        //Activate images
        function imgOn(imgName){
                if ((document.images) && (imgName != currentSection)){
                        document[imgName].src=eval(imgName+"_on.src");
                }
        }

        //Deactivate images
        function imgOff(imgName){
                if((document.images) && (imgName !=currentSection)){
                                document[imgName].src=eval(imgName+"_off.src");
                }
        }

	//Load the current section image
	function loadCurrentSection(){
		if(document.images){
			document[currentSection].src=eval(currentSection+"_on.src");
		}
	}

//-->