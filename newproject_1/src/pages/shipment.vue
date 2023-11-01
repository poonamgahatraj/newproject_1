<template>
    <div class="container">
      <div class="sidenav"> 
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
      </div>
      <div class="about"></div>

    </div>
</template>

<style>
.container{
    display:flex;
}

.sidenav{
width:20%;
border:1px solid #F0F2F7
}

.subnav{
    display:flex;
}

.imag{
    margin-right:10px;
}
</style>