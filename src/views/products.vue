<template>
    <div>
        <!-- {{apidata}} -->
        <v-app-bar
            color="white"
            dense
            dark
            >
            <v-toolbar-title><img src="https://www.freepnglogos.com/uploads/nintendo-logo-png/nintendo-logo-vector-format-11.png" alt=""  height="80px"></v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon color="red accent-4">
                <v-icon @click="order_product()">mdi-cart</v-icon>
            </v-btn>

            <v-btn icon color="red accent-4">
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon color="red accent-4">
                <v-icon>mdi-logout</v-icon>
                
            </v-btn>

        </v-app-bar>
        
        <v-carousel>
            <v-carousel-item
                v-for="(item_page,i) in items"
                :key="i"
                :src="item_page.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
            ></v-carousel-item>
        </v-carousel>

        <v-container>
            <v-rwo>
                <v-col>
                    <h1>Games for Nintendo Switch</h1>
                </v-col>
                    <v-btn icon>
                        <v-icon color="black" @click="dialogedit = true">mdi-cart-plus</v-icon>
                    </v-btn>
            </v-rwo>
        </v-container>
        <v-container>
            <v-row no-gutters>
                <v-col clos="3" v-for="(item,index) in apidata" :key="index">
                    <v-container>
                        <v-row>
                            <v-col>
                                <v-card
                                    
                                    max-width="344"
                                >
                                    <v-img
                                    :src = "item.image"
                                    height="200px"
                                    ></v-img>

                                    <v-card-title>
                                        {{item.product_name}}
                                    </v-card-title>
                                    
                                    <!-- <v-card-subtitle>
                                        {{item.amount}} 
                                    </v-card-subtitle> -->

                                    <v-card-subtitle>
                                        Nintendo Switch
                                    </v-card-subtitle>

                                    <v-card-actions>
                                        <v-btn icon>
                                            <v-icon color="grey darken-1" @click="edititemmode(item)">
                                                mdi-clipboard-edit
                                                <!-- fas fa-edit -->
                                            </v-icon>
                                        </v-btn>
                                        <v-btn icon>
                                            <v-icon color="grey darken-1" @click="delitemmode(item)">
                                                mdi-delete
                                                <!-- fas fa-edit -->
                                            </v-icon>
                                        </v-btn>

                                        <v-spacer></v-spacer>

                                        <!-- <v-btn icon>
                                            <v-icon color="grey darken-3" @click="open()">mdi-shopping</v-icon>
                                        </v-btn> -->

                                        <!-- <v-btn color="red accent-4" class="white--text pt-0 text"  @click="open()">
                                            {{item.price}} $
                                        </v-btn> -->

                                        <v-btn color="red accent-4" outlined @click="open()">
                                            {{item.price}} $
                                        </v-btn>
         
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>

            <v-dialog v-model="dialogedit" max-width="500px">
                <v-card>
                    <v-card-title primary-title>
                        {{savemode}}
                        <!-- Add Product -->
                    </v-card-title>

                    <v-card-text>
                        <v-row>
                            <v-col clos="6">
                                <v-text-field 
                                name="product_name" 
                                label="Product Name" 
                                id="product_name"
                                v-model="postdata.product_name"
                                >
                                </v-text-field>
                            </v-col>
                            <v-col clos="6">
                                <v-text-field 
                                name="price" 
                                label="Price" 
                                id="price"
                                v-model="postdata.price"
                                >
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col clos="6">
                                <v-text-field 
                                name="amount" 
                                label="Amount" 
                                id="amount"
                                v-model="postdata.amount"
                                >
                                </v-text-field>
                            </v-col>
                            <v-col clos="6">
                                <v-text-field 
                                name="image" 
                                label="Image" 
                                id="image"
                                v-model="postdata.image"
                                >
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col clos="12">
                                <v-text-field
                                name="detail" 
                                label="Detail" 
                                id="detail"
                                v-model="postdata.detail"
                                >
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text color="error" @click="closeData()">Cancle</v-btn>
                        <v-btn outlined color="success" @click="selectSave()">Save</v-btn>
                        <!-- <v-btn outlined color="success" @click="postData()">save</v-btn> -->
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="dialogdel" max-width="500px">
                <v-card>
                    <v-card-title primary-title>
                        Delete it!
                    </v-card-title>
                    <v-card-text>
                        are you sure ?
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text color="error" @click="closeData()">Cancle</v-btn>
                        <v-btn outlined color="success" @click="delData()">Delete</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="dialogdeatil" max-width="500px">
                <v-card>
                    <v-card-title primary-title>
                        My Games
                    </v-card-title>
                </v-card>
            </v-dialog>

            <v-dialog v-model="dialogorder" max-width="500px">
                <v-card>
                    <v-card-title primary-title>
                        Order 
                    </v-card-title>
                </v-card>
            </v-dialog>

        </v-container>


  <br>

  <v-footer dark padless>
    <v-card flat tile class="deep-orange accent-4 white--text text-center">
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Nintendo has been a beneficiary of COVID-19 with families spending more time at home. The timely release of Animal Crossings New Horizon, a casual social simulation game, boosted the adoption of Nintendo Switch in 2020. Over 27 million Switch units will be sold in FY 2020 totaling to 80 million units sold since launch in 2017. Management is all-in on the Switch hardware platform.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>

  </div>
