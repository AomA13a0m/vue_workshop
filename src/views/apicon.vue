<template>
    <div>
        <h1>apicon page</h1>
        <v-btn color="success" @click="dialogedit = true">Add User</v-btn>        
        <!-- {{apidata}} -->
        <v-row no-gutters>
            <v-col clos="3" v-for="(item,index) in apidata" :key="index">
                <v-card max-width="250">
                    <v-img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvlu-29bIndq8hlRyIxq-7hNvRyjFkDz9MhO0uzB2mHa3Pw4DG9IkmCm1AIuY_Ik0wDkM&usqp=CAU"
                        height="200px"
                    ></v-img>
                    <v-card-title>
                        {{item.user_name}}
                    </v-card-title>
                    <v-card-subtitle>
                        {{item.Fname}}
                    </v-card-subtitle>
                    <v-card-actions>
                        <v-btn
                            color="orange lighten-2"
                            text
                            @click="edititemmode(item)"
                        >edit</v-btn>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                    <v-card-actions>
                        <v-btn
                            color="red lighten-2"
                            text
                            @click="delitemmode(item)"
                        >Delete</v-btn>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                    <!-- <v-card-actions>
                        <v-btn color="orange lighten-2" text>
                            Explore
                        </v-btn>
                        <v-spacer></v-spacer>
                    </v-card-actions> -->
                </v-card>
            </v-col>
        </v-row>
        
            <v-dialog v-model="dialogedit" max-width="500px">
                <v-card>
                <v-card-title primary-title>
                    {{savemode}}
                </v-card-title>

                <v-card-text>
                <v-row>
                    <v-col clos="6">
                        <v-text-field 
                        name="user_name" 
                        label="User" 
                        id="user_name"
                        v-model="postdata.user_name"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col clos="6">
                        <v-text-field 
                        name="Password_user" 
                        label="Password" 
                        id="Password_user"
                        v-model="postdata.Password_user"
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col clos="6">
                        <v-text-field 
                        name="Fname" 
                        label="Fname" 
                        id="Fname"
                        v-model="postdata.Fname"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col clos="6">
                        <v-text-field 
                        name="Lname" 
                        label="Lname" 
                        id="Lname"
                        v-model="postdata.Lname"
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col clos="6">
                        <v-text-field 
                        name="age" 
                        label="age" 
                        id="age"
                        v-model="postdata.age"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col clos="6">
                        <v-text-field 
                        name="gender" 
                        label="gender" 
                        id="gender"
                        v-model="postdata.gender"
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text color="error" @click="closeData()">cancle</v-btn>
                    <v-btn outlined color="success" @click="selectSave()">save</v-btn>
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
                    <v-btn text color="error" @click="closeData()">cancle</v-btn>
                    <v-btn outlined color="success" @click="delData()">Delete</v-btn>
                </v-card-actions>
                </v-card>
            </v-dialog>
    </div>
</template>

<script>
export default {
    data() {
    return{
      id:'',
      apidata: [],
      dialogedit: false,
      dialogdel: false,
      postdata:{
        user_name:'',
        Password_user:'',
        Fname:'',
        Lname:'',
        age:'',
        gender: ''
      },
      postdefault:{
        user_name:'',
        Password_user:'',
        Fname:'',
        Lname:'',
        age:'',
        gender: ''
      }
  }
  },
    created(){
        this.getData()
    },
    computed:{
        savemode(){
            return this.id == ''? 'New Item': 'Edit Item'
        }
  },
    methods: {
    getData () {
        this.axios.get('http://localhost:3000/users/').then((response) => {
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
            if(this.savemode == 'Edit Item'){
                this.putData()
            }else this.postData()  
        },
    async postData (){
        try{
            const {data} = await this.axios.post('http://localhost:3000/users/', this.postdata)
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
            const {data} = await this.axios.put('http://localhost:3000/users/username/'+ this.id,this.postdata)
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
            const {data} = await this.axios.delete('http://localhost:3000/users/username/'+ this.id)
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