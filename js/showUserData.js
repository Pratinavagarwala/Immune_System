class UserData{
    constructor(){
        this.text6=createElement("h2");
        this.text7=createElement("h2");
        this.text8=createElement("h2");
        this.text9=createElement("h2");

        this.oxygenRate=createInput(player.oxygenRate);
        this.bloodPressure=createInput(player.bloodPressure);
        this.pulseRate=createInput(player.pulseRate);
        this.waterIntake=createInput(player.waterIntake);

        

        this.save=createButton("Enter to save data");
        this.data=createButton("Advisory");
        this.data.position(window.innerWitdh/2+1500,window.innerHeight/2-1000);
        
    }
   
    display(){
        clear();
        background("black");

        this.text6.html("Oxygen level");
        this.text6.position(window.innerWidth/2-95,150);
        
        this.oxygenRate.position(window.innerWidth/2+190,170);
        
        this.text7.html("Blood Pressure level");
        this.text7.position(window.innerWidth/2-95,250);
        this.bloodPressure.position(window.innerWidth/2+190,270);
     
        this.text8.html("Pulse rate");
        this.text8.position(window.innerWidth/2-95,350);
        this.pulseRate.position(window.innerWidth/2+190,370);

        this.text9.html("Water intake in glasses");
        this.text9.position(window.innerWidth/2-95,450);
        this.waterIntake.position(window.innerWidth/2+190,470);

        this.save.position(window.innerWidth/2,550);
        this.data.position(window.innerWidth/2+600,200);
        console.log(window.innerWidth);

    this.data.mousePressed(()=>{
        
        this.text6.hide();
        this.text7.hide();
        this.text8.hide();
        this.text9.hide();
        this.oxygenRate.hide();
        this.bloodPressure.hide();
        this.pulseRate.hide();
        this.waterIntake.hide();

        this.save.hide();
        this.data.hide();
    
       
        background("black");
        advisory.display();
        })
    
    this.save.mousePressed(()=>{
        player.oxygenRate=this.oxygenRate.value();
        player.waterIntake=this.waterIntake.value();
        player.pulseRate=this.pulseRate.value();
        player.bloodPressure=this.bloodPressure.value();
        player.updateData();
     })
    }
}