</template>

<script>
export default {
    data () {
      return {
        id:'',
        apidata: [],
        dialogedit: false,
        dialogdeatil: false,
        dialogorder: false,
        items: [
          {
            src: 'https://fs-prod-cdn.nintendo-europe.com/media/images/08_content_images/others_2/career_3/CI_Nintendo_Jobs_Overview.jpg',
          },
          {
            src: 'https://media.wired.com/photos/60e45f329c0558467e693ce0/2:1/w_1854,h_927,c_limit/Culture_Games_NintendoSwitchOLEDmodel_02.jpg',
          },
          {
            src: 'https://i0.wp.com/vrscout.com/wp-content/uploads/2019/01/SI_GenericNintendo.jpg?fit=2000%2C1000&ssl=1',
          },
          {
            src: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/v1/ncom/en_US/merchandising/Nintendo_Switch_family_wide_TEST-1',
          },
        ],
        
        
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
        postdata:{
            product_name:'',
            price:'',
            amount:'',
            image:''
        },
        postdefault:{
            product_name:'',
            price:'',
            amount:'',
            image:''
        }
      }
    },
    created(){
        this.getData()
    },
    computed:{
        savemode(){
            return this.id =='' ?'New Product':'Edit Product'
        }
    },
    methods: {
    getData () {
        this.axios.get('http://localhost:3000/product/').then((response) => {
            console.log(response.data)
            this.apidata = response.data.data
            })
        },
        newitemmode(){
            this.id = ''
            this.dialogedit = true
        },
        edititemmode(item){
            this.id = item._id
            this.postdata = {...item}
            this.dialogedit = true
        },
        delitemmode(item){
            this.id = item._id
            this.dialogdel = true
        },
        selectSave (){
            if(this.savemode == 'Edit Product'){
                this.putData()
            }else this.postData()  
        },
        open(){
            // this.id = item._id
            // this.postdata = {...item}
            this.dialogdeatil = true
        },
        order_product(){
            this.dialogorder = true
        },
        async postData (){
            try{
                const {data} = await this.axios.post('http://localhost:3000/product/', this.postdata)
                alert(data.message)
                this.getData()
                // this.postdata = {...this.postdefault}
                this.postdata = Object.assign({}, this.postdefault)
                this.dialogedit = false
                
            } catch(err) {
                console.log(error)
            }
        },
        async putData (){
            try{
                const {data} = await this.axios.put('http://localhost:3000/product/'+ this.id,this.postdata)
                alert(data.message)
                this.getData()
                // this.postdata = {...this.postdefault}
                this.postdata = Object.assign({}, this.postdefault)
                this.dialogedit = false
                
            } catch(err) {
                console.log(error)
            }
        },
        async delData (){
            try{
                const {data} = await this.axios.delete('http://localhost:3000/product/'+ this.id)
                alert(data.message)
                this.getData()
                // this.postdata = {...this.postdefault}
                this.postdata = Object.assign({}, this.postdefault)
                this.id = ''
                this.dialogdel = false
                
            } catch(err) {
                console.log(error)
            }
        },
        closeData () {
            this.postdata = Object.assign({}, this.postdefault)
            this.dialogedit = false
            this.dialogdel = false
        }
    }
    
}
</script>

<style>

</style>