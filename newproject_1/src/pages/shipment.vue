<template>
    <div class="container">
      <div class="sidenav"> 
        <div class="sidenav-content">
            <div style="display:flex;justify-content: space-around;">
            <img src="public/assets/hamburget menu icon.svg">
            <img src="public/assets/Logo.png">
        </div>

        <div style="display:flex;justify-content: center;border-radius: 5px; background:#FFFCFA">
            <img src="public/assets/plus icon - bg.svg" style="margin-right: 5px;">
            <p>Create shipment</p>
        </div>

        <div style="display: flex; flex-direction: column;padding :20px;margin-top:10%;">
            <div class="subnav">
                <img src="public/assets/Get quote icon.svg" class="imag">
                <p>Get Quote</p>
            </div>
            <div class="subnav">
                <img src="public/assets/shipment icon.svg" class="imag">
                <p>Shipments</p>
                <img src="public/assets/number.svg">
            </div>
            <div class="subnav">
                <img src="public/assets/history icon.svg" class="imag">
                <p>Manifest history</p>
            </div>
            <div class="subnav">
                <img src="public/assets/address book icon.svg" class="imag">
                <p>Address book</p>
            </div>
        </div>

        <div  style="display:flex;background-image: linear-gradient(#F97031,#F1306B);justify-content: space-around;
    align-items: baseline;
    border-radius: 3%;
    margin-top: 70%;">
            <div>
                <img src="public/assets/fire icon.svg">
                
            </div>
            <div style="color:white;">
                <p>A new shipment has been added.</p>
                <p>Details</p>
            </div>

        </div>

        <div style="display: flex; flex-direction: column;padding :20px;margin-top:10%;">
            <div class="subnav">
                <img src="public/assets/setting.svg" class="imag">
                <p>Setting</p>
            </div>
            <div class="subnav">
                <img src="public/assets/help icon.svg" class="imag">
                <p>Help & support</p>
               
            </div>
        </div>
        </div>
        
      </div>
      <div class="about">
        <div class="about-content">
            <div>
                <h5 style="margin-bottom:0;">Welcome back Bibash Khadka,</h5>
                <p>Thursday, 16 Aug</p>
            </div>

            <div style="margin-top:5%">
                <h5 style="margin-bottom:0;">Shipments</h5>
                <p>You can check or create your new orders , ready to shipment and track an orders.</p>
            </div>

            <div style="display:flex;">
                <div class="cont">
                    <p style="color:#393A60;    margin-right: 10px;"><b>New Orders</b> </p> 
                   <div>0</div>
                    
                </div>
                <div  class="cont">
                    <p style="color:#F97031; margin-right: 10px;"> <b>Ready to ship</b></p>
                    <div style="     background: #F97031;
    color: white;width: 20px;text-align: center; border-radius: 25%;">0</div>
                </div>
                <div  class="cont">
                    <div>
                        <img src="public\assets\icon mask.png">
                    </div>
                    <p style="color:#393A60"><b>Shipment History</b></p>
                </div>
                
                
            </div>
            
        </div>
        
      </div>

    </div>
</template>

<style>
.container{
    display:flex;
}

.sidenav{
width:20%;
border:1px solid #F0F2F7;

}

.subnav{
    display:flex;
}

.imag{
    margin-right:10px;
}

.sidenav-content{
    margin-left: 5%;
    margin-right: 5%;
}

.about-content{
    margin-left: 15px;
}

.about{
    width:80%;
}

.cont{
    margin-right:5%;
    display:flex;
    align-items: center;
}
</style>