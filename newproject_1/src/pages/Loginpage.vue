<template>
    <div class="container">
        <img src="public/assets/Logo.png"  class="logo">

        <div class="content">
            <div style="display:flex;flex-direction: column; text-align: center;">
                <h1>Welcome back</h1>
                <p style="font-size: 18px; color: #1C1C1C;">Log In to manage your deliveries and access other services.</p>
            </div>

            <div class="form">
                <form style="display:flex; flex-direction: column;">
                    <label>Email</label><br>
                    <input type="text" placeholder="Enter your email" class="input"><br><br>
                    <label>Password</label><br>
                    <div style="display:flex;border: 1px solid #DDD; justify-content: space-between;padding:1%; border-radius: 3%;">
                    <input :type="fieldtype" placeholder="Enter your password" style="border:none; width:100%;" ><br><br>
                    <img src="public/assets/eye visibility (1).svg" @click="showpassword">
                    </div>
                    
                    
                </form>

                <button class="btn"   @click="redirectToshipment">Log In</button>

                <a href="#" style="color:black;
                    display: flex;justify-content: end;margin-top: 3%;">
                    Forgot Password?
                </a>
            </div>
               

            
            
        </div>
       
    </div>

    <router-link to="/shipment">Shipment</router-link>

</template>

<script>
export default{
    data(){
        return{
            fieldtype: "password"
        }
    },
    methods:{
        showpassword(){
          
              console.log("check")
            if (this.fieldType == "password") {
            this.fieldType = "text";
        }
         else this.fieldType = "password";
        },
        redirectToshipment(){
            this.$router.push({ path: '/shipment' });
        }

    }

}

</script>



<style>

.container{
    border:1px solid#1C1C1C33;
    background: #FFFFFF 0% 0% no-repeat padding-box;
     opacity: 1;
}

.logo{
    margin-top: 40px;
    margin-left: 60px;
width: 185px;
height: 70px;
}

.content{

margin:auto;
width: 637px;

background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 30px 53px 26px #F3485608;
border: 1px solid #F0F2F7;
opacity: 1;
padding-top: 5%; padding-bottom: 5%;
margin-top: 15%;

margin-bottom: 15%;
}

.form{
    margin-left: 15%;
    margin-right: 15%;
}

.input{
    border-radius:3px;
    border: 1px solid #1C1C1C33;
   padding:3%;
   
    

}

.btn{
 width:100%;   
 padding:3%;
 background: rgba(245, 86, 74, 1)  ;
 color:white;
 border:none;
 border-radius:3px;
 margin-top: 5%;

}
</style>