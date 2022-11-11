<template>
  <div>
    <h1>Simple page</h1>
    <h1 v-if ="show">{{name}} {{lastname}}</h1>
    <v-btn color="success" @click="show =!show">submit</v-btn>
    <ul>
        <li v-for="(item, index) in personal" :key="index">
            id: {{item.id}} <br> 
            name: {{item.name}} <br> 
            username: {{item.username}} <br>
            email: {{item.email}} <br>
            address: {{item.address}} <br>
            phone: {{item.phone}} <br>
            website: {{item.website}} <br>
            company: {{item.company}}
        </li>
    </ul>
    <ul>
        <li v-for= "(item, index) in items" :key="index">
            message: {{item.message}}
        </li>
    </ul>
    <v-btn color="success" @click="display()">call alret</v-btn> <br>
    <br>
    <v-btn color="success" @click="display2('สวัสดี')">call alert2</v-btn>
    <!-- <v-text-field 
        name="no1"
        label="Number1"
        id="id"
        v-model="number1"
    ></v-text-field>
    <v-text-field
        name="no2"
        label="Number2"
        id="id"
        v-model="number2" 
    ></v-text-field> -->
    <!-- <h1>Result : {{result}}</h1>
    <v-btn color="success" @click="calsum()">submit sum</v-btn> -->
    <v-text-field name="number_sum" label="Number" id="id" v-model="number_sum"></v-text-field>
    <h1>GPA : {{sumary}}</h1>
    <v-btn color="success" @click="sumGPA()">submit</v-btn>
    <subsimple :name="name" :lastname="lastname"/>
    <v-btn color="success" @click="callsub">submit callsub</v-btn>
  </div>
</template>

<script>
import { EventBus } from '@/EventBus'
import subsimple from "../components/subsimple.vue"
export default {
    components:{
        subsimple
    },
  data: () => ({
    name: 'Nattakorn',
    lastname: 'Bureerat',
    show: false,
    number1: '',
    number2: '',
    result: '',
    sumary:'',
    number_sum: '',
    items: [{ message: 'Foo', address: 'ooo' }, { message: 'Bar', address: 'BBB' }],
    personal: [{
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496'
          }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets'
        }
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
          street: 'Victor Plains',
          suite: 'Suite 879',
          city: 'Wisokyburgh',
          zipcode: '90566-7771',
          geo: {
            lat: '-43.9509',
            lng: '-34.4618'
          }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
          name: 'Deckow-Crist',
          catchPhrase: 'Proactive didactic contingency',
          bs: 'synergize scalable supply-chains'
        }
      },
      {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
          street: 'Douglas Extension',
          suite: 'Suite 847',
          city: 'McKenziehaven',
          zipcode: '59590-4157',
          geo: {
            lat: '-68.6102',
            lng: '-47.0653'
          }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
          name: 'Romaguera-Jacobson',
          catchPhrase: 'Face to face bifurcated interface',
          bs: 'e-enable strategic applications'
        }
      }
      ]
  }),
  mounted(){
    EventBus.$on('callmain', this.display2)
  },
  methods: {
    callsub(){
        EventBus.$emit('callsub')
    },
    display () {
        alert ('hello')
    },
    display2 (item) {
        alert (item)
    },
    // calsum() {
    //     this.result = parseInt(this.number1) + parseInt(this.number2)
    // },
    sumGPA() {
        // this.result = parseInt(this.number_sum)
        if(this.number_sum >=80 && this.number_sum <=100){
            this.sumary=('A')
        }else if(this.number_sum >=70 && this.number_sum <=79){
            this.sumary=('B')
        }else if(this.number_sum >=60 && this.number_sum <=69){
            this.sumary=('C')
        }else if(this.number_sum >=50 && this.number_sum <=59){
            this.sumary=('D')
        }else if(this.number_sum >0 && this.number_sum <=49){
            this.sumary=('F')
        }else{
            this.sumary=('ERROR')
            alert ('ERROR')
        }
    }
  }
}
</script>

<style>

</style>
