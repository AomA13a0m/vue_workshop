<template>
  <!-- <div>
    <h1>INTRODUCE</h1>
    <br>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgnlelNMnezJOcdRzgt-zWQLcY60hjQ484pg&usqp=CAU" style="float:right 200px" width="250" height="250"  />
    <br>
    <h3 class="border_profil">NATTAKORN BUREERAT (AOMSIN)</h3>
    <div class="border_profil">
      <p>จบจากมหาวิทยาลัยแม่โจ้ คณะวิทยาศาตร์ สาขาวิทยาการคอมพิวเตอร์</p>
      <p>งานอดิเรก : นอน<br></p>
      <p>สิ่งที่ชอบ : เบียร์,เกม,แมว <br></p>
      <p>สิ่งที่ไม่ชอบ : กบ<br></p>
      <p>จุดอ่อน : เมาง่าย<br></p>
    </div>
  </div> -->
  <v-container>
    <v-row justify="space-around">
      <v-card width="400">
        <v-img
          height="200px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiwxRCf1QU9wCMCzlHXIY9KmXaMqlKbWWwig&usqp=CAU"
        >
          <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)"
          >
            <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

            <v-toolbar-title class="text-h6 white--text pl-0">
              Introduce
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn
              color="white"
              icon
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-app-bar>

          <v-card-title class="white--text mt-8">
            <v-avatar size="70">
              <img
                alt="user"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvlu-29bIndq8hlRyIxq-7hNvRyjFkDz9MhO0uzB2mHa3Pw4DG9IkmCm1AIuY_Ik0wDkM&usqp=CAU"
              >
            </v-avatar>
            <p class="ml-3">
              พระอิศวร
            </p>
          </v-card-title>
        </v-img>

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            พระอิศวร
          </div>

          <v-timeline
            align-top
            dense
          >

          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
h1 {
  color:black;
  font-family: serif;
  font-size: 30px;
  text-align: center;
}
h3 {
  color:gray;
  font-family: erif;
  font-size: 50px;
  text-align: center;
  }
p{
  font-family: erif;
  font-size: 20px;
  text-align: center;
  /* border-style: solid; */
}
.border_profil{
  border-style: solid;
  border-radius: 9px;
}
img{
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

</style>
