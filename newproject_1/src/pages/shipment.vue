<template>
    <div class="container">
      <div class="sidenav"> 
        <div class="sidenav-content">
            <div style="display:flex;justify-content: space-around;">
            <img src="public/assets/hamburget menu icon.svg">
            <img src="public/assets/Logo.png" style="margin-left: 10%;">
        </div>

        <div style="display:flex;justify-content: center;border-radius: 5px; background:#FFFCFA">
            <img src="public/assets/plus icon - bg.svg" style="margin-right: 5px;">
            <p>Create shipment</p>
        </div>

        <div  class="subnav-content">
            <div class="subnav">
                <img src="public/assets/Get quote icon.svg" class="imag">
                <p>Get Quote</p>
            </div>
            <div class="subnav">
                <img src="public/assets/shipment icon.svg" class="imag">
                <p>Shipments</p>
                <img src="public/assets/number.svg" style="    margin-left: 35%;">
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
    align-items: center;
    border-radius: 3%;
    margin-top: 70%;">
            <div style="height:40px;">
                <img src="public/assets/fire icon.svg">
                
            </div>
            <div style="color:white;font-size: 12px;">
                <p>A new shipment has been added.</p>
                <p>Details  ></p>
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
            <div style="display:flex;justify-content: space-between;">
                <div>
                <p  style="margin-bottom:0;font-size:16px;"><b>Welcome back Bibash Khadka,</b></p>
                <p style="color:#393A60;font-style: normal;">Thursday, 16 Aug</p>

                
               

                </div>
                <div style="display:flex;justify-content: center;align-items: center;">
                    <img src="public/assets/dark mode icon.svg"  style="margin-right:10px;">
                   <div style="
    border-radius: 50px;background:#F97031; color:white;margin-right:10px;">BK</div>
                    <img src="public\assets\dropdown (1).svg">
                </div>

                
            </div>
            <hr>
            

            <div style="display:flex;justify-content: space-between;">
                <div>
                <p style="margin-bottom:0;font-size: 18px;"><b>Shipments</b></p>
                <p style="color:#393A60;">You can check or create your new orders , ready to shipment and track an orders.</p>
                </div>
                <div style="display:flex; justify-content: space-between;">
                    <div style="display:flex;justify-content: center;
    align-items: center;margin-right:30px;">
                    <img src="public\assets\download.svg" style="height:10px;margin-right:10px;">
                    <p style="color:#393A60">Download Template</p>
                    </div>
                    <div style="display:flex;justify-content: center;
    align-items: center;margin-right:30px;">
                    <img src="public/assets/import icon.png" style="height:10px;margin-right:10px;">
                    <p style="color:#393A60">Import CSV</p>
                    </div>
                    <div style="display:flex;justify-content: center;
    align-items: center;" >
                    <button style="background-image: linear-gradient(#F97031,#F1306B);
                    border: none;
    padding: 5px;
    color: white;">+ Add Order</button>
                    </div>

                </div>

                
            </div>

            <div style="display:flex; margin-right:5%;
    display:flex;
    align-items: center;">
                <div   style="margin-right:5%;">
                    <div   @click="clickfunc('neworders')"  :class="{cont:clickoption===`neworders`}">
                        <p style="color:#393A60;  " ><b>New Orders  0</b> </p> 
                    </div>
                    
                  
                    
                </div>
                <div  style="margin-right:5%;" >
                    <div @click="clickfunc('readytoship')" :class="{cont:clickoption===`readytoship`}">
                        <p style="color:#F97031; "> <b>Ready to ship  0</b></p>
                    </div>
                    
                    
                </div>
                <div  @click="clickfunc('shipmentHistory')" :class="{cont:clickoption===`shipmentHistory`}">
                    <div style="display:flex;">
                        <img src="public\assets\icon mask.png" > 
                       <p style="color:#393A60"><b>Shipment History</b></p>
                    </div>
                    
                </div>
                  
            </div>
            <hr style="margin:0;">

            <div style="display:flex;justify-content: space-between;align-items: center;">
                <div style="display:flex;    align-items: center;">
                    <img src="public/assets/Search.png"  style="height:15px;">
                    <p style="margin-left: 10px;color:#393A60">Search by criteria including name, reference, connote …</p>
            </div>

            <div style="display: flex;
    border: 1px solid #F0F2F7;
    background: #FDFDFD;
    height: 28px;
    justify-content: center;
    align-items: center;">
                <img src="public/assets/filter icon.svg" style="margin-right: 10px;">
                <p  style="color:#393A60">Filters</p>

            </div>
            </div>
            
            <div style=" border:1px solid #F0F2F7;
    border-radius: 5px;
    background:#FFFFFF;">
                <div class="content1">
                    <img src="public/assets/empty box svg.png" style="margin-top: 10%;">
                </div>
               

                <div style="display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom:5%;">
                <p><b>You currently have no new orders</b></p>
                <p style="width:30%;margin:0;color:#393A60">You can check for new orders by syncing with your ecommerce integration.</p>
                </div>
            </div>
            
        </div>
        
      </div>

    </div>
</template>

<script>

export default{
    data(){
        return{
                clickoption:"neworders",

                current_tab:"newOrders"

        }
    },
    methods:{
        clickfunc(selectoption){
            this.clickoption=selectoption;
                console.log("option clicked is ",this.clickoption)
        },

        getclass(selecttab){
            this.current_tab=selecttab
            console.log("tab clicked is ",this.current_tab)
        }

    }
}

</script>

<style>
.container{
    display:flex;
}

.sidenav{
width:18%;
border:1px solid #F0F2F7;

}

.subnav{
    display:flex;
}

.subnav-content{
    display: flex;
     flex-direction: column;
     padding :20px;
     margin-top:10%;
}

.imag{
    margin-right:10px;
    margin-left:15px;
}

.sidenav-content{
    margin-left: 5%;
    margin-right: 5%;
}

.about-content{
    margin-left: 15px;
    margin-right: 15px;
}

.about{
    width:80%;
    background:#FAFAFA
}

.cont{
   
    border-bottom: 3px solid orangered;
}

.content1{
   
    display: flex;
    
    justify-content: center;
}

.subnav:hover{
    color:#F97031;
    background:#F0F2F7;
    border-left:3px solid #F97031;
}




</style